//4.4 Remember binary search from chapter 1? It’s a divide-and-conquer algorithm, too. Can you come up with the base case and recursive case for binary search?
const facebook = ["Abuka", "Ayan", "Beiba", "Cris", "Dan", "Gerald", "Gira", "Gora", "Kuat", "Sam"];
function binary_search(arr, name){
    let low = 0;
    let high = arr.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===name){
            return mid; // Base case, element at the middle index
        }
        else if(arr[mid]<name){
            low=mid+1; // Recursive case, search in the right half
        }
        else{
            high=mid-1; // Recursive case, search in the left half
        }
    }
    return -1;
}
const index = binary_search(facebook, "Kuat");
if(index !== -1){
    console.log("The name was found at index "+index);
}
else{
    console.log("Not Authorized");
}