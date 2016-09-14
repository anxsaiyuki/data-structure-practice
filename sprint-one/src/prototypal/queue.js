var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObj = Object.create(queueMethods);
  queueObj.next = 0;
  queueObj.oldest = 0;
  queueObj.storage = {};
  return queueObj;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.next - this.oldest;
}

queueMethods.enqueue = function(value) {
  this.storage[this.next] = value;
  this.next++;
}

queueMethods.dequeue = function() {
  if (this.size() === 0) return;
  var deleted = this.storage[this.oldest];
  delete this.storage[this.oldest];
  this.oldest++;
  return deleted;
}

