import React from "react";
import {shallow} from "enzyme";
import AboutPage from "../AboutPage";

let wrapped;
beforeEach(()=>{
    wrapped=shallow(<AboutPage/>)
})

it("displays one h2 tag", ()=>{
    expect(wrapped.find("h2").length).toEqual(1);
})
it("renders two images", ()=>{
    expect(wrapped.find("img").length).toEqual(2);
})
it("renders one p tag", ()=>{
    expect(wrapped.find("p").length).toEqual(1);
})