;(() => {
    function partitionLabels(s: string): number[] {
        const last: number[] = new Array(26).fill(0)
        for (let i = 0; i < s.length; i++) {
            last[s.codePointAt(i)! - 'a'.codePointAt(0)!] = i
        }
        const ans: number[] = []
        let start = 0
        while (start < s.length) {
            let end = start
            for (let i = 0; i < s.length, i <= end; i++) {
                end = Math.max(end, last[s.codePointAt(i)!])
            }
            ans.push(end - start + 1)
            start = end + 1
        }
        return ans
    }
    const S = "ababcbacadefegdehijhklij"
    console.log(partitionLabels(S));
})()
