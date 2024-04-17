import type { PlopTypes } from '@turbo/gen';
import { exec } from 'child_process';

// Learn more https://plopjs.com/

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.addHelper('eq', (v1, v2) => v1 === v2);
  plop.setGenerator('react-component', {
    description: 'Adds a new react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '컴퍼넌트 이름을 작성하세요',
      },
      {
        type: 'list',
        name: 'componentType',
        message: '컴퍼넌트 타입',
        choices: ['server component', 'client component'],
      },
    ],

    actions: [
      {
        type: 'add',
        path: 'packages/react-kit/src/components/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'append',
        path: 'packages/react-kit/package.json',
        pattern: /"exports": {(?<insertion>)/g,
        template:
          '"./{{kebabCase name}}": "./src/components/{{kebabCase name}}.tsx",',
      },
      async answer => {
        await new Promise((resolve, reject) => {
          const root = `packages/react-kit`;

          const componentName = plop.getHelper('kebabCase')(
            (answer as any).name as string,
          ) as string;

          const paths = [
            `${root}/package.json`,
            `${root}/src/components/${componentName}.tsx`,
          ];

          exec(`prettier --write ${paths.join(' ')}`, (err, stdout, stderr) => {
            if (err) {
              console.error('Error running prettify:', stderr);
              reject(err);
            }
            resolve('Prettify ran successfully!');
          });
        });

        return 'Success';
      },
    ],
  });
}
