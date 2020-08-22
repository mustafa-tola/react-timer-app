import React from "react";
import TimerButton from "./TimerButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {shallow} from "enzyme";
import { faPlay, faPause, faBackward } from '@fortawesome/free-solid-svg-icons'

describe("Timer Button",() => {
    let container:any;

    beforeEach(() => container = shallow(<TimerButton buttonAction={jest.fn()} buttonValue="" isOn={false}/>))

    it('should render a div',() => {
        expect(container.find('div').length).toEqual(1);
    });
})