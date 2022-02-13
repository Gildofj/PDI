import { useCallback, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.error(err);
      }
    },
    [key],
  );

  return [value, setValue];
}
