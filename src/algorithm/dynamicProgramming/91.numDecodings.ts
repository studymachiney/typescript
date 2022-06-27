;(() => {
    //注意到在状态转移方程中，dp[i]的值仅与 dp[i-1]和 dp[i-2]有关，因此我们可以使用三个变量进行状态转移，省去数组的空间
    function numDecodings(s: string): number {
        const n = s.length
        const dp: number[] = new Array(n + 1).fill(0)
        dp[0] = 1
        for(let i = 1; i <= n; i++) {
            if(s[i - 1] !== '0') {
                dp[i] += dp[i-1]
            }
            if (i > 1 && s[i - 2] !== '0' && (parseInt(s[i - 2]) * 10 + parseInt(s[i - 1]) <= 26)) {
                dp[i] += dp[i - 2];
            }
        }
        return dp[n]
    };
})()