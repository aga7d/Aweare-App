import {BEGIN_API_CALL} from "../actions/types";

const actionTypeEndsInSuccess = (type)=> type.substring(type.length -8) ==="_SUCCESS";

const apiCallStatusReducer = (state = 0, action)=>{
  if(action.type === BEGIN_API_CALL){
      return state+1;
  }
  else if(actionTypeEndsInSuccess(action.type)){
    return state-1;
  }
  return state;
}
export default apiCallStatusReducer