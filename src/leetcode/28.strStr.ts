;(() => {
    function strStr(haystack: string, needle: string): number {
        const n = haystack.length, m = needle.length
        const next: number[] = new Array(m).fill(0)
        for(let i = 1, j = 0; i < m; i++) {
            while(j > 0 && needle[i] !== needle[j]) {
                j = next[j - 1]
            }
            if(needle[i] === needle[j]) {
                j++
            }
            next[i] = j
        }
        for(let i = 0, j = 0; i < n; i++) {
            while(j > 0 && haystack[i] !== needle[j]) {
                j = next[j - 1]
            }
            if(haystack[i] === needle[j]) {
                j++
            }
            if(j === m) {
                return i - m + 1
            }
        }
        return -1
    };
})()