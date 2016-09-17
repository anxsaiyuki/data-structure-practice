/*
Used http://www.geeksforgeeks.org/avl-tree-set-1-insertion/ as a reference
*/

var BinaryRebalanceTree = function(key) {
  var binTree = Object.create(rebalanceTreeMethods);
  binTree.left = null;
  binTree.right = null;
  binTree.key = key;
  binTree.height = 1;
  return binTree;
};

var rebalanceTreeMethods = {};


rebalanceTreeMethods.insert = function(key) {
  var newRoot = insert(this, key);
  return newRoot;
};

rebalanceTreeMethods.getMaxDepth = function() {
  return height(this);
};


var height = function(N) {
  if(N === null) {
    return 0;
  }
  return N.height;
};


var rightRotate = function(y) {
  var x = y.left;
  var T2 = x.right;

  x.right = y;
  y.left = T2;

  y.height = Math.max(height(y.left), height(y.right)) + 1;
  x.height = Math.max(height(x.left), height(x.right)) + 1;

  return x;
};


var leftRotate = function(x) {
  var y = x.right;
  var T2 = y.left;

  y.left = x;
  x.right = T2;

  x.height = Math.max(height(x.left), height(x.right)) + 1;
  y.height = Math.max(height(y.left), height(y.right)) + 1;

  return y;
};



var getBalance = function(N) {
  if (N == null) {
    return 0;
  }
  return height(N.left) - height(N.right);
};



var insert = function(node, key) {
  if(node === null) {
    return  BinaryRebalanceTree(key);
  }
  if(key < node.key) {
    node.left = insert(node.left, key);
  } else {
    node.right = insert(node.right, key);
  }
  node.height = Math.max(height(node.left), height(node.right)) + 1;

  var balance = getBalance(node);

  if ((balance > 1) && (key < node.left.key)) {
    return rightRotate(node);
  }

  if((balance < -1) && (key > node.right.key)) {
    return leftRotate(node);
  }

  if((balance > 1) && (key > node.left.key)) {
    node.left = leftRotate(node.left);
    return rightRotate(node);
  }

  if((balance < -1) && (key < node.right.key)) {
    node.right = rightRotate(node.right);
    return leftRotate(node);
  }

  return node;
};
