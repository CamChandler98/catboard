import getYearlyValue from "./interest-calculator.js"
// const getYearlyValue = require ("./interest-calculator")


const getYear = () => {
    return new Date().getFullYear()
}

const genLabels = (stopYear) =>{
    let sLabels = []

    for(let i = getYear(); i <= stopYear; i++){
        sLabels.push(String(i))
    }
    return sLabels
}

let defaultState = {
    currentYear:  getYear(),
    stopYear: getYear() + 40,
    rate: .02,
    initalAmount: 1000000,
    expenses: 5000
}

let state = {...defaultState}
console.log('getting default')
let defaultDataPoints = getYearlyValue(defaultState.currentYear,defaultState.stopYear,defaultState.rate,defaultState.initalAmount,defaultState.expenses)
console.log('got default')

let data = {
    type: 'line',
    data:{

        labels:genLabels(defaultState.stopYear),
        datasets : [{
            label: 'Yearly Cuteness',
            data: defaultDataPoints,
            // fill = false,
            borderColor: 'rgb(75,192,192)',
            tension: 0
        }]
    },
    options:{
        responsive: true,
        // aspectRatio: 3,
        maintainAspectRatio: false,
        scales:{
            xAxes:[{
                // type:'time',

                time:{
                    unit: 'year'
                }
            }]
        }
    }
}

const updateData = (chart) => {
    let newData = getYearlyValue(state.currentYear,state.stopYear,state.rate,state.initalAmount,state.expenses)
    console.log(chart)
    chart.data.labels = genLabels(state.stopYear)
    chart.data.datasets[0].data = newData
    console.log(chart)
    chart.update()
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('going to try')

    let canvas = document.querySelector('#line-graph')
    let lineGraph = new Chart(canvas,data)

    // let fModal = document.querySelector('#forecastModal')
    let forecastForm = document.querySelector('#forecastForm')
    let expenseRange = document.querySelector('#expenseRange')
    let yearIncrementBttns = document.querySelectorAll('input[name="forecastLength"]')
    console.log(yearIncrementBttns)
    let rate = document.querySelector('#rateRange')


    const updateLength = (e) => {
        let length = parseInt(e.target.value)
        state = {...state, stopYear: (getYear() + length)}
        console.log(state)
    }

    yearIncrementBttns.forEach(el => {
        el.addEventListener('input', updateLength)
    })
    expenseRange.addEventListener('input' , (e) =>{
        let value = e.target.value
        let label = document.querySelector('#expenseInputLabel')
        label.innerText = value
        state = {...state, expenses: parseInt(value)}
        console.log(state)

    })

    rate.addEventListener('input', e => {
        let value = parseFloat( e.target.value);
        let label = document.querySelector('#rateInputLabel')
        label.innerText = (value * 100).toFixed(2) + '%'

        state = {...state, rate: value}
        console.log(state)

    } )


    forecastForm.addEventListener('submit', async e => {
        e.preventDefault()

        $('#forecastModal').modal('hide')
        updateData(lineGraph)

    })
})
