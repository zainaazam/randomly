import React, { useState } from "react";
import styled from "styled-components";
import { CustomText } from "./Common";
import Theme from "../Containers/Theme/colors";
import FacebookIcon from "../Assets/Images/facebook.png";
import TwitterIcon from "../Assets/Images/twitter.png";
import GmailIcon from "../Assets/Images/gmail.png";
import LinkedInIcon from "../Assets/Images/linkedin.png";

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <FooterWrapper>
      <Container>
        <FooterLinks>
          <FooterLinkText size={40} color={Theme.colors.white}>
            Who we are
          </FooterLinkText>
          <FooterLinkText size={40} color={Theme.colors.white}>
            Contact Us
          </FooterLinkText>
          <FooterLinkText size={40} color={Theme.colors.white}>
            Feedback
          </FooterLinkText>
        </FooterLinks>
        <SocialMediaLinks>
          <MailTo href={`mailto: zaina.a1762@gmail.com`}>
            <SocialMediaLink
              src={GmailIcon}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </MailTo>
          <SocialMediaLink
            src={TwitterIcon}
            onClick={() => window.open("https://twitter.com/ZainaAzam")}
          />
          <SocialMediaLink
            src={FacebookIcon}
            onClick={() =>
              window.open("https://www.facebook.com/zaina.azam.7/")
            }
          />
          <SocialMediaLink
            src={LinkedInIcon}
            onClick={() =>
              window.open("https://www.linkedin.com/in/zaina-azam-66332a1a2/")
            }
          />
          {window.innerWidth > 700 && hovered && (
            <Sign>zaina.a1762@gmail.com</Sign>
          )}
        </SocialMediaLinks>
        <WebsiteName size={40} color={Theme.colors.white}>
          Randomly by Zaina Azam
        </WebsiteName>
      </Container>
      <CopyRightText color={Theme.colors.white} size={18}>
        © Zaina Azam. 2021. All Rights Reserved
      </CopyRightText>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(19, 100, 127, 0.83);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 900px) {
    height: 300px;
  }
  @media (max-width: 450px) {
    height: 250px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 100px 0px 100px;
  @media (max-width: 900px) {
    padding: 80px 40px 0px 40px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 40px 40px 0px 40px;
  }
  @media (max-width: 380px) {
    padding: 40px 20px 0px 20px;
  }
`;

const FooterLinks = styled.div`
  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  @media (max-width: 380px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const FooterLinkText = styled(CustomText)`
  cursor: pointer;
  margin-top: 0px;
  font-size: 30px;
  :hover {
    text-decoration: underline;
  }
  @media (max-width: 1050px) {
    font-size: 30px;
  }
  @media (max-width: 772px) {
    font-size: 25px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

const SocialMediaLinks = styled.div`
  @media (max-width: 700px) {
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }
  @media (max-width: 380px) {
    margin-top: 30px;
  }
`;

const SocialMediaLink = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0px 30px;
  @media (max-width: 1050px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 900px) {
    margin: 0px 20px;
    width: 40px;
    height: 40px;
  }
  @media (max-width: 450px) {
    width: 30px;
    height: 30px;
  }
`;

const WebsiteName = styled(CustomText)`
  width: 13%;
  font-size: 30px;
  @media (max-width: 1050px) {
    font-size: 30px;
  }
  @media (max-width: 772px) {
    font-size: 25px;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin-top: 30px;
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

const CopyRightText = styled(CustomText)`
  align-self: center;
  margin-bottom: 5px;
  @media (max-width: 1050px) {
    font-size: 13px;
  }
  @media (max-width: 700px) {
    font-size: 11px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

const MailTo = styled.a``;

const Sign = styled.div`
  width: 200px;
  height: 20px;
  background-color: ${Theme.colors.beige};
  border-radius: 14px;
  text-align: center;
  margin-top: 10px;
  margin-left: 25px;
  @media (max-width: 900px) {
    font-size: 13px;
    width: 150px;
    height: 15px;
  }
`;
