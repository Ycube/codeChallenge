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

// Merge Sort - divide and conquer method
// Time: O(nlogn)
let mergeSort = (list) => {
  if (list.length < 2) {
    return list; 
  } 

  const middle = Math.floor(list.length/2);
  const leftArr = list.slice(0, middle);
  const rightArr = list.slice(middle);

  const sortedL = mergeSort(leftArr);
  const sortedR = mergeSort(rightArr);

  return merge(sortedL, sortedR);
};

let merge = (arr1, arr2) => {
  const results = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      results.push(arr1.shift()); //takes 0th element and pushes into results
    } else {
      results.push(arr2.shift());
    }
  }

  while (arr1.length) {
    results.push(arr1.shift());
   }

   while (arr2.length) {
      results.push(arr2.shift());
   }

  // return results;
  return [...results, ...arr1, ...arr2];
};


// Quick Sort - divide and conquer using pivot point
// Time: O(nlogn)
// Space is better than MergeSort
let quickSort = (list) => {
  if (list.length <= 1) {
    return list;
  }
  //pick a pivot
  let pivot = list[list.length-1];
  let arrL = [];
  let arrR = [];

  for (let i = 0; i < list.length-1; i++) {
  //create L < pivot
    if (list[i] < pivot) {
      arrL.push(list[i]);
    } else {
  // create R > pivot
      arrR.push(list[i]);
    }
  }
  // call quickSort on L and R
  // join L, pivot, R
  return [...quickSort(arrL), pivot, ...quickSort(arrR)];
}

let test = [10,8,7,3,4,5,6,1,2,9];
console.log(quickSort(test));







