import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  box-sizing: border-box;
  background-color: #ddd;
}
`;
