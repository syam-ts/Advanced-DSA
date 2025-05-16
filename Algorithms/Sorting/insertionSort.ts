var arr: number[] = [5, 3, 1, 2, 23, 32, 1, 35, 8];

const insertionSort = (arr: number[]): number[] => {

    for (let i = 0; i < arr.length; i++) {
        let current: number = arr[i];
        let compareIdx: number = i - 1;
        while (compareIdx >= 0 && arr[compareIdx] > current) {
            arr[compareIdx + 1] = arr[compareIdx];
            compareIdx--;
        }
        arr[compareIdx + 1] = current;
    }
    return arr;
};

console.log("Result: ", insertionSort(arr));


/* pick the left side element, 
insert the big element to the right side
 until fit the proper position
*/