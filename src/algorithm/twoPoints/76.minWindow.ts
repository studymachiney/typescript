;(() => {
    function minWindow(s: string, t: string): string {
        const window = new Map<string, number>(),
            need = new Map<string, number>()
        for (const c of t) {
            need.set(c, need.get(c) !== undefined ? need.get(c)! + 1 : 1)
        }
        let left = 0,
            right = 0
        let valid = 0,
            start = 0,
            len = Number.MAX_SAFE_INTEGER
        while (right < s.length) {
            let c = s[right]
            right++
            if (need.has(c)) {
                window.set(
                    c,
                    window.get(c) === undefined ? 1 : window.get(c)! + 1
                )
                if (window.get(c) === need.get(c)) {
                    valid++
                }
            }
            while (valid === need.size) {
                if (right - left < len) {
                    start = left
                    len = right - left
                }
                let d = s[left]
                left++
                if (need.has(d)) {
                    if (window.get(d) === need.get(d)) {
                        valid--
                    }
                    window.set(d, window.get(d)! - 1)
                }
            }
        }
        return len === Number.MAX_SAFE_INTEGER
            ? ''
            : s.substring(start, start + len)
    }
    console.log(minWindow('ADOBECODEBANC', 'ABC'))
})()
