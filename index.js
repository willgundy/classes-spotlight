//LIFO
class Stack {
    #stack = [];

    constructor(initialStack) {
        if (initialStack) this.#stack = initialStack;
    }

    // methods
    push(item) {
        this.#stack.push(item);
    }

    pop(item) {
        this.#stack.pop(item);
    }

    peek() {
        this.#stack.peekBack();
    }
}

//FIFO
class Queue {
}

module.exports = { Stack, Queue };
