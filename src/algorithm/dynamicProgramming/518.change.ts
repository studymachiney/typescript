;(() => {
    function change(amount: number, coins: number[]): number {
        const len = coins.length
        const dp: number[][] = new Array(len + 1)
            .fill(0)
            .map(() => new Array(amount + 1).fill(0))
        for (let i = 0; i <= len; i++) {
            dp[i][0] = 1
        }
        for (let i = 1; i <= len; i++) {
            for (let j = 1; j <= amount; j++) {
                if (j < coins[i - 1]) {
                    dp[i][j] = dp[i - 1][j]
                } else {
                    dp[i][j] = dp[i - 1][j - coins[i - 1]] + dp[i - 1][j]
                }
            }
        }
        return dp[len][amount]
    }
})()
;(() => {
    function change(amount: number, coins: number[]): number {
        const len = coins.length
        const dp: number[] = new Array(amount + 1).fill(0)
        dp[0] = 1
        for (let i = 1; i <= len; i++) {
            for (let j = 1; j <= amount; j++) {
                if (j >= coins[i - 1]) {
                    dp[j] = dp[j - coins[i - 1]] + dp[j]
                }
            }
        }
        return dp[amount]
    }
})()
