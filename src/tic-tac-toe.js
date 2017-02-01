class TicTacToe {
    constructor() {
        this.fig = 'x';
        this.board = [[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
        return this.fig;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] === null) {
            this.board[rowIndex][columnIndex] = this.fig;

            if (this.fig === 'x'){
                this.fig = 'o';
            } else {
                this.fig = 'x';
            }
        }

        return this;
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) return true;
        else return false;
    }

    getWinner() {
        let counter = 0;

        while (counter < 3) {
            if (this.board[0][counter] === this.board[1][counter] && 
                this.board[0][counter] === this.board[2][counter]) {
                return this.board[0][counter];
            } 

            if (this.board[counter][0] === this.board[counter][1] && 
                this.board[counter][0] === this.board[counter][2]) {
                return this.board[counter][0];
            }

            counter++;
        }

        if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
            return this.board[0][0];
        }

        if (this.board[2][0] === this.board[1][1] && this.board[2][0] === this.board[0][2]) {
            return this.board[2][0];
        }

        return null;
    }

    noMoreTurns() {
        let counterRow = 0,
            counterCol = 0;
        while (counterCol < 3) {
            counterRow = 0;
            while (counterRow < 3) {
                if (this.board[counterRow][counterCol] === null) {
                    return false;
                }
                counterRow++;
            }
            counterCol++;
        }

        return true;              

        /* function isTrue() {
            return function(getCol) {
                return getCol.every(function(getRow){
                    return getRow;
                })
            }
        }

        return this.board.every(isTrue()); */   
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()) return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
