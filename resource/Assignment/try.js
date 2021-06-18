// 1. Answer
const KilometerToMeter = (m) => m * 1000

KilometerToMeter(10)

// 2. Answer
const budgetCalculator = (total_ghori, total_phone, total_laptop) =>
    total_ghori * 50 + total_phone * 100 + total_laptop * 500

budgetCalculator(10, 5, 1)

// 3. Answer
let cost,
    cost2,
    cost3 = 0

const hotelCost = (total_days) => {
    if (total_days <= 10) {
        // console.log(total_days)
        cost = cost2 + total_days * 100
        return cost
    } else if ((total_days > 10) & (total_days <= 20)) {
        // console.log(total_days, total_days - 10)
        cost2 = cost3 + (total_days - 10) * 80
        return hotelCost(10)
    } else if (total_days > 20) {
        // console.log(total_days, total_days - 20)
        cost3 = (total_days - 20) * 50
        return hotelCost(20)
    }
}

hotelCost(29)

// 4. Answer
const megaFriend = (arg) => {
    var maxlen = 0
    for (i = 0; i < arg.length; i++) {
        if (arg[i].length > maxlen) {
            maxlen = arg[i].length
        }
    }
    return maxlen
}

megaFriend(['a', 'abcde', 'ab'])
