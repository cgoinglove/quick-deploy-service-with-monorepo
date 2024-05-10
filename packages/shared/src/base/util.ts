export const wait = (delay = 3000) => new Promise((timeout) => setTimeout(timeout, delay));

export const createDebounce = () => {
  let timeout: ReturnType<typeof setTimeout>;

  return (callback:Function, delay = 300) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
};

export const autoIncrement = (
  (i = 0) =>
  () =>
    i++
)();

export const noop = () => {};

export const isString = (value: any): value is string =>
  typeof value === 'string';

export const isFunction = (value: any): value is Function =>
  typeof value === 'function';

export const isObject = (value: any): value is Record<string, any> =>
  Object(value) === value;

export const isNull = (value: any): value is null | undefined => value == null;

export const nextTick = async (callback: () => void) =>
  new Promise((resolve, reject) =>
    queueMicrotask(() => {
      try {
        resolve(callback());
      } catch (error) {
        reject(error);
      }
    }),
  );

