import React from "react";
import {mount} from "enzyme";
import DropDownMenu from "../DropDownMenu";
import {MemoryRouter} from "react-router-dom";
import Root from "../../Root";
let wrapped;
describe("DropDownMenu", ()=>{
    const initFunc = (initialState = {visibleDropDown:true})=>{
        wrapped = mount(
            <Root initialState= {initialState}>
              <MemoryRouter>
              <DropDownMenu/>
              </MemoryRouter>
            </Root>
        )
    }
    afterEach(()=>{wrapped.unmount()})

    describe("when visibleDropDown is set to true", ()=>{
        beforeEach(()=>{
            initFunc();
        })
        it("shows four anchor tags", ()=>{
            expect(wrapped.find("a").length).toEqual(4)
        })
    })
    describe("when visibleDropDown is set to false", ()=>{
        beforeEach(()=>{
            initFunc({visibleDropDown:false})
        })
        it("does not show any anchor tags", ()=>{
            expect(wrapped.find("a").length).toEqual(0)
        })
    })
})
