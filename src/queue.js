let QueueFactory = () => {
    let elements
    class Queue {
        constructor() {
            elements = []
        }

        enqueue(element) {
            elements.push(element)
        }

        dequeue() {
            const element = elements[0]
            elements = elements.slice(1)
            return element
        }

        get back() {
            return elements[elements.length - 1]
        }

        get front() {
            return elements[0]
        }
    }

    return new Queue()
}

export default QueueFactory
