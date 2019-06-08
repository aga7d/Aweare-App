import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import back11 from "../assets/backgrounds/background11.svg";
import back10 from "../assets/backgrounds/background10.svg";
import { fetchMaterialsAction, selectedFabricAction } from "../redux/actions";
import GlossaryIcon from "./icons/GlossaryIcon";
import NextButton from "./NextButton";
import Spinner from "./Spinner";

const lining = [
  "none",
  "acetate",
  "cotton",
  "modal",
  "silk",
  "polyester",
  "modal",
  "tencel",
  "viscose"
];
const closures = ["none", "wooden button", "plastic button", "zipper"];
class SelectFabric extends React.Component {
  state = { main_fabric: "", lining: "", closure: "" };
   componentDidMount(){
     this.props.fetchMaterialsAction()
   }
    componentDidUpdate() {
     this.props.selectedFabricAction(this.state)
  }
 
  renderStyles( backgroundCol, hoverCol, fontCol ) {
    return {
      control: (base, state) => {
          return{
               ...base,
        color: "white",
        background: backgroundCol,
        height:"60px",
        borderColor: backgroundCol,
        boxShadow: "4px 4px 4px rgba(128, 128, 128, 0.447)",
        "&:hover": {
          borderColor: backgroundCol
        }
          }
      },
      placeholder: () => ({
        color: "#fff",
        paddingLeft: "20px",
        textTransform: "uppercase"
      }),
      dropdownIndicator: () => ({
        fill: "white",
        paddingRight: "25px",
      }),
      menu: () => ({
        borderRadius: 0,
        marginTop: 0,
        background: "white",
        color: fontCol,

      }),
      menuList: (base,state) => {
          return {
        ...base,
        padding: 0,
        zIndex:10,
        height: state.options.length < 5? "20vh" : "36vh",
        boxShadow: "2px 2px 2px rgba(128, 128, 128, 0.247)"
          }
      },
      singleValue: () => ({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }),

      indicatorSeparator: base => ({}),
      input: () => ({
        color: "white"
      }),
      option: (base, state) => ({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "15px",
        borderBottom: "0.3px solid #E7D8D1",
        background: state.isFocused || state.isSelected ? hoverCol : "white"
      })
    };
  }
  renderSelect(style, optionId, text,customArray) {
    
    
    return (
      <Select
        styles={style}
        name={optionId}
        options={customArray.map(obj => ({
          label: (
            <>
              <i>
                <GlossaryIcon name={obj.name || obj} />
              </i>{" "}
              {obj.name || obj}
            </>
          ),
          value: obj.name || obj
        }))}
        isSearchable
        onChange={value => {
          this.setState({ [optionId]:value.value});
        }
        }
        placeholder={text}
       
      />
    );
  }
  render() {
    return  this.props.loading? <Spinner/> :(
      <div className="container">
          {Object.values(this.state).filter(value=>value.length!==0).length === 3 && (
          <NextButton link="/map" text="next" />
        )}
        <h2>What is it made of?</h2>
        <div id="select_container">
          {this.props.glossary && (
            <div className="select_bar a">
              {this.renderSelect(
                this.renderStyles("#F5CDB8", "#FDF6F2", "#CE835F"),
                "main_fabric",
                "Select main fabric",
                 [...this.props.glossary]
              )}
            </div>
          )}
          <div className="select_bar b">
            {this.renderSelect(
              this.renderStyles("#EAD6C3", "#FDF6F2", "#CE835F"),
              "lining",
              "Select inner lining",
              lining, 
            )}
          </div>
          <div className="select_bar c">
            {this.renderSelect(
              this.renderStyles("#D4D1C1", "#FDF6F2", "#CE835F"),
              "closure",
              "Select type of closure",
              closures
            )}
          </div>
        </div>
        <img id="bott-left" src={back10} alt="decoration" />
        <img id="bott-right" src={back11} alt="decoartion" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { glossary: state.glossary, loading: state.apiCallsInProgress>0};
};
const mapDispatchToProps = {
  fetchMaterialsAction,
  selectedFabricAction
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFabric);
