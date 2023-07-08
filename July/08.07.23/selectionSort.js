function selectionSort(arr) {
    const length = arr.length;
    
    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
      
      // Find the minimum element in the unsorted part of the array
      for (let j = i + 1; j < length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      
      // Swap the minimum element with the first element of the unsorted part
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    
    return arr;
  }
  
  // Example usage
  const numbers = [64, 25, 12, 22, 11];
  console.log("Original array:", numbers);
  const sortedNumbers = selectionSort(numbers);
  console.log("Sorted array:", sortedNumbers);
  