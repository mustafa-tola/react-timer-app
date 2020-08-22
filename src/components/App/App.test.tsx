import React from "react";
import App from "./App";
import {shallow} from "enzyme";
import Timer from "../Timer/Timer"

describe("App",() => {
    let container:any;

    beforeEach(() => container = shallow(<App />));

    it('should render a div',() => {
        expect(container.find('.App').length).toEqual(1);
    })

    it('should render Timer',() => {
        expect(container.containsMatchingElement(<Timer />)).toEqual(true);
    })
})


