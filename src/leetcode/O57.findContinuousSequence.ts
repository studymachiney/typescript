;(() => {
    function findContinuousSequence(target: number): number[][] {
        const res: number[][] = []
        let left = 1,
            right = 2,
            sum = 3
        while (left < right) {
            if (sum === target) {
                let temp: number[] = []
                for (let i = left; i <= right; i++) {
                    temp.push(i)
                }
                res.push(temp)
                sum -= left
                left++
            } else if (sum > target) {
                sum -= left
                left++
            } else {
                right++
                sum += right
            }
        }
        return res
    }
})()
