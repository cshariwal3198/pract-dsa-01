// 1. fibonacci series

// function fibonacci1(n) {
//     const fib = [0, 1];

//     if (n <= 1) {
//         return fib;
//     }
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2])
//     }
//     return fib;
// }

// function fibonacci2(n) {
//     const fib = [0, 1];

//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib;
// }

// console.log(fibonacci1(5));
// console.log(fibonacci2(5));
// console.log(fibonacci1(7));
// console.log(fibonacci2(7));

// 2. Factorial of n

// function factorial(n) {

//     let fact = 1;

//     if (n <= 1) {
//         return 1;
//     }
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// }

// console.log(factorial(4));
// console.log(factorial(5));


// isPrime number

// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function isPrime2(n) {

//     if (n === 1) {
//         return false;
//     }

//     let count = 0;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (i * j === n) {
//                 count++;
//             }
//         }
//     }
//     return count <= 2;
// }

// console.log(isPrime(12));
// console.log(isPrime(23));