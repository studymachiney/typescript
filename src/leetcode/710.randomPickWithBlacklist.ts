//给定一个整数 n 和一个 无重复 黑名单整数数组 blacklist 。设计一种算法，从 [0, n - 1] 范围内的任意整数中选取一个 未加入 黑名单 blacklist 的整数。任何在上述范围内且不在黑名单 blacklist 中的整数都应该有同等的可能性被返回。

// 优化你的算法，使它最小化调用语言 内置 随机函数的次数。

;(() => {
    class Solution {
        private len: number
        private mapping: Map<number, number> = new Map<number, number>()
        constructor(n: number, blacklist: number[]) {
            this.len = n - blacklist.length
            for (const b of blacklist) {
                this.mapping.set(b, 1)
            }
            let last = n - 1
            for (const b of blacklist) {
                if (b >= this.len) {
                    continue
                }
                while (this.mapping.get(last)) {
                    last--
                }
                this.mapping.set(b, last--)
            }
            console.log(this.mapping)
        }
        pick(): number {
            let random = Math.floor(Math.random() * this.len)
            if (this.mapping.has(random)) {
                return this.mapping.get(random)!
            }
            return random
        }
    }
    let s = new Solution(7, [2, 3, 5])
    for (let i = 0; i < 10; i++) {
        console.log(s.pick())
    }
})()
;(() => {
    class Solution {
        private arr: number[]
        constructor(n: number, blacklist: number[]) {
            const set = new Set<number>()
            for (let i = 0; i < n; i++) {
                set.add(i)
            }
            for (const b of blacklist) {
                set.delete(b)
            }
            this.arr = [...set]
        }
        pick(): number {
            let random = Math.floor(Math.random() * this.arr.length)
            return this.arr[random]
        }
    }
})()
