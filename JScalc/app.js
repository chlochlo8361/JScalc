const sellingPrice = document.querySelector('#amount')
const shippingCost = document.querySelector('#interest')
const investmentCost = document.querySelector('#years')
const profitElement = document.querySelector('#profit')
// const breakEvenNum = document.querySelector('#break-even')

// Event Listeners
const calculateProfit = document.querySelector('.btn').addEventListener('click', calculateP)
const calculateShipping = document.querySelector('.btn2').addEventListener('click', calculateS)
const calculateInvestment = document.querySelector('.btn3').addEventListener('click', calculateI)
const calculateSellingPrice = document.querySelector('.btn4').addEventListener('click', calculateSellP)
// const calculateBreakEvenNum = document.querySelector('.btn5').addEventListener('click', calculateBreakE)


// Functions
function calculateP() {
    let profit = (Number(sellingPrice.value) - (Number(shippingCost.value)))
    profitElement.value = profit

    // document.getElementById('profit').onclick = function() {
    //     document.profit.value.style.color = 'green';
    // }

 
}

function calculateS() {
    let shipping = (Number(sellingPrice.value) - Number(profitElement.value)) - (Number(investmentCost.value))
    shippingCost.value = shipping

    
}

function calculateI() {
    let investment = (Number(sellingPrice.value) - Number(profitElement.value)) - (Number(shippingCost.value))
    investmentCost.value = investment

    
}

function calculateSellP() {
    let sellP = Number(profitElement.value) + Number(investmentCost.value) + (Number(shippingCost.value))
    sellingPrice.value = sellP

    
}

// function calculateBreakE() {
//     let breakEvenNum = Number(investmentCost.value)/(Number(sellingPrice.value))
//     console.log(breakEvenNum)
//     calculateBreakEvenNum.value = breakEvenNum
    
    
// }