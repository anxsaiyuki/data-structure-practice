describe('binaryReblanceTree', function() {
  var rebalanceTree = BinaryRebalanceTree(2);

  it('rebalance tree depth', function() {
    rebalanceTree.insert(1);
    rebalanceTree.insert(4);
    expect(rebalanceTree.getMaxDepth()).to.equal(2);
  });
});