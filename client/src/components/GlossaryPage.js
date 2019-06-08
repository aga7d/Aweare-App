import React from "react";
import { connect } from "react-redux";
import { fetchMaterialAction } from "../redux/actions";
import history from "../history";
import GlossaryIcon from "./icons/GlossaryIcon";
import back7 from "../assets/backgrounds/background7.svg";
import back9 from "../assets/backgrounds/background9.svg";
class GlossaryPage extends React.Component {
  fetchMaterial(){
    const fabricName = this.props.match.params.name;
    this.props.fetchMaterialAction(fabricName);
  }
  componentDidMount() {
    this.fetchMaterial()
  }
  componentDidUpdate(prevProps) {
    if(prevProps.loading===this.props.loading)
    this.fetchMaterial()
  }
  render() {
    const { name, description, alternatives } = this.props.fetchedMaterial;
    return this.props.loading ? null :(
      <div>
        <img id="topleft" src={back7} alt="decoration" />
        <img id="topright" src={back9} alt="decoration" />
        <div id="inner">
          <div id="header">
            <i>
              <GlossaryIcon name={name} />
            </i>{" "}
            {name}
          </div>

          <div id="description_box">
            <p>{description}</p>
            {alternatives && alternatives.length? (
              <div id="alternatives">
                Alternatives:
                {alternatives.map(material => (
                    <div onClick={()=>{history.push(material)}}> <GlossaryIcon name={material} color="#B97D76" /></div>

                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ) 
  }
}
const mapDispatchToProps = {
  fetchMaterialAction
};
const mapStateToProps = state => {
  return { fetchedMaterial: state.fetchedMaterial, loading:state.apiCallsInProgress>0 };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlossaryPage);
