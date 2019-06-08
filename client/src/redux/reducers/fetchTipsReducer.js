import {FETCH_TIPS_SUCCESS} from "../actions/types";

const fetchTipsReducer = (state = [], action) => {
    if(action.type === FETCH_TIPS_SUCCESS){
        return action.payload;
    }
    return state;
}
export default fetchTipsReducer;