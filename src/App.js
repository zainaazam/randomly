import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "./Theme/index";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const GlobalStyle = createGlobalStyle`
  body, h1, p{
    padding: 0;
    margin:0;
  }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
