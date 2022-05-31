;(() => {
    function nextGreatestLetter(letters:string[], target:string) {
        let l = 0, r = letters.length - 1
        if(target >= letters[r]) {
            return letters[0]
        }
        while(l < r){
            let mid = l + Math.floor((r - l)/2)
            if(letters[mid] <= target) {
                l = mid + 1
            } else {
                r = mid
            }
        }
        return letters[l]
    }
})()