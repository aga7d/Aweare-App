import React from "react";
import {MemoryRouter} from "react-router-dom";
import Header from "../Header";
import Root from "../../Root";
import {mount} from "enzyme"
let wrapper;
describe("Header", ()=>{
    const initFunc = (bool)=>{
        window.matchMedia = (matches: string) => ({
            matches: bool, 
            addListener: () => {},
            removeListener: () => {},
            media: ''
     });
        wrapper= mount(<Root><MemoryRouter><Header/></MemoryRouter></Root>)
    }
    afterEach(()=>{
        wrapper.unmount()
    })
    describe("when matches media query", ()=>{
        beforeEach(()=>{
            initFunc(true)
        })
        it("renders five anchor tags", ()=>{
            expect(wrapper.find("a").length).toEqual(5);
        })
        it("does not render a button", ()=>{
            expect(wrapper.find("button").length).toEqual(0);
        })
    })
    describe("when doesn't match media query", ()=>{
        beforeEach(()=>{
            initFunc(false);
        })
        it("renders a button", ()=>{
            expect(wrapper.find("button").length).toEqual(1);
        })
        it("renders only one anchor tag", ()=>{
            expect(wrapper.find("a").length).toEqual(1)
        })
    })
})
