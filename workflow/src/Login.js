import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <Section>
      <Form>
        <Text>Login</Text>
        <FormField>
          <FormControl />
        </FormField>
        <FormField>
          <FormControl type="password" />
        </FormField>
        <Link to="/workflow">
          <ButtonComponent text="Login" block />
        </Link>
      </Form>
    </Section>
  );
}
