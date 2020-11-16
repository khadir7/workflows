import React from "react";
import styled from "styled-components";

import { ImCheckmark } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";

const Round = styled.span`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: ${(props) => (props.hover ? "none" : "block")};
  background: ${(props) => props.color};
  ${(props) =>
    props.isFixed
      ? `position: absolute;
  top: 0px;
  right: 0px;
  transform: translate(50%, -50%);`
      : `position: relative;`}
  svg {
    color: white;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
  }
`;

export default function ({
  color,
  isCheck = true,
  isFixed = true,
  hover = false,
  onclick,
}) {
  return (
    <Round className="roundbtn" color={color} isFixed={isFixed} hover={hover} onClick={onclick}>
      {isCheck ? <ImCheckmark /> : <AiOutlineDelete />}
    </Round>
  );
}
