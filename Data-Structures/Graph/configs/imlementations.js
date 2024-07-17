class Graph {
    constructor() {
        this.adjeacencyList = {};
    };
    
    
    addVertex(vertex) {
        if(!this.adjeacencyList[vertex]) {
            this.adjeacencyList[vertex] = new Set();
        }
    };
    
    addEdge(vertex1, vertex2) {
        if(!this.adjeacencyList[vertex1]) {
            this.addVertex(vertex1);
        }  
        if(!this.adjeacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjeacencyList[vertex1].add(vertex2);
        this.adjeacencyList[vertex2].add(vertex1);
    };
    
    
    display() {
        for(let vertex in this.adjeacencyList) {
            console.log(vertex + " -> " + [...this.adjeacencyList[vertex]])
        }
    };
    
    hasEdge(vertex1, vertex2) {
        return (
             this.adjeacencyList[vertex1].has(vertex2) &&
            this.adjeacencyList[vertex2].has(vertex1)
           )
    };
    
    removeEdge(vertex1, vertex2) {
        this.adjeacencyList[vertex1].delete(vertex2) 
        this.adjeacencyList[vertex2].delete(vertex1)
    };
    
    removeVertex(vertex) {
        if(!this.adjeacencyList[vertex]) {
            return 
        } else {
            for(let adVertex of this.adjeacencyList[vertex]) {
                this.removeEdge(vertex, adVertex);
            }
            delete this.adjeacencyList[vertex];
        }
    }
};


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.display();
console.log(graph.hasEdge('C','B'))
console.log('After');
graph.removeVertex('B');
graph.display()