;(() => {
    function checkInclusion(s1:string, s2: string) {
        const need = new Map<string, number>(), window = new Map<string, number>()
        let left = 0, right = 0, valid = 0
        for (const c of s1) {
            need.set(c, need.get(c) === undefined ? 1 : need.get(c)! + 1)
        }
        while(right < s2.length) {
            let c = s2[right]
            right++
            if(need.has(c)) {
                window.set(c, window.get(c) === undefined ? 1 : window.get(c)! + 1)
                if(window.get(c) === need.get(c)) {
                    valid++
                }
            }
            if(right - left >= s1.length) {
                if(valid === need.size) {
                    return true
                }
                let d = s2[left]
                left++
                if(need.has(d)) {
                    if(need.get(d) === window.get(d)) {
                        valid--
                    }
                    window.set(d, window.get(d)! - 1)
                }
            }
        }
        return false
    }
})()