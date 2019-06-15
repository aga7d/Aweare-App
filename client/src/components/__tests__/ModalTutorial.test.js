import React from "react";
import ModalTutorial from "../ModalTutorial";
import {mount} from "enzyme";
import Root from "../../Root";

let wrapper;
describe("ModalTutorial", ()=>{
    const initFunc = (initialState) =>{
         wrapper= mount(<Root initialState={initialState}><ModalTutorial/></Root>)
    }
    afterEach(()=>{
        wrapper.unmount();
    })
    describe("when visibleTutorial and shownIntro is set to true", ()=>{
        beforeEach(()=>{
            initFunc({visibleTutorial: true ,shownIntro:true})
        })
        it("displays one image at a time", ()=>{
    expect(wrapper.find("img").length).toEqual(1);
    })
        
        it("has an initial count value set to 0", ()=>{
           expect(wrapper.find("p").text()).toEqual("1.Select a piece of garment your want to evaluate");
        })
        it("increments count value on button click and updates text ", ()=>{
             const btnNext= wrapper.find("#arrow");
             btnNext.simulate("click", null);
             expect(wrapper.find("p").text()).toEqual("2. Select a material it is made of");
        }) 
    })
    describe("when visibleTutorial is set to true and shownIntro is set to false", ()=>{
        beforeEach(()=>{
            initFunc({visibleTutorial: true ,shownIntro:false})
        })
        it("does not render any image", ()=>{
            expect(wrapper.find("img").length).toEqual(0)
        })
    })
    describe("when visibleTutorial is set to false and shownIntro is set to true", ()=>{
        beforeEach(()=>{
            initFunc({visibleTutorial: false ,shownIntro:true})
        })
        it("does not render any image", ()=>{
            expect(wrapper.find("img").length).toEqual(0)
        })
    })
    
})
    

