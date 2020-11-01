export default class GameModel {
    board: boolean[][];

    constructor(rowSize = 0, colSize = 0) {
        this.board = this.createBoard(rowSize, colSize);
    }

    createBoard(rowSize: number, colSize: number) {
        const matrix = [];

        for(var i=0; i<rowSize; i++) {
            matrix[i] = Array(colSize).fill(false);
        }

        return matrix;
    }

    initializeBoard(board: boolean[][]) {
        this.board = this.createBoardCopy(board);
    }

    getBoard() {
        return this.board;
    }

    private createBoardCopy(board: boolean[][]) {
        return board.map(arr => arr.slice());
    }

    private cellInBound(row: number, col: number) {
        return row >= 0 && row < this.board.length && col >= 0 && col < this.board[row].length;
    }

    private countNeighbors(row: number, col: number) {
        let aliveNeighbors = 0;

        for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
            for (let colOffset = -1; colOffset <= 1; colOffset++) {
                if (this.cellInBound(row + rowOffset, col + colOffset)) {
                    aliveNeighbors += this.board[row + rowOffset][col + colOffset] ? 1 : 0;
                }
            }
        }

        aliveNeighbors -= this.board[row][col] ? 1 : 0;

        return aliveNeighbors;
    }

    step() {
        const boardCpy = this.createBoardCopy(this.board);

        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                const aliveNeighbors = this.countNeighbors(row, col);

                boardCpy[row][col] = aliveNeighbors >= 2 && aliveNeighbors <= 3;
            }
        }

        this.board = boardCpy;
    }

    toggleCell(rowIndex: number, colIndex: number) {
        this.board[rowIndex][colIndex] = !this.board[rowIndex][colIndex];
    }
}