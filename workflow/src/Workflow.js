import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  position: relative;
`;

const RoundIcon = styled.div`
  height: 35px;
  width: 35px;
  border: 1px solid black;
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translate(50%, -50%);
  border-radius: 50%;
  background: red;
  display: none;
  ${Card}:hover & {
    display: block;
  }
`;

const getStatus = (status, nodes = []) => {
  return status ? false : nodes.every((node) => node.status === "completed");
};

export default function (props) {
  const [workflows, setWorkflows] = useState([]);
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_WORKFLOWS",
    });
  }, []);
  useEffect(() => {
    setWorkflows(globalState.wf);
  }, [globalState.wf]);
  useEffect(() => {
    dispatch({
      type: "SET_WORKFLOWS",
      payload: workflows,
    });
  }, [workflows]);
  const createWorkFlow = () => {
    setWorkflows([
      ...workflows,
      ...[
        {
          name: `Workflow ${workflows.length + 1}`,
          id: workflows[workflows.length - 1]
            ? workflows[workflows.length - 1]["id"] + 1
            : 1,
          status: false,
        },
      ],
    ]);
  };
  const deleteWorkflow = (id) => {
    setWorkflows((workflows) =>
      workflows.filter((workflow) => workflow.id !== id)
    );
  };
  const changeStatus = (status, id) => {
    setWorkflows((workflows) =>
      workflows.map((workflow) =>
        Object.assign(workflow, {
          status:
            id === workflow.id
              ? getStatus(status, workflow.nodes)
              : workflow.status,
        })
      )
    );
  };
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
        <ButtonComponent
          text="Create Workflow"
          color="green"
          onclick={createWorkFlow}
        />
      </TopSection>
      <MainSection>
        {workflows.map((workflow, index) => (
          <Card key={index}>
            <Link to={`/node/${workflow.id}`}>
              <div>{workflow.name}</div>
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
              }}
            >
              <span>{workflow.status ? "COMPLETED" : "PENDING"}</span>
              <span
                onClick={() => changeStatus(workflow.status, workflow.id)}
                style={{
                  height: "35px",
                  width: "35px",
                  borderRadius: "50%",
                  background: workflow.status ? "green" : "gray",
                }}
              ></span>
            </div>
            <RoundIcon onClick={() => deleteWorkflow(workflow.id)} />
          </Card>
        ))}
      </MainSection>
    </>
  );
}
