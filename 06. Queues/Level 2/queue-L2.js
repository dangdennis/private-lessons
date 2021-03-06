/*
  The traditional Queue data structure allows you to add and remove items from only one
   end of the storage -- the front.  This is sufficient for many problems that the queue
   can solve.  Sometimes we might need two queues.  This is useful if you might have
   different priority (higher and lower) data for the queue.  This structure is called
   a Double-Ended Queue, or a dequeue (sometimes called a deque).

  The values on each side of the storage grow towards the center and shrink away from it.

  Your objective is to implement a double-ended queue, also called a dequeue without using
   any built-in features.

  Whereas the dequeue() function of a queue is pronounced (de-queue), a dequeue data structure,
   while spelled the same, is pronounced (deck).

    [x] Complete the implementation of a Deueue class
    [x] .storage property to hold the items on the queue using a standard array
    [ ] .enqueue() function to queue up a value from the beginning
    [ ] .dequeue() function to dequeue a value from the beginning
    [ ] .push() function to queue a value from the end
    [ ] .pop() function to dequeue a value from the end
    [ ] .length property to return the current length

  NOTE: Do not use any built-in features
  NOTE: Do not focus on edge cases or error conditions

 */

var Dequeue = function(initialCapacity) {
  this.storage = new Array(initialCapacity || 16);
  this.lengthFront = 0;
  this.pointerQueue = 0;
  this.pointerDequeue = 0;
  this.lengthBack = 0;
  this.pointerBack = initialCapacity - 1;
};

Dequeue.prototype.queue = function(value) {
  if (this.storage[this.pointerFront] && this.pointerFront > this.pointerBack) {
    throw new Error("No more memory!");
  }
  this.storage[this.pointerFront] = value;
  this.lengthFront++;
  this.pointerFront++;
};

Dequeue.prototype.dequeue = function() {
  var temp = this.storage[this.pointerDequeue];
  this.storage[this.pointerDequeue] = undefined;
  this.lengthFront--;
  this.pointerFront--;
  
  return temp;
};

Dequeue.prototype.push = function(value) {
  if (this.storage[this.pointerBack] && this.pointerBack < this.pointerFront) {
    throw new Error("No more memory!");
  }
  this.storage[this.pointerBack] = value;
  this.lengthBack++;
  this.pointerBack--;
};

Dequeue.prototype.pop = function() {
  var temp = this.storage[this.pointerBack];
  this.storage[this.pointerBack] = undefined;
  this.lengthBack--;
  this.pointerBack++;
  return temp;
};

Dequeue.prototype.length = function() {
  return this.lengthFront + this.lengthBack;
};


var dd = new Dequeue(8);
dd.push(1);
dd.push(2);
dd.push(3);
dd.push(4);
dd.queue(5);
dd.queue(6);
dd.queue(7);
dd.queue(8);
var r1 = dd.dequeue();
console.log(r1);
// var r1 = dd.pop();
// console.log(r1);
// var r2 = dd.popBack();
// console.log(r2);

console.log(dd.storage);