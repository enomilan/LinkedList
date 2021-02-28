// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val
        this.next = null

    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {

        this.head = null
        this.tail = null
        this.length = 0

    }

    // TODO: Implement the addToTail method here
    addToTail(val) {

            let newNode = new Node(val)

            if (!this.head) {
            this.head = newNode
            } else {
            this.tail.next = newNode
            }

            this.tail = newNode
            this.length++
            return this

    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.length) return undefined

        let current = this.head
        let oldTail = this.tail

        if (this.length ===1) {
            this.head = null
            this.tail = null
        } else {
                while (current.next !== this.tail) {
                current = current.next
            }
            current.next = null
            this.tail = current
        }


        this.length--
        return oldTail

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {

        let newNode = new Node(val)
        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {

        newNode.next = this.head
        this.head = newNode
        }

        this.length++
        return this
        
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.length) return undefined

        
        let oldHead = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null

        } else {
            this.head = this.head.next
        }

        this.length--
        return oldHead
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head
        while (current) {
            if (current.value ===target) return true
            current = current.next
        }

        return false
        

    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter = 0
        let current = this.head

        while(counter <=index) {
            if (counter === index) return current
            counter++
            current = current.next
        }

        
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index)
        if (node) {
            node.value = val
            return true
        } else {
        return false
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);


        let newNode = new Node(val)
        let prevNode = this.get(index-1)

        newNode.next = prevNode.next
        prevNode.next = newNode

        this.length++
        return true

    }

    // TODO: Implement the remove method here
    remove(index) {
        
            if (index < 0 || index >= this.length) return undefined;
            if (index === 0) return this.removeHead();
            if (index === this.length - 1) return this.removeTail();
            const previousNode = this.get(index - 1);
            const removed = previousNode.next;
            previousNode.next = removed.next;
            this.length--;
            return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
