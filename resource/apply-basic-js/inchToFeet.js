function inchToFeet(inch) {
    const feet = inch / 12
    return feet
}
const senior = [156, 288, 300]

const nanaFeet = inchToFeet(senior[0])
console.log(nanaFeet)
const naniFeet = inchToFeet(288)
console.log(naniFeet)
const dadiFeet = inchToFeet(300)
console.log(dadiFeet)

// with arrow function ................
const inchToFeet2 = (inch) => {
    const fit = inch / 12
    return fit
}
// or .............
const inchToFeet3 = (inch) => inch / 12

console.log(inchToFeet3(60))
