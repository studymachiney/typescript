;(() => {
    function solveSudoku(board: string[][]): void {
        backtrack(board, 0, 0)
    };
    function backtrack(board: string[][], i: number, j: number): boolean {
        let m = 9, n = 9;
        if(j === n) {
            return backtrack(board, i + 1, 0)
        }
        if(i === m) {
            return true
        }
        if(board[i][j] !== '.') {
            return backtrack(board, i, j + 1)
        }
        for(let c = '1'.codePointAt(0)!; c <= '9'.codePointAt(0)!; c++) {
            if(!isValid(board, i, j, String.fromCodePoint(c))) {
                continue
            }
            board[i][j] = String.fromCodePoint(c)
            if(backtrack(board, i , j + 1)) {
                return true
            }
            board[i][j] = '.'
        }
        return false
    }
    function isValid(board: string[][], r: number, c: number, ch: string):boolean {
        for(let i = 0; i < 9; i++) {
            if(board[r][i] === ch) {
                return false
            }
            if(board[i][c] === ch) {
                return false
            }
            if(board[Math.floor(r/3) * 3 + Math.floor(i/3)][Math.floor(c/3)*3 + i%3] === ch) {
                return false
            }
        }
        return true
    }
})()