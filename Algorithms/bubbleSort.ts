const arr = [5,3,1,2,23,32,1,35,8];


const bubbleSort = (arr: number[]) => {
    let isSorted: boolean;
    do{
        isSorted = false;
        for(let i= 0;i < arr.length - 1; i++) {
         if(arr[i] > arr[i + 1]) {
             isSorted = true;
             [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
         }
        }
   } while(isSorted)
     return arr;
};


console.log(bubbleSort(arr));
