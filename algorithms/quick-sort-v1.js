const quickSort = arr => {
    if (arr.length < 2) {
        return arr
    }

    const pivot = arr[Math.floor(arr.length / 2)]

    // not optimised, but the scheme looks like that
    // O(n) memory
    return [
        ...quickSort(arr.filter(v => v < pivot)),
        ...arr.filter(v => v === pivot),
        ...quickSort(arr.filter(v => v > pivot))
    ]
}

console.log(quickSort([5, 4, 4, 3, 2, 1]))