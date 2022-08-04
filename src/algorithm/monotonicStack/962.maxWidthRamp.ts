;(() => {
    function maxWidthRamp(nums: number[]): number {
        const len = nums.length,
            stack: number[] = []
        let maxWidth = 0

        for (let i = 0; i < len; i++) {
            if (
                stack.length === 0 ||
                nums[stack[stack.length - 1]] >= nums[i]
            ) {
                stack.push(i)
            }
        }
        for (let i = len - 1; i >= 0; i--) {
            while (
                stack.length !== 0 &&
                nums[stack[stack.length - 1]] <= nums[i]
            ) {
                let pos = stack.pop()!
                maxWidth = Math.max(maxWidth, i - pos)
            }
        }
        return maxWidth
    }
})()
