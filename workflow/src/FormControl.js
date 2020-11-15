import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => props.width};
  box-sizing: border-box;
  height: 36px;
  padding: 0px 10px;
`;

export default function ({
  as = "input",
  type = "text",
  block = true,
  defaultValue = "",
  onchange,
  ...rest
}) {
  const [val, setVal] = useState(defaultValue);
  useEffect(() => {
    setVal(defaultValue);
  }, [defaultValue]);
  let handleChange = (e) => {
    setVal(e.target.value);
    onchange?.(e);
  };
  return (
    <Input
      type={type}
      width={block ? "100%" : "auto"}
      onChange={handleChange}
      value={val}
      {...rest}
    />
  );
}
