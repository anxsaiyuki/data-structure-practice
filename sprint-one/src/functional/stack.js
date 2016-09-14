var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numOfKeys = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[++numOfKeys] = value;
  };

  someInstance.pop = function() {
    if(someInstance.size() === 0) {
      return;
    }
    var item = storage[numOfKeys];
    delete storage[numOfKeys];
    numOfKeys --;
    return item;
  };

  someInstance.size = function() {
    return numOfKeys;
  };

  return someInstance;
};
