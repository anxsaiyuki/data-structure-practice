var BinaryRebalanceTree = function(value) {
  var binTree = Object.create(rebalanceTreeMethods);
  binTree.left = null;
  binTree.right = null;
  binTree.parent = null;
  binTree.value = value;
  return binTree;
};

var rebalanceTreeMethods = {};

rebalanceTreeMethods.insert = function(node) {
  var newTree = BinaryRebalanceTree(node);
  if(node > this.value) {
    if(this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(node);
    }
  } else {
    if(this.left === null) {
      this.left = newTree;
    } else {
      this.left.insert(node);
    }
  }

};

rebalanceTreeMethods.contains = function(node) {
  if(node === this.value) {
    return true;
  } else if (node > this.value) {
    if(this.right === null) {
      return false;
    } else {
      return this.right.contains(node);
    }
  } else {
    if(this.left === null) {
      return false;
    } else {
      return this.left.contains(node);
    }
  }

};

rebalanceTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left != null) {
    this.left.depthFirstLog(cb);
  } 
  if(this.right != null) {
    this.right.depthFirstLog(cb);
  }

  rebalanceTreeMethods.getMaxDepth = function(node) {
    var currentLevel = 1;
    var nextLevelNodes = [];
    var currentLevelNodes = [this];

    while(true) {
      while(currentLevelNodes.length > 0) {
        var node = currentLevelNodes.pop();
        if (node.left) {nextLevelNodes.push(node.left);}
        if (node.right) {nextLevelNodes.push(node.right);}
      }
      if (nextLevelNodes.length === 0) { return currentLevel; }
      currentLevelNodes = nextLevelNodes;
      currentLevel ++;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
