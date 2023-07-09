//How long would each of these operations take in Big O notation?
//4.5 Printing the value of each element in an array.
const arr = [2, 4, 6, 8, 10];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Answer is O(n). Because the algorithm must work through each element of the array and it will take time proportional to the size of the array.