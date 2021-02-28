import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import GlobalStyle from '../styles/global';
import { ThemesProvider } from '../contexts/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemesProvider>
  );
}
