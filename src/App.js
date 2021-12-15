import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "./Theme/index";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "rsuite/dist/styles/rsuite-default.css";

const GlobalStyle = createGlobalStyle`
  body, h1, p{
    padding: 0;
    margin:0;
  }
  body {
    background-color: #f8f3ed;
  }
  .rs-modal-sm {
    width: 70%;
    height: 85%;
    @media (max-width: 950px) {
        height: 155%;
        margin-bottom: 140px;
    }
  }
  .rs-modal-dialog {
    height: 100%;
  }
  .rs-modal-content {
    padding: 0;
    height: 100%;
    border-radius: 20px;
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
