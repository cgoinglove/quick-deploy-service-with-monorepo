import type { Config } from "tailwindcss";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export const REACT_KIT_CONTENT_PATH = join(
  fileURLToPath(import.meta.url),
  "../../../packages/react-kit/src/components/**/*.tsx",
);

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
  plugins: [],
};
export default config;
