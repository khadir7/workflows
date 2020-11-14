import React from "react";
import styled from "styled-components";

import FormControl from "FormControl";
import ButtonComponent from "ButtonComponent";

const TopSection = styled.section`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0px 15px;
  border-bottom: 1px solid black;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 0px 10px;
  margin-right: auto;
  height: 36px;
`;

const MainSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 30px 20px;
  gap: 30px;
`;

const Card = styled.div`
  border: 1px solid black;
  height: 110px;
  padding: 20px;
`;

export default function (props) {
  return (
    <>
      <TopSection>
        <FormControl block={false} />
        <Select>
          <option>Filter</option>
          <option>ALL</option>
          <option>COMPLETED</option>
          <option>PENDING</option>
        </Select>
        <ButtonComponent text="Create Workflow" color="green" />
      </TopSection>
      <MainSection>
        <Card>
          <FormControl />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <span>Completed</span>
            <span>V</span>
          </div>
        </Card>
        <Card>
          <FormControl />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <span>Completed</span>
            <span>V</span>
          </div>
        </Card>
        <Card>
          <FormControl />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <span>Completed</span>
            <span>V</span>
          </div>
        </Card>
        <Card>
          <FormControl />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <span>Completed</span>
            <span>V</span>
          </div>
        </Card>
        <Card>
          <FormControl />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <span>Completed</span>
            <span>V</span>
          </div>
        </Card>
      </MainSection>
    </>
  );
}
