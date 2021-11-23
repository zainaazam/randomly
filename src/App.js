import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "./Theme/index";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import moment from "moment";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "rsuite/dist/styles/rsuite-default.css";
// import "rsuite/lib/styles/index.less";

const GlobalStyle = createGlobalStyle`
  body, h1, p{
    padding: 0;
    margin:0;
  }
`;

function App() {
  const [cookies, setCookie] = useCookies(["rememberMeCookie"]);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // if (cookies.rememberMeCookie) {
    if (cookies.rememberMeCookie === "day") {
      setCookie("rememberMeCookie", "day", {
        expires: moment(Date()).add(1, "d").toDate(),
      });
    } else {
      setCookie("rememberMeCookie", "month", {
        expires: moment(Date()).add(1, "month").toDate(),
      });
    }
    // }
    // else {
    //   if (loggedIn) { //TODO maybe in integration
    //     dispatch(updateUser({}));
    //     dispatch(logoutUser());
    //   }
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes rememberMe={rememberMe} setRememberMe={setRememberMe} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
