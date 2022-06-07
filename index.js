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

    pop() {
        return this.#stack.pop();
    }

    peek() {
        return this.#stack[this.#stack.length - 1];
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
        return this.#queue.shift();
    }

    hasNext() {
        return this.#queue.length > 0 ? true : false;
    }
}

module.exports = { Stack, Queue };
