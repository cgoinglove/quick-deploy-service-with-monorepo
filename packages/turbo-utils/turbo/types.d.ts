/* eslint-disable @typescript-eslint/consistent-type-imports -- 필요하니까 쓰겠지?*/

type TurboGenerator = (
  plop: import("@turbo/gen").PlopTypes.NodePlopAPI,
) => import("@turbo/gen").PlopTypes.PlopGeneratorConfig;

type Hello = "hello" | "world" | "ok";
