import styled, { css } from "styled-components";
import { primary } from "@/lib/colors";

export const ButtonStyle = css`
  border: 0;
  color: #ffffff;
  padding: 5px 15px;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #ffffff;
      color: #000000;
    `}
${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #ffffff;
      border: 2px solid #ffffff;
    `}
    ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000000;
      color: #ffffff;
    `}
${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000000;
      border: 2px solid #000000;
    `}

  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      color: #ffffff;
      border: 2px solid ${primary};
    `}

  ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      color: ${primary};
      border: 2px solid ${primary};
    `}

  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.1rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
