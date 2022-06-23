;(() => {
    function minPathSum(grid: number[][]): number {
        const m = grid.length,
            n = grid[0].length
        const memo: number[][] = new Array(m)
            .fill(0)
            .map(() => new Array(n).fill(-1))
        return dp(grid, m - 1, n - 1, memo)
    }
    function dp(
        grid: number[][],
        i: number,
        j: number,
        memo: number[][]
    ): number {
        if (i === 0 && j === 0) {
            return grid[0][0]
        }
        if (i < 0 || j < 0) {
            return Number.MAX_SAFE_INTEGER
        }
        if (memo[i][j] !== -1) {
            return memo[i][j]
        }
        memo[i][j] =
            Math.min(dp(grid, i - 1, j, memo), dp(grid, i, j - 1, memo)) +
            grid[i][j]
        return memo[i][j]
    }
})()
