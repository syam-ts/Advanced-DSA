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