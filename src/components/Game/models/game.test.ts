import GameModel from './game';

describe("Game test", () => {
    let game: GameModel;

    beforeEach(() => {
        game = new GameModel();
    });

    it("Initialize game with 2x2 empty board", () => {
        game.initializeBoard([
            [false, false],
            [false, false]
        ]);

        expect(game.getBoard()).toEqual([
            [false, false],
            [false, false]
        ]);
    });

    it("true cell with no neighbours should die", () => {
        game.initializeBoard([
            [true, false],
            [false, false]
        ]);
        game.step();

        expect(game.getBoard()).toEqual([
            [false, false],
            [false, false]
        ]);
    });

    it("2 cells with no neighbours should die", () => {
        game.initializeBoard([
            [true, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, true]
        ]);
        game.step();

        expect(game.getBoard()).toEqual([
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false ,false]
        ]);
    });

    it("when there are 3 cells alive, all cells should be alive", () => {
        game.initializeBoard([
            [true, true],
            [true, false]
        ]);
        game.step();

        expect(game.getBoard()).toEqual([
            [true, true],
            [true, true]
        ]);
    });

    it("when there are 2 cells alive they should die and their neighbours should live", () => {
        game.initializeBoard([
            [true, true],
            [false, false]
        ]);
        game.step();

        expect(game.getBoard()).toEqual([
            [false, false],
            [true, true]
        ]);
    });
});