export const alertConfig = {
  duplicateTodo: {
    id: "duplicateTodo",
    type: "warning",
    message: "This todo already exists (press enter to ignore and create)",
  },
  invalidDate: {
    id: "invalidDate",
    type: "warning",
    message: "The chosen date already passed",
  },
};

export const getIcon = (type) => {
  switch (type) {
    case "warning":
      return "exclamation-circle";
    case "error":
      return "exclamation-triangle";
    default:
      return "exclamation-circle";
  }
};

export default alertConfig;
