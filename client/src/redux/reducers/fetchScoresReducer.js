import {FETCH_SCORES_SUCCESS} from "../actions/types";

const fetchScoresReducer = (state = [], action ) =>{
    if(action.type===FETCH_SCORES_SUCCESS){
        return action.payload
    }
    return state;
}
export default fetchScoresReducer;