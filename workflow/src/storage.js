function getStore() {
  if (localStorage.getItem("flowapp")) {
    let store = JSON.parse(localStorage.getItem("flowapp"));
    return store;
  } else {
    localStorage.setItem("flowapp", JSON.stringify({ wf: [] }));
    return { wf: [] };
  }
}
export function getWorkflows() {
  return getStore();
}
export function getWorkflowName(id) {
  let store = getStore();
  let wf = store.wf.find((wf) => wf.id === id);
  return { workflowName: wf.name };
}
export function setWorkflowName({ name, id }) {
  let store = getStore();
  let workflows = store.wf.map((wf) =>
    Object.assign(wf, {
      name: wf.id === id ? name || wf.name : wf.name,
    })
  );
  localStorage.setItem("flowapp", JSON.stringify({ wf: workflows }));
}
export function setWorkflows(workflows) {
  localStorage.setItem("flowapp", JSON.stringify({ wf: workflows }));
}
export function getNodes(id) {
  let store = getStore();
  let wf = store.wf.find((wf) => wf.id === id);
  return { nodes: wf.nodes || [] };
}
export function setNodes({ nodes, id }) {
  let store = getStore();
  let workflows = store.wf.map((wf) =>
    Object.assign(wf, {
      nodes: wf.id === id ? nodes : wf.nodes,
      status: wf.status
        ? nodes.every((node) => node.status === "completed")
        : wf.status,
    })
  );
  localStorage.setItem("flowapp", JSON.stringify({ wf: workflows }));
}
