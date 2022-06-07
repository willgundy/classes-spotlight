//LIFO
class Stack {
    #stack = [];

    constructor(initialStack) {
        if (initialStack) this.#stack = initialStack;
    }

    // methods
    addItem(item) {
        this.#stack.push(item);
    }

    removeItem(item) {
        this.#stack.pop(item);
    }

    peek() {
        this.#stack.peekBack();
    }
}

//FIFO
class Queue {
    #queue = [];

    constructor(initialQueue) {
        if (initialQueue) this.#queue = initialQueue;
    }

    //methods
    enqueue(item) {
        this.#queue.push(item);
    }

    dequeue(item) {
        this.#queue.shift(item);
    }

    hasNext() {
        this.#queue.length() > 0 ? true : false;
    }
}

module.exports = { Stack, Queue };
