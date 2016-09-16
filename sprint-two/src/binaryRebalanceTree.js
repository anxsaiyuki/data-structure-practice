var BinaryRebalanceTree = function(value) {
  var binTree = Object.create(rebalanceTreeMethods);
  binTree.left = null;
  binTree.right = null;
  binTree.parent = null;
  binTree.value = value;
  binTree.minDepth = 1;
  binTree.maxDepth = 1;
  return binTree;
};

var rebalanceTreeMethods = {};


rebalanceTreeMethods.insert = function(node) {
  this._insert(node);

  if ( (this.getMaxSide('right') - this.getMinSide('left')) === 2) {
    this.rebalanceLeft();
  } else if ( (this.getMaxSide('left') - this.getMinSide('right')) === 2) {
    this.rebalanceRight();
  }
};

rebalanceTreeMethods.rebalanceRight = function(node) {
};

rebalanceTreeMethods.rebalanceLeft = function(node) {
  if(right.left != null ) {
    this.setAsReplacement(this.right.left);
  } else {

  }
};

rebalanceTreeMethods.setAsReplacement = function(tree) {
  if(this.parent != null) {
    if (this.parent.left === this) {
      this.parent.left = tree;
    }
  }
};


rebalanceTreeMethods._insert = function(node) {
  var newTree = BinaryRebalanceTree(node);
  newTree.parent = this;

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
  this.updateDepth();
};

rebalanceTreeMethods.updateDepth = function() {
  this.minDepth = 1 + Math.min(this.getMinSide('left'), this.getMinSide('right'));
  this.maxDepth = 1 + Math.max(this.getMaxSide('left'), this.getMaxSide('right'));
};


rebalanceTreeMethods.getMinSide = function(prop) {
  if(this[prop]) {return this[prop].minDepth;}
  return 0;
};

rebalanceTreeMethods.getMaxSide = function(prop) {
  if(this[prop]) {return this[prop].maxDepth;}
  return 0;
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
};

rebalanceTreeMethods.getMaxDepth = function(node) {
  return this.maxDepth;
};

rebalanceTreeMethods.getMinDepth = function(node) {
  return this.minDepth;
};