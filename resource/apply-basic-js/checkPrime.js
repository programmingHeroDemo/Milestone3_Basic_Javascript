// function isPrime(n) {
//     for (i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return 'Not a prime number';
//         }
//     }
//     return 'Your Number is a Prime Number';
// }
// var result = isPrime(10);
// console.log(result);

// es6 ........

const num = (n) => {
    for (i = 2; i < n; i++)
        if (n % i == 0) return 'not a prime'
        else return 'prime'
}
console.log(num(9))
