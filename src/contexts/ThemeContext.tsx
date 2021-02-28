import React, { useContext, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../styles/themes';
import { usePersistedState } from '../utils/usePersistedState';

interface ThemeContextData {
  theme: any;
  ToggleTheme(): void;
}

const ThemeContext = createContext({} as ThemeContextData);

export const ThemesProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const ToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}
