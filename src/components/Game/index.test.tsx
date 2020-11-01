import { mount } from 'enzyme';
import Game, { GameProps } from '.';
import React from 'react';
import GameDriver from './index.driver';
import { config } from '../../config';

describe('App', () => {
  let gameDriver: GameDriver;

  const renderGame = (props: GameProps) => {
    const wrapper = mount(<Game {...props} />);

    return new GameDriver(wrapper);
  }

  beforeEach(() => {
    gameDriver = renderGame({
      rowSize: 1,
      colSize: 1
    });
  });

  it('have state', () => {
    expect(gameDriver.state).not.toBeNull();
  });

  it('renders Board component', () => {
    expect(gameDriver.board).toBeDefined();
  });

  it('renders Controls component', () => {
    expect(gameDriver.controls).toBeDefined();
  });

  it('renders GameBoard with 5x5 size', () => {
    gameDriver = renderGame({
      rowSize: 5,
      colSize: 5
    });

    expect(gameDriver.board.rowSize).toEqual(5);
    expect(gameDriver.board.colSize).toEqual(5);
  });

  it('revives dead cell when clicking it', () => {
    gameDriver.board.rowAt(0).cellAt(0).click();

    expect(gameDriver.board.rowAt(0).cellAt(0).isAlive).toBeTruthy();
  });

  it('performs a step when clicking step button', () => {
    gameDriver.board.rowAt(0).cellAt(0).click();
    gameDriver.controls.clickStep();

    expect(gameDriver.board.rowAt(0).cellAt(0).isAlive).toBeFalsy();
  });

  it('performs 10 steps in 1 second when hitting run', (done) => {
    const handleStepSpy = gameDriver.spyOn('handleStep');

    gameDriver.controls.clickRun();

    setTimeout(() => {
      expect(handleStepSpy).toBeCalledTimes(10);
      done();
    }, config.runInterval * 11);
  });

  it('clears the board when clicking clear', () => {
    gameDriver.board.rowAt(0).cellAt(0).click();
    gameDriver.controls.clickClear();

    expect(gameDriver.board.rowAt(0).cellAt(0).isAlive).toBeFalsy();
  });

  it('stops current game from running when clicking stop', (done) => {
    const handleStepSpy = gameDriver.spyOn('handleStep');

    gameDriver.controls.clickRun();
    gameDriver.controls.clickStop();

    setTimeout(() => {
      expect(handleStepSpy).toBeCalledTimes(0);
      done();
    }, config.runInterval * 1);
  })
});
