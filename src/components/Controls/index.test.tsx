import {mount} from 'enzyme';
import Controls, { ControlsProps } from '.';
import React from 'react';
import ControlsDriver from './index.driver';

describe('Controls', () => {
    const renderControls = (props: ControlsProps) => {
        const wrapper = mount(<Controls {...props} />);
    
        return new ControlsDriver(wrapper);
    }

    it('renders step button', () => {
        const controlsDriver = renderControls({
            onStep: jest.fn,
            onRun: jest.fn
        });

        expect(controlsDriver.stepButton.text()).toEqual('Step');
    });

    it('renders run button', () => {
        const controlsDriver = renderControls({
            onStep: jest.fn,
            onRun: jest.fn
        });

        expect(controlsDriver.runButton.text()).toEqual('Run');
    });

    it('renders stop button', () => {
        const controlsDriver = renderControls({
            onStep: jest.fn,
            onRun: jest.fn
        });

        expect(controlsDriver.runButton.text()).toEqual('Run');
    });

    it('fires onStep when step button clicked', () => {
        const onStep = jest.fn();

        const controlsDriver = renderControls({
            onStep,
            onRun: jest.fn
        });

        controlsDriver.stepButton.simulate('click');

        expect(onStep).toBeCalledTimes(1);
    });

    it('fires onRun when run button clicked', () => {
        const onRun = jest.fn();

        const controlsDriver = renderControls({
            onStep: jest.fn,
            onRun
        });

        controlsDriver.runButton.simulate('click');

        expect(onRun).toBeCalledTimes(1);
    });
});