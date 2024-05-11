import { createDebounce } from "@repo/shared";
import { type DependencyList, useMemo, useState } from "react";

/**
 * unstable
 */
export const useBatchState = <T extends DependencyList>(...values: T): T => {
  const bounce = useMemo(() => {
    return createDebounce();
  }, []);

  const [state, setState] = useState<T>(values);
  values.some((v, i) => v != state[i]) &&
    bounce(() => {
      setState(values);
    }, 1);

  return state;
};
