function fibonacci(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

var result = fibonacci(10)
console.log(result)

// es6..........

const fibo = (i) => {
    0 ? i == 0 : 1 ? i == 1 : fibo(i - 1) + fibo(i - 2)
}

console.log(fibo(10))
