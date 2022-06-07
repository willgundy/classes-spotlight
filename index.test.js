const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.addItem(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
  it("#pop should remove the last item in the stack ", () => {
    const testStack = new Stack([1, 2]);
    expect(testStack.removeItem()).toEqual(2);
  });
});
