;(() => {
    function findMinArrowShots(points: number[][]): number {
        points.sort((a, b) => (a[1] < b[1] ? -1 : a[1] === b[1] ? 0 : 1))
        let res = 1,
            cur = points[0][1]
        for (let i = 1; i < points.length; i++) {
            if (points[i][0] > cur) {
                cur = points[i][1]
                res++
            }
        }
        return res
    }
    const points = [[1,2],[2,3],[3,4],[4,5]]
    console.log(findMinArrowShots(points))
})()
