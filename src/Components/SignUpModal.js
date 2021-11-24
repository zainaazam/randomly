import React, { useState } from "react";
import styled from "styled-components";
import { CustomInput, CustomText } from "./Common";
import Fonts from "../Theme/Fonts";
import Theme from "../Containers/Theme/colors";
import { BsXLg } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import {
  ModalButton,
  OrContainer,
  Line,
  SocialMedia,
  WithGoogle,
  GoogleIcon,
  WithFacebook,
  FacebookIcon,
} from "./LoginModal";

const SignUpModal = ({ onCloseIcon }) => {
  const [gHovered, setGHovered] = useState(false);
  const [fHovered, setFHovered] = useState(false);
  const history = useHistory();
  const handleSignUp = () => {
    history.push("/main");
    onCloseIcon();
  };

  return (
    <SignUpForm>
      <CloseIcon size={30} color={Theme.colors.black} onClick={onCloseIcon} />
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
        By registering, you accept our <NeonText>terms of use</NeonText> and our{" "}
        <NeonText>privacy policy</NeonText>.
      </ByRegistering>
    </SignUpForm>
  );
};

export default SignUpModal;

const SignUpForm = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CreateYourAccount = styled(CustomText)`
  font-size: 35px;
  font-family: ${Fonts.third};
`;

export const CloseIcon = styled(BsXLg)`
  align-self: flex-end;
  margin: 15px 15px 0px;
  cursor: pointer;
`;

const AlreadyHaveAccount = styled(CustomText)`
  display: flex;
  font-family: ${Fonts.third};
  font-size: 18px;
  margin-top: 5px;
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
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ByRegistering = styled(CustomText)`
  display: flex;
  font-size: 13px;
  margin-top: 15px;
  font-family: ${Fonts.third};
`;

const NeonText = styled(ByRegistering)`
  color: ${Theme.colors.neonBlue};
  margin: 0px 5px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 0px;
`;
