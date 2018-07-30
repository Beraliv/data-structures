let StackFactory = () => {
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

export default StackFactory
