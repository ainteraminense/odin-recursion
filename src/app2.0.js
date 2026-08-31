// mergesort
export function mergeSort(array) {
// take array
const lower = 0;
const higher = array.length - 1;
// compare lower end and higher end
// if lower less equal higher
// return array
if (lower === higher || higher === -1) {
    return array;
}
// if not
else {
// find mid from lower + higher divided by 2
const mid = Math.ceil((lower + higher) / 2);
const leftHalf = array.slice(0, mid);
// mergesort array from lower to mid
// store in new array
const leftHalfSorted = mergeSort(leftHalf);
//  mergesort array from mid + 1 to higher
// store in new array
const rightHalf = array.slice(mid);
const rightHalfSorted = mergeSort(rightHalf);
// merge two new arrays
// return merged array
return merge(leftHalfSorted, rightHalfSorted);
}
}

function merge (array1, array2) {
    const mergedArray = [];
    // initialize index1, index2 as 0
    let i = 0, j = 0;
    // while index1 <= index2
    while (i < array1.length && j < array2.length) {
    // compare array1 first element with array2 first element
    // if array1 first element less than or equal to array2 first element
        if (array1[i] <= array2[j]) {
    // push array1 indexed element to new array
    // icrement array1 index
            mergedArray.push(array1[i]);
            i++;
        }
    // else push array2 indexed element
    // increment array2 index 
        else {
            mergedArray.push(array2[j]);
            j++;
        }
    }  
    // for index1 < array1 size
    // push indexed element from array 1
    // incremenet index1
    for (; i < array1.length; i++) {
        mergedArray.push(array1[i]);
    }
    // for index2 < arra2y size
    // push index element from array 2  
    for (; j < array2.length; j++) {
        mergedArray.push(array2[j]);
    }
    return mergedArray;
}