//LIFO
class Stack {
    #list = [];

    constructor(initiallist) {
        if (initiallist) this.#list = initiallist;
    }

    // methods
    push(item) {
        this.#list.push(item);
    }

    pop() {
        this.#list.pop();
    }

    peek() {
        return this.#list[this.#list.length - 1];
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
