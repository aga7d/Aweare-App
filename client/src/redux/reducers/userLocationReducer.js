import {USER_LOCATION} from "../actions/types";

const userLocationReducer = (state=[], action)=>{
    if(action.type === USER_LOCATION){
        return action.payload;
    }
    return state;
}
export default userLocationReducer;