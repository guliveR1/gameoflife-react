import { ReactWrapper } from "enzyme";

class ControlsDriver {
    constructor(private wrapper: ReactWrapper<any>) {}

    get stepButton() {
        return this.wrapper.find('[data-hook="stepButton"]');
    }

    get runButton() {
        return this.wrapper.find('[data-hook="runButton"]');
    }

    clickStep() {
        this.stepButton.simulate('click');
    }
}

export default ControlsDriver;