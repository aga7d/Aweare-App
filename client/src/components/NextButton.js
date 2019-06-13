import React from "react";
import {Link} from "react-router-dom"
const NextButton =(props)=>{
    return  (
        <button aria-label="Next" className= "btn">
         <Link to= {props.link}>
         <i className="fas fa-long-arrow-alt-right"></i>
         </Link>
        </button>
    )
}
export default NextButton

