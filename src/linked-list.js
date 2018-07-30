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
    }

    return new LinkedListNode(valueF, nextF)
}

const LinkedListFactory = () => {
    throw new Error('No implementation')
}