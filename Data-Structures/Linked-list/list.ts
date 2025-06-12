type Value = string | number;

interface ListNode {
  val : Value;
  next: any
}

interface Linkedlist {
  head : any
  insertBegining(value: Value): Value
  insertLast(value: Value): any
  insertMiddle(value: Value): any
  reverse(value: Value): any
  findMiddle(value: Value): any
  print(value: Value): string
}

// class for ll node
class ListNode implements ListNode {
    constructor(value: Value) {
        this.val = value;
        this.next = null;
    }
}

//class for linkedlist implementaion
class Linkedlist implements Linkedlist {
  //head 
  constructor() {
    this.head = null;
  }

  insertBegining(value: Value) {
    let newNode = new ListNode(value);
    if(this.head === null) {
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode
    }
    return this.head;
  }

  insertLast(value: Value) {
    let newNode = new ListNode(value);
    if(this.head === null) return this.head = newNode;
    let curr = this.head;
    while(curr.next !== null) {
      curr = curr.next;
    }
    return curr.next = newNode; 
  }

  insertMiddle(value: Value) {
    let newNode = new ListNode(value);
    if(this.head === null) return this.head = newNode;
    let slow = this.head;
    let fast = this.head;
    let prev: any = null;
    while(fast && fast.next) {
     fast = fast.next.next;
     prev = slow;
     slow = slow.next;
    }

    newNode.next = slow 
    if(prev) {
      prev.next = newNode
    } else {
      this.head = newNode;
    }
  }

  
  // reveres the list
 reverse() {
  let prev = null;
  let curr = this.head;
  let next = null;

  while (curr !== null) {
    next = curr.next;     
    curr.next = prev;    
    prev = curr;         
    curr = next;       
  }

  return this.head = prev;    
}

//find middle node
findMiddle() {
  let slow = this.head 
  let fast = this.head;
  let prev: any = null;
  while(fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }
  return prev.next
}


  print(): string {
    let curr = this.head;
    let str = '';
    while(curr !== null) {
      str +=  curr.val + ' -> ';
      curr = curr.next;
    }
    return str + 'null';
  }
}

const linkedlist = new Linkedlist();
linkedlist.insertBegining('carrot')
linkedlist.insertBegining('banana')
linkedlist.insertBegining('apple')
linkedlist.insertLast('dolphin')
linkedlist.insertLast('mango')
linkedlist.insertBegining('first')
linkedlist.insertMiddle('middle-one')

console.log('linkedlist: ', linkedlist.print())