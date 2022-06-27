;(() => {
    function numSquares(n: number): number {
        const dp: number[] = new Array(n + 1).fill(0)
        for(let i = 1; i <= n; i++) {
            let min = Number.MAX_SAFE_INTEGER
            for(let j = 1; j * j <= i; j++) {
                min = Math.min(min, dp[i - j * j])
            }
            dp[i] = min + 1
        }
        return dp[n]
    };
})()