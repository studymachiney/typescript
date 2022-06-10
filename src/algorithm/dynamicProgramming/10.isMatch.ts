;(() => {
    function isMatch(s: string, p: string): boolean {
        let m = s.length,
            n = p.length
        const f: boolean[][] = new Array(m + 1)
            .fill(0)
            .map(() => new Array(n + 1).fill(false))
        f[0][0] = true
        for (let i = 0; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (p[j - 1] === '*') {
                    f[i][j] = f[i][j - 2]
                    if (matches(s, p, i, j - 1)) {
                        f[i][j] = f[i][j] || f[i - 1][j]
                    }
                } else {
                    if (matches(s, p, i, j)) {
                        f[i][j] = f[i - 1][j - 1]
                    }
                }
            }
        }
        return f[m][n]
    }
    function matches(s: string, p: string, i: number, j: number): boolean {
        if (i === 0) {
            return false
        }
        if (p[j - 1] === '.') {
            return true
        }
        return s[i - 1] === p[j - 1]
    }
    console.log(isMatch('a', 'a*a'))
})()
