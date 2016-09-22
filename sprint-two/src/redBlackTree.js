var RedBlackTree = function(value, isRoot) {
  this.parent = null;
  this.color = 'red';
  this.left = null;
  this.right = null;
  this.value = value;
  if (isRoot) {
    insertCase1(this);
  }
};

RedBlackTree.prototype._insert = function(node) {
  if (node.value > this.value) {
    if (this.right) {
      this.right._insert(node);
    } else {
      this.right = node;
      node.parent = this;
    }
  } else { 
    if (this.left) {
      this.left._insert(node);
    } else {
      this.left = node;
      node.parent = this;
    }
  }
};

RedBlackTree.prototype.insert = function(value) {
  var node = new RedBlackTree(value);
  this._insert(node);
  insertCase1(node);
};

RedBlackTree.prototype.grandparent = function() {
  if (this.parent != null)
    return this.parent.parent;
  else 
    return null;
};

RedBlackTree.prototype.uncle = function() {
  var grandparent = this.grandparent();
  if (grandparent === null)
    return null;
  if (this.parent === grandparent.left)
    return grandparent.right;
  else
    return grandparent.left;
};

var insertCase1 = function(node) {
  if (node.parent === null) {
    node.color = 'black';
  } else {
    insertCase2(node);
  }
};

var insertCase2 = function(node) {
  if (node.parent.color === 'black')
    return;
  else 
    insertCase3(node);
};

var insertCase3 = function(node) {
  var uncle = node.uncle();
  var grandparent;

  if (uncle != null && (uncle.color === 'red')) {
    node.parent.color = 'black';
    uncle.color = 'black';
    grandparent = node.grandparent();
    grandparent.color = 'red';
    insertCase1(grandparent);
  } else {
    insertCase4(node);
  }
};

var insertCase4 = function(node) {
  insertCase5(node);
};

var insertCase5 = function(node) {
  var grandparent = node.grandparent();

  node.parent.color = 'black';
  grandparent.color = 'red';
  if (_.isEqual(node,node.parent.left)) {
    rotateRight(grandparent);
  } else {
    rotateLeft(grandparent);
  }
};

var rotateRight = function(B) {
  var A = B.left;
  var beta = A.right;
  var oldBParent = B.parent;

  A.right = B;
  B.left = beta;
  A.parent = oldBParent;
  B.parent = A;
  if (beta) {
    beta.parent = B;
  }

  if(oldBParent) {
    if (oldBParent.right === B) {
      oldBParent.right = A;
    } else if (oldBParent.left === B) {
      oldBParent.left = A;
    } else {
      throw Error;
    }
  }
};


var rotateLeft = function(A) {
  var B = A.right;
  var beta = B.left;
  var oldAParent = A.parent;

  B.left = A;
  A.right = beta;

  B.parent = oldAParent;
  A.parent = B;
  if (beta) {
    beta.parent = A;
  }

  if(oldAParent) {
    if (oldAParent.right === A) {
      oldAParent.right = B;
    } else if (oldAParent.left === A) {
      oldAParent.left = B;
    } else {
      throw Error;
    }
  }
};






