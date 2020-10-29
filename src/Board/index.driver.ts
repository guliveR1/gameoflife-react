import { ReactWrapper } from "enzyme";
import Row from '../Row';
import RowDriver from "../Row/index.driver";

class BoardDriver {
    constructor(private wrapper: ReactWrapper){}

    get rows() {
        return this.wrapper.find(Row);
    }

    rowAt(rowIndex: number): RowDriver {
        return new RowDriver(this.wrapper.find(Row).at(rowIndex));
    }
}

export default BoardDriver;