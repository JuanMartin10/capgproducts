import { useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  const setValueFc = val => {
    try {
      setValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      throw new Error(error);
    }
  };
  return [value, setValueFc];
};

export default useLocalStorage;
