const { Stack, Queue, reverse } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests for Stack
  it("#pop should remove the last item in the stack ", () => {
    const testStack = new Stack([1, 2]); //wanted to try using the constructor
    expect(testStack.pop()).toEqual(2);
  });
  it("#peek should show the last item in the stack ", () => {
    const testStack = new Stack([1, 2]); //wanted to try using the constructor
    expect(testStack.peek()).toEqual(2);
  });
  // add more tests for Queue
  it("#enqueue should add a new item to the queue ", () => {
    const queue = new Queue();
    queue.enqueue('person1');
    expect(queue.hasNext()).toEqual(true);
  });
  it("#dequeue should remove the first item from the queue ", () => {
    const queue = new Queue();
    queue.enqueue('person1');
    queue.enqueue('person2');
    expect(queue.dequeue()).toEqual('person1');
  });
  it("#hasNext should return a boolean of whether there is anyone in the queue ", () => {
    const queue = new Queue();
    queue.enqueue('person1');
    queue.enqueue('person2');
    expect(queue.hasNext()).toEqual(true);
    queue.dequeue();
    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
  });

  //long test for Stack
  it("use test given in example to make sure Stack is fully working", () => {
    const stack = new Stack();
    stack.push('fox');
    stack.push('goose');
    stack.push('lizard');
    expect(stack.pop()).toEqual('lizard') // 'lizard'
    expect(stack.peek()).toEqual('goose') // 'goose'
    expect(stack.pop()).toEqual('goose') // 'goose'
    stack.push('llama');
    expect(stack.pop()).toEqual('llama') // 'llama'
    expect(stack.peek()).toEqual('fox') // 'fox'
    expect(stack.pop()).toEqual('fox') // 'fox'
    expect(stack.pop()).toEqual(undefined) // null
  });

  it("use test given in example to make sure Queue is fully working", () => {
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose');
    queue.enqueue('lizard');
    expect(queue.dequeue()).toEqual('fox') // 'fox'
    expect(queue.hasNext()).toEqual(true) // true
    expect(queue.dequeue()).toEqual('goose') // 'goose'
    queue.enqueue('llama');
    expect(queue.dequeue()).toEqual('lizard') // 'lizard'
    expect(queue.hasNext()).toEqual(true) // true
    expect(queue.dequeue()).toEqual('llama') // 'llama'
    expect(queue.hasNext()).toEqual(false) // false
    expect(queue.dequeue()).toEqual(undefined) // null
  });
  
});

describe("#reverse", () => {
  it("should reverse an array", () => {
    expect(reverse([12, 3, 5, 7])).toEqual([7, 5, 3, 12]);
  });
});
