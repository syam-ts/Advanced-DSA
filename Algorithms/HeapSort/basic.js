heapSort() {
    let sortedArray = [];
    while (this.heap.length > 0) {
      sortedArray.push(this.heap[0]);
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.heapifyDown(0);
    }
    return sortedArray;
  }