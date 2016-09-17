

var PrefixTree = function (char) {
  this.char = char;
  this.children = {};
  this.isWord = false;
};

PrefixTree.prototype.insert = function (word ) {
  var wordSplit = word.split('');
  return this._insert(wordSplit);
};


PrefixTree.prototype._insert = function (wordSplit ) {
  if (wordSplit.length === 0) {
    this.isWord = true;
    return;
  }

  var firstChar = wordSplit[0];

  if (!(firstChar in this.children)) {
    var newChild = new PrefixTree(firstChar);
    this.children[firstChar] = newChild;
  }

  var foundChild = this.children[firstChar];
  return foundChild._insert(wordSplit.slice(1, wordSplit.length));

};

PrefixTree.prototype.lookup = function(word) {
  var wordSplit = word.split('');
  return this._lookup(wordSplit);
};

PrefixTree.prototype._lookup = function(wordSplit) {
  if (wordSplit.length === 0) {
    if (this.isWord) {
      return true;
    } else {
      return false;
    }
  }
  var firstChar = wordSplit[0];

  if (firstChar in this.children) {
    return this.children[firstChar]._lookup(wordSplit.slice(1, wordSplit.length));
  } else {
    return false;
  }



};




