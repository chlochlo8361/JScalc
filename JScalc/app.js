const sellingPrice = document.querySelector('#amount')
const shippingCost = document.querySelector('#interest')
const investmentCost = document.querySelector('#years')

// Event Listeners
const calculateBtn = document.querySelector('.btn').addEventListener('click', calculate)


// Functions
function calculate() {
    console.log(sellingPrice.value - shippingCost.value)
}