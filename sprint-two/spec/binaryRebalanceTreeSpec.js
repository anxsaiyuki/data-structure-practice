describe('binaryRebalanceTree', function() {

  var rebalanceTree = BinaryRebalanceTree(2);

  
  it('should insert keys at the correct location in the tree', function() {
    rebalanceTree = rebalanceTree.insert(1);
    rebalanceTree = rebalanceTree.insert(4);
    rebalanceTree = rebalanceTree.insert(3);
    rebalanceTree = rebalanceTree.insert(5);
    expect(rebalanceTree.left.key).to.equal(1);
    expect(rebalanceTree.right.left.key).to.equal(3);
    expect(rebalanceTree.right.right.key).to.equal(5);

  });

  it('should determine the tree depth correctly', function() {
    expect(rebalanceTree.getMaxDepth()).to.equal(3);
  });

  it('should rebalance the tree left with beta at root', function() {
    rebalanceTree = rebalanceTree.insert(6);
    expect(rebalanceTree.getMaxDepth()).to.equal(3);
    expect(rebalanceTree.key).to.equal(4);
    expect(rebalanceTree.left.key).to.equal(2);
    expect(rebalanceTree.left.left.key).to.equal(1);
    expect(rebalanceTree.left.right.key).to.equal(3);
    expect(rebalanceTree.right.key).to.equal(5);
    expect(rebalanceTree.right.left).to.equal(null);
    expect(rebalanceTree.right.right.key).to.equal(6);
  });


  it('should rebalance with special case of no right node', function() {
    rebalanceTree = BinaryRebalanceTree(5);
    rebalanceTree = rebalanceTree.insert(1);
    rebalanceTree = rebalanceTree.insert(3);

    expect(rebalanceTree.key).to.equal(3);
    expect(rebalanceTree.left.key).to.equal(1);
    expect(rebalanceTree.right.key).to.equal(5);
  });



  it('should rebalance the tree left without beta at root', function() {
    rebalanceTree = BinaryRebalanceTree(1);
    expect(rebalanceTree.key).to.equal(1);
    rebalanceTree = rebalanceTree.insert(2);
    expect(rebalanceTree.right.key).to.equal(2);

    rebalanceTree = rebalanceTree.insert(3);
    expect(rebalanceTree.key).to.equal(2);
    expect(rebalanceTree.left.key).to.equal(1);
    expect(rebalanceTree.left.right).to.equal(null);
    expect(rebalanceTree.left.left).to.equal(null);
    expect(rebalanceTree.right.key).to.equal(3);
    expect(rebalanceTree.right.right).to.equal(null);

    expect(rebalanceTree.getMaxDepth()).to.equal(2);

  });
  
  it('should rebalance the tree left without beta not at root', function() {
    rebalanceTree = BinaryRebalanceTree(2);
    rebalanceTree = rebalanceTree.insert(1);
    rebalanceTree = rebalanceTree.insert(4);
    rebalanceTree = rebalanceTree.insert(5);

    expect(rebalanceTree.key).to.equal(2);
    expect(rebalanceTree.left.key).to.equal(1);
    expect(rebalanceTree.left.left).to.equal(null);
    expect(rebalanceTree.left.right).to.equal(null);
    expect(rebalanceTree.right.key).to.equal(4);
    expect(rebalanceTree.right.left).to.equal(null);
    expect(rebalanceTree.right.right.key).to.equal(5);
    expect(rebalanceTree.right.right.left).to.equal(null);
    expect(rebalanceTree.right.right.right).to.equal(null);

    //debugger;
    rebalanceTree = rebalanceTree.insert(6);
    expect(rebalanceTree.key).to.equal(2);
    expect(rebalanceTree.left.key).to.equal(1);
    expect(rebalanceTree.left.left).to.equal(null);
    expect(rebalanceTree.left.right).to.equal(null);
    expect(rebalanceTree.right.key).to.equal(5);
    expect(rebalanceTree.right.left.key).to.equal(4);
    expect(rebalanceTree.right.left.left).to.equal(null);
    expect(rebalanceTree.right.left.right).to.equal(null);
    expect(rebalanceTree.right.right.key).to.equal(6);
    expect(rebalanceTree.right.right.left).to.equal(null);
    expect(rebalanceTree.right.right.right).to.equal(null);


    expect(rebalanceTree.getMaxDepth()).to.equal(3);
  });



  it('should rebalance the tree right with beta at root', function() {
    rebalanceTree = BinaryRebalanceTree(11);
    rebalanceTree = rebalanceTree.insert(12);
    rebalanceTree = rebalanceTree.insert(9);
    rebalanceTree = rebalanceTree.insert(8);
    rebalanceTree = rebalanceTree.insert(10);

    rebalanceTree = rebalanceTree.insert(1);
    expect(rebalanceTree.key).to.equal(9);
    expect(rebalanceTree.left.key).to.equal(8);
    expect(rebalanceTree.left.left.key).to.equal(1);
    expect(rebalanceTree.left.left.left).to.equal(null);
    expect(rebalanceTree.left.left.right).to.equal(null);
    expect(rebalanceTree.left.right).to.equal(null);
    expect(rebalanceTree.right.key).to.equal(11);
    expect(rebalanceTree.right.left.key).to.equal(10);
    expect(rebalanceTree.right.left.left).to.equal(null);
    expect(rebalanceTree.right.left.right).to.equal(null);
    expect(rebalanceTree.right.right.key).to.equal(12);
    expect(rebalanceTree.right.right.left).to.equal(null);
    expect(rebalanceTree.right.right.right).to.equal(null);

    expect(rebalanceTree.getMaxDepth()).to.equal(3);
  
  });


  /*
  it('should rebalance the tree right with beta with a large tree', function() {
    rebalanceTree = BinaryRebalanceTree(15);
    rebalanceTree = rebalanceTree.insert(13);
    rebalanceTree = rebalanceTree.insert(18);
    rebalanceTree = rebalanceTree.insert(12);
    rebalanceTree = rebalanceTree.insert(14);
    rebalanceTree = rebalanceTree.insert(20);
    rebalanceTree = rebalanceTree.insert(17);
    rebalanceTree = rebalanceTree.insert(11);
    rebalanceTree = rebalanceTree.insert(12.5);
    rebalanceTree = rebalanceTree.insert(17.5);
    rebalanceTree = rebalanceTree.insert(13.5);
    rebalanceTree = rebalanceTree.insert(16);
    rebalanceTree = rebalanceTree.insert(14.5);
    rebalanceTree = rebalanceTree.insert(3);

    //expect(rebalanceTree.getMaxDepth()).to.equal(4);
    expect(rebalanceTree.left.left.key).to.equal(11);
    expect(rebalanceTree.left.left.left).to.equal(11);

  });
  */
  

});