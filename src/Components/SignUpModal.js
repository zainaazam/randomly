import React, { useState } from "react";
import styled from "styled-components";
import { CustomInput, CustomText } from "./Common";
import Fonts from "../Theme/Fonts";
import Theme from "../Containers/Theme/colors";
import { BsXLg } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { ModalButton } from "./LoginModal";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const SignUpModal = ({ onCloseIcon }) => {
  const [gHovered, setGHovered] = useState(false);
  const [fHovered, setFHovered] = useState(false);
  const history = useHistory();

  const handleSignUp = () => {
    let loggedIn = true;
    const isLoggedIn = JSON.stringify(loggedIn);
    localStorage.setItem("isLoggedIn", isLoggedIn);
    history.push("/main");
    history.go(0);
    onCloseIcon();
  };

  return (
    <SignUpForm>
      <SignUpWrapper>
        <CloseIcon size={25} color={Theme.colors.black} onClick={onCloseIcon} />
        <CreateYourAccount>Create your account</CreateYourAccount>
        <AlreadyHaveAccount>
          Already have an account? <LoginText>Log in</LoginText>
        </AlreadyHaveAccount>
        <Row>
          <InputWrapper>
            <Label>First Name</Label>
            <Input type={"text"} width={"90%"} />
          </InputWrapper>
          <InputWrapper>
            <Label>Last Name</Label>
            <Input type={"text"} width={"90%"} />
          </InputWrapper>
        </Row>
        <InputWrapper width={"80%"}>
          <Label>Email address</Label>
          <Input type={"email"} />
        </InputWrapper>
        <Row>
          <InputWrapper>
            <Label>Password</Label>
            <Input type={"password"} width={"90%"} />
          </InputWrapper>
          <InputWrapper>
            <Label>Confirm Password</Label>
            <Input type={"password"} width={"90%"} />
          </InputWrapper>
        </Row>
        <ModalButton marginTop={"45px"} padding={"13px"} onClick={handleSignUp}>
          Create My Account
        </ModalButton>
      </SignUpWrapper>
      {window.innerWidth <= 1250 && window.innerWidth > 950 && <Divider />}
      <OrWrapper>
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
        <ByRegistering>
          By registering, you accept our <NeonText>terms of use</NeonText> and
          our <NeonText>privacy policy</NeonText>.
        </ByRegistering>
      </OrWrapper>
    </SignUpForm>
  );
};

export default SignUpModal;

const SignUpForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1250px) {
    flex-direction: row;
  }
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const Divider = styled.div`
  width: 2px;
  align-self: center;
  height: 450px;
  background-color: ${Theme.colors.gray};
  margin-right: 30px;
`;

const OrWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1250px) {
    width: 50%;
    height: 490px;
    justify-content: space-evenly;
    padding-right: 20px;
  }
  @media (max-width: 950px) {
    width: 100%;
    height: 250px;
    justify-content: space-between;
    padding-right: 0px;
  }
`;

const SignUpWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateYourAccount = styled(CustomText)`
  font-size: 35px;
  font-family: ${Fonts.third};
  @media (max-width: 950px) {
    margin-top: 10px;
  }
  @media (max-width: 550px) {
    font-size: 25px;
  }
  @media (max-width: 400px) {
    margin-top: 15px;
    font-size: 20px;
  }
`;

export const CloseIcon = styled(BsXLg)`
  align-self: flex-start;
  margin: 15px 15px 0px;
  cursor: pointer;
  @media (max-width: 450px) {
    width: 20px;
  }
`;

const AlreadyHaveAccount = styled(CustomText)`
  display: flex;
  font-family: ${Fonts.third};
  font-size: 18px;
  margin-top: 5px;
  @media (max-width: 550px) {
    font-size: 13px;
  }
  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

const LoginText = styled(AlreadyHaveAccount)`
  margin-left: 5px;
  color: ${Theme.colors.neonBlue};
  text-decoration: underline;
  cursor: pointer;
  margin-top: 0px;
`;

const InputWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "35%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Input = styled(CustomInput)`
  align-self: flex-start;
`;

const Label = styled.label`
  font-family: ${Fonts.third};
  align-self: flex-start;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ByRegistering = styled(CustomText)`
  font-size: 13px;
  margin-top: 15px;
  font-family: ${Fonts.third};
  @media (max-width: 600px) {
    width: 70%;
  }
`;

const NeonText = styled(ByRegistering)`
  color: ${Theme.colors.neonBlue};
  margin: 0px 2px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 0px;
  display: inline;
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
  @media (max-width: 1250px) {
    width: 100%;
  }
  @media (max-width: 1300px) {
    font-size: 12px;
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
  @media (max-width: 1250px) {
    width: 100%;
    margin-top: 10px;
  }
  @media (max-width: 1300px) {
    font-size: 12px;
  }
`;

export const GoogleIcon = styled(FaGoogle)``;

export const FacebookIcon = styled(FaFacebookF)``;
