import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
  height: 60px;
  display: flex;
  background: #da63da;
  align-items: center;
  color: white;
  padding: 0px 15px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export default function () {
  return (
    <HeaderSection>
      <Text>Flow app</Text>
    </HeaderSection>
  );
}
