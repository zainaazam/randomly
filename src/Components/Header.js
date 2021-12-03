import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Assets/Images/logo.png";
import { CustomText } from "./Common";
import Theme from "../Containers/Theme/colors";
import Modal from "react-modal";
import { Row } from "react-bootstrap";
import LoginModal from "./LoginModal";
import avatar from "../Assets/Images/avatar.png";
import { useHistory } from "react-router-dom";
import Fonts from "../Theme/Fonts";

// import { useCookies } from "react-cookie";
// import Menu from "./Menu";

const Header = ({ rememberMe, setRememberMe }) => {
  const [hovered, setHovered] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      const loggedIn = JSON.parse(isLoggedIn);

      if (loggedIn) setLoggedIn(loggedIn);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(loggedIn);
    localStorage.setItem("isLoggedIn", temp);
  }, [loggedIn]);

  const handleLogOut = () => {
    setLoggedIn(false);
    // let loggedOut = false;
    // const isLoggedOut = JSON.stringify(loggedOut);
    // localStorage.setItem("isLoggedIn", isLoggedOut);
    history.push("/welcome");
    // console.log(isLoggedOut);
  };

  // const dispatch = useDispatch();
  // const {loggedIn} = useSelector<RootState>(
  //   state => state.Configs,
  // ) as ConfigsReducer;
  return (
    <HeaderWrapper>
      <HeaderLogoWrapper>
        <HeaderNavOption to="/">
          <HeaderLogo src={Logo} />
        </HeaderNavOption>
      </HeaderLogoWrapper>
      {loggedIn ? ( //TODO when redux
        <LogOut>
          <Avatar src={avatar} />
          <LogOutText onClick={handleLogOut}>Log Out</LogOutText>
        </LogOut>
      ) : (
        <Login
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => handleLoginModal()}
        >
          <LoginText size={25} hovered={hovered}>
            Login
          </LoginText>
        </Login>
      )}
      <Modal
        isOpen={loginModal}
        onRequestClose={handleLoginModal}
        style={{
          overlay: {
            backgroundColor: Theme.colors.gray,
          },
          content: {
            top: "80px",
            left: "250px",
            right: "250px",
            bottom: "80px",
            border: "0px",
            background: Theme.colors.background,
            borderRadius: "14px",
            outline: "none",
            padding: "0px",
            display: "flex",
            flexDirection: Row,
          },
        }}
      >
        <LoginModal
          onCloseIcon={handleLoginModal}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
        />
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;

export const HeaderWrapper = styled.div`
  padding: 0px 50px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  /* position: relative; */
  /* width: 100%; */
  @media (max-width: 400px) {
    padding: 0px 10px 0px 0px;
  }
  /* @media (max-width: 700px) {
    justify-content: space-evenly;
  }
  @media (max-width: 580px) {
    justify-content: space-around;
  } */
`;

export const HeaderNavOption = styled(Link)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  outline: none;
  border: unset;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const HeaderLogo = styled.img`
  width: 90%;
  margin: 0px 60px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    margin-left: 10px;
  }
`;

export const HeaderLogoWrapper = styled.div`
  width: 22%;

  @media (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 500px) {
    width: 40%;
  }

  @media (max-width: 370px) {
    width: 45%;
  }

  /* @media (max-width: 1100px) {
    width: 15%;
  }
  @media (max-width: 700px) {
    width: 20%;
  }
  @media (max-width: 580px) {
    width: 25%;
    margin-right: 15px;
  }
  @media (max-width: 380px) {
    width: 30%;
  } */
`;

export const Login = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  width: 125px;
  border: 3px solid #13647f;
  border-radius: 14px;
  align-items: center;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  :hover {
    background-color: ${Theme.colors.primary};
    /* color: white; */
  }
  @media (max-width: 1150px) {
    width: 115px;
    height: 48px;
  }
  @media (max-width: 1000px) {
    width: 100px;
    height: 40px;
  }
  @media (max-width: 600px) {
    width: 90px;
    height: 35px;
  }
  @media (max-width: 400px) {
    width: 80px;
    height: 30px;
  }
  /* padding: 0.7% 0px;
  font-size: 25px;
  font-weight: 600;
  font-family: ${Fonts.regular};
  color: ${Theme.colors.primary}; */
`;

export const LoginText = styled(CustomText)`
  padding: 6% 0px;
  transition: all 0.5s ease-in-out;
  color: ${(props) =>
    props.hovered ? Theme.colors.white : Theme.colors.primary};

  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

const Avatar = styled.img`
  width: 35px;
  height: 40px;
  margin-bottom: 7px;
`;

const LogOut = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogOutText = styled(CustomText)`
  font-size: 30px;
  cursor: pointer;
`;
