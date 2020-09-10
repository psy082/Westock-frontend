export const SELECT_VIEW = "SELECT_VIEW";

export const selectView = (data) => {
  return { type: "SELECT_VIEW", payload: data };
};

export default {
  SELECT_VIEW,
};
