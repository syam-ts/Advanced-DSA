// dfs , bfs in Graph

type Vertex = any

class Grpah {
     adjacencyList: any
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex: Vertex) {
      if(!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1: Vertex, vertex2: Vertex) {
      if(!this.adjacencyList[vertex1]) {
          this.addVertex(vertex1);
      }
  
      if(!this.adjacencyList[vertex2]) {
          this.addVertex(vertex2);
      }
  
      this.adjacencyList[vertex1].add(vertex2)
      this.adjacencyList[vertex2].add(vertex1)
    }
  
    hasEdge(v1: Vertex, v2: Vertex) {
      if(this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1)) {
        return true;
      }
      return false;
    }
  
    removeEdge(v1: Vertex, v2: Vertex) {
       if(this.adjacencyList[v1].has(v2)) {
           this.adjacencyList[v1].delete(v2)
           this.adjacencyList[v2].delete(v1)
       } else {
         return false;
       }
    }
  
     removeVertex(v1: Vertex) {
       if(!this.adjacencyList[v1]) {
         return false;
       } else {
         for(let adVertex of this.adjacencyList[v1]) { 
               this.removeEdge(adVertex, v1)
         }
         delete this.adjacencyList[v1]
       }
     }
  
     bfs(start: Vertex) {
       let queue = [start], result: Vertex[] = [], visited = new Set();
        visited.add(start);
        while(queue.length > 0) {
            let vertex = queue.shift(); //uses queue ds
            result.push(vertex);
  
            this.adjacencyList[vertex].forEach((neighbor) => {
               if(!visited.has(neighbor)) {
                  visited.add(neighbor);
                  queue.push(neighbor)
               }
            })
        }
        return result;
     }
     
     dfs(start: Vertex) {
       let stack = [start], result: Vertex[] = [], visited = new Set();
        visited.add(start);
        while(stack.length > 0) {
            let vertex = stack.push(); //usese stack ds
            result.push(vertex);
  
            this.adjacencyList[vertex].forEach((neighbor) => {
               if(!visited.has(neighbor)) {
                  visited.add(neighbor);
                  stack.push(neighbor)
               }
            })
        }
        return result;
     }
  
    print() {
      for(let vertex in this.adjacencyList) {
        console.log(vertex, [...this.adjacencyList[vertex]])
      }
    }
  }
  
  const graph = new Grpah();
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')
  graph.addVertex('E')
  graph.addVertex('F')
  graph.addEdge('A', 'B')
  graph.addEdge('B', 'C')
  graph.addEdge('C', 'D')
  graph.addEdge('D', 'E')
  graph.addEdge('E', 'F')
  graph.print()
  
  console.log(graph.bfs('A'))