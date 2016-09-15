

// Instantiate a new graph
var Graph = function() {
  this.nodeDict = {};
  this.edgeDict = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newGraph = new Graph();
  this.nodeDict[node] = newGraph;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (node in this.nodeDict);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodeDict[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(fromNode == toNode) return true;
  var fromGraph = this.nodeDict[fromNode];
  if(fromGraph === undefined) return false;
  var toGraph = this.nodeDict[toNode];
  if(toGraph === undefined) return false;
  return (fromNode in toGraph.edgeDict);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromGraph = this.nodeDict[fromNode];
  var toGraph = this.nodeDict[toNode];
  if(fromGraph === undefined) return;
  if(toGraph === undefined) return;
  fromGraph.edgeDict[toNode] = toGraph;
  toGraph.edgeDict[fromNode] = fromGraph;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromGraph = this.nodeDict[fromNode];
  var toGraph = this.nodeDict[toNode];
  delete fromGraph.edgeDict[toNode];
  delete toGraph.edgeDict[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(Object.keys(this.nodeDict), cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


