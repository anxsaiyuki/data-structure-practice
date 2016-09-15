

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._limit; i++) {
    var bucket = k + i % this._limit;
    var tupleItem = this._storage[bucket];
    if (tupleItem === undefined) {
      this._storage[bucket] = [k, v];
      return;
    }
    if (tupleItem[0] === k) {
      this._storage[bucket] = [k, v];
      return;
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._limit; i++) {
    var bucket = k + i % this._limit;
    var tupleItem = this._storage[bucket];
    if (tupleItem === undefined) {
      return undefined;
    }
    if (tupleItem[0] === k) {
      return tupleItem[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._limit; i++) {
    var bucket = k + i % this._limit;
    var tupleItem = this._storage[bucket];
    if (tupleItem === undefined) {
      return;
    }
    if (tupleItem[0] === k) {
      delete this._storage[bucket];
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


