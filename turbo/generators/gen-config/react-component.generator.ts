import { exec } from 'child_process';

import { Generator } from '../config';

export const createReactComponent: Generator = plop => ({
  description: '@repo/react-kit',
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
      default: 'server component',
    },
    {
      type: 'list',
      name: 'propType',
      message: 'Props 사용 여부',
      choices: ['none', 'type', 'interface'],
      default: 'none',
    },
    {
      type: 'list',
      name: 'withChildren',
      message: 'Props Children 사용 여부',
      choices: ['N', 'Y'],
      default: 'N',
      when: answers => answers.propType !== 'none',
    },
  ],

  actions: [
    {
      type: 'add',
      path: 'packages/react-kit/src/components/{{kebabCase name}}.tsx',
      templateFile: 'templates/component.hbs',
    },
    {
      type: 'add',
      path: 'packages/react-kit/src/stories/{{kebabCase name}}.stories.tsx',
      templateFile: 'templates/story.hbs',
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
