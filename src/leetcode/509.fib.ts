// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

//  

// 示例 1：

// 输入：n = 2
// 输出：1
// 示例 2：

// 输入：n = 5
// 输出：5



//矩阵快速幂
;(() => {
    function fib(n: number) {
        if (n < 2) return n
        let q = [
            [1, 1],
            [1, 0]
        ]
        let res = pow(q, n - 1)
        return res[0][0]
    }
    function pow(a: number[][], n: number) {
        let ret = [
            [1, 0],
            [0, 1]
        ]
        while (n > 0) {
            if ((n & 1) === 1) {
                ret = multiply(ret, a)
            }
            n >>= 1
            a = multiply(a, a)
        }
        return ret
    }
    function multiply(a: number[][], b: number[][]) {
        let c = new Array(2).fill(0).map(() => new Array(2).fill(0))
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j]
            }
        }
        return c
    }
    console.log(fib(6))
})()

//通项公式求解
;(() => {
    function fib(n: number) {
        const sqrt5 = Math.sqrt(5)
        const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n)
        return Math.round(fibN / sqrt5)
    }
    console.log(fib(6))
})()
