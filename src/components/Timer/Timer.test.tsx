import React from "react";
import Timer from "./Timer";
import {shallow} from "enzyme";

describe("Timer",() => {
    let container:any;

    beforeEach(() => container = shallow(<Timer />));

    it('should render the divs',() => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1);
    })

    it('should render the Timer Buttons',() => {
        expect(container.find("TimerButton").length).toBeGreaterThanOrEqual(1);
    })
})