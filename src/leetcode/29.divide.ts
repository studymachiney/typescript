;(() => {
    function divide(dividend: number, divisor: number): number {
        const MAX_VAULE = 2 ** 31 - 1, MIN_VALUE = -(2**31)
        if(dividend === MIN_VALUE) {
            if(divisor === 1) {
                return MIN_VALUE
            }
            if(divisor === -1) {
                return MAX_VAULE
            }
        }
        if(divisor === MIN_VALUE) {
            return dividend === MIN_VALUE ? 1 : 0
        }
        if(dividend === 0) return 0

        let rev = false
        if(dividend > 0) {
            dividend = -dividend
            rev = !rev
        }
        if(divisor > 0) {
            divisor = -divisor
            rev = !rev
        }
        if(dividend > divisor) return 0
        const candidates = [divisor]
        let index = 0
        while(candidates[index] >= dividend - candidates[index]) {
            candidates.push(candidates[index] + candidates[index])
            index++
        }
        let ans = 0
        for(let i = candidates.length - 1; i >= 0; i--) {
            if(dividend <= candidates[i]) {
                ans += 1 << i
                dividend -= candidates[i]
            }
        }
        return rev ? -ans : ans
    }
    console.log(divide(-1, 1));
})()