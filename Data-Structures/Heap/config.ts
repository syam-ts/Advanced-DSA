class Heap {
  heap : number[]
  constructor() {
    this.heap = [];
  };
  
  buildHeap(array: number[]) {
    this.heap = array.slice();
    for(let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
         this.heapifyDown(i);
    }
  };

  
  addNode(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
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
  
  swap(s, i) {
    [this.heap[s] ,this.heap[i]] = [this.heap[i], this.heap[s]]
};

  heapifyUp(index) {
    let parent = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index] < this.heap[parent]) {
      this.swap(index, parent);
      this.heapifyUp(parent);
    }
  };
  
  

 
  

  deleteNode(data: number) {
    if (this.heap.includes(data)) {
      const index = this.heap.indexOf(data);
      this.swap(this.heap.length - 1, index);
      const deleted = this.heap.pop();
      if (index < this.heap.length) {
        this.heapifyDown(index);
        this.heapifyUp(index);
      }
    } else {
      console.log('Element is not present in the heap');
    }
  };
  

  heapSort() {
    const sortedList: number[] = [];
    while (this.heap.length > 0) { 
      this.swap(0, this.heap.length - 1); 
      const temp: any = this.heap.pop(); 
      this.heapifyDown(0); 
      sortedList.push(temp);
    }
    return sortedList; 
  }

  display() {
    for (let i = 0; i < this.heap.length; i++) {
       console.log(this.heap[i])
    }
  }

  peek() {
    return this.heap[0];
  }
}
const arr = [4,3,6,23,53,24,7,86, 8,12,25];

const h = new Heap();
h.buildHeap(arr);
h.display()