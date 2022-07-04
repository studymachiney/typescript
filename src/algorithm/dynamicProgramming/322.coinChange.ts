;(() => {
    function coinChange(coins: number[], amount: number): number {
        return dp(coins, amount, new Array(amount + 1).fill(0))
    }
    function dp(coins: number[], amount: number, memo: number[]): number {
        if (amount === 0) return 0
        if (amount < 0) return -1
        if (memo[amount] !== 0) {
            return memo[amount]
        }
        let res = Number.MAX_SAFE_INTEGER
        for (const coin of coins) {
            let subProblem = dp(coins, amount - coin, memo)
            if (subProblem === -1) {
                continue
            }
            res = Math.min(res, subProblem + 1)
        }
        memo[amount] = res === Number.MAX_SAFE_INTEGER ? -1 : res
        return memo[amount]
    }
})()
;(() => {
    function coinChange(coins: number[], amount: number): number {
        const len = coins.length,
            dp: number[] = new Array(amount + 1).fill(amount + 1)
        dp[0] = 0
        for (let i = 1; i <= amount; i++) {
            for (let j = 0; j < coins.length; j++) {
                if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount]
    }
})()
