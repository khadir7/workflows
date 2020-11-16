import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

import ButtonComponent from "components/ButtonComponent";

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
  margin-right: auto;
`;

const Icon = styled.span`
  padding-right: 10px;
`;

export default function () {
  const history = useHistory();
  const { pathname } = useLocation();
  let showBackIcon = pathname !== "/";
  let isNodePage = pathname.includes("node");
  const logOut = () => {
    history.push("/");
  };
  return (
    <HeaderSection>
      {isNodePage ? (
        <Icon>
          <BiArrowBack onClick={() => history.goBack()} />
        </Icon>
      ) : null}
      <Text>Flow app</Text>
      {showBackIcon ? (
        <ButtonComponent text="LogOut" color="white" onclick={logOut} />
      ) : null}
    </HeaderSection>
  );
}
