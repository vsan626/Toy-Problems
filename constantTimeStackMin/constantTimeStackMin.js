/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
var Stack = function () {
  this.count = 0;
  this.minCount = 0
  this.storage = {};
  this.minStorage = {};
}
  // add an item to the top of the stack
  Stack.prototype.push = function (value) {
    if (this.minStorage[this.minCount] === undefined) {
      this.minStorage[this.minCount] = value
      this.minCount++
    }
    if (value <= this.minStorage[this.minCount]) {
      this.minStorage[this.minCount] = value
    }
    this.storage[this.count] = value
    this.count++
    return this.storage[this.count - 1];
  };

  // remove an item from the top of the stack
  Stack.prototype.pop = function () {
    delete this.storage[this.count]
    delete this.minStorage[this.minCount]
    if (this.count && this.minCount > 0) {
      this.count--
      this.minCount--
    }

  };

  // return the number of items in the stack
  Stack.prototype.size = function () {
    return this.count
  };

  // return the minimum value in the stack
  Stack.prototype.min = function () {
    return this.minStorage[this.minCount - 1]
  };


debugger
var example = new Stack()
example.push(4)
console.log(example.push(4))
example.push(3)
console.log(example.push(3))
example.min() // === 3
console.log(example.min())
example.push(3)
console.log(example.push(3))
example.push(2)
console.log(example.push(2))
example.push(2)
console.log(example.push(2))

example.min() //=== 2
console.log(example.min())