
function addItem(model,price){
    console.log(model,price)
    
    
 let div = document.getElementById("cart") ;
div.innerHTML = `
<h5>${model}</h5>
<p>${price}</p>
`




}

function sum(number1,number2){
    return number1 + number2
    
} 
console.log(sum(9,5))