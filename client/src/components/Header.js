import React from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { dropDownMenuAction } from "../redux/actions";
import logo from "../assets/navLogo.svg";
import history from "../history";
class Header extends React.Component{
   componentDidMount() {
    history.listen(location => {
      this.props.dropDownMenuAction(false)
    });
   }
  render(){
    return (
    <nav id="main_navigation">
      <Link id="nav_logo" to="/">
        <img src={logo} alt="logo" />
        <span>Aweare App</span>
      </Link>
      <Media query="(min-width:860px)">
        {matches => {
          if (matches) {
            this.props.dropDownMenuAction(false);
            return (
              <>
                <Link className="nav_links" to="/tutorial">
                  Tutorial
                </Link>
                <Link className="nav_links" to="/glossary">
                  Fabric Glossary
                </Link>
                <Link className="nav_links" to="/tips">
                  Tips
                </Link>
                <Link className="nav_links" to="/about">
                  About
                </Link>
              </>
            );
          } else {
            return (
              <button
                className={this.props.visibleDropDown? "active-dropdown":"dropdown-btn"}
                onClick={() => {
                  this.props.dropDownMenuAction(!this.props.visibleDropDown);
                }}
              >
                <div id="first"/>
                <div id="midd" />
                <div id="last" />
              </button>
            );
          }
        }}
      </Media>
    </nav>
  );
  }
};

const mapDispatchToProps = {
  dropDownMenuAction
};
const mapStateToProps = state => {
  return { visibleDropDown: state.visibleDropDown };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
