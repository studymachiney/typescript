;(() => {
    function integerBreak(n: number): number {
        const dp = new Array(n + 1).fill(0)
        dp[2] = 1
        for (let i = 2; i < n; i++) {
            for (let j = 1; j < i; j++) {
                let now = Math.max(j * (i - j), j * dp[i - j])
                dp[i] = Math.max(dp[i], now)
            }
        }
        return dp[n]
    }
})()
;(() => {
    function integerBreak(n: number): number {
        if (n < 4) return n - 1
        let remainder = n % 3,
            pow = Math.floor(n / 3)
        if (remainder === 0) return Math.pow(3, pow)
        if (remainder === 1) return Math.pow(3, pow - 1) * 4
        return Math.pow(3, pow) * 2
    }
})()
