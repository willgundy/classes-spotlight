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

    // reverse() {
    //     const reversedArray = [];
    //     this.#stack.forEach(reversedArray.);
    // }
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
        return this.#queue.length > 0;
    }
}

function reverse(array) {
    const reversedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

reverse([3,2,1]);

module.exports = { Stack, Queue, reverse };
