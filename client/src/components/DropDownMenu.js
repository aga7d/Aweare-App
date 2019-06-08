import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const DropDownMenu = props => {
  return props.visibleDropDown ? (
    <div id="dropdown_nav">
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
    </div>
  ) : null;
};
const mapStateToProps = state => {
  return { visibleDropDown: state.visibleDropDown };
};
export default connect(mapStateToProps)(DropDownMenu);
