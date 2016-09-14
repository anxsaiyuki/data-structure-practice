var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.oldest = 0;
  this.next = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.next - this.oldest;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.next] = value;
  this.next++;
}

Queue.prototype.dequeue = function() {
  if (this.size() === 0) return;
  var deleted = this.storage[this.oldest];
  delete this.storage[this.oldest];
  this.oldest++;
  return deleted;
}