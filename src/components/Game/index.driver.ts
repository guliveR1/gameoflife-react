import { ReactWrapper } from 'enzyme';
import BoardDriver from '../Board/index.driver';
import ControlsDriver from '../Controls/index.driver';

class GameDriver {
    constructor(private wrapper: ReactWrapper<any>) {}

    get state() {
        return this.wrapper.state();
    }

    get board() {
        return new BoardDriver(this.wrapper.find('[data-hook="board"]'));
    }

    get controls() {
        return new ControlsDriver(this.wrapper.find('[data-hook="controls"]'));
    }
}

export default GameDriver;