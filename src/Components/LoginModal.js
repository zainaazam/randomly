import React, { useState } from "react";
import Fonts from "../Theme/Fonts";
import Theme from "../Containers/Theme/colors";
import { BiCheck } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CustomInput, CustomText } from "./Common";
import styled from "styled-components";
import { BsXLg } from "react-icons/bs";
import { useCookies } from "react-cookie";
import moment from "moment";
import { useHistory } from "react-router-dom";

const LoginModal = ({ onCloseIcon, rememberMe, setRememberMe }) => {
  const [gHovered, setGHovered] = useState(false);
  const [fHovered, setFHovered] = useState(false);
  const [checked, setChecked] = useState(false);
  let loggedIn = false;
  const history = useHistory();
  const [, setCookie] = useCookies(["rememberMeCookie"]);
  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleLogin = () => {
    if (rememberMe) {
      setCookie("rememberMeCookie", "month", {
        expires: moment(Date()).add(1, "M").toDate(),
      });
    } else {
      setCookie("rememberMeCookie", "day", {
        expires: moment(Date()).add(1, "d").toDate(),
      });
    }
    loggedIn = true;
    const isLoggedIn = JSON.stringify(loggedIn);
    localStorage.setItem("isLoggedIn", isLoggedIn);
    history.push("/main");
    history.go(0);
    onCloseIcon();
  };
  return (
    <Container>
      <LoginForm>
        {window.innerWidth <= 950 && (
          <CloseIcon
            size={30}
            color={Theme.colors.black}
            onClick={onCloseIcon}
          />
        )}
        <LoginToYourAccount>Login to your account</LoginToYourAccount>
        <InputWrapper>
          <Label>Email address</Label>
          <Input type={"email"} />
        </InputWrapper>
        <InputWrapper>
          <Label>Password</Label>
          <Input type={"password"} />
        </InputWrapper>
        <ChWrapper>
          <CheckBoxWrapper>
            <CheckBox
              // onChange={() => setRememberMe(!rememberMe)}
              id={"rememberMe"}
              checked={checked}
              onClick={() => {
                handleChecked();
                setRememberMe(!rememberMe);
              }}
            >
              <CheckedIcon size={20} checked={checked} />
            </CheckBox>
            <CheckBoxLabel htmlFor={"rememberMe"}>Remember Me</CheckBoxLabel>
          </CheckBoxWrapper>
          <ForgotPasswordText>I forgot my password</ForgotPasswordText>
        </ChWrapper>
        <ModalButton onClick={handleLogin}>LOG IN</ModalButton>
        <OrContainer>
          <Line left />
          or
          <Line right />
        </OrContainer>
        <SocialMedia>
          <WithGoogle
            GHovered={gHovered}
            onMouseEnter={() => setGHovered(true)}
            onMouseLeave={() => setGHovered(false)}
          >
            <GoogleIcon size={22} />
            LOG IN WITH GOOGLE
          </WithGoogle>
          <WithFacebook
            FHovered={fHovered}
            onMouseEnter={() => setFHovered(true)}
            onMouseLeave={() => setFHovered(false)}
          >
            <FacebookIcon size={22} />
            LOG IN WITH FACEBOOK
          </WithFacebook>
        </SocialMedia>
      </LoginForm>
      <SignUpAttractor>
        {window.innerWidth > 950 && (
          <CloseIcon
            size={30}
            color={Theme.colors.white}
            onClick={onCloseIcon}
          />
        )}
        <Wrapper>
          <DontHaveAccount>Don't have an account?</DontHaveAccount>
          <AttractText>
            Sign up with us and stop wondering what to choose!
          </AttractText>
          <SignUpButton>SIGN UP</SignUpButton>
        </Wrapper>

        <ByMeText>Randomly By Zaina Azam</ByMeText>
      </SignUpAttractor>
    </Container>
  );
};

export default LoginModal;

const Container = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const LoginForm = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const SignUpAttractor = styled.div`
  width: 45%;
  height: 100%;
  background-image: linear-gradient(to bottom right, #1a6f8b, #20d2e9, #00fff0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  @media (max-width: 950px) {
    width: 100%;
    margin-top: 10px;
    border-radius: 0px 0px 20px 20px;
    padding-top: 8%;
  }
`;

const LoginToYourAccount = styled(CustomText)`
  font-size: 35px;
  font-family: ${Fonts.third};
  @media (max-width: 1100px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 22px;
  }
  @media (max-width: 380px) {
    font-size: 16px;
  }
`;

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 950px) {
    margin-top: 20px;
  }
`;

const Input = styled(CustomInput)``;

const Label = styled.label`
  font-family: ${Fonts.third};
  align-self: flex-start;
`;

const CheckBoxLabel = styled(Label)`
  align-self: center;
  margin-left: 8px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const CheckBox = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) =>
    props.checked ? Theme.colors.primary : Theme.colors.beige};
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

const ChWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: space-between;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
`;

const CheckedIcon = styled(BiCheck)`
  color: ${(props) =>
    !props.checked ? Theme.colors.transparent : Theme.colors.background};
`;

const ForgotPasswordText = styled(CustomText)`
  font-family: ${Fonts.third};
  color: ${Theme.colors.primary};
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: ${Theme.colors.black};
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 450px) {
    margin-top: 8px;
    align-self: center;
  }
`;

export const ModalButton = styled.button`
  cursor: pointer;
  font-family: ${Fonts.third};
  width: 82%;
  padding: ${(props) => (props.padding ? props.padding : "10px")};
  border-radius: 18px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "23px")};
  font-size: 18px;
  background-image: linear-gradient(to right, #1a6f8b, rgba(32, 210, 233, 0.6));
  color: ${Theme.colors.white};
  border: 0px;
  :hover {
    background-image: linear-gradient(
      to right,
      rgba(32, 210, 233, 0.6),
      #1a6f8b
    );
  }
  @media (max-width: 1100px) {
    font-size: 15px;
  }
`;

export const OrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79%;
  font-size: 19px;
  margin-top: 35px;
  @media (max-width: 1250px) {
    margin-top: 15px;
  }
`;

export const Line = styled.div`
  width: 50%;
  height: 1px;
  margin-left: ${(props) => (!props.left ? "20px" : "0px")};
  margin-right: ${(props) => (!props.right ? "20px" : "0px")};
  background-color: ${Theme.colors.black};
`;

export const SocialMedia = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 1250px) {
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
  }
  @media (max-width: 950px) {
    margin-bottom: 40px;
  }
`;

export const WithGoogle = styled.div`
  cursor: pointer;
  width: 43.5%;
  height: 40px;
  border: 1px solid ${Theme.colors.orange};
  border-radius: 6px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) =>
    props.GHovered ? Theme.colors.white : Theme.colors.orange};
  background-color: ${(props) =>
    props.GHovered ? Theme.colors.orange : Theme.colors.transparent};
  transition: all 0.5s;
  @media (max-width: 1300px) {
    font-size: 12px;
  }
  @media (max-width: 1250px) {
    width: 80%;
  }
  @media (max-width: 380px) {
    width: 100%;
  }
`;
export const WithFacebook = styled.div`
  cursor: pointer;
  width: 43.5%;
  height: 40px;
  border: 1px solid ${Theme.colors.lightBlue2};
  border-radius: 6px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) =>
    props.FHovered ? Theme.colors.white : Theme.colors.lightBlue2};
  background-color: ${(props) =>
    props.FHovered ? Theme.colors.lightBlue2 : Theme.colors.transparent};
  transition: all 0.5s;
  @media (max-width: 1300px) {
    font-size: 12px;
  }
  @media (max-width: 1250px) {
    width: 80%;
    margin-top: 10px;
  }
  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const GoogleIcon = styled(FaGoogle)``;

export const FacebookIcon = styled(FaFacebookF)``;

export const CloseIcon = styled(BsXLg)`
  align-self: flex-end;
  margin: 15px;
  cursor: pointer;
  @media (max-width: 1100px) {
    width: 20px;
  }
`;

const DontHaveAccount = styled(CustomText)`
  font-family: ${Fonts.fifth};
  font-size: 33px;
  width: 250px;
  text-align: center;
  color: ${Theme.colors.white};
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 25px;
  }
  @media (max-width: 380px) {
    font-size: 20px;
    width: 150px;
  }
`;

const AttractText = styled(CustomText)`
  font-family: ${Fonts.fifth};
  text-align: center;
  color: ${Theme.colors.white};
  font-size: 19px;
  width: 370px;
  margin-top: 28px;
  @media (max-width: 1100px) {
    font-size: 15px;
    width: 200px;
  }
  @media (max-width: 380px) {
    font-size: 13px;
    width: 180px;
  }
`;

const SignUpButton = styled.button`
  cursor: pointer;
  font-family: ${Fonts.third};
  width: 82%;
  padding: 10px;
  border-radius: 18px;
  margin-top: 100px;
  font-size: 18px;
  color: ${Theme.colors.white};
  border: 1px solid ${Theme.colors.white};
  background-color: ${Theme.colors.transparent};
  :hover {
    background-color: ${Theme.colors.white};
    color: ${Theme.colors.lightBlue2};
  }
  transition: all 0.5s;
  @media (max-width: 1100px) {
    width: 72%;
    font-size: 15px;
  }
  @media (max-width: 950px) {
    margin-top: 20px;
  }
`;

const ByMeText = styled(CustomText)`
  font-family: ${Fonts.forth};
  font-size: 28px;
  color: ${Theme.colors.white};
  width: 150px;
  align-self: flex-end;
  margin: 15px 0px;
  @media (max-width: 1100px) {
    font-size: 24px;
  }
  @media (max-width: 600px) {
    font-size: 19px;
    width: 120px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
