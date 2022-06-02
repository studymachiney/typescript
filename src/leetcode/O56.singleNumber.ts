//一个整型数组 nums 里除两个数字出现奇数次之外，其他数字都出现了偶数次。请写程序找出这两个只出现奇数次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
;(() => {
    function singleNumbers(nums: number[]): number[] {
        let xor = 0
        for (let i = 0; i < nums.length; i++) {
            xor ^= nums[i]
        }
        let rightOne = xor & (~xor + 1), // 求出xor最右位的1
            a = 0,
            b = 0
        for (const cur of nums) {
            if ((cur & rightOne) !== 0) {
                a ^= cur
            } else {
                b ^= cur
            }
        }
        return [a, b]
    }
})()
// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
;(() => {
    function singleNumber1(nums: number[]) {
        let ones = 0,
            twos = 0
        for (const num of nums) {
            ones = ones ^ (num & ~twos)
            twos = twos ^ (num & ~ones)
        }
        return ones
    }
    function singleNumber2(nums: number[]) {
        const counts = new Array(32).fill(0)
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < 32; j++) {
                counts[j] += nums[i] & 1
                nums[i] >>= 1
            }
        }
        let res = 0,
            m = 3
        for (let i = 0; i < 32; i++) {
            res <<= 1
            res |= counts[31 - i] % m
        }
        return res
    }
})()
