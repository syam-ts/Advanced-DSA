display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "----->", [...this.adjacencyList[vertex]]);
    }
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  dfs(start) {
    const stack = [start];
    const result = [];
    const visited = new Set();
    visited.add(start);

    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      });
    }

    return result;
  }