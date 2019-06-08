import React from "react";
import { Provider } from "react-redux";
import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import {loadState, saveState} from "./localStorage";

const persitedState = {...loadState("session"), ...loadState("local")}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Root = ({ children, initialState = persitedState }) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
  store.subscribe(()=>{
    saveState({
      selectedGarment: store.getState().selectedGarment,
      selectedFabric: store.getState().selectedFabric,
      selectedContinent: store.getState().selectedContinent,
    },"session");
    saveState({
      shownIntro: store.getState().shownIntro,
      visibleTutorial:store.getState().visibleTutorial
    }, "local")
  })
  return <Provider store={store}>{children}</Provider>;
};
export default Root;
