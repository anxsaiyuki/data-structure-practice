describe('binaryReblanceTree', function() {
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

  it('should rebalance the tree with empty left ', function() {
    rebalanceTree.insert(6);
    expect(rebalanceTree.getMaxDepth()).to.equal(3);
  });
});