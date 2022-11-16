// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // The subtotal price = price*quantity

  const priceElement = document.querySelector(".price span")
  const quantityElement = document.querySelector(".quantity input")

  const price = priceElement.innerHTML   
  const quantity = quantityElement.value

  const finalPrice = +(price * quantity)

  const subtotalPrice = document.querySelector(".subtotal span")
  subtotalPrice.innerHTML = finalPrice

  // this was me playing with it to understand better 
  /* const nameElement = document.querySelector(".name span")
  const name = nameElement.innerHTML
  console.log("The total value of the " + name + " is " + finalPrice + "$") */

  return  finalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  const productElements = document.getElementsByClassName("product")


  for (let i = 0; i < productElements.length; i++) {
    updateSubtotal(productElements[i])
  }
  
  for (let i=0; i<productElements.length; i++) {
    let total = 0
    let subtotalPrice = productElements[i].querySelector(".subtotal span")
    let subtotal = Number(subtotalPrice.innerHTML)
    total = total + subtotal
  }

  // ITERATION 3
  //... your code goes here
  const totalText = document.querySelector("#total-value span")
  totalText.innerHTML = total;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
