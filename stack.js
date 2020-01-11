class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.size() ? this.stack[0] : 'Stack is Empty';
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.size() ? false : true;
  }

  log() {
    console.log(this.stack);
  }
}
