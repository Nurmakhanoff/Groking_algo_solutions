//For each of these algorithms, say whether it’s a greedy algorithm or not.
//8.3 Quicksort

function quickSort(array){
    if (array.length <= 1){
        return array;
    }
    const pivot = array[Math.floor(array.length / 2)];
    const less = [];
    const greater = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] < pivot) {
            less.push(array[i]);
        } 
        else{
        greater.push(array[i]);
        }
    }
    return quickSort(less).concat(pivot, quickSort(greater));
}

// Short answer is not. Quicksort is not a greedy algorithm.
// Greedy algorithms are not that good at final answer, but they are easy. It chooses the most greedyfull variant in the current step and goes along with it.
// Quicksort on the other hand "Divide and conquer" algorithm, that doesn't make the current step without thinking about future steps, but rather dividing the array and sorting the resulting sub-arrays. It does not have a specific decision-making process based on greediness in the current moment.
