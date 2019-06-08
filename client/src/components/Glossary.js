import React from "react";
import { connect } from "react-redux";
import history  from "../history";
import { fetchMaterialsAction } from "../redux/actions";
import GlossaryIcon from "./icons/GlossaryIcon";
import Spinner from "./Spinner";
import back7 from "../assets/backgrounds/background7.svg";
import back9 from "../assets/backgrounds/background9.svg";

class Glossary extends React.Component {
  state = { term: "" };
  componentDidMount() {
    this.props.fetchMaterialsAction();
  }
  handleChange = e => {
    this.setState({ term: e.target.value.toLowerCase() });
  };
  
  renderList() {
    const filteredArr= this.props.glossary.filter(fabric=>{ return fabric.name.includes(this.state.term)});
    if(filteredArr.length){
      return  filteredArr.map(fabric => (
      <div key={fabric._id} className="fabric_box" onClick={()=>{history.push(`/glossary/${fabric.name}`)}}>
        <i>
          <GlossaryIcon name={fabric.name} />
        </i>
        <span>{fabric.name}</span>
      </div>
      ))
    }
    return <div>No results</div>
  }
   

  render() {
    return (
      <div className="glossary_container">
      <img id="topleft" src={back7} alt="decoration" />
        <img id="topright" src={back9} alt="decoration" />
       <div id= "glossary_inner">
        <h2>Fabric Glossary</h2>
        <div id="input_box">
          <input
            placeholder="Search"
            type="text"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </div>
        {this.props.loading?
        <Spinner/>:(
        <div className="list_container">
        {this.renderList()}
        </div>)
         
       
      }
      </div>
      </div>
        
    )
  }
}
const mapDispatchToProps = {
  fetchMaterialsAction
};
const mapStateToProps = state => {
  return { glossary: state.glossary, loading: state.apiCallsInProgress >0 };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Glossary);
