import React, { useEffect } from "react";
import styled from "styled-components";
import { CustomText } from "../Components/Common";
import Theme from "./Theme/colors";
import ClapperBoard from "../Assets/Images/clapperboard.png";
import MusicPlayer from "../Assets/Images/music-player.png";
import TvShows from "../Assets/Images/tv.png";
import Other from "../Assets/Images/other.png";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();

  const onClickOption = (value) => {
    history.push(`/choosing/${value}`);
  };

  const Options = [
    { Image: ClapperBoard, title: "Movies", value: "Movies" },
    { Image: TvShows, title: "TV Shows", value: "Series" },
    { Image: MusicPlayer, title: "Music", value: "Music" },
    { Image: Other, value: "Other" },
  ];

  return (
    <Container>
      {Options.map((item) => (
        <Option onClick={() => onClickOption(item.value)} key={item.value}>
          <Image src={item.Image} />
          <Title>{item.title}</Title>
        </Option>
      ))}
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 40px 0px 150px;
  height: calc(100vh - 100px);
  @media (max-width: 800px) {
    flex-wrap: wrap;
    width: 60%;
    margin: auto;
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 470px) {
    width: 40%;
    padding: 10px 0px 80px;
  }
  @media (max-width: 400px) {
    width: 50%;
  }
`;

const Option = styled.div`
  width: 300px;
  height: 390px;
  border: 4px solid ${Theme.colors.primary};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${Theme.colors.lightBlue};
  }
  transition: all 0.4s;
  @media (max-width: 1300px) {
    width: 250px;
    height: 330px;
  }
  @media (max-width: 1100px) {
    width: 200px;
    height: 280px;
  }
  @media (max-width: 900px) {
    width: 180px;
    height: 230px;
  }
  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
  @media (max-width: 1300px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 1100px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 900px) {
    width: 80px;
    height: 80px;
  }
`;

const Title = styled(CustomText)`
  font-size: 50px;
  @media (max-width: 1300px) {
    font-size: 40px;
  }
  @media (max-width: 1100px) {
    font-size: 30px;
  }
  @media (max-width: 900px) {
    font-size: 25px;
  }
`;
