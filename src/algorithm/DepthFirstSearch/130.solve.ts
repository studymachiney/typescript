;(() => {
    function solve(board: string[][]) {
        const n = board.length,
            m = board[0].length
        for (let i = 0; i < n; i++) {
            dfs(board, i, 0)
            dfs(board, i, m - 1)
        }
        for (let i = 1; i < m - 1; i++) {
            dfs(board, 0, i)
            dfs(board, n - 1, i)
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === 'A') {
                    board[i][j] = 'O'
                } else if (board[i][j] === 'O') {
                    board[i][j] = 'X'
                }
            }
        }
    }
    function dfs(board: string[][], i: number, j: number) {
        if (
            i < 0 ||
            j < 0 ||
            i >= board.length ||
            j >= board[0].length ||
            board[i][j] !== 'O'
        ) {
            return
        }
        board[i][j] = 'A'
        dfs(board, i + 1, j)
        dfs(board, i - 1, j)
        dfs(board, i, j + 1)
        dfs(board, i, j - 1)
    }
    const board = [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X']
    ]
    solve(board)
    console.log(board);
})()
