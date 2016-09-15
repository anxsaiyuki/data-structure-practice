

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numInStorage = 0;
};

HashTable.prototype.insert = function(k, v) {
  if(this._numInStorage === (this._limit - 2)) {
    this.changeSize(2);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  //console.log("start insert " + index);
  for (var i = 0; i < this._limit; i++) {
    var bucket = (index + i) % this._limit;
    var ourTuple = [k, v];
    var otherTuple = this._storage.get(bucket);
    if (otherTuple === undefined || otherTuple == null) {
      this._numInStorage++;
      this._storage.set(bucket, ourTuple);
      return;
    }
    else if (otherTuple[0] === k) {
      this._storage.set(bucket, ourTuple);
      return;
    }
  }
};

HashTable.prototype.changeSize = function(factor) {
  var allItems = [];
  for(var i= 0; i < this._limit; i++) {
    var foundTuple = this._storage.get(i);
    if (foundTuple !== undefined && foundTuple !== null)  {
      allItems.push(foundTuple);
    }
  }

  this._limit = Math.floor(this._limit * factor);
  this._numInStorage = 0;
  this._storage = LimitedArray(this._limit);
  for(var j = 0; j < allItems.length; j ++) {
    var tupleItem = allItems[j];
    this.insert(tupleItem[0], tupleItem[1]);
  };
};



HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._limit; i++) {
    var bucket = (index + i) % this._limit;
    var tupleItem = this._storage.get(bucket);
    if (tupleItem === undefined || tupleItem == null) {
      return undefined;
    }
    else if (tupleItem[0] === k) {
      return tupleItem[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {

  if(this._numInStorage < (this._limit/2)) {
    this.changeSize(0.5);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._limit; i++) {
    var bucket = (index + i) % this._limit;
    var tupleItem = this._storage.get(bucket);
    if (tupleItem === undefined || tupleItem == null) {
      return;
    }
    else if (tupleItem[0] === k) {
      this._storage.set(bucket, null);
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


