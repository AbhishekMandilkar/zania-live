import { useEffect, useRef } from "react";

export const useDebounce = (fn: (...args: string[]) => void) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: string[]) => {
    if (timeoutRef.current) {
      timeoutRef.current = null;
    }
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, 500);
  };

  return debouncedCallback;
};
