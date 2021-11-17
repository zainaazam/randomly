import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Dropdown } from "rsuite";
import styled from "styled-components";
import Logo from "../Assets/Images/logo.png";
import { CustomText } from "./Common";
import Theme from "../Containers/Theme/colors";
// import { useHistory } from "react-router-dom";
// import { FaUserAlt } from "react-icons/fa";
// import Colors from "../Containers/Theme/Colors";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { logoutUser, updateUser } from "../Action";
// import { useCookies } from "react-cookie";
// import Menu from "./Menu";
const Header = () => {
  // const [, , removeCookie] = useCookies(["rememberMeCookie"]);
  // const [random, setRandom] = useState(true);
  const [hovered, setHovered] = useState(false);
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const {loggedIn} = useSelector<RootState>(
  //   state => state.Configs,
  // ) as ConfigsReducer;
  // const [flipArrow, setFlipArrow] = useState(false);
  return (
    <HeaderWrapper>
      {/* <HeaderNav>
        <HeaderNavOptionLink to="/">
          <CustomTextLink>الرئيسية</CustomTextLink>
        </HeaderNavOptionLink>
        <HeaderNavOptionLink to="/guide">
          <CustomTextLink>دليل الإستخدام</CustomTextLink>
        </HeaderNavOptionLink>
        <HeaderNavOptionLink to="/blog-listing">
          <CustomTextLink>المجلة القانونية</CustomTextLink>
        </HeaderNavOptionLink>
        <HeaderNavOptionLink
          onClick={() => setRandom(!random)}
          to={{
            pathname: "/",
            state: { contactus: random },
          }}
        >
          <CustomTextLink>تواصل معنا</CustomTextLink>
        </HeaderNavOptionLink> */}
      {/* {loggedIn ? (
          <DropContainer>
            <DropWrapper>
              <Select
                title=""
                onToggle={() => setFlipArrow(!flipArrow)}
                icon={
                  <>
                    {flipArrow ? (
                      <ArrowUpIcon color={Colors.seaBlue} size={15} />
                    ) : (
                      <ArrowDownIcon color={Colors.seaBlue} size={15} />
                    )}
                    <FaUserAlt color={Colors.seaBlue} size={17} />
                  </>
                }
                noCaret
              >
                <DropItem onSelect={() => history.push("/my-account")}>
                  الحساب
                </DropItem>
                <DropItem
                  onSelect={() => {
                    dispatch(logoutUser());
                    dispatch(updateUser({}));
                    removeCookie("rememberMeCookie");
                    history.push("/");
                  }}
                >
                  تسجيل الخروج
                </DropItem>
              </Select>
            </DropWrapper>
          </DropContainer>
        ) : (
          <HeaderNavOptionLink to="/login">
            <CustomTextLink>تسجيل الدخول</CustomTextLink>
          </HeaderNavOptionLink>
        )}
        <Menu />
      </HeaderNav> */}
      <HeaderLogoWrapper>
        <HeaderNavOption to="/">
          <HeaderLogo src={Logo} />
        </HeaderNavOption>
      </HeaderLogoWrapper>
      <Login
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <LoginText size={25} hovered={hovered}>
          Login
        </LoginText>
      </Login>
    </HeaderWrapper>
  );
};

export default Header;

export const HeaderWrapper = styled.div`
  padding: 0px 50px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  /* position: relative; */
  /* width: 100%; */
  /* @media (max-width: 980px) {
    justify-content: space-around;
  }
  @media (max-width: 700px) {
    justify-content: space-evenly;
  }
  @media (max-width: 580px) {
    justify-content: space-around;
  } */
`;

// export const HeaderNav = styled.div`
//   display: flex;
//   flex-direction: row-reverse;
//   justify-content: space-around;
//   align-items: center;
//   flex: 0.8;
//   padding-left: 170px;
//   width: fit-content;
//   @media (max-width: 1300px) {
//     padding-left: 100px;
//   }
//   @media (max-width: 1200px) {
//     padding-left: 60px;
//   }
//   @media (max-width: 1100px) {
//     padding-left: 40px;
//   }
//   @media (max-width: 950px) {
//     padding-left: 10px;
//   }
//   @media (max-width: 850px) {
//     padding-left: 0px;
//   }
//   @media (max-width: 768px) {
//     justify-content: flex-end;
//   }
//   @media (max-width: 700px) {
//     justify-content: flex-end;
//     width: 95%;
//   }
//   @media (max-width: 625px) {
//     justify-content: flex-end;
//     width: 80%;
//   }
// `;

export const HeaderNavOption = styled(Link)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  outline: none;
  border: unset;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
// export const HeaderNavOptionLink = styled(HeaderNavOption)`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

export const HeaderLogo = styled.img`
  width: 80%;
  margin: 0px 50px;
  @media (max-width: 768px) {
    margin: 0%;
  }
`;

export const HeaderLogoWrapper = styled.div`
  width: 22%;

  /* @media (max-width: 1100px) {
    width: 15%;
  }
  @media (max-width: 700px) {
    width: 20%;
  }
  @media (max-width: 580px) {
    width: 25%;
    margin-right: 15px;
  }
  @media (max-width: 380px) {
    width: 30%;
  } */
`;
// export const ArrowDownIcon = styled(IoIosArrowDown)`
//   margin-right: 26px;
// `;
// export const ArrowUpIcon = styled(IoIosArrowUp)`
//   margin-right: 26px;
// `;
// export const Select = styled(Dropdown)`
//   margin-left: -15px;
// `;
// export const DropWrapper = styled.div`
//   /* border-bottom: 5px solid ${Colors.seaBlue}; */
//   width: 83%;
// `;
// export const DropContainer = styled.div`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;
// export const DropItem = styled(Dropdown.Item)`
//   text-align: end;
//   padding-left: 2rem;
// `;

// export const CustomTextLink = styled(CustomText)`
//   cursor: pointer;
//   :hover {
//     /* color: ${Colors.darkGray}; */
//   }
// `;

export const Login = styled.div`
  cursor: pointer;
  display: flex;
  width: 120px;
  border: 3px solid #13647f;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${Theme.colors.primary};
  }
`;

export const LoginText = styled(CustomText)`
  padding: 8% 0px;
  color: ${(props) =>
    props.hovered ? Theme.colors.white : Theme.colors.primary}; ;
`;
