//8.2 You’re going to Europe, and you have seven days to see everything you can. You assign a point value to each item (how much you want to see it) and estimate how long it takes. How can you maximize the point total (seeing all the things you really want to see) during your stay? Come up with a greedy strategy. Will that give you the optimal solution?
// Paris - 1 day, Rome - 1 day, Amsterdam - 2 days, Prague - 3 days, London - SEVEN days.
// Paris - 1/10 want to see, Rome - 3/10, Amsterdam - 2/10, Prague - 5/10, London - 10/10
// Will that give you the optimal solution? No. Cause we will pick either a place with biggest duration, either a place that we like the most.

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

function pickpath(daysneeded, timespan){  
    const visitedcities = [];
    let remainingTime = timespan;
    for (let i = 0; i < daysneeded.length; i++){
        const currentPlace = daysneeded[i];
        while (currentPlace <= remainingTime) {
            visitedcities.push(currentPlace);
            remainingTime -= currentPlace;
        }
    }
    return visitedcities;
}
  const daysneeded = [1, 1, 2, 3, 7];
  selectionSort(daysneeded);
  const timespan = 7;
  
  const visitedcities = pickpath(daysneeded, timespan);
  console.log(visitedcities);
