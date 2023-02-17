import React, { useState } from "react";
import styled from "styled-components";
import { BsXLg } from "react-icons/bs";
import Theme from "../Containers/Theme/colors";
import SuccessImage from "../Assets/Images/product-lauch.png";
import { CustomText } from "./Common";

const ChosenModal = ({ onCloseIcon, chosenId, choices }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Container>
      <CloseIcon size={30} color={Theme.colors.black} onClick={onCloseIcon} />
      <Wrapper>
        <Success src={SuccessImage} />
        <ChosenTitle>
          {choices.length !== 0 ? (
            <ChoiceText>{chosenId}</ChoiceText>
          ) : (
            <NothingToChoose>There is nothing to choose from!</NothingToChoose>
          )}
        </ChosenTitle>
        <ThankYou
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onCloseIcon}
        >
          <ThankYouText hovered={hovered}>Thank You!</ThankYouText>
        </ThankYou>
      </Wrapper>
    </Container>
  );
};

export default ChosenModal;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const CloseIcon = styled(BsXLg)`
  align-self: flex-end;
  margin: 25px 25px 0px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 25px;
  }
`;

const Success = styled.img`
  width: 200px;
  @media (max-width: 500px) {
    width: 150px;
  }
`;

const ChosenTitle = styled(CustomText)`
  font-size: 60px;
  color: ${Theme.colors.yellow};
  text-align: center;
  @media (max-width: 500px) {
    font-size: 45px;
  }
`;

const ThankYou = styled.div`
  width: 250px;
  height: 70px;
  border: 1px solid ${Theme.colors.primary};
  border-radius: 14px;
  background-color: ${Theme.colors.lightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${Theme.colors.primary};
  }
  color: white;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 180px;
    height: 50px;
  }
`;

const ChoiceText = styled(CustomText)`
  font-size: 35px;
  color: Theme.colors.black;
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const ThankYouText = styled(CustomText)`
  font-size: 35px;
  color: ${(props) =>
    props.hovered ? Theme.colors.white : Theme.colors.black};
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const NothingToChoose = styled(CustomText)`
  font-size: 20px;
  color: ${Theme.colors.red};
`;
