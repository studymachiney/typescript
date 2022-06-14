;(() => {
    function maxAreaOfIsland(grid: number[][]): number {
        let res = 0
        const m = grid.length,
            n = grid[0].length
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                res = Math.max(res, dfs(grid, i, j))
            }
        }
        return res
    }
    function dfs(grid: number[][], i: number, j: number): number {
        if (
            i < 0 ||
            j < 0 ||
            i >= grid.length ||
            j >= grid[0].length ||
            grid[i][j] === 0
        ) {
            return 0
        }
        grid[i][j] = 0
        return (
            dfs(grid, i + 1, j) +
            dfs(grid, i - 1, j) +
            dfs(grid, i, j + 1) +
            dfs(grid, i, j - 1) +
            1
        )
    }
})()
;(() => {
    function maxAreaOfIsland(grid: number[][]): number {
        let res = 0
        const m = grid.length,
            n = grid[0].length
        const stack: [number, number][] = []
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                let cur = 0
                stack.push([i, j])
                while (stack.length > 0) {
                    const [x, y] = stack.pop()!
                    if (
                        x < 0 ||
                        y < 0 ||
                        x >= m ||
                        y >= n ||
                        grid[x][y] === 0
                    ) {
                        continue
                    }
                    grid[x][y] = 0
                    cur++
                    stack.push([x + 1, y])
                    stack.push([x - 1, y])
                    stack.push([x, y + 1])
                    stack.push([x, y - 1])
                }
                res = Math.max(cur, res)
            }
        }
        return res
    }
})()
