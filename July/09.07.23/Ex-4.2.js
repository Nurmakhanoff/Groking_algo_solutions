//4.2 Write a recursive function to count the number of items in a list.
const ar = [2,4,6,4,8,12,13];
function countitems(arr){
    if (arr.length==0){
        return 0;
    }
    return 1 + countitems(arr.slice(1));
}
console.log(countitems(ar));