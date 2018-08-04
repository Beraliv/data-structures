const MaxStackFactory = () => {
    let items
    let maxs

    class MaxStack {
        constructor() {
            items = []
            maxs = []
        }

        pop() {
            const item = items.pop()
            maxs.pop()
            return item
        }

        push(item) {
            items.push(items)
            maxs.push(Math.max(item, this.max()))
        }

        max() {
            return maxs.length > 0
                ? maxs[maxs.length - 1]
                : Number.NEGATIVE_INFINITY
        }
    }

    return new MaxStack()
}

const maxStack = MaxStackFactory()
maxStack.push(-3)
console.log(maxStack.max())
maxStack.push(1)
console.log(maxStack.max())
maxStack.push(-1)
console.log(maxStack.max())
maxStack.pop()
console.log(maxStack.max())
maxStack.pop()
console.log(maxStack.max())
maxStack.pop()
console.log(maxStack.max())
