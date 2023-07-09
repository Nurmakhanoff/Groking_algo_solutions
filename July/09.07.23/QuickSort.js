function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[Math.floor(array.length / 2)];
  const less = [];
  const greater = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater));
}