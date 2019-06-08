import { DROP_DOWN_MENU } from "../actions/types";

const DropDownMenuReducer = (state = false, action) => {
  if (action.type === DROP_DOWN_MENU) {
    return action.payload;
  }
  return state;
};
export default DropDownMenuReducer;
