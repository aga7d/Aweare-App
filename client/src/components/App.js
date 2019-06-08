import React from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import SelectGarmentPage from "./SelectGarmentPage";
import SelectFabric from "./SelectFabric";
import MapPage from "./MapPage";
import ResultPage from "./ResultPage";
import AboutPage from "./AboutPage";
import TipsPage from "./TipsPage";
import ModalTutorial from "./ModalTutorial";
import TutorialPage from "./TutorialPage";
import Header from "./Header";
import DropDownMenu from "./DropDownMenu";
import Glossary from "./Glossary";
import GlossaryPage from "./GlossaryPage";

const App = () => {
  return (
    <>
      <Header />
      <DropDownMenu />
      <ModalTutorial/>
      <Switch>
        <Route path="/" exact component={SelectGarmentPage} />
        <Route path="/fabric" component={SelectFabric} />
        <Route path="/map" component={MapPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/tips" component={TipsPage} />
        <Route path="/tutorial" component={TutorialPage}/>
        <Route path="/glossary/:name" component={GlossaryPage} />
        <Route path="/glossary" component={Glossary} />
        
      </Switch>
    </>
  );
};

export default App;
