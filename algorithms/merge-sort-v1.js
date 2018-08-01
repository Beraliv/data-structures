const merge = (arr1, arr2) => {
    const result = Array(arr1.length + arr2.length).fill(0)
    let i = 0
    let j = 0
    let k = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result[k++] = arr1[i++]
        } 
        if (arr1[i] >= arr2[j]) {
            result[k++] = arr2[j++]
        }
    }
    while (i < arr1.length) {
        result[k++] = arr1[i++]
    }
    while (j < arr2.length) {
        result[k++] = arr2[j++]
    }
    return result
}

const mergeSort = arr => {
    if (arr.length < 2) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

console.log(mergeSort([7, 6, 6, 5, 4, 4, 1]))
