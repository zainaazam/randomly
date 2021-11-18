import React, { useState } from "react";
import styled from "styled-components";
import zombieingImage from "../Assets/Images/zombieing.png";
import { CustomText } from "../Components/Common";
import Fonts from "../Theme/Fonts";
import Theme from "./Theme/colors";

const WelcomePage = () => {
  const [hovered, setHovered] = useState(false);

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
        >
          <RegisterText color={Theme.colors.white} hovered={hovered}>
            Register With Us!
          </RegisterText>
        </Register>
      </Welcoming>
      <ImageContainer>
        <ZombieingImage src={zombieingImage} />
      </ImageContainer>
    </Container>
  );
};

export default WelcomePage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const ZombieingImage = styled.img`
  width: 85%;
`;

const Welcoming = styled.div`
  margin-left: 95px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const WelcomingText = styled(CustomText)`
  width: 50%;
`;

const RightPlaceText = styled(CustomText)`
  width: 50%;
`;

export const Register = styled.button`
  background-color: ${Theme.colors.primary};
  cursor: pointer;
  display: flex;
  width: 400px;
  border: 3px solid #13647f;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

const RegisterText = styled(CustomText)`
  padding: 4% 0px;
  font-size: ${(props) => (props.hovered ? "30px" : "25px")};
`;

const Texts = styled.div``;
