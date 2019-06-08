import React from "react";
import GarmentIcon from "./icons/GarmentIcon";
import IntroPage from "./IntroPage";
import { connect } from "react-redux";
import NextButton from "./NextButton";
const SelectGarmentPage = props => {
  if (props.shownIntro) {
    return (
      <div className="container">
        {props.selectedGarment && <NextButton link="/fabric" text="next"/>}
        <h2>Select a piece of garment</h2>
        <div id="garments">
          <div className="garment_container">
            <i>
              <GarmentIcon name="shirt" /*score={2}*/ score={0.9} />
            </i>
            <span>Shirt</span>
          </div>
          <div className="garment_container">
            <GarmentIcon name="jacket" score={0.9} />
            <span>Jacket</span>
          </div>
          <div className="garment_container">
            <GarmentIcon name="pants" score={1} />
            <span>Pants</span>
          </div>
          <div className="garment_container">
            <GarmentIcon name="shorts" score={0.7} />
            <span id="shorts">Shorts</span>
          </div>
          <div className="garment_container">
            <GarmentIcon name="dress" score={1} />
            <span>Dress</span>
          </div>
          <div className="garment_container">
            <GarmentIcon name="tshirt" score={0.7} />
            <span>T-shirt</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <IntroPage />
    </div>
  );
};
const mapStateToProps = state => {
  return { shownIntro: state.shownIntro, selectedGarment: state.selectedGarment };
};
export default connect(mapStateToProps)(SelectGarmentPage);
