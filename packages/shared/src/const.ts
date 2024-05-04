export const IS_DEV_MODE =
  !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

// @ts-ignore
export const RUNTIME = typeof window !== 'undefined' ? 'browser' : 'node';
