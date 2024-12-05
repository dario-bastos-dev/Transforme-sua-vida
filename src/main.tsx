import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// App component
import App from "./App.tsx";
// Styles Themes
import GlobalStyles from "./ui/themes/globalStyles.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./ui/themes/theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
