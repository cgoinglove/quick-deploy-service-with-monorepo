export const helloWorld = (str: string) => {
  console.log(`helloWorld => ${str}`);
};

export const autoIncrement = (
  (i = 0) =>
  () =>
    i++
)();

export const noop = () => {};

export const isFunction = (value: unknown): value is Function =>
  typeof value == 'function';
