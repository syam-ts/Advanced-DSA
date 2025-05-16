var arr: number[] = [5, 3, 1, 2, 23, 32, 1, 35, 8];

const bubbleSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

console.log("Result: ", bubbleSort(arr));


/* using nested loops comparing
 i'th element with all the j'th element 
 and swap accordingly */