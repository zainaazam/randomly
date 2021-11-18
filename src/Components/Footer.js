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
          {hovered && <Sign>zaina.a1762@gmail.com</Sign>}
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
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 100px 0px 100px;
`;

const FooterLinks = styled.div``;

const FooterLinkText = styled(CustomText)`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const SocialMediaLinks = styled.div``;

const SocialMediaLink = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  margin: 0px 30px;
`;

const WebsiteName = styled(CustomText)`
  width: 13%;
`;

const CopyRightText = styled(CustomText)`
  align-self: center;
  margin-bottom: 5px;
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
`;
