;(() => {
    function dicesProbability(n: number): number[] {
        let dp: number[] = new Array(6).fill(1 / 6)
        for (let i = 2; i <= n; i++) {
            const tmp: number[] = new Array(5 * i + 1).fill(0)
            for (let j = 0; j < dp.length; j++) {
                for (let k = 0; k < 6; k++) {
                    tmp[j + k] += dp[j] / 6
                }
            }
            dp = tmp
        }
        return dp
    }
    console.log(dicesProbability(3))
})()
