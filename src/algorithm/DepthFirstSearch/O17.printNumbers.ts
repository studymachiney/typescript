;(() => {
    function printNumbers(n: number) {
        let result: string[] = []
        const dfs = (str: string, len: number) => {
            if (str.length === len) {
                return result.push(str)
            }
            for (let i = 0; i <= 9; i++) {
                str += i
                dfs(str, len)
                str = str.substring(0, str.length - 1)
            }
        }
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= 9; j++) {
                dfs(j.toString(), i)
            }
        }
        return result
    }
})()
