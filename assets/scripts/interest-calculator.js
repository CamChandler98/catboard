
const interestCalculator = (amount, rate) => {
    return amount += amount*rate
}


const getYearlyValue = (currentYear,stopYear,rate, intitalAmount, expenses) => {

    let dataPoints = []

    let amount = intitalAmount

    for(let i = currentYear; i <= stopYear ; i++ ){
        let newAmount = Math.round(interestCalculator((amount - expenses),rate))
        dataPoints.push(newAmount)
        amount = newAmount
    }

    return dataPoints
}

export default getYearlyValue
// module.exports = getYearlyValue
