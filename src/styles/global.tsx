import { createGlobalStyle } from 'styled-components';
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
  background: ${(props: any) => props.theme.colors.background};
  color:  ${(props: any) => props.theme.colors.text};
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
}`;

export default GlobalStyle;
