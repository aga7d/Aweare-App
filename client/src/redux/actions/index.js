import {
  SHOWN_INTRO,
  SHOW_TUTORIAL,
  SELECTED_GARMENT,
  SELECTED_FABRIC,
  SELECTED_CONTINENT,
  FETCH_MATERIALS_SUCCESS,
  DROP_DOWN_MENU,
  FETCH_MATERIAL_SUCCESS,
  FETCH_TIPS_SUCCESS,
  FETCH_SCORES_SUCCESS,
  USER_LOCATION,
  BEGIN_API_CALL,
  WIPE_OUT_SESSION
} from "./types";
import axios from "axios";
export const shownIntroAction = () => {
  return {
    type: SHOWN_INTRO,
    payload: true
  };
};
export const showTutorialAction = (bool)=>{
  return {
    type:SHOW_TUTORIAL,
    payload:bool
  }
}
export const wipeOutSessionAction = () =>{
  return {
    type:WIPE_OUT_SESSION
  }
}
export const beginApiCallAction= ()=>{
  return {
    type:BEGIN_API_CALL
  }
}
export const selectedGarmentAction = garmentScore => {
  return {
    type: SELECTED_GARMENT,
    payload: garmentScore
  };
};
export const selectedFabricAction = fabric => {
  return {
    type: SELECTED_FABRIC,
    payload: fabric
  };
};
export const selectedContinentAction = continent => {
  return {
    type: SELECTED_CONTINENT,
    payload: continent
  };
};
export const userLocationAction = latLong =>{
  return {
      type: USER_LOCATION,
      payload:latLong
  };
  
};
export const fetchMaterialsActionSuccess = result => {
  return {
    type: FETCH_MATERIALS_SUCCESS,
    payload: result
  };
};
export const fetchMaterialActionSuccess = result => {
  return { 
    type: FETCH_MATERIAL_SUCCESS,
    payload:result
  }
}
export const fetchTipsActionSuccess = result => {
  return {
    type: FETCH_TIPS_SUCCESS,
    payload: result
  }
}
export const fetchScoresSuccess = result =>{
  return {
    type: FETCH_SCORES_SUCCESS,
    payload:result
  }
}
export const fetchScoresAction = () => async dispatch =>{
  dispatch(beginApiCallAction());
  const result = await axios.get("/api/scores");
  dispatch(fetchScoresSuccess(result.data));
}
export const fetchMaterialAction = (name) => async dispatch => {
   dispatch(beginApiCallAction());
   const result = await axios.get(`/api/glossary/${name}`);
    dispatch(fetchMaterialActionSuccess(result.data));
};
export const fetchMaterialsAction = () => async dispatch => {
   dispatch(beginApiCallAction());
   const result = await axios.get("/api/glossary");
  dispatch(fetchMaterialsActionSuccess(result.data));
};
export const fetchTipsAction= () => async dispatch => {
   dispatch(beginApiCallAction());
  const result = await axios.get("/api/tips");
  dispatch(fetchTipsActionSuccess(result.data))
}
export const dropDownMenuAction = bool => {
  return {
    type: DROP_DOWN_MENU,
    payload: bool
  };
};
