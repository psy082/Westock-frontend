import { SELECT_VIEW } from "../actions/viewActions";

const INITIAL_STATE = "grid";

const viewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default viewReducer;
