// function factorial(n) {
//     var fact = 1
//     for (var i = 1; i <= n; i++) {
//         fact = fact * i
//     }
//     return fact
// }

// var result = factorial(6)
// console.log(result)

// es6.............

const factorial2 = (n) =>
    n < 0
        ? (() => {
              throw new TypeError('Negative numbers are not allowed!')
          })()
        : n <= 1
        ? 1
        : n * factorial2(n - 1)

console.log(factorial2(3))


const factorial3 = (integer) => (integer ? integer * factorial3(integer - 1) : 1)

console.log(factorial3(3))
