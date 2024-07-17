class HeapDS {
    constructor() {
      this.heap = [];
    };
    
  
    buildHeap(array) {
      this.heap = array;
      for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
        this.heapifyDown(i);
      }
    };
    
  
    heapifyDown(index) {
      let smallest = index;
      let left = (index * 2) + 1;
      let right = (index * 2) + 2;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest !== index) {
        this.swap(smallest, index);
        this.heapifyDown(smallest);
      }
    };
    
  
    addNode(node) {
      this.heap.push(node);
      this.heapifyUp(this.heap.length - 1);
    };
    
  
    heapifyUp(index) {
      let parent = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[index] < this.heap[parent]) {
        this.swap(index, parent);
        this.heapifyUp(parent);
      }
    };
    
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    };
    
  
    remove() {
      if (!this.heap || this.heap.length === 0) {
        return null;
      } else {
        this.swap(0, this.heap.length - 1);
        const temp = this.heap.pop();
        this.heapifyDown(0);
        return temp;
      }
    };
    
  
    deleteNode(data) {
      if (this.heap.includes(data)) {
        const ind = this.heap.indexOf(data);
        this.swap(this.heap.length - 1, ind);
        const deleted = this.heap.pop();
        if (ind < this.heap.length) {
          this.heapifyDown(ind);
          this.heapifyUp(ind);
        }
      } else {
        console.log('Element is not present in the heap');
      }
    };
    
  
    heapSort() {
      const sortedList = [];
      while (this.heap.length > 0) {
        sortedList.push(this.remove());
      }
      return sortedList;
    }
  }
  
  const h = new HeapDS();
  h.buildHeap([1, -2, 13, 7, -8, 9, 23]);
  console.log(h.heap);
  h.addNode(-1);
  console.log(h.heap);
  h.remove();
  console.log(h.heap);
  h.addNode(-3);
  h.addNode(10);
  h.addNode(11);
  console.log(h.heap);
  h.deleteNode(-1);
  console.log(h.heap);
  console.log(h.heapSort());
  
