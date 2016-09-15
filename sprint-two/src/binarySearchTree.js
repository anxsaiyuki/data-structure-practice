var BinarySearchTree = function(value) {
  var binTree = Object.create(binaryTreeMethods);
  binTree.left = null;
  binTree.right = null;
  binTree.value = value;
  return binTree;
};

var binaryTreeMethods = {};


binaryTreeMethods.insert = function(node) {
  var newTree = BinarySearchTree(node);
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

binaryTreeMethods.contains = function(node) {
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

binaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left != null) {
    this.left.depthFirstLog(cb);
  } 
  if(this.right != null) {
    this.right.depthFirstLog(cb);
  } 
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
