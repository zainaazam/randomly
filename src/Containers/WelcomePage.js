import React, { useState, useEffect } from "react";
import styled from "styled-components";
import zombieingImage from "../Assets/Images/zombieing.png";
import { CustomText } from "../Components/Common";
import Fonts from "../Theme/Fonts";
import Theme from "./Theme/colors";
import SignUpModal from "../Components/SignUpModal";
import { Modal } from "rsuite";

const WelcomePage = () => {
  const [hovered, setHovered] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [reload, setReaload] = useState(false);

  const handleSignUpModal = () => {
    setSignUpModal(!signUpModal);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    setReaload(true);
    setTimeout(() => {
      reload && refreshPage();
      setReaload(false);
    }, 1000);
  }, []);

  return (
    <Container>
      <Welcoming>
        <Texts>
          <WelcomingText font={Fonts.second} size={40}>
            you don’t want to choose between things whatever they are?
          </WelcomingText>
          <RightPlaceText
            font={Fonts.second}
            size={40}
            color={Theme.colors.primary}
          >
            You’re in the right PLACE!
          </RightPlaceText>
        </Texts>
        <Register
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => handleSignUpModal()}
        >
          <RegisterText color={Theme.colors.white} hovered={hovered}>
            Register With Us!
          </RegisterText>
        </Register>
      </Welcoming>
      <ImageContainer>
        <ZombieingImage src={zombieingImage} />
      </ImageContainer>
      <Modal show={signUpModal} onHide={handleSignUpModal} overflow={true}>
        <SignUpModal onCloseIcon={handleSignUpModal} />
      </Modal>
    </Container>
  );
};

export default WelcomePage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
  height: calc(100vh - 100px);
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    margin: auto;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const ZombieingImage = styled.img`
  width: 70%;
  /* @media (max-width: 1150px) {
    width: 70%;
  } */
  /* @media (max-width: 850px) {
    width: 70%;
  } */
`;

const Welcoming = styled.div`
  margin-left: 95px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    margin-left: 0px;
    align-items: center;
    margin-top: 20px;
  }
`;

const WelcomingText = styled(CustomText)`
  width: 60%;
  font-size: 32px;

  @media (max-width: 1300px) {
    font-size: 30px;
  }
  @media (max-width: 1025px) {
    font-size: 25px;
    width: 80%;
  }
  @media (max-width: 760px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    text-align: center;
    margin: auto;
  }
`;

const RightPlaceText = styled(CustomText)`
  width: 60%;
  font-size: 32px;

  @media (max-width: 1300px) {
    font-size: 30px;
  }
  @media (max-width: 1025px) {
    font-size: 25px;
    width: 80%;
  }
  @media (max-width: 760px) {
    font-size: 20px;
    width: 100%;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const Register = styled.button`
  background-color: ${Theme.colors.primary};
  cursor: pointer;
  display: flex;
  width: 350px;
  border: 3px solid #13647f;
  border-radius: 14px;
  align-items: center;
  height: 60px;
  justify-content: center;

  @media (max-width: 1150px) {
    width: 300px;
  }
  @media (max-width: 850px) {
    width: 200px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const RegisterText = styled(CustomText)`
  padding: 4% 0px;
  font-size: ${(props) => (props.hovered ? "23px" : "20px")};
  transition: all 0.3s ease-in-out;
  @media (max-width: 1150px) {
    font-size: 20px;
  }
  @media (max-width: 850px) {
    font-size: 17px;
  }
`;

const Texts = styled.div``;
