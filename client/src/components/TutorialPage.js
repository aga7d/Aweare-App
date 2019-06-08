import React, { useEffect } from "react";
import { connect } from "react-redux";
import { showTutorialAction } from "../redux/actions";
import ModalTutorial from "./ModalTutorial";
const TutorialPage = props => {
  useEffect(() => {
    props.showTutorialAction(true);
  }, []);
  return <ModalTutorial />;
};
const mapDispatchToProps = {
  showTutorialAction
};

export default connect(
  null,
  mapDispatchToProps
)(TutorialPage);
