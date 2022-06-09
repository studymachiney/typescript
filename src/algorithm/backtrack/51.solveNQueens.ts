;(() => {
    function solveNQueens(n: number) {
        const solutions: string[][] = [],
            queens = new Array(n).fill(-1)
        const columns = new Set<number>(),
            diagonals1 = new Set<number>(),
            diagonals2 = new Set<number>()
        backtrack(solutions, queens, n, 0, columns, diagonals1, diagonals2)
        return solutions
    }
    function backtrack(
        solutions: string[][],
        queens: number[],
        n: number,
        row: number,
        columns: Set<number>,
        diagonals1: Set<number>,
        diagonals2: Set<number>
    ) {
        if (row === n) {
            const board = generateBoard(queens, n)
            solutions.push(board)
        } else {
            for (let i = 0; i < n; i++) {
                if (columns.has(i)) {
                    continue
                }
                let diagonal1 = row - i,
                    diagonal2 = row + i
                if (diagonals1.has(diagonal1) || diagonals2.has(diagonal2)) {
                    continue
                }
                queens[row] = i
                columns.add(i)
                diagonals1.add(diagonal1)
                diagonals2.add(diagonal2)
                backtrack(
                    solutions,
                    queens,
                    n,
                    row + 1,
                    columns,
                    diagonals1,
                    diagonals2
                )
                queens[row] = -1
                columns.delete(i)
                diagonals1.delete(diagonal1)
                diagonals2.delete(diagonal2)
            }
        }
    }
    function generateBoard(queens: number[], n: number) {
        const board: string[] = []
        for (let i = 0; i < n; i++) {
            let row: string[] = new Array(n).fill('.')
            row[queens[i]] = 'Q'
            board.push(row.join(''))
        }
        return board
    }
    console.log(solveNQueens(4))
})()
;(() => {
    function solveNQueens(n: number): string[][] {
        const queens: number[] = new Array(n).fill(-1)
        const solutions: string[][] = []
        solve(solutions, queens, n, 0, 0, 0, 0)
        return solutions
    }
    function solve(
        solutions: string[][],
        queens: number[],
        n: number,
        row: number,
        columns: number,
        diagonals1: number,
        diagonals2: number
    ) {
        if (row === n) {
            const board = generateBoard(queens, n)
            solutions.push(board)
        } else {
            let availablePositions =
                ((1 << n) - 1) & ~(columns | diagonals1 | diagonals2)
            while (availablePositions !== 0) {
                let position = availablePositions & -availablePositions
                availablePositions =
                    availablePositions & (availablePositions - 1)
                let column = bitCount(position - 1)
                queens[row] = column
                solve(
                    solutions,
                    queens,
                    n,
                    row + 1,
                    column | position,
                    (diagonals1 | position) << 1,
                    (diagonals2 | position) >> 1
                )
                queens[row] = -1
            }
        }
    }
    function bitCount(i: number) {
        i = i - ((i >> 1) & 0x55555555)
        i = (i & 0x33333333) + ((i >> 2) & 0x33333333)
        i = (i + (i >> 4)) & 0x0f0f0f0f
        i = i + (i >> 8)
        i = i + (i >> 16)
        return i & 0x3f
    }
    function generateBoard(queens: number[], n: number) {
        const board: string[] = []
        for (let i = 0; i < n; i++) {
            let row: string[] = new Array(n).fill('.')
            row[queens[i]] = 'Q'
            board.push(row.join(''))
        }
        return board
    }
    console.log(solveNQueens(4))
})()
