import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import FormControl from "FormControl";
import ButtonComponent from "ButtonComponent";

const Section = styled.section`
  position: relative;
  height: calc(100vh - 60px);
`;

const Form = styled.form`
  border: 1px solid black;
  width: 400px;
  top: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Text = styled.div`
  text-align: center;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
`;

export default function () {
  const [login, updateLogin] = useState("");
  const [password, updatePassword] = useState("");
  const [isValid, setValid] = useState(true);
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = re.test(String(login).toLowerCase());
    setValid(isValidEmail && password);
    if (isValidEmail && password) {
      history.push("/workflow");
    }
  };
  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Text>Login</Text>
        <FormField>
          <FormControl onchange={(e) => updateLogin(e.target.value)} />
        </FormField>
        <FormField>
          <FormControl
            type="password"
            onchange={(e) => updatePassword(e.target.value)}
          />
        </FormField>
        <ButtonComponent text="Login" block />
        {isValid ? null : (
          <div style={{ paddingTop: "15px" }}>
            Please enter valid email like "alpha@domain.com" and non empty
            password
          </div>
        )}
      </Form>
    </Section>
  );
}
