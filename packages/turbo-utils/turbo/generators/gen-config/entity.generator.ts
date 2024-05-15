import { exec } from "node:child_process";

export const createEntity: TurboGenerator = (plop) => {
  const ROOT = `${process.cwd()}/packages/service`;
  return {
    description: "@repo/service",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "이름을 작성하세요",
      },
      {
        type: "list",
        name: "useBaseEntity",
        message: "BaseEntity 사용 여부",
        choices: ["Y", "N"],
        default: "Y",
      },
    ],

    actions: [
      // {
      //   type: 'add',
      //   path: `${ROOT}/src/domain/{{kebabCase name}}/{{kebabCase name}}.entity.ts`,
      //   templateFile: 'templates/service-entity/entity.hbs',
      // },
      // {
      //   type: 'add',
      //   path: `${ROOT}/src/domain/{{kebabCase name}}/{{kebabCase name}}.service.ts`,
      //   templateFile: 'templates/service-entity/service.hbs',
      // },
      // {
      //   type: 'add',
      //   path: `${ROOT}/src/domain/{{kebabCase name}}/{{kebabCase name}}.repository.ts`,
      //   templateFile: 'templates/service-entity/repository.hbs',
      // },
      // {
      //   type: 'add',
      //   path: `${ROOT}/__test__/{{kebabCase name}}.test.ts`,
      //   templateFile: 'templates/service-entity/test.hbs',
      // },
      // {
      //   type: 'append',
      //   path: `${ROOT}/src/index.ts`,
      //   template: `
      //     export { {{ pascalCase name }}Service } from './domain/{{kebabCase name}}/{{kebabCase name}}.service';
      //     export { type {{ pascalCase name }} } from './domain/{{kebabCase name}}/{{kebabCase name}}.entity';
      //     `,
      // },
      {
        type: "append",
        path: `${ROOT}/src/orm-config.ts`,
        pattern: /import\s*'reflect-metadata';\s*/g,
        template: `import { {{ pascalCase name }} } from './domain/{{kebabCase name}}/{{kebabCase name}}.entity';`,
      },
      {
        type: "append",
        path: `${ROOT}/src/orm-config.ts`,
        pattern: /entities\s*:\s*\[(?<insertion>)/g,
        template: `{{ pascalCase name }},`,
      },
      async (answer) => {
        await new Promise((resolve, reject) => {
          const name = plop.getHelper("kebabCase")(
            (answer as { name: string }).name,
          ) as string;

          const paths = [
            `${ROOT}/src/index.ts`,
            `${ROOT}/src/orm-config.ts`,
            `${ROOT}/src/domain/${name}`,
            `${ROOT}/__test__/${name}.test.ts`,
          ];
          exec(`prettier --write ${paths.join(" ")}`, (err, _, stderr) => {
            if (err) {
              console.error("Error running prettify:", stderr);
              reject(err);
            }
            resolve("Prettify ran successfully!");
          });
        });

        return "Success";
      },
    ],
  };
};
