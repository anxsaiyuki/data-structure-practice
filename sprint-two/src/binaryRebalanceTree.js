

var BinaryRebalanceTree = function(value) {
  var binTree = Object.create(rebalanceTreeMethods);
  binTree.left = null;
  binTree.right = null;
  //binTree.parent = null;
  binTree.value = value;
  //binTree.minDepth = 1;
  //binTree.maxDepth = 1;
  //binTree.depth = 1;
  return binTree;
};

var rebalanceTreeMethods = {};



rebalanceTreeMethods.insert = function(node, isNotRoot) {
  this._insert(node);

  /*
  if ( (this.getMaxSide('right') - this.getMinSide('left')) === 2) {
    return this.rebalanceLeft();
  } else if ( (this.getMaxSide('left') - this.getMinSide('right')) === 2) {
    return this.rebalanceRight();
  }
  return this;
  */
  //if(this.value === 2) debugger;

  var sides = ['left', 'right'];
  for(var i =0; i < 2; i++) {
    for(var j =0; j < 2; j++) {
      var nodeSide = sides[i];
      var rebalanceSide = sides[j];
      if(this[nodeSide]) {
        if(this[nodeSide].needsRebalance(rebalanceSide)) {
          console.log("rebalance " + nodeSide + " to " + rebalanceSide);
          this[nodeSide] = this[nodeSide].rebalance(rebalanceSide);
          break;
        }
      }
    }
  }

  if(isNotRoot === false || isNotRoot === undefined)  {
    if(this.needsRebalance('right')) {
      return this.rebalanceRight();
    } else if (this.needsRebalance('left')){
      return this.rebalanceLeft();
    }
  }

  return this;
};


rebalanceTreeMethods._insert = function(node) {
  //debugger;
  var newTree = BinaryRebalanceTree(node);


  if(node > this.value) {
    if(this.right === null) {
      this.right = newTree;
      //newTree.depth = this.depth + 1;
    } else {
      this.right.insert(node, true);
    }
  } else {
    if(this.left === null) {
      this.left = newTree;
      //newTree.depth = this.depth + 1;
    } else {
      this.left.insert(node, true);
    }
  }
  // this.updateDepthRecursive();
};


rebalanceTreeMethods.getMaxDepth = function() {
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


rebalanceTreeMethods.needsRebalance = function(side) {
  var otherSide;
  if(side === "left"){
    otherSide = "right";
  } else {
    otherSide = "left";
  }

  if ( (this.getMaxSide(otherSide) - this.getMinSide(side)) === 2) {
    return true;
  } else {
    return false;
  }
};


rebalanceTreeMethods.rebalance = function(side) {
  if(side === "left"){
    return this.rebalanceLeft();
  } else {
    return this.rebalanceRight();
  }
};

rebalanceTreeMethods.rebalanceRight = function() {
  if(this.left && this.left.right) {
    return this.reArrangeRight   ();
  } else {
    return this.rotateRight();
  }
};

rebalanceTreeMethods.rebalanceLeft = function() {
  if(this.right && this.right.left) {
    return this.reArrangeLeft();
  } else {
    return this.rotateLeft();
  }
};


rebalanceTreeMethods.rotateRight = function() {
  var B = this;
  var A = this.left;
  B.left = A.right;
  A.right = B;
  return A;
};

rebalanceTreeMethods.rotateLeft = function() {

  var A = this;
  var B = this.right;
  A.right = B.left;
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