;(() => {
    class MyCalendarTwo {
        booked: [number, number][] = []
        overlaps: [number, number][] = []
        constructor() {}

        book(start: number, end: number): boolean {
            for (const arr of this.overlaps) {
                let l = arr[0],
                    r = arr[1]
                if (l < end && start < r) {
                    return false
                }
            }
            for (const arr of this.booked) {
                let l = arr[0],
                    r = arr[1]
                if (l < end && start < r) {
                    this.overlaps.push([Math.max(l, start), Math.min(r, end)])
                }
            }
            this.booked.push([start, end])
            return true
        }
    }
})()
;(() => {
    class MyCalendarTwo {
        tree = new Map()
        constructor() {}

        book(start: number, end: number): boolean {
            const update = (
                start: number,
                end: number,
                val: number,
                l: number,
                r: number,
                idx: number
            ) => {
                if (r < start || end < l) {
                    return
                }
                if (!this.tree.has(idx)) {
                    this.tree.set(idx, [0, 0])
                }
                if (start <= l && r <= end) {
                    this.tree.get(idx)[0] += val
                    this.tree.get(idx)[1] += val
                } else {
                    const mid = (l + r) >> 1
                    update(start, end, val, l, mid, 2 * idx)
                    update(start, end, val, mid + 1, r, 2 * idx + 1)
                    if (!this.tree.has(2 * idx)) {
                        this.tree.set(2 * idx, [0, 0])
                    }
                    if (!this.tree.has(2 * idx + 1)) {
                        this.tree.set(2 * idx + 1, [0, 0])
                    }
                    this.tree.get(idx)[0] =
                        this.tree.get(idx)[1] +
                        Math.max(
                            this.tree.get(2 * idx)[0],
                            this.tree.get(2 * idx + 1)[0]
                        )
                }
            }
            update(start, end - 1, 1, 0, 1000000000, 1)
            if (!this.tree.has(1)) {
                this.tree.set(1, [0, 0])
            }
            if (this.tree.get(1)[0] > 2) {
                update(start, end - 1, -1, 0, 1000000000, 1)
                return false
            }
            return true
        }
    }
})()
