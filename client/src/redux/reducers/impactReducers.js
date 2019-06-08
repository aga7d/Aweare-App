import {
  SELECTED_GARMENT,
  SELECTED_FABRIC,
  SELECTED_CONTINENT
} from "../actions/types";

export const selectedGarmentReducer = (state = null, action) => {
  if (action.type === SELECTED_GARMENT) {
    return action.payload;
  }
  return state;
};

export const selectedFabricReducer = (state ={}, action) => {
  if (action.type === SELECTED_FABRIC) {
    return action.payload
  }
  return state;
};
export const selectedContinentReducer = (state = null, action) => {
  if (action.type === SELECTED_CONTINENT) {
    return action.payload;
  }
  return state;
};
