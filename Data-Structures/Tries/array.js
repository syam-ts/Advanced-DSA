const arr = [4,6 ,3,23,25,53,775];
const arr2 = [4,[44],5,65,[7,86,[5,7,9]],8];

// const sort = arr.sort((a, b) => b- a);
const even = arr.filter((x) => x % 2 === 0);
const square = arr.map((x) => x * x);
const sum = arr.reduce((acc, curr) => { return acc += curr }, 0);
const firstTwo = arr.slice(0,2);
const zeroToTwo = arr.fill(0, 0, 4);
const flatArr = arr2.flat(Infinity)

console.log(flatArr);

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    };


    insertAtBeginning(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return head;
    }

    insertLast(value) {
        const node = new Node(value);
        if(!this.head ) {
            this.head = node;
        } else {
            const curr = this.head;
            while(curr != null) {
                curr = curr.next;
            }
            curr.next = node;
        }
        return head;
    }

    insertAtPosition(index, value) {
        
    }
}