const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j)
            }
        }
    }

    return arr
}

console.log(bubbleSort([7, 4, 6, 3, 5, 4, 5]))