import styled from "styled-components";
import { Text, Heading } from "@paciolan/primitives";

export const InputForm = styled.form`
  display: ${props => (props.grid ? "grid" : "flex")};
  justify-content: ${props => (props.center ? "center" : "start")};
  padding-top: ${props => (props.nopadding ? "" : "16px")};
  padding-left: ${props => (props.padding ? props.padding : "")};
`;

export const InputLabel = styled(Heading)`
  font-weight: 500;
  display: grid;
  font-size: 14px;
  color: #333333;
  opacity: 0.85;
  margin-bottom: 0px;
  padding-left: ${props => props.padding || "0px"};
  padding-right: ${props => props.padding || "0px"};
`;

export const InputSubLabel = styled(Text)`
  font-weight: 300;
  display: contents;
  font-size: 12px;
  color: #6a6a6a;
`;

export const Input = styled.input`
  width: ${props => props.width || "328px"};
  margin-left: 4px;
  margin-top: 6px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 3px;
  height: 28px;
  border: 1px solid #979797;
  border-radius: 4px;
  font-size: 14px !important;
  color: #333333;

  ::placeholder {
    color: #737473;
    font-size: 12px !important;
  }
  :focus {
    outline: none !important;
    border: 1px solid #ef6c00;
    /* box-shadow: 0 0 10px #ef6c00; */
  }
`;
