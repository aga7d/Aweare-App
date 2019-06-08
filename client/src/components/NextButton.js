import React from "react";
import {Link} from "react-router-dom"
const NextButton =(props)=>{
    return  (
        <button className= "btn">
         <Link to= {props.link}>
         <i className="fas fa-long-arrow-alt-right"></i>
         </Link>
         <Link to={props.link}>
          <span>{props.text}</span>
         </Link>
        </button>
    )
}
export default NextButton

