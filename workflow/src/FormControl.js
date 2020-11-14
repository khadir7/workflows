import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => props.width};
  box-sizing: border-box;
  height: 36px;
  padding: 0px 10px;
`;

export default function ({ as = "input", type = "text", block = true }) {
  return <Input type={type} width={block ? "100%" : "auto"} />;
}
