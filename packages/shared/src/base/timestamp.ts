const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

export const TIME = {
  SECONDS: (timestamp = 1) => s * timestamp,
  MINUTES: (timestamp = 1) => m * timestamp,
  HOURS: (timestamp = 1) => h * timestamp,
  DAYS: (timestamp = 1) => d * timestamp,
  WEEKS: (timestamp = 1) => d * 7 * timestamp,
  YEARS: (timestamp = 1) => d * 365 * timestamp,
};
