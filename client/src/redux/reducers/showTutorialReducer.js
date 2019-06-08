import {SHOW_TUTORIAL,WIPE_OUT_SESSION} from "../actions/types";

const ShowTutorialReducer= (state=true, action)=>{
    if(action.type===SHOW_TUTORIAL){
        return action.payload;
    }
    else if(action.type === WIPE_OUT_SESSION){
        return false
    }
    return state;
}
export default ShowTutorialReducer