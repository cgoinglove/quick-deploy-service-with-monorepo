import { useMemo, useRef } from "react";
import { useStateWithRef } from "./use-state-with-ref";
import { isFunction, isNull } from "@repo/shared";

export const useObjectReducer = <T extends object>(initialState: T) => {
  const [state, ref, setState] = useStateWithRef<T>(initialState);
  const init = useRef(initialState);

  const dispatch = useMemo(
    () => ({
      update: <Key extends keyof T>(
        key: Key,
        value: T[Key] | ((value: T[Key]) => T[Key]),
      ) => {
        setState((prev) => ({
          ...prev,
          [key]: isFunction(value)
            ? (value as (value: T[Key]) => T[Key])(prev[key] as T[Key])
            : value,
        }));
      },
      set: setState,
      reset: () => setState(init.current),
      init: (value?: Setter<T>) => {
        const nextState = isNull(value)
          ? ref.current
          : isFunction(value)
            ? value(ref.current)
            : value;
        init.current = nextState;
        setState(nextState);
      },
    }),
    [],
  );

  return [state, dispatch, { ref }] as const;
};
