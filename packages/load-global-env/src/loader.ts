import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { existsSync } from "node:fs";

let loaded = false;
let envVariables: Record<string, string> = {};

if (!loaded) {
  loaded = true;
  const ROOT = "__BUILD_ENV_PATH__";

  const loadEnvFile = (path: string) => {
    if (existsSync(path)) {
      const parsedConfig = config({ path });
      expand(parsedConfig);
      if (parsedConfig.parsed) {
        envVariables = { ...parsedConfig.parsed, ...envVariables };
      }
    }
  };

  const localEnv = `${ROOT}/.env.local`;
  loadEnvFile(localEnv);

  const envPath = `${ROOT}/.env.${process.env.NODE_ENV}`;
  loadEnvFile(envPath);

  loadEnvFile(`${ROOT}/.env`);
}
console.log(envVariables);

export const GlobalEnv = envVariables;
