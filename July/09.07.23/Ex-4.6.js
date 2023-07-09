//How long would each of these operations take in Big O notation?
//4.6 Doubling the value of each element in an array.
const arr = [2, 4, 6, 8, 10];

function doubleall(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*2;
        console.log(arr[i])
    }
}
doubleall(arr);
// Answer is O(n). This is because the algorithm must work through each element of the array and it will take time proportional to the size of the array.