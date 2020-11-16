import {
  getNodes,
  getWorkflows,
  setWorkflows,
  setNodes,
  getWorkflowName,
  setWorkflowName,
} from "redux/storage";
let initialState = {
  wf: [],
  nodes: [],
  workflowName: "",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_WORKFLOWS":
      return Object.assign(state, getWorkflows());
    case "SET_WORKFLOWS":
      setWorkflows(action.payload);
      return state;
    case "GET_NODES":
      return Object.assign(state, getNodes(action.payload));
    case "SET_NODES":
      setNodes(action.payload);
      return state;
    case "GET_WF_NAME":
      return Object.assign(state, getWorkflowName(action.payload));
    case "SET_WF_NAME":
      setWorkflowName(action.payload);
      return state;
    default:
      return initialState;
  }
}

export default reducer;
