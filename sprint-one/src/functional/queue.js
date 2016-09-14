var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numOfKeys = 0;
  var lastAdded;
  var head = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[++numOfKeys] = value;

    if(numOfKeys === 1) {
      lastAdded = value;
    }
  };

  someInstance.dequeue = function() {
    if(numOfKeys === 0) {
      return;
    }
    var deleted;
    deleted = lastAdded;
    numOfKeys--;
    head++;
    lastAdded = storage[head + 1];
    delete storage[head];
    return deleted;

  };

  someInstance.size = function() {
    return numOfKeys;
  };

  return someInstance;
};
