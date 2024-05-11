import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

export const getPnpmWorkspaces = (root: string): Array<string> => {
  const workspaceFile = path.join(root, "pnpm-workspace.yaml");
  if (existsSync(workspaceFile))
    try {
      const workspaceConfig = yaml.load(readFileSync(workspaceFile, "utf8"), {
        json: true,
      });
      if (
        workspaceConfig instanceof Object &&
        "packages" in workspaceConfig &&
        Array.isArray(workspaceConfig.packages)
      ) {
        return workspaceConfig.packages as Array<string>;
      }
    } catch (err) {
      throw new Error(`failed to parse ${workspaceFile}`);
    }

  return [];
};
