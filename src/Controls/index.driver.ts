import { ReactWrapper } from "enzyme";

class ControlsDriver {
    constructor(private wrapper: ReactWrapper<any>) {}

    get stepButton() {
        return this.wrapper.find('[data-hook="stepButton"]');
    }

    get runButton() {
        return this.wrapper.find('[data-hook="runButton"]');
    }
}

export default ControlsDriver;