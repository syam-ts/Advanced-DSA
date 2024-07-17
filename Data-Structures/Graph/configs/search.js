hasEdge(vertex1, vertex2) {
    return (
         this.adjeacencyList[vertex1].has(vertex2) &&
        this.adjeacencyList[vertex2].has(vertex1)
       )
};