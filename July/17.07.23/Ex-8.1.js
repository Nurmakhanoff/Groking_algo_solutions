//8.1  You work for a furniture company, and you have to ship furniture all over the country. You need to pack your truck with boxes. All the boxes are of different sizes, and you’re trying to maximize the space you use in each truck. How would you pick boxes to maximize space? Come up with a greedy strategy. Will that give you the optimal solution?
// Pick the biggest box, place it in the truck, if there is enough space, repeat. If not, put the second biggest box in there. Continue this.

function selectionSort(arr){
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
      let maxIndex = i;
      for (let j = i + 1; j < length; j++) {
        if (arr[j] > arr[maxIndex]) {
          maxIndex = j;
        }
      }
      if (maxIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
      }
    }
    return arr;
}

function packTruck(boxSizes, truckCapacity){  
    const packedBoxes = [];
    let remainingSpace = truckCapacity;
    for (let i = 0; i < boxSizes.length; i++){
        const currentBox = boxSizes[i];
        while (currentBox <= remainingSpace) {
            packedBoxes.push(currentBox);
            remainingSpace -= currentBox;
        }
    }
    return packedBoxes;
}
  const boxSizes = [20, 40, 30, 10, 50, 5];
  selectionSort(boxSizes);
  console.log(boxSizes);
  const truckCapacity = 100;
  
  const packedBoxes = packTruck(boxSizes, truckCapacity);
  console.log(packedBoxes);
