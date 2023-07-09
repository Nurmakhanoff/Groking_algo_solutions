//4.3 Find the maximum number in a list.
const ar = [2,4,6,4,8,12,13];
function maxnum(arr){
    let maxn = 0;
    if(arr.length==0){
        return maxn;
    }
    else if(maxn<arr[0]){
        maxn=arr[0];
    }
    const maxrest = maxnum(arr.slice(1));
    if (maxrest > maxn) {
        maxn = maxrest;
    }
    return maxn;
}
console.log(maxnum(ar));