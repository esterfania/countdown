import { useState, useEffect } from 'react';

export function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const storageValue = JSON.parse(localStorage.getItem(key));
    if (storageValue) {
      setState(storageValue);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
