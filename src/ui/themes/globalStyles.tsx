import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: ${({ theme }) => theme.font.inter}, sans-serif;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 30px;
  text-align: center;
}
`;

export default GlobalStyles;
