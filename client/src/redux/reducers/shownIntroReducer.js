import { SHOWN_INTRO,WIPE_OUT_SESSION } from "../actions/types";

const shownIntroReducer = (state = false, action) => {
  if (action.type === SHOWN_INTRO) {
    return action.payload;
  }
  else if(action.type === WIPE_OUT_SESSION){
    return true;
  }

  return state;
};
export default shownIntroReducer;
