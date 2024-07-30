// Fibonacci from 0 - 0,1,1
// base case is n < 2 return n

function fibonacci(n) {
   let i = 1;
   let total;
   while (i <= n) {
      total = i + i - 1;
      i++;
   }
   return total;
}

console.log("Fibonacci of 7 iteratively: ", fibonacci(7));

function fibonacciRec(n) {
   if (n < 2) {
      return n;
   }
   return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

console.log("Fibonacci of 7 recursively: ", fibonacciRec(7));

function merge(array1, array2) {
   m = array1.length;
   n = array2.length;
   i = 0;
   j = 0;
   k = 0;
   newArray = [];

   while (i < m && j < n) {
      if (array1[i] < array2[j]) {
         newArray[k] = array1[i];
         i++;
         k++;
      } else {
         newArray[k] = array2[j];
         j++;
         k++;
      }
   }
   for (i; i < m; i++) {
      newArray[k] = array1[i];
      k++;
   }
   for (j; j < n; j++) {
      newArray[k] = array2[j];
      k++;
   }

   return newArray;
}

let array = merge([3, 8, 15, 22, 45], [4, 10, 18, 29, 56]);

console.log("Merged two sorted arrays: ", array);

function mergeSort(array) {
   if (array.length > 1) {
      let middle = Math.floor(array.length / 2);
      let array1 = array.slice(0, middle);
      let array2 = array.slice(middle);
      array1 = mergeSort(array1);
      array2 = mergeSort(array2);
      let newArray = merge(array1, array2);
      return newArray;
   } else {
      return array;
   }
}

let array2 = mergeSort([23, 5, 78, 1, 45, 12, 56, 19, 89, 34, 67, 8]);

console.log("Sorted using merge sort: ", array2);
