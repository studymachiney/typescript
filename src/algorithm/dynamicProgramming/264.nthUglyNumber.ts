;(() => {
    function nthUglyNumber(n: number): number {
        const dp: number[] = [1]
        let p2 = 0,
            p3 = 0,
            p5 = 0
        for (let i = 1; i < n; i++) {
            let num2 = dp[p2] * 2,
                num3 = dp[p3] * 3,
                num5 = dp[p5] * 5
            let min = Math.min(Math.min(num2, num3), num5)
            dp.push(min)
            if (num2 === min) {
                p2++
            }
            if (num3 === min) {
                p3++
            }
            if (num5 === min) {
                p5++
            }
        }
        return dp[n - 1]
    }
    console.log(nthUglyNumber(10));
})()
