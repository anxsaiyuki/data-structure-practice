var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObj = {};
  queueObj.oldest = 0;
  queueObj.nextHead = 0;
  queueObj.storage = {};
  _.extend(queueObj, queueMethods);
  return queueObj;
};

var queueMethods = {};

queueMethods.size = function() {
  var num = this.nextHead - this.oldest;
  console.log("num " + num);
  return num;
};


queueMethods.enqueue = function(value) {
  this.storage[this.nextHead] = value;
  this.nextHead += 1;
};

queueMethods.dequeue = function() {
  if(this.size() === 0) return;
  var deleted = this.storage[this.oldest];
  delete this.storage[this.oldest];
  this.oldest ++;
  return deleted;
};


