import { expect, test } from "vitest";
import { getPnpmWorkspaces } from "../turbo/generators/gen-config/helper";
import path from "node:path";

test("genPnpmWorkspaces", () => {
  expect(getPnpmWorkspaces(path.resolve(process.cwd(), "../../"))).toEqual([
    "apps/*",
    "packages/*",
  ]);
});
