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
        return this.#queue.length > 0;
    }
}

function reverse(array) {
    const stack = new Stack(array);
    console.log(array.length);
    let reversedArray = [];
    for (let i = 0; i < array.length; i++) {
        console.log(array);
        reversedArray.push(stack.pop());
    }
    return reversedArray;
}

reverse([1,2,3]);

module.exports = { Stack, Queue, reverse };
