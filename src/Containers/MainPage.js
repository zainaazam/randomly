import React from "react";
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

  const onClickOption = () => {
    history.push("/choosing");
  };

  const Options = [
    { Image: ClapperBoard, title: "Movies" },
    { Image: TvShows, title: "TV Shows" },
    { Image: MusicPlayer, title: "Music" },
    { Image: Other },
  ];
  return (
    <Container>
      {Options.map((item) => (
        <Option onClick={onClickOption}>
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
  padding: 100px 0px 150px;
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
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
`;

const Title = styled(CustomText)`
  font-size: 50px;
`;
