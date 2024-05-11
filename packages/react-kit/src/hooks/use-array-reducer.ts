import { useMemo, useRef } from "react";
import { useStateWithRef } from "./use-state-with-ref";
import { isFunction, isNull } from "@repo/shared";

export const useArrayReducer = <
  T extends Array<any> = Array<any>,
  Element = ElementType<T>,
>(
  initialState: T,
) => {
  const [state, ref, setState] = useStateWithRef<Element[]>(initialState);
  const init = useRef(initialState);
  const dispatch = useMemo(
    () => ({
      push: (value: Element | Element[]) =>
        setState((prev) =>
          Array.isArray(value) ? [...prev, ...value] : [...prev, value],
        ),
      remove: (getter: number | ((value: Element) => boolean)) => {
        setState((prev) => {
          const removeIndex = isFunction(getter)
            ? prev.findIndex(getter)
            : getter;
          const nextState = [...prev];
          nextState.splice(removeIndex, 1);
          return nextState;
        });
      },
      update: (
        getter: number | ((value: Element) => boolean),
        value: Setter<Element>,
      ) =>
        setState((prev) =>
          prev.map((v, i) => {
            if (isFunction(getter) ? getter(v) : i === getter) {
              return isFunction(value) ? value(v) : value;
            }
            return v;
          }),
        ),
      set: setState,
      reset: () => setState(init.current),
      filter: (predicate: (v: Element) => any) =>
        setState((prev) => prev.filter(predicate)),
      init: (value?: Setter<Element[]>) => {
        const nextState = isNull(value)
          ? ref.current
          : isFunction(value)
            ? value(ref.current as Element[])
            : value;
        init.current = nextState as T;
        setState(nextState);
      },
    }),
    [],
  );

  return [state, dispatch, { ref }] as const;
};
