describe('binaryRebalanceTree', function() {
  var rebalanceTree = BinaryRebalanceTree(2);

  it('should insert values at the correct location in the tree', function() {
    rebalanceTree.insert(1);
    rebalanceTree.insert(4);
    rebalanceTree.insert(3);
    rebalanceTree.insert(5);
    expect(rebalanceTree.left.value).to.equal(1);
    expect(rebalanceTree.right.left.value).to.equal(3);
    expect(rebalanceTree.right.right.value).to.equal(5);

  });

  it('should determine the tree depth correctly', function() {
    expect(rebalanceTree.getMaxDepth()).to.equal(3);
    expect(rebalanceTree.getMinDepth()).to.equal(2);
  });

  it('should rebalance the tree left with beta', function() {
    var newRoot = rebalanceTree.insert(6);
    expect(newRoot.getMaxDepth()).to.equal(3);
    expect(newRoot.value).to.equal(4);
    expect(newRoot.left.value).to.equal(2);
    expect(newRoot.left.left.value).to.equal(1);
    expect(newRoot.left.right.value).to.equal(3);
    expect(newRoot.right.value).to.equal(5);
    expect(newRoot.right.left).to.equal(null);
    expect(newRoot.right.right.value).to.equal(6);
  });


  it('should rebalance the tree left without beta', function() {
    rebalanceTree = BinaryRebalanceTree(2);
    rebalanceTree.insert(1);
    rebalanceTree.insert(4);
    rebalanceTree.insert(5);
    var newRoot = rebalanceTree.insert(6);
    //expect(newRoot.getMaxDepth()).to.equal(3);
  });

});