;(() => {
    function letterCombinations(digits: string): string[] {
        const combinations: string[] = []
        if (digits.length === 0) {
            return combinations
        }
        const stringMap = [
            '',
            '',
            'abc',
            'def',
            'ghi',
            'jkl',
            'mno',
            'pqrs',
            'tuv',
            'wxyz'
        ]
        backtrack(combinations, stringMap, digits, 0, [])
        return combinations
    }
    function backtrack(
        combinations: string[],
        stringMap: string[],
        digits: string,
        index: number,
        combination: string[]
    ) {
        if (index === digits.length) {
            combinations.push(combination.join(''))
        } else {
            let letters = stringMap[+digits[index]]
            for (let i = 0; i < letters.length; i++) {
                combination.push(letters[i])
                backtrack(
                    combinations,
                    stringMap,
                    digits,
                    index + 1,
                    combination
                )
                combination.pop()
            }
        }
    }
})()
;(() => {
    function letterCombinations(digits: string): string[] {
        if (digits.length === 0) {
            return []
        }
        const phoneMap: string[] = [
            'abc',
            'def',
            'ghi',
            'jkl',
            'mno',
            'pqrs',
            'tuv',
            'wxyz'
        ]
        const queue: string[] = ['']
        for (const digit of digits) {
            let size = queue.length
            for (let i = 0; i < size; i++) {
                let tmp = queue.shift()!
                let chars = phoneMap[+digit - 2]
                for (const char of chars) {
                    queue.push(tmp + char)
                }
            }
        }
        return queue
    }
})()
