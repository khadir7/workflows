import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 36px;
  padding: 0px 10px;
`;

export default function ({ as = "input", type = "text" }) {
  return <Input type={type} />;
}
