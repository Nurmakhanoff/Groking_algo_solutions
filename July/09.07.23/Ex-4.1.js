//4.1 Write out the code for the earlier sum function.
const ar = [2,4,6];
function sum(arr){
    let total = 0;
    for (let i in arr){
        total += arr[i];
    }
    return total;
}
console.log(sum(ar));
