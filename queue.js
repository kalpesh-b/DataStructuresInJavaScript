class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(val) {
    this.queue.push(val);
  }

  dequeue() {
    this.queue.shift();
  }

  peek() {
    return this.size() ? this.queue[0] : 'Queue is Empty';
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.size() ? false : true;
  }

  log() {
    console.log(this.queue);
  }
}
