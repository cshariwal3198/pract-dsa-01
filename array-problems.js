//Second largest number

// arr1 = [5, 7, 2, 30, 24, 34, 54];
// arr2 = [4, 8, 4, 20, 20];

// function findSecondLargest(arr) {
//     let large = 0;
//     let sL = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (large < arr[i]) {
//             sL = large;
//             large = arr[i]
//         }
//     }
//     return sL;
// }

// console.log(findSecondLargest([5, 10, 5, 11, 11]));
// console.log(findSecondLargest([5, 7, 2, 30, 24, 34, 54]));



// Rotate array by k elements

// let input = [1, 3, 5, 2, 7, 8, 9];

// function rotateArray(arr, k) {
//     const resArr = [];

//     for (let i = 0; i <= k; i++) {
//         resArr.push(arr.pop())
//     }
//     resArr.splice(resArr.length - 1, 0, ...arr);
//     return resArr;
// }

// console.log(rotateArray([5, 7, 2, 30, 24, 34, 54], 3));
