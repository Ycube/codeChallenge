let factorial = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
};

// Bubble Sort
// Time: O(n^2)
let bubbleSort = (list) => {
  let swapped;
  do {
    swapped = false; //if this is commented out it breaks
    for (let i = 0; i < list.length; i++) {
      if (list[i] > list[i+1]) {
        const temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return list
};

//insertion sort
// Time: O(n^2)
let insertionSort = (list) => {
  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
      if (list[i] < list[j]) {
        const spliced = nums.splice(i, 1);
        list.splice(j, 0, spliced[0]);
      }
    }
  }
  return list;
}