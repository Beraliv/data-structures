const timeSort = arr => {
    const sorted = []

    return Promise.all(
        arr.map(v => new Promise(resolve => {
            setTimeout(() => {
                sorted.push(v)
                resolve(sorted)
            }, v)
        }))
    )
}

timeSort([7, 4, 6, 3, 5, 4, 5]).then(v => console.log(v[0]))
