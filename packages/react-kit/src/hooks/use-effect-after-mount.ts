import {type DependencyList,type EffectCallback, useEffect, useRef } from 'react';

export const useEffectAfterMount = (effect: EffectCallback, deps: DependencyList) => {
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (isMountedRef.current) {
      return effect();
    } 
      isMountedRef.current = true;
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps );
};
