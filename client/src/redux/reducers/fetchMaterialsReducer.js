import { FETCH_MATERIALS_SUCCESS, FETCH_MATERIAL_SUCCESS } from "../actions/types";

export const  fetchMaterialsReducer = (state = [], action) => {
  if (action.type === FETCH_MATERIALS_SUCCESS) {
    return action.payload;
  }
  return state;
};


export const fetchMaterialReducer = (state={},action)=>{
  if(action.type===FETCH_MATERIAL_SUCCESS){
    return action.payload;
  }
  return state;
}