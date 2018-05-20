class Graph {
  constructor(isDirected = true) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  } 

  addEdge(v, w, value) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }

    let obj = {};
    obj[w] = value;
    
    this.adjList.get(v).push(obj);

  } 

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  } 
}

module.exports = Graph;
