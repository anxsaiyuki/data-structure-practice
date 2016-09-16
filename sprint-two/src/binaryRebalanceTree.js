

var BinaryRebalanceTree = function(value) {
  var binTree = Object.create(rebalanceTreeMethods);
  binTree.left = null;
  binTree.right = null;
  //binTree.parent = null;
  binTree.value = value;
  //binTree.minDepth = 1;
  //binTree.maxDepth = 1;
  binTree.depth = 1;
  return binTree;
};

var rebalanceTreeMethods = {};


rebalanceTreeMethods.insert = function(node) {
  //if(node === 6) debugger;
  this._insert(node);

  if ( (this.getMaxSide('right') - this.getMinSide('left')) === 2) {
    return this.rebalanceLeft();
  } else if ( (this.getMaxSide('left') - this.getMinSide('right')) === 2) {
    return this.rebalanceRight();
  }
  return this;
};


rebalanceTreeMethods._insert = function(node) {
  //debugger;
  var newTree = BinaryRebalanceTree(node);
  //newTree.parent = this;


  if(node > this.value) {
    if(this.right === null) {
      this.right = newTree;
      newTree.depth = this.depth + 1;
    } else {
      this.right.insert(node);
    }
  } else {
    if(this.left === null) {
      this.left = newTree;
      newTree.depth = this.depth + 1;
    } else {
      this.left.insert(node);
    }
  }
  // this.updateDepthRecursive();
};


rebalanceTreeMethods.getMaxDepth = function() {
  console.log("this " + this.value);
  if(this.left) console.log("left " + this.left.value);
  if(this.right) console.log("right " + this.right.value);
  var max = 1;
  if (this.right !== null) {
    max = Math.max(max, 1 + this.right.getMaxDepth());
  }
  if (this.left !== null) {
    max = Math.max(max, 1 + this.left.getMaxDepth());
  }
  return max;

};

rebalanceTreeMethods.getMaxSide = function(side) {
  var max = 1;
  if (this[side] !== null ) {
    max = Math.max(max, 1 + this[side].getMaxDepth());
    if(this[side].value  === 6) debugger;
  }
  return max;
};


rebalanceTreeMethods.getMinDepth = function() {
  if(this.right === null) {
    return 1;
  }
  if(this.left === null) {
    return 1;
  }
  var min = 1 + this.right.getMinDepth();
  min = Math.min(min, 1+this.left.getMinDepth());
  return min;

};


rebalanceTreeMethods.getMinSide = function(side) {
  if(this[side] == null) {
    return 1;
  }
  return 1 + this[side].getMinDepth();
};

rebalanceTreeMethods.rebalanceRight = function(node) {
};

rebalanceTreeMethods.rebalanceLeft = function(node) {
  console.log("rebalance"); 

  var A = this;
  var B = this.right;

  if(B.left != null ) {
    var beta  = B.left;
    A.right = beta;
    console.log("hit");
  }
  B.left = A;
  return B;
  //this.updateDepthRecursive();
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


/*
rebalanceTreeMethods.updateDepthRecursive = function() {
  if((this.left === null) && (this.right === null)) {
    this.maxDepth = 1;
    this.minDepth = 1;
  } else if (this.left === null) {
    this.minDepth = 1;
    this.maxDepth = 1 + this.right.maxDepth;
  } else if (this.right === null) {
    this.minDepth = 1;
    this.maxDepth = 1 + this.left.maxDepth;
  } else {
    this.updateDepth();
  }
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

rebalanceTreeMethods.getMaxDepth = function(node) {
  return this.maxDepth;
};

rebalanceTreeMethods.getMinDepth = function(node) {
  return this.minDepth;
};
*/