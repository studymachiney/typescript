//一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// 示例 1：

// 输入：n = 2
// 输出：2
// 示例 2：

// 输入：n = 7
// 输出：21
// 示例 3：

// 输入：n = 0
// 输出：1
//答案需要取模 1e9+7（），如计算初始结果为：1000000008，请返回 1。

//答案同509的斐波拉契数列
;(() => {
    function numWays(n: number): number {
        if (n === 0) return 1
        const MOD = 1000000007
        let sum = 1,
            a = 1,
            b = 1
        while (n > 1) {
            sum = (a + b) % MOD
            a = b
            b = sum
            n--
        }
        return sum
    }
    console.log(numWays(78))
})()
