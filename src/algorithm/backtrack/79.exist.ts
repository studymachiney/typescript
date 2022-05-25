// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

//

// 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
// [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
// ]

// 示例 1：

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：

// 输入：board = [["a","b"],["c","d"]], word = "abcd"
// 输出：false
;(() => {
    function exist(board: string[][], word: string) {
        let h = board.length,
            w = board[0].length
        const visited: boolean[][] = new Array(h)
                .fill(0)
                .map(() => new Array(w).fill(false)),
            directions = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0]
            ]
        const check = (i: number, j: number, s: string, k: number) => {
            if (board[i][j] !== s[k]) {
                return false
            } else if (k === s.length - 1) {
                return true
            }
            visited[i][j] = true
            let result = false
            for (const [dx, dy] of directions) {
                let newi = i + dx,
                    newj = j + dy
                if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
                    if (!visited[newi][newj]) {
                        const flag = check(newi, newj, s, k + 1)
                        if (flag) {
                            result = true
                            break
                        }
                    }
                }
            }
            visited[i][j] = false
            return result
        }
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                const flag = check(i, j, word, 0)
                if (flag) return true
            }
        }
        return false
    }

    let arr = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]
    console.log(exist(arr, 'ABCCED'))
})()
