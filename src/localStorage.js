export const loadState = () => {
  try {
    const todosStateJson = localStorage.getItem("todosState");
    return todosStateJson === null ? undefined : JSON.parse(todosStateJson);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (todosState) => {
  try {
    const todosStateJson = JSON.stringify(todosState);
    localStorage.setItem("todosState", todosStateJson);
  } catch (e) {
    console.log(e);
  }
};
