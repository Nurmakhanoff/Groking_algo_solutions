// 2.3 Let’s run a thought experiment. Suppose Facebook keeps a list of usernames. When someone tries to log in to Facebook, a search is done for their username. If their name is in the list of usernames, they can log in. People log in to Facebook pretty often, so there are a lot of searches through this list of usernames. Suppose Facebook uses binary search to search the list. Binary search needs random access—you need to be able to get to the middle of the list of usernames instantly. Knowing this, would you implement the list as an array or a linked list?
const facebook = ["Abuka", "Ayan", "Beiba", "Cris", "Dan", "Gerald", "Gira", "Gora", "Kuat", "Sam"];
function binary_search(arr, name){
    let low = 0;
    let high = arr.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===name){
            return mid;
        }
        else if(arr[mid]<name){
            low=mid+1;
        }
        else{
            high=mid-1;
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
// The arrays are better, but they need to be sorted for binary search. If we need random access, arrays can give it to us, while linked lists would check every name in the list to find the right one. Arrays would be much faster.
