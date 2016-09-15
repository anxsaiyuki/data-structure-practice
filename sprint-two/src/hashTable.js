

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._limit; i++) {
    var bucket = index + i % this._limit;
    var tupleItem = this._storage.get(bucket);
    if (tupleItem === undefined) {
      this._storage.set(bucket, tupleItem) = [k, v];
      return;
    }
    if (tupleItem[0] === k) {
      this._storage.set(bucket, tupleItem) = [k, v];
      return;
    }
  }
  //double in size
  this.doubleSize();
};

HashTable.prototype.doubleSize = function() {
  var allItems = this._storage;
  this._limit = this._limit * 2;
  this._storage = LimitedArray(this._limit);
  _.each(allItems, function(tupleItem)  {
    this.insert.apply(this, tupleItem);
  });
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._limit; i++) {
    var bucket = index + i % this._limit;
    var tupleItem = this._storage.get(bucket);
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
    var bucket = index + i % this._limit;
    var tupleItem = this._storage.get(bucket);
    if (tupleItem === undefined) {
      return;
    }
    if (tupleItem[0] === k) {
      delete this._storage.get(bucket);
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


