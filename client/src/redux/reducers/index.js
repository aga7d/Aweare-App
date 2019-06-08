import { combineReducers } from "redux";
import {WIPE_OUT_SESSION} from "../actions/types";
import {
  selectedGarmentReducer,
  selectedFabricReducer,
  selectedContinentReducer
} from "./impactReducers";
import dropDownMenuReducer from "./dropDownMenuReducer";
import fetchTipsReducer from "./fetchTipsReducer";
import shownIntroReducer from "./shownIntroReducer";
import showTutorialReducer from "./showTutorialReducer";
import fetchScoresReducer from "./fetchScoresReducer";
import userLocationReducer from "./userLocationReducer";
import apiStatusReducer from "./apiStatusReducer";
import {fetchMaterialsReducer, fetchMaterialReducer} from "./fetchMaterialsReducer";

const appReducer = combineReducers({
  selectedGarment: selectedGarmentReducer,
  selectedFabric: selectedFabricReducer,
  selectedContinent: selectedContinentReducer,
  visibleDropDown: dropDownMenuReducer,
  glossary: fetchMaterialsReducer,
  tips: fetchTipsReducer,
  fetchedMaterial:fetchMaterialReducer,
  shownIntro: shownIntroReducer,
  visibleTutorial: showTutorialReducer,
  scores:fetchScoresReducer,
  userLocation:userLocationReducer,
  apiCallsInProgress: apiStatusReducer
});

const rootReducer = (state,action) =>{
  if(action.type===WIPE_OUT_SESSION){
    state = undefined;
  }
  return appReducer(state,action)

}
export default rootReducer;
