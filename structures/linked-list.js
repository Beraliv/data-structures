const LinkedListNodeFactory = (valueF, nextF = null) => {
    let privateValue
    let privateNext
    class LinkedListNode {
        constructor(value, next) {
            privateValue = value
            privateNext = next
        }

        get value() {
            return privateValue
        }

        get next() {
            return privateNext
        }

        set next(next) {
            privateNext = next
        }
    }

    return new LinkedListNode(valueF, nextF)
}

const LinkedListFactory = () => {
    let head
    let tail
    class LinkedList {
        constructor() {
            head = null
            tail = null
        }

        prepend(value) {
            const node = LinkedListNodeFactory(value, head)
            head = node
            if (!tail) {
                tail = node
            }

            return this
        }

        append(value) {
            const node = LinkedListNodeFactory(value)

            if (!head) {
                head = node
                tail = node
            } else {
                tail.next = node
                tail = node
            }


            return this
        }

        remove(value) {
            
        }
    }

    return new LinkedList() 
}

// TODO: need example here
