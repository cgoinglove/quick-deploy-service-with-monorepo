import { expect, test } from "vitest";
import { join } from "node:path";
import { writeFileSync, rmSync } from "node:fs";

test("load-env", async () => {
  const MOCK_ENV_KEY = "CGOING_EMAIL";
  const MOCK_ENV_VALUE = "neo.cgoing@gmail.com";

  expect(process.env[MOCK_ENV_KEY]).toBeUndefined();

  const ID = `${Date.now()}-TEST`;

  // set NODE_ENV for test
  process.env.NODE_ENV = ID;

  const filePath = join(process.cwd(), "env", `.env.${ID}`);

  // write test env file
  writeFileSync(filePath, `${MOCK_ENV_KEY}=${MOCK_ENV_VALUE}`);

  // excute loader
  require("../dist/bundle.cjs");

  expect(process.env[MOCK_ENV_KEY]).toBe(MOCK_ENV_VALUE);

  rmSync(filePath, {
    force: true,
  });
});
