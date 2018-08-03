const extend = (obj, decorator) => {
    for (var key in decorator) {
        if (decorator.hasOwnProperty(key)) {
            obj[key] = decorator[key]
        }
    }
    return obj
}

// looks like mixin, need to clarify
const obj = { a: 1, b: 2 }
const decorator = { b: 3, c: 5 }
console.log(extend(obj, decorator))
