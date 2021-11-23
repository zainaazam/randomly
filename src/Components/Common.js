import styled from "styled-components";
import Theme from "../Containers/Theme/colors";
import Fonts from "../Theme/Fonts";

// export const IconsDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   cursor: pointer;
//   width: 12%;
// `;
// export const Detail = styled.div`
//   display: flex;
//   flex-direction: column;
//   cursor: pointer;
// `;
// export const A = styled.a`
//   text-decoration: none !important;
// `;

// export const ButtonsRow = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   direction: rtl;
//   padding: 30px 0;
// `;
// export const Label = styled.div`
//   padding: ${(props) => (props.padding ? props.padding : "15px 36px")};
//   width: ${(props) => (props.width ? props.width : "100%")};
//   display: ${(props) => (props.display ? props.display : "flex")};
//   flex-direction: ${(props) =>
//     props.flexDirection ? props.flexDirection : "row"};
//   justify-content: space-between;
// `;
// export const Row = styled.div`
//   width: ${(props) => (props.width ? props.width : "100%")};
//   display: ${(props) => (props.display ? props.display : "flex")};
//   flex-direction: ${(props) =>
//     props.flexDirection ? props.flexDirection : "row"};
//   direction: ${(props) => (props.direction ? props.direction : "rtl")};
//   padding: ${(props) => (props.padding ? props.padding : "30px 40px 20px")};
//   justify-content: center;
//   /* @media (max-width: 561px) {
//     flex-direction: column;
//   } */
// `;
export const CustomText = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  font-weight: ${(props) => (props.weight ? props.weight : 600)};
  color: ${(props) => (props.color ? props.color : Theme.colors.black)};
  font-family: ${(props) => (props.font ? props.font : Fonts.regular)};
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};
  font-weight: 200;
`;
// export const DetailsText = styled.p`
//   width: 100%;
//   font-weight: ${(props) => (props.weight ? props.weight : 500)};
//   color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
//   padding: 4px 0 10px;
// `;
export const CustomInput = styled.input`
  border: 0px;
  border-bottom: 1px solid ${Theme.colors.lightBlue};
  ${(props) => (props.error ? "border-color:red" : "")};
  padding: 10px 15px;
  width: ${(props) => (props.width ? props.width : "96%")};
  font-family: ${(props) => (props.font ? props.font : Fonts.third)};
  ${(props) => (props.height ? `height:${props.height}` : "")};
  &:focus,
  &:visited,
  &:link,
  &:active {
    background-color: ${Theme.colors.transparent};
    border: 0px;
    border-bottom: 1px solid ${Theme.colors.primary};
  }
  outline: none;
  background-color: ${Theme.colors.transparent};
`;

// export const CustomButton = styled.button`
//   cursor: pointer;
//   outline: none;
//   padding: 10px;
//   width: ${(props) => (props.width ? props.width : "20%")};
//   background: ${(props) =>
//     props.orangeBg
//       ? props.theme.colors.gradientFromLeft
//       : props.darkBlueBg
//       ? Colors.darkBlue
//       : props.lightBlueBg
//       ? Colors.lightBlue
//       : props.bgColor
//       ? props.bgColor
//       : props.theme.colors.gradientBlue};
//   height: ${(props) => (props.height ? props.height : "")};
//   border: ${(props) =>
//     props.withBorder ? `1px solid ${Colors.borderGray}` : 0};
//   border-radius: 50px;
//   transition: all 0.5s ease-in-out;
//   margin: 5px 0;
//   font-family: ${(props) => (props.font ? props.font : Fonts.regular)};

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// export const RowExtended = styled(Row)`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   direction: rtl;
//   padding: 30px 40px 20px;
//   justify-content: center;
//   @media (max-width: 561px) {
//     flex-direction: column;
//   }
// `;
// export const CustomTextButton = styled(CustomText)`
//   cursor: pointer;
// `;
