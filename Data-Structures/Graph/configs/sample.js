function dijkstra(graph, start) {
    let distances = {};
    let visited = new Set();
    let pq = new PriorityQueue();
  
    distances[start] = 0;
    pq.enqueue(start, 0);
  
    Object.keys(graph).forEach(node => {
      if (node !== start) {
        distances[node] = Infinity;
      }
    });
  
    while (!pq.isEmpty()) {
      let { node } = pq.dequeue();
      visited.add(node);
  
      for (let neighbor in graph[node]) {
        if (!visited.has(neighbor)) {
          let newDist = distances[node] + graph[node][neighbor];
          if (newDist < distances[neighbor]) {
            distances[neighbor] = newDist;
            pq.enqueue(neighbor, newDist);
          }
        }
      }
    }
  
    return distances;
  }
  
  class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    enqueue(node, priority) {
      this.values.push({ node, priority });
      this.sort();
    }
  
    dequeue() {
      return this.values.shift();
    }
  
    isEmpty() {
      return this.values.length === 0;
    }
  
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    }
  }
  
  console.log(dijkstra(graph, 'A'));