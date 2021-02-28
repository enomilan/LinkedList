// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below using a NODE implementation
// (your Stack should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {

    constructor() {

        this.top = null
        this.length = 0;
    }




push(value) {
    if (this.top) {
        const prev = this.top
        this.top = new Node(value)
      
        this.top.next = prev
        this.length++
        return this.size()



    } else if (!this.top) {
        this.top = new Node(value); 
        this.length++;

        return this.size()
    }
  
}
pop() {
    if (!this.top) return null;
    else { 
        const prev = this.top
        this.top = prev.next
        
        this.length--
        return prev.value;
    }

   
}
size() {
    if (this.length <= 0) {
        this.length
    }
    return this.length
}
}
exports.Node = Node;
exports.Stack = Stack;
