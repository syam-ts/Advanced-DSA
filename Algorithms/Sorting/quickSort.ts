var arr: number[] = [5,3,1,2,23,41,32,1,35,8];

const quickSort = (arr: number[]) => {
  if(arr.length <= 1) {
     return arr;
  }

    let left: any = [], right: any = [], pivot = arr[arr.length - 1];
    for(let i=0; i < arr.length -1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return [...quickSort(left), pivot ,...quickSort(right)];
}

console.log(quickSort(arr));