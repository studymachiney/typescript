;(() => {
    function permute(nums: number[]): number[][] {
        const res: number[][] = [],
            output: number[] = [],
            len = nums.length
        for (const num of nums) {
            output.push(num)
        }
        backtrack(len, output, res, 0)
        return res
    }
    function backtrack(
        n: number,
        output: number[],
        res: number[][],
        first: number
    ) {
        if (first === n) {
            res.push(Array.from(output))
        }
        for (let i = first; i < n; i++) {
            swap(output, first, i)
            backtrack(n, output, res, first + 1)
            swap(output, first, i)
        }
    }
    function swap(nums: number[], i: number, j: number) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    console.log(permute([1,2,3]));
})()