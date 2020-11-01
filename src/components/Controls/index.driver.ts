import { ReactWrapper } from "enzyme";

class ControlsDriver {
    constructor(private wrapper: ReactWrapper<any>) {}

    get stepButton() {
        return this.wrapper.find('[data-hook="stepButton"]');
    }

    get runButton() {
        return this.wrapper.find('[data-hook="runButton"]');
    }

    get clearButton() {
        return this.wrapper.find('[data-hook="clearButton"]');
    }

    get stopButton() {
        return this.wrapper.find('[data-hook="stopButton"]');
    }

    clickStep() {
        this.stepButton.simulate('click');
    }

    clickRun() {
        this.runButton.simulate('click');
    }

    clickClear() {
        this.clearButton.simulate('click');
    }

    clickStop() {
        this.stopButton.simulate('click');
    }
}

export default ControlsDriver;