class MinHeap {
  heap: number[];
  constructor() {
     this.heap = [];
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length -1);
  }

  
  swap(i: number, j: number) {
    return [this.heap[i], this.heap[j]] = [ this.heap[j], this.heap[i]];
  }

  heapifyUp(index: number) {
    let parent = Math.floor((index - 1)/ 2);
    if(this.heap[index] < this.heap[parent] && index > 0) {
      this.swap(parent, index);
      this.heapifyUp(index);
    }
  }

  heapifyDown(index: number) {
    let smallest = index, left = index * 2 + 1, right = index * 2 + 2;
    if(this.heap[left] < this.heap[smallest] && left < this.heap.length) {
      smallest = left;
    } 
    if(this.heap[right] < this.heap[smallest] && right < this.heap.length) {
      smallest = right;
    } 
    if(smallest != index) {
      this.swap(smallest, index)
      this.heapifyDown(smallest)
    }
  }

  delete(value: number) {
    const index = this.heap.indexOf(value);
    if(index < -1) {
      return;
    }
    this.swap(index, this.heap.length -1);
    this.heap.pop();
    this.heapifyUp(index);
    this.heapifyDown(index);
  }
 
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

  peek() {
    return this.heap[0]
  }

  print() {
    for(let x of this.heap) {
      console.log(x)
    } 
 }
 
};

const heap = new MinHeap();
heap.insert(34)
heap.insert(104)
heap.insert(3)
heap.insert(4)
heap.insert(65) 
heap.print()
console.log('The peek : ',heap.peek())
console.log(heap.heapSort())
