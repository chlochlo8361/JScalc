const sellingPrice = document.querySelector('#amount')
const shippingCost = document.querySelector('#interest')
const investmentCost = document.querySelector('#years')
const profitElement = document.querySelector('#profit')
const breakEvenNum = document.querySelector('#break-even')

// Event Listeners
const calculateProfit = document.querySelector('.btn').addEventListener('click', calculateP)
const calculateShipping = document.querySelector('.btn2').addEventListener('click', calculateS)
const calculateInvestment = document.querySelector('.btn3').addEventListener('click', calculateI)
const calculateSellingPrice = document.querySelector('.btn4').addEventListener('click', calculateSellP)
const calculateBreakEvenNum = document.querySelector('.btn5').addEventListener('click', calculateBreakE)


// Functions
function calculateP(e) {
    let profit = (Number(sellingPrice.value) - (Number(shippingCost.value)))
    profitElement.value = profit

    // document.getElementById('profit').onclick = function() {
    //     document.profit.value.style.color = 'green';
    // }

    e.preventDefault()
}

function calculateS(e) {
    let shipping = (Number(sellingPrice.value) - Number(profitElement.value)) - (Number(investmentCost.value))
    shippingCost.value = shipping

    e.preventDefault()
}

function calculateI(e) {
    let investment = (Number(sellingPrice.value) - Number(profitElement.value)) - (Number(shippingCost.value))
    investmentCost.value = investment

    e.preventDefault()
}

function calculateSellP(e) {
    let sellP = Number(profitElement.value) + Number(investmentCost.value) + (Number(shippingCost.value))
    sellingPrice.value = sellP

    e.preventDefault()
}

function calculateBreakE(e) {
    let breakEvenNum = Number(investmentCost.value)/(Number(profitElement.value))
    calculateBreakEvenNum.value = breakEvenNum

    e.preventDefault()
}