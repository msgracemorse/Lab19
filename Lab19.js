//create an array to hold items in shopping cart
var cart = [];

//function to generate objects
var Item = function (name, price){
   this.name = name;
   this.price = price;
   }

//function to add to Cart
function addToCart (name, price){
  var item = new Item (name, price)
  cart.push(item); //adds item to array
  console.log(cart);
}


function displayItemizedCart(){
  for (var i=0; i<cart.length; i++){
    console.log(cart[i]); // gets each item in array and print to console
  }
}

function displayTotalCart(){
  var totalCost = 0;
  for (var i in cart){
      totalCost += cart[i].price;
  }
  console.log (totalCost);
}
