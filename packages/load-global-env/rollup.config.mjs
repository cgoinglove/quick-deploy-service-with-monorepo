import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const target = join(fileURLToPath(import.meta.url), "../", "env");

export default {
  input: "./src/loader.ts", // 입력 파일 경로 설정
  output: {
    file: "./dist/bundle.cjs", // 출력 파일 경로 설정
    format: "cjs", // CommonJS 모듈 형식으로 출력
    sourcemap: true, // 소스 맵 생성
  },
  plugins: [
    replace({
      preventAssignment: true,
      __BUILD_ENV_PATH__: target, // 빌드 시점의 경로를 주입
    }),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: "./build.tsconfig.json",
    }),
    terser(), // 번들링된 파일을 압축하기 위해 terser 플러그인 사용
  ],
  external: ["fs", "path", "url", "dotenv", "dotenv-expand"], // Node.js 내장 모듈을 외부 모듈로 설정
};
