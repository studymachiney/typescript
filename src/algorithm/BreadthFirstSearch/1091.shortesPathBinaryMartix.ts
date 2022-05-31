;(() => {
    function shortestPathBinaryMatrix(grid: number[][]): number {
        if (grid[0][0] !== 0) return -1
        let pathLength = 1,
            m = grid.length,
            n = grid[0].length
        if (m === 1 && n === 1) return 1
        const direction = [
                [0, -1],
                [1, -1],
                [1, 0],
                [1, 1],
                [0, 1],
                [-1, 1],
                [-1, 0],
                [-1, -1]
            ],
            queue: Array<[number, number]> = []
        queue.push([0, 0])
        while (queue.length) {
            let size = queue.length
            while (size--) {
                let [x, y] = queue.shift()!
                for (let i = 0; i < direction.length; i++) {
                    let [dx, dy] = direction[i],
                        cx = x + dx,
                        cy = y + dy
                    if (
                        cx < 0 ||
                        cx === m ||
                        cy < 0 ||
                        cy === n ||
                        grid[cx][cy] === 1
                    ) {
                        continue
                    }
                    if (cx === m - 1 && cy === n - 1) {
                        return pathLength + 1
                    }
                    queue.push([cx, cy])
                    grid[cx][cy] = 1
                }
            }
            pathLength++
        }
        return -1
    }
})()
