const StackFactory = () => {
    let elements;
    class Stack {
        constructor() {
            elements = []
        }

        push(element) {
            elements.push(element)
            return this
        }

        pop() {
            let element = elements[elements.length - 1]
            elements = elements.slice(0, -1)
            return element
        }

        get top() {
            return elements[elements.length - 1]
        }
    }

    return new Stack()
}

const stack = StackFactory()
stack.push(1).push(2).push(3).push(4)   // 1 <- 2 <- 3 <- 4 <- top
console.log(stack.pop())                // 4
stack                                   // 1 <- 2 <- 3 <- top
console.log(stack.top)                  // 3
