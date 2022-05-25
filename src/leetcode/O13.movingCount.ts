// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

//  

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1


;(() => {
    function get(num: number): number {
        let res = 0
        while (num > 0) {
            res += num % 10
            num = Math.floor(num / 10)
        }
        return res
    }
    function movingCount(m: number, n: number, k: number): number {
        if (k === 0) return 1
        let queue: number[][] = []
        const dx = [0, 1],
            dy = [1, 0],
            vis: boolean[][] = new Array(m)
                .fill(0)
                .map(() => new Array(n).fill(false))
        queue.push([0, 0])
        vis[0][0] = true
        let ans = 1
        while (queue.length) {
            let cell = queue.shift()!
            let [x, y] = cell
            for (let i = 0; i < 2; i++) {
                let tx = dx[i] + x
                let ty = dy[i] + y
                if (
                    tx < 0 ||
                    tx >= m ||
                    ty < 0 ||
                    ty >= n ||
                    vis[tx][ty] ||
                    get(tx) + get(ty) > k
                ) {
                    continue
                }
                queue.unshift([tx, ty])
                vis[tx][ty] = true
                ans++
            }
        }
        return ans
    }
    console.log(movingCount(2, 3, 1))
})()
;(() => {
    function get(num: number): number {
        let res = 0
        while (num > 0) {
            res += num % 10
            num = Math.floor(num / 10)
        }
        return res
    }
    function movingCount(m: number, n: number, k: number): number {
        if (k === 0) return 1
        const vis: number[][] = new Array(m)
            .fill(0)
            .map(() => new Array(n).fill(0))
        let ans = 1
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if ((i === 0 && j === 0) || get(i) + get(j) > k) continue
                if (i - 1 >= 0) vis[i][j] |= vis[i - 1][j]
                if (j - 1 >= 0) vis[i][j] |= vis[i][j - 1]
                ans += vis[i][j]
            }
        }
        return ans
    }
    console.log(movingCount(2, 3, 1))
})()
