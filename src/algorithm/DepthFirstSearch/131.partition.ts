;(() => {
    function partition(s: string): string[][] {
        const res: string[][] = [],
            n = s.length
        const dp: boolean[][] = new Array(n)
            .fill(0)
            .map(() => new Array(n).fill(true))
        for (let i = n - 1; i >= 0; i--) {
            for (let j = i + 1; j < n; j++) {
                dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
            }
        }
        dfs(0, s, res, [], dp)
        return res
    }
    function dfs(
        start: number,
        s: string,
        res: string[][],
        part: string[],
        dp: boolean[][]
    ) {
        if (start === s.length) {
            res.push(part.slice())
            return
        }
        for (let i = start; i < s.length; i++) {
            if (dp[start][i]) {
                part.push(s.slice(start, i + 1))
                dfs(i + 1, s, res, part, dp)
                part.pop()
            }
        }
    }
})()
