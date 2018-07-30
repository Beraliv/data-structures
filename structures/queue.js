const QueueFactory = () => {
    let elements
    class Queue {
        constructor() {
            elements = []
        }

        enqueue(element) {
            elements.push(element)
            return this
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

const queue = QueueFactory()
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4)   // front -> 1 -> 2 -> 3 -> 4 <- back
console.log(queue.dequeue())                        // 1
queue                                               // front -> 2 -> 3 -> 4 <- back
console.log(queue.back)                             // 4
console.log(queue.front)                            // 2
