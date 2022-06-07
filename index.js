//LIFO
class Stack {
    stack = [];

    constructor(initialstack) {
        if (initialstack) this.stack = initialstack;
    }

    // methods
    addItem(item) {
        this.stack.push(item);
    }

    removeItem() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
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

    dequeue() {
        this.#queue.shift();
    }

    hasNext() {
        this.#queue.length() > 0 ? true : false;
    }
}

module.exports = { Stack, Queue };
