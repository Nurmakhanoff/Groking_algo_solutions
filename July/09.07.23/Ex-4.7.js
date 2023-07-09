//How long would each of these operations take in Big O notation?
//4.7 Doubling the value of just the first element in an array.
const arr = [2, 4, 6, 8, 10];

function doubleFirstElement(arr){
    arr[0] = arr[0]*2;
    console.log(arr[0]);
}
doubleFirstElement(arr);
// Answer is O(1). This is because the algorithm would work with one and only element, first element of an array.