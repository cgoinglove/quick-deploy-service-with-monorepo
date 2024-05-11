// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig, { REACT_KIT_CONTENT_PATH } from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx", REACT_KIT_CONTENT_PATH],
  presets: [sharedConfig],
};

export default config;
