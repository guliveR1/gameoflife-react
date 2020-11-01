import {mount} from 'enzyme';
import Controls, { ControlsProps } from '.';
import React from 'react';
import ControlsDriver from './index.driver';

describe('Controls', () => {
    let controlsDriver: ControlsDriver;

    const renderControls = (props: ControlsProps) => {
        const wrapper = mount(<Controls {...props} />);
    
        return new ControlsDriver(wrapper);
    }

    beforeEach(() => {
        controlsDriver = renderControls({
            onStep: jest.fn,
            onRun: jest.fn,
            onClear: jest.fn,
            onStop: jest.fn
        });
    })

    it('renders step button', () => {
        expect(controlsDriver.stepButton.text()).toEqual('Step');
    });

    it('renders run button', () => {
        expect(controlsDriver.runButton.text()).toEqual('Run');
    });

    it('renders clear button', () => {
        expect(controlsDriver.clearButton.text()).toEqual('Clear');
    });

    it('renders stop button', () => {
        expect(controlsDriver.stopButton.text()).toEqual('Stop');
    });

    it('fires onStep when step button clicked', () => {
        const onStep = jest.fn();

        const controlsDriver = renderControls({
            onStep,
            onRun: jest.fn,
            onClear: jest.fn,
            onStop: jest.fn
        });

        controlsDriver.clickStep();

        expect(onStep).toBeCalledTimes(1);
    });

    it('fires onRun when run button clicked', () => {
        const onRun = jest.fn();

        const controlsDriver = renderControls({
            onStep: jest.fn,
            onRun,
            onClear: jest.fn,
            onStop: jest.fn
        });

        controlsDriver.clickRun();

        expect(onRun).toBeCalledTimes(1);
    });

    it('fires onClear when clear button clicked', () => {
        const onClear = jest.fn();

        const controlsDriver = renderControls({
            onStep: jest.fn,
            onRun: jest.fn,
            onClear,
            onStop: jest.fn
        });

        controlsDriver.clickClear();

        expect(onClear).toBeCalledTimes(1);
    });

    it('fires onStop when stop button clicked', () => {
        const onStop = jest.fn();

        const controlsDriver = renderControls({
            onStep: jest.fn,
            onRun: jest.fn,
            onClear: jest.fn,
            onStop
        });

        controlsDriver.clickStop();

        expect(onStop).toBeCalledTimes(1);
    });
});