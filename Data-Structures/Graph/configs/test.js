class Graph {
    constructor() {
        this.adjecencyList = {};
    };


    addVertex(vertex) {
        if(!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex] = new Set();
        }
    };


    addEdge(v1, v2) {
        if(!this.adjecencyList[v1]) {
            this.addVertex(v1);
        }
        if(!this.adjecencyList[v2]) {
            this.addVertex(v2);
        }

        this.adjecencyList[v1].add(v2);
        this.adjecencyList[v2].add(v1);
    };

    display() {
        for(let vertex in this.adjecencyList) {
            console.log(vertex + ' --> ' + [...this.adjecencyList[vertex]]);
        }
    };


   hasEdge(v1, v2) {
    return (
        this.adjecencyList[v1].has(v2) &&
        this.adjecencyList[v2].has(v1) 
    )
   };

   removeEdge(v1, v2) {
    this.adjecencyList[v1].delete(v2)
    this.adjecencyList[v2].delete(v1)
   };

   removeVertex(vertex) {
    if(!this.adjecencyList[vertex]) {
        return;
    } else {
        for(let theVertex of this.adjecencyList[vertex]) {
               this.removeEdge(theVertex, vertex);
        }
        delete this.adjecencyList[vertex];
    }
   };


   dfs(startVertex) {
    let visited = new Set(); 
        this.dfsHelper(startVertex, visited) 
   };

   dfsHelper(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);
    for(let neighbor of this.adjecencyList[vertex]) {
          if(!visited.has(neighbor)) {
            this.dfsHelper(neighbor, visited)
          }
    }
   }
      
};


const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('C', 'D');

g.dfs('A')