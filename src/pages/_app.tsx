import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const theme = {
  white: '#fff',
  background: '#f2f3f5',
  grayLine: '#d7d8da',
  text: '#666666',
  textHighlight: '#b3b9ff',
  title: '#2e384d',
  red: '#e83f5b',
  green: '#4cd62b',
  blue: '#5965e0',
  blueDark: '#4953b8',
  blueTwitter: '#2aa9e0',
};
const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 95.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: ${() => theme.background};
  color:  ${() => theme.text};
  height: 100%;
  width: 100%;
}

body,
input,
textarea,
button {
  font: 400 1rem 'Inter', sans-serif;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
