const swap = (arr, i, j) => {
    arr[i] ^= arr[j]
    arr[j] ^= arr[i]
    arr[i] ^= arr[j]
}

const siftDown = (arr, start, end) => {
    let root = start
    let child = root * 2 + 1
    let toSwap = root
    
    while (child <= end) {
        if (arr[toSwap] < arr[child]) {
            swap(arr, toSwap, child)
        }
        if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
            swap(arr, toSwap, child + 1)
        }
        if (toSwap !== root) {
            swap(arr, toSwap, root)
            root = toSwap
        } else {
            return
        }
        toSwap = root
        child = root * 2 + 1
    }
}

const heapify = arr => {
    let mid = Math.floor((arr.length - 2) / 2)
    while (mid >= 0) {
        siftDown(arr, mid, arr.length - 1)
        mid = mid - 1
    }
}

const heapSort = arr => {
    heapify(arr)

    let end = arr.length - 1
    while (end > 0) {
        swap(arr, end, 0)
        end = end - 1
        siftDown(arr, 0, end)
    }

    return arr
}

console.log(heapSort([7, 4, 6, 3, 5, 4, 5]))
