import { useState } from 'react';

export interface StateHook<T> {
  defaultValue: T;
  value: T;
  set: React.Dispatch<React.SetStateAction<T>>;
  reset: () => void;
}

export function State<T>(defaultValue: T): StateHook<T> {
  const [value, set] = useState<T>(defaultValue);

  const reset = () => {
    set(defaultValue);
  };

  return { defaultValue, value, set, reset };
}
