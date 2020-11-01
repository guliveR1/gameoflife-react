import { ReactWrapper } from "enzyme";

class CellDriver {
  constructor(private wrapper: ReactWrapper<any>) {
  }

  get isAlive() {
    return this.wrapper.find('[data-hook="cell"]').hasClass('alive');
  }

  click() {
    this.wrapper.find('[data-hook="cell"]').simulate('click');
  }
}

export default CellDriver;
