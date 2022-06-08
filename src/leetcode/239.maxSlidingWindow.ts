;(() => {
    function maxSlidingWindow(nums: number[], k: number): number[] {
        const len = nums.length,
            queue: number[] = []
        for (let i = 0; i < k; i++) {
            while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
                queue.pop()
            }
            queue.push(i)
        }
        const ans: number[] = [nums[queue[0]]]
        for (let i = k; i < len; i++) {
            while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
                queue.pop()
            }
            queue.push(i)
            while (queue[0] <= i - k) {
                queue.shift()
            }
            ans.push(nums[queue[0]])
        }
        return ans
    }
    console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
})()
