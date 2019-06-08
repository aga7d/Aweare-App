import React from "react";
import { connect } from "react-redux";
import { fetchTipsAction } from "../redux/actions"; 
import Spinner from "./Spinner";
class TipsPage extends React.Component{
  componentDidMount(){
    this.props.fetchTipsAction()
  }
  renderList(){
    let counter=0;
    return this.props.tips.map(tip =>{ counter+=1; return <div key={tip._id} className="tip_box"><span> {`${counter}. ${tip.title}`} </span> <p> {tip.content}</p> </div>} )
  }
  render(){
    return (
      <div>
      <h2 id="tips">Sustainable fashion tips</h2>
      {this.props.loading? <Spinner/> :(
        <div id= "tip_container"> 
        {this.renderList()}
      </div>
      )}
      
      </div>
    )
  }
}
const mapDispatchToProps = {
  fetchTipsAction
}
const mapStateToProps = state => {
  return { tips: state.tips, loading: state.apiCallsInProgress>0}
}

export default connect(mapStateToProps,mapDispatchToProps)(TipsPage);