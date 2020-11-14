import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(props) => props.color};
  height: 36px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0px 10px;
  width: ${(props) => props.width};
`;

export default function ({ color = "blue", text, block }) {
  return (
    <Button color={color} width={block ? "100%" : "auto"}>
      {text}
    </Button>
  );
}
