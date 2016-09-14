var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.numOfKeys = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.numOfKeys;
}



Stack.prototype.push = function(value) {
  this.storage[++this.numOfKeys] = value;
}


Stack.prototype.pop = function() {
  if(this.size() == 0) return;
  var deleted = this.storage[this.numOfKeys];
  delete this.storage[this.numOfKeys];
  this.numOfKeys --;
  return deleted;
}
