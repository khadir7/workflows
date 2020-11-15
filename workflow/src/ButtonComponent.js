import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(props) => props.color};
  height: 36px;
  cursor: pointer;
  padding: 0px 10px;
  width: ${(props) => props.width};
  border-color: transparent;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export default function ({ color = "blue", text, block, onclick }) {
  let handleClick = (e) => {
    onclick?.(e);
  };
  return (
    <Button color={color} width={block ? "100%" : "auto"} onClick={handleClick}>
      {text}
    </Button>
  );
}
