import styled from "styled-components";
import Theme from "../Containers/Theme/colors";
import Fonts from "../Theme/Fonts";

export const CustomText = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  font-weight: ${(props) => (props.weight ? props.weight : 600)};
  color: ${(props) => (props.color ? props.color : Theme.colors.black)};
  font-family: ${(props) => (props.font ? props.font : Fonts.regular)};
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};
  font-weight: 200;
`;

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
