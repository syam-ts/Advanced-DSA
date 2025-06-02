class HashTable {
  buckets: any;
  constructor(size: number) {
    this.buckets = Array(size).fill(null).map(() => []); // initialised and filled with [] 
  }

  //hash function return number[index] under size - 1;
  hash(key: string) {
    let hash: number = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.buckets.length;
  }

  //set value on particular index
  set(key: string, value: string | number) {
    const index: number = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }

  get(key: string) {
    const index: number = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  display() {
    console.log(this.buckets);
  }
};

const hashTable = new HashTable(30);
hashTable.set('name', 'syam');
hashTable.set('age', 27);
hashTable.set('place', 'kollam');
hashTable.set('domain', 'web development');
hashTable.set('mane', 'not your type');

console.log('Retrieve Value : ', hashTable.get('place'));
