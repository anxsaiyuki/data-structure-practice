describe('redBlackTree', function() {
  var redBlackTree = new RedBlackTree(10, true);

  it('Root node should be black', function() {
    expect(redBlackTree.color).to.equal('black');
    expect(redBlackTree.value).to.equal(10);
  });


  it('Insert case 2 should work', function() {
    redBlackTree.insert(20);
    redBlackTree.insert(5);

    expect(redBlackTree.right.value).to.equal(20);
    expect(redBlackTree.left.value).to.equal(5);
    expect(redBlackTree.right.color).to.equal('red');
    expect(redBlackTree.right.color).to.equal('red');
  });


  it('Insert case 3 should work', function() {
    redBlackTree.insert(30);


    expect(redBlackTree.right.value).to.equal(20);
    expect(redBlackTree.right.right.value).to.equal(30);

  });

  it('Insert case 3 check other colors', function() {
    expect(redBlackTree.right.color).to.equal('black');
    expect(redBlackTree.left.color).to.equal('black');
    expect(redBlackTree.right.right.color).to.equal('red');
  });

  describe('Check Root color Case 3', function() {
    it('Insert case 3 Root should be black', function() {
      expect(redBlackTree.color).to.equal('black');
    });
  });


  describe('Case 5 insert', function() {
    it('Insert case 5 right should be 30 and black', function() {
      redBlackTree.insert(40);

      debugger;
      expect(redBlackTree.right.color).to.equal('black');
      expect(redBlackTree.right.value).to.equal(30);
    });
    it('Insert case 5 right.right should be 40 and red', function() {

      expect(redBlackTree.right.right.value).to.equal(40);
      expect(redBlackTree.right.right.color).to.equal('red');
    });
    it('Insert case 5 right.left should be 20 and red', function() {

      expect(redBlackTree.right.left.value).to.equal(20);
      expect(redBlackTree.right.left.color).to.equal('red');
    });

  });


});
