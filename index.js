// Fibonacci from 0 - 0,1,1
// base case is n < 2 return n

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
   for (j; j < m; j++) {
      newArray[k] = array2[j];
      k++;
   }

   return newArray;
}

let array = merge([3, 8, 15, 22, 45], [4, 10, 18, 29, 56]);

console.log(array);
