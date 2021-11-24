import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import WelcomePage from "./Containers/WelcomePage";
import PageTitle from "./Components/PageTitle";
import Footer from "./Components/Footer";
import MainPage from "./Containers/MainPage";

// export interface RoutesProps {
//   rememberMe: boolean;
//   setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
// }
const Routes = ({ rememberMe, setRememberMe }) => {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div>
        <Header rememberMe={rememberMe} setRememberMe={setRememberMe} />
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
            <PageTitle title="Welcome Page" />
          </Route>
          <Route path="/main" exact>
            <MainPage />
            <PageTitle title="Main Page" />
          </Route>
          {/* <Route path="/" exact>
            <MainPage />
            <PageTitle title="الرئيسية" />
          </Route>
          <Route path="/login" exact>
            <Login rememberMe={rememberMe} setRememberMe={setRememberMe} />

            <PageTitle title="تسجيل الدخول" />
          </Route> */}
          <Route path="/*" exact>
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
