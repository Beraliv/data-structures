const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let k = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[k] > arr[j]) {
                k = j
            }
        }
        if (i !== k) {
            swap(arr, i, k)
        }
    }

    return arr
}

console.log(selectionSort([7, 4, 6, 3, 5, 4, 5]))
