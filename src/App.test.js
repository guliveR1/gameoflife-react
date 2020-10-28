import { shallow } from 'enzyme';
import App from './App';
import Board from './Board';
import Controls from './Controls';

describe('App', () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallow(<App />);
  })

  it('renders App component', () => {
    expect(appWrapper).not.toBeNull();
  });

  it('have state', () => {
    const state = appWrapper.state();

    expect(state).not.toBeNull();
  });

  it('have state with gameBoard', () => {
    const state = appWrapper.state();

    expect(state.gameBoard).toBeDefined();
  });

  it('renders Board component', () => {
    const boardWrapper = appWrapper.find(Board);

    expect(boardWrapper).toHaveLength(1);
  });

  it('pass gameBoard prop to Board component from state', () => {
    const boardWrapper = appWrapper.find(Board);
    const state = appWrapper.state();
    const props = boardWrapper.props();

    expect(props.gameBoard).toEqual(state.gameBoard);
  });

  it('renders Controls component', () => {
    const controlsWrapper = appWrapper.find(Controls);

    expect(controlsWrapper).toHaveLength(1);
  });
});
