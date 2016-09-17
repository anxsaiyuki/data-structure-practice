describe('prefixTree', function() {
  var tree = new PrefixTree("");

  it('should insert words in the tree', function() {
    tree.insert("tree");
    expect(tree.lookup("tree")).to.equal(true);
  });

  it('should fail for words not added', function() {
    expect(tree.lookup("treee")).to.equal(false);
    expect(tree.lookup("tre")).to.equal(false);
  });

  it('should be sensitive to word order', function() {
    expect(tree.lookup("rtee")).to.equal(false);
  });

});