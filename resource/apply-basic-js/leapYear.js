function isLeapYear(year) {
    const remainder = year % 4
    if (remainder == 0) {
        return true
    } else {
        return false
    }
}

const check2000 = isLeapYear(1700)
console.log(check2000)

// using arrow function ..........
const ly = (y) => {
    if (y % 4 == 0) console.log('leafYear...')
    else console.log('not a leafYear...')
}

ly(10)
