import { type Reducer, useReducer } from 'react';

const reducer: Reducer<number, void> = (prev) => prev + 1;

export const useForcedUpdate = () => {
  const [, update] = useReducer(reducer, 0);
  return update;
};
