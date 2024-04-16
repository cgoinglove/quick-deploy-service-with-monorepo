export const helloWorld = (str: string) => {
  console.log(`helloWorld => ${str}`);
};

export const autoIncrement = (
  (i = 0) =>
  () =>
    i++
)();
