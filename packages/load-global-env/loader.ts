import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(import.meta.url), "../", "env");

const localEnv = `${ROOT}/.env.local`;

existsSync(localEnv) && expand(config({ path: localEnv }));

const envPath = `${ROOT}/.env.${process.env.NODE_ENV}`;

existsSync(envPath) && expand(config({ path: envPath }));

expand(
  config({
    path: `${ROOT}/.env`,
  }),
);
