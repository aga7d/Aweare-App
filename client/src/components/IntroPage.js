import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { shownIntroAction } from "../redux/actions";
import logo from "../assets/LOGO.svg";
import back14 from "../assets/backgrounds/background14.svg";
import back3 from "../assets/backgrounds/background3.svg";
import back2 from "../assets/backgrounds/background2.svg";
import back9 from "../assets/backgrounds/background9.svg";

class IntroPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.shownIntroAction();
    }, 4000);
  }
  render() {
    return ReactDOM.createPortal(
      <div id="intro">
        <img id="bottom-left" src={back14} alt="decoration" />
        <img id="bottom-right" src={back3} alt="decoration" />
        <img id="top-left" src={back2} alt="decoration" />
        <img id="top-right" src={back9} alt="decoration" />
        <div id="logo">
          <img src={logo} alt="logo" />
          <span>Aweare App</span>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}
const mapDispatchToProps = {
  shownIntroAction
};
export default connect(
  null,
  mapDispatchToProps
)(IntroPage);
