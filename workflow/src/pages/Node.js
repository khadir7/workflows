import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import FormControl from "components/FormControl";
import ButtonComponent from "components/ButtonComponent";

const colorMap = {
  pending: "gray",
  progress: "blue",
  completed: "green",
};

const TopSection = styled.section`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0px 15px;
  border-bottom: 1px solid black;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  button {
    margin-left: 10px;
  }
`;

const MainSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 30px 20px;
  gap: 30px;
`;

const Card = styled.div`
  border: 1px solid black;
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
  background: ${(props) => props.color};
`;

const Textarea = styled.textarea`
  height: 150px;
  resize: none;
  margin-top: 15px;
  width: 100%;
  padding: 10px;
`;

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const getStatus = (status, nodes, index) => {
  let _status;
  switch (status) {
    case "pending":
      _status = "progress";
      break;
    case "progress":
      let beforePendingNode = nodes
        .slice(0, index)
        .some((node) => node.status === "pending");
      _status = beforePendingNode ? "progress" : "completed";
      break;
    case "completed":
      let afterCompletedNode = nodes
        .slice(index + 1)
        .some((node) => node.status === "completed");
      _status = afterCompletedNode ? "completed" : "pending";
      break;
    default:
      _status = "pending";
  }
  return _status;
};

export default function () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const [nodes, setNodes] = useState([]);
  const [workflowName, setWorkflowName] = useState("");
  const [showShuffle, setShuffleDisplay] = useState(false);
  useEffect(() => {
    setWorkflowName(globalState.workflowName);
  }, [globalState.workflowName]);
  useEffect(() => {
    dispatch({
      type: "SET_WF_NAME",
      payload: { id: parseInt(id), name: workflowName },
    });
  }, [workflowName]);
  useEffect(() => {
    dispatch({
      type: "GET_NODES",
      payload: parseInt(id),
    });
    dispatch({
      type: "GET_WF_NAME",
      payload: parseInt(id),
    });
  }, []);
  useEffect(() => {
    setNodes(globalState.nodes);
  }, [globalState.nodes]);
  useEffect(() => {
    let allCompleted = nodes.length
      ? nodes.every((node) => node.status === "completed")
      : false;
    setShuffleDisplay(allCompleted);
    dispatch({
      type: "SET_NODES",
      payload: { nodes, id: parseInt(id) },
    });
  }, [nodes]);
  const createNode = () => {
    setNodes([
      ...nodes,
      ...[
        {
          name: `Task ${nodes.length + 1}`,
          id: nodes[nodes.length - 1] ? nodes[nodes.length - 1]["id"] + 1 : 1,
          status: "pending",
          desc: `Description about Task ${nodes.length + 1}`,
        },
      ],
    ]);
  };
  const deleteNode = () => {
    let id = Math.max.apply(
      Math,
      nodes.map((node) => {
        return node.id;
      })
    );
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
  };
  const shuffleNodes = () => {
    setNodes((nodes) => {
      let _nodes = [...nodes];
      shuffle(_nodes);
      return _nodes;
    });
  };
  const updateNodeStatus = (status, id) => {
    setNodes((nodes) =>
      nodes.map((node, index) =>
        Object.assign(node, {
          status:
            id === node.id ? getStatus(status, nodes, index) : node.status,
        })
      )
    );
  };
  const updateNode = (e, id, isInput = false) => {
    let field = isInput ? "name" : "desc";
    let value = e.target.value.trim();
    setNodes((nodes) =>
      nodes.map((node) =>
        Object.assign(node, {
          [field]: node.id === id ? value : node[field],
        })
      )
    );
  };
  return (
    <>
      <TopSection>
        <FormControl
          block={false}
          defaultValue={workflowName}
          onchange={(e) => setWorkflowName(e.target.value)}
        />
        <ButtonContainer>
          {showShuffle ? (
            <ButtonComponent
              text="Shuffle"
              color="purple"
              onclick={shuffleNodes}
            />
          ) : null}
          <ButtonComponent text="Delete" color="red" onclick={deleteNode} />
          <ButtonComponent text="Add Node" color="green" onclick={createNode} />
          <ButtonComponent text="Save" />
        </ButtonContainer>
      </TopSection>
      <MainSection>
        {nodes.map((node, index) => (
          <Card key={index}>
            <FormControl
              defaultValue={node.name}
              onchange={(e) => updateNode(e, node.id, true)}
            />
            <RoundIcon
              color={colorMap[node.status]}
              onClick={() => updateNodeStatus(node.status, node.id)}
            />
            <Textarea
              defaultValue={node.desc}
              onChange={(e) => updateNode(e, node.id)}
            />
          </Card>
        ))}
      </MainSection>
    </>
  );
}
