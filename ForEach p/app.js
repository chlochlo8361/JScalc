document.querySelector('.button').addEventListener('click', loadCustomers)

function loadCustomers(e) {
    const xhr = new XMLHttpRequest()
  
    xhr.open('GET', 'customers.json', true)
  
    xhr.onload = function() {
      if(this.status === 200) {
        // console.log(this.responseText)
  
        const customers = JSON.parse(this.responseText)
  
        let output = ''
  
        customers.forEach(function(customer) {
          output += `
          <ul>
            <div>Name: ${customer.name}</div>
            <div>Payment: ${customer.payment}</div>
            <div>Trip: ${customer.trip}</div>
            <div>Drinks: ${customer.drinks}</div>
          </ul>
        `
        })
        document.querySelector('.info').innerHTML = output
      } 
    }
  
    xhr.send()
  }