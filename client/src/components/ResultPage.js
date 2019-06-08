import React from "react";
import {connect} from "react-redux";
import {wipeOutSessionAction, fetchScoresAction} from "../redux/actions";
import ImpactIcon from "./icons/ImpactIcon";
import countScores from "../helper/countScores";
import Spinner from "./Spinner";

 //// testowe
class ResultPage extends React.Component{
  componentDidMount(){
    this.props.fetchScoresAction()
  }
  componentWillUnmount(){
    this.props.wipeOutSessionAction();
  }

  renderStyle(h){
    const calc= h*3.8;
    return {
      maxHeight: `${calc}vh`,
      height: `${calc}vh`,
    }
  }
  renderList(){
    const {scores,selectedFabric,selectedGarment, selectedContinent, userLocation} = this.props.state;
    const calculatedScrs= countScores(scores, selectedFabric,selectedGarment,selectedContinent,userLocation);
    const impactArr=["carbon", "green_gas", "water_use", "water_polution","land_use", "biodegrability"];
     return impactArr.map(el=> <div key={el} className="chart_el"><ImpactIcon name={el}/><div id={el} style={this.renderStyle(calculatedScrs[el])}></div></div>)
  }
  render(){
    return  this.props.state.selectedFabric && this.props.state.selectedGarment && this.props.state.selectedContinent ? (
      (
       <div >
        <h2 id="tips">Results</h2>
         {this.props.loading? <Spinner/> : (
           <>
               <div id="impact_box">
          <div id="pointer">
            <div className="impact_dot">
              <div></div>
              <span>Heigh</span> 
            </div>
            <div className="impact_dot">
              <div></div>
              <span>Middle</span> 
            </div>
            <div className="impact_dot">
              <div></div>
              <span>Low</span> 
            </div>
          </div>
          {this.renderList()}
        </div>
        <div id="impact_legend">
          <div>
            <ImpactIcon name="carbon"/> carbon emissions
          </div>
          <div>
            <ImpactIcon name="green_gas"/> green house gasses emissions
          </div>
          <div>
            <ImpactIcon name="water_use"/> water consumption
          </div>
          <div>
            <ImpactIcon name="water_polution"/> water pollution
          </div>
          <div>
            <ImpactIcon name="land_use"/> land use
          </div>
          <div>
            <ImpactIcon name="biodegrability"/> biodegradability
          </div>
        </div>
        </>
         )}
       
      </div>
    )
    ):<h2 id="tips"> You have to complete all steps to see the result.</h2>
    
  
  }
}


const mapStateToProps= state =>{
  return  {state, loading:state.apiCallsInProgress >0}
}
const mapDispatchToProps= {
  wipeOutSessionAction,
  fetchScoresAction
}
export default connect(mapStateToProps,mapDispatchToProps)(ResultPage)