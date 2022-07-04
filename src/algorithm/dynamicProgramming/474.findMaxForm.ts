;(() => {
    function findMaxForm(strs: string[], m: number, n: number): number {
        const len = strs.length
        const dp: number[][][] = new Array(len + 1)
            .fill(0)
            .map(() =>
                new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
            )
        for (let i = 1; i <= len; i++) {
            let [zeros, ones] = getZerosOnes(strs[i - 1])
            for (let j = 0; j <= m; j++) {
                for (let k = 0; k <= n; k++) {
                    dp[i][j][k] = dp[i - 1][j][k]
                    if (j >= zeros && k >= ones) {
                        dp[i][j][k] = Math.max(
                            dp[i][j][k],
                            dp[i - 1][j - zeros][k - ones] + 1
                        )
                    }
                }
            }
        }
        return dp[len][m][n]
    }
    function getZerosOnes(str: string) {
        const zerosOnes = [0, 0]
        const length = str.length
        for (let i = 0; i < length; i++) {
            zerosOnes[str[i].charCodeAt(0) - '0'.charCodeAt(0)]++
        }
        return zerosOnes
    }
})()