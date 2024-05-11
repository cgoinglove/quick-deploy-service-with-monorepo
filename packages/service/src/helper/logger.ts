import { IS_DEV_MODE } from "@repo/shared/const";

import { createLogger, format, transports } from "winston";

const LABEL = "DATA-BASE";

export const logger = createLogger({
  level: IS_DEV_MODE ? "debug" : "info",
  format: format.combine(
    format.colorize(),
    format.label({
      label: LABEL,
    }),

    format.printf(({ level, message }) => {
      const timestamp = new Date().toLocaleString();
      if (typeof message == "string")
        return `${level} ${timestamp} [${LABEL}]: ${message}`;
      return `${level} ${timestamp} [${LABEL}]:\n${JSON.stringify(message, null, 2)}`;
    }),
  ),
  defaultMeta: { service: `TEST` },
  transports: [new transports.Console()],
});
