import React from "react";
import {mount} from "enzyme";
import SelectGarmentPage from "../SelectGarmentPage";
import Root from "../../Root";
import GarmentIcon from "../icons/GarmentIcon";

let wrapper;
describe("SelectGarmentPage", () =>{
    //add a div with #modal id to the global body
    const modalRoot = global.document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    const body = global.document.querySelector('body');
    body.appendChild(modalRoot);
    
    const initFunc = (initialState) => {
         wrapper= mount(<Root initialState={initialState}><SelectGarmentPage/></Root>);
    }
    afterEach(()=>{
        wrapper.unmount();
    })
    
    describe("when shownIntro is set to true", ()=>{
        beforeEach(()=>{
            initFunc({shownIntro:true})
        })
        it("renders six instances of GarmentIcon component", ()=>{
           expect(wrapper.find(GarmentIcon).length).toEqual(6)
        })
    })
    describe("when shownIntro is set to false", ()=>{
        beforeEach(()=>{
            initFunc({shownIntro:false})
        })
        it("renders introPage", ()=>{
           expect(wrapper.find("IntroPage").length).toEqual(1)
        })
    })
})