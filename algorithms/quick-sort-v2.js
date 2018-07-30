const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const quickSort = (arr, start = 0, end = arr.length - 1) => {
    console.log(arr, start, end)

    const pivot = arr[Math.floor((start + end) / 2)]
    let i = start, j = end

    while (i <= j) {
        while (arr[i] < pivot) {
            i++
        }
        while (arr[j] > pivot) {
            j--
        }
        
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }

    if (start < i - 1) {
        quickSort(arr, start, i - 1)
    }
    if (i < end) {
        quickSort(arr, i, end)
    }

    return arr
}

console.log(quickSort([5, 4, 7, 3, 2, 1]))