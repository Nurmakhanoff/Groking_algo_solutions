//How long would each of these operations take in Big O notation?
//4.8 Creating a multiplication table with all the elements in the array. So if your array is [2, 3, 7, 8, 10], you first multiply every element by 2, then multiply every element by 3, then by 7, and so on.
const arr = [2, 3, 7, 8, 10];

function doublealltable(arr){
    const arr2 = [];
    Object.assign(arr2, arr);
        for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr2[j] *= arr[i];
            console.log(arr2[j]);
        }
    }
}
doublealltable(arr);
// Answer is O(n*n). This is because the algorithm would work with itself the same amount of times as there are elements in that array.