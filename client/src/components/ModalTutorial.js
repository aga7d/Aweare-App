import React, { useState } from "react";
import { connect } from "react-redux";
import { useLastLocation } from "react-router-last-location";
import history from "../history";
import { showTutorialAction } from "../redux/actions";
//images
import garment from "../assets/tutorial/garment.png";
import garment2x from "../assets/tutorial/garment2x.png";
import fabric from "../assets/tutorial/fabric.png";
import fabric2x from "../assets/tutorial/fabric2x.png";
import map from "../assets/tutorial/map.png";
import map2x from "../assets/tutorial/map2x.png";
import results from "../assets/tutorial/results.png";
import results2x from "../assets/tutorial/results2x.png";

const ModalTutorial = props => {
  const [count, setCount] = useState(0);
  const lastLocation = useLastLocation();
  const retinaList = index => [garment2x, fabric2x, map2x, results2x][index];
  const nonRetinaList = index => [garment, fabric, map, results][index];
  const textList = index => ["1.Select a piece of garment your want to evaluate", "2. Select a material it is made of","3. Select a place where it is made", "4. Check the result of your choices"][index]
  const handleClick = (args) => {
    if(args==="next"){
    if (count <= 2) {
      setCount(count + 1);
    } else {  
      history.push("/");
      props.showTutorialAction(false);
    }
  }
  else if(args==="skip"){
    history.push(lastLocation ? lastLocation.pathname : "/");
    props.showTutorialAction(false);
  }
   
  };
  return props.visibleTutorial && props.shownIntro ? (
    <div
      className="modal"
      onClick={() => {
        handleClick("skip")
      }}
    >
      <div
        id="pop-window"
        onClick={e => {
          e.stopPropagation();
        }}
      >
       <h4>How to use Aweare App</h4>
          <img
            srcSet={`${nonRetinaList(count)} , ${retinaList(count)} 2x`}
            src={nonRetinaList(count)}
            alt="tutorial"
          />
        <div id="description">
         <p>{textList(count)}</p>
        </div>
        <div id="stripe">
          <button aria-label="Skip" onClick={()=>{handleClick("skip")}}>Skip</button>
          <div>
           {[0,1,2,3].map(dot=><div key={dot} className={count===dot? "dot active": "dot"} onClick={()=>{setCount(dot)}}></div>)}
          </div>
          <button aria-label="Next" id="arrow" onClick={()=>{handleClick("next")}}>{count <= 2 ? <i className="fas fa-long-arrow-alt-right"></i> : "Start"}</button>
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = state => {
  return { visibleTutorial: state.visibleTutorial ,shownIntro: state.shownIntro };
};
const mapDispatchToProps = {
  showTutorialAction
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalTutorial);
