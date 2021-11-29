//function for placing an order
var form = document.getElementById("orders");
var fNameElement = document.getElementById("yourname");
var pizzaCrustElement = document.getElementById("pizza-crust");
var pizzaSizeElement = document.getElementById("pizza-size");
var pizzaToppingsElement = document.getElementById("pizza-toppings");
var pizzaNumberElement = document.getElementById("pizza-number");
var confirmOrderElement = document.getElementById("confirmOrder");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInput();
  e.target.reset();
});

var orders= [];

function checkInput() {
  var fName= fNameElement.value;
  var pizzaCrust = pizzaCrustElement.value;
  var pizzaSize = pizzaSizeElement.value;
  var pizzaToppings = pizzaToppingsElement.value;
  var pizzaNumber = pizzaNumberElement.value;
  var crustCost;
  if (pizzaSize == "Small") {
    crustCost = 300;
  } else if (pizzaSize == "Medium") {
    crustCost = 350;
  } else if (pizzaSize == "Large") {
    crustCost = 450;
  }
  var toppingCost;
  if (pizzaSize == "Small") {
    toppingCost = 250;
  } else if (pizzaSize == "Medium") {
    toppingCost = 300;
  } else if (pizzaSize == "Large") {
    toppingCost = 400;
  } 
  orders.push({
      fName: fName,
      pizzaCrust: pizzaCrust,
      pizzaSize: pizzaSize,
      pizzaToppings: pizzaToppings,
      pizzaNumber: pizzaNumber,
      crustCost: crustCost,
      toppingCost: toppingCost,
  });
  console.log(orders);
  update();
};

function update() {
  var table= $("#table");
  table.find("tbody").html("");
  orders.forEach (function(order){
    table.find("tbody").append(`<tr>
    <td>${order.fName}</td>
    <td>${order.pizzaNumber}</td>
    <td>${order.pizzaSize}</td>
    <td>${order.pizzaToppings}</td>
    <td>${order.pizzaCrust}</td>
    <td>${parseInt((order.crustCost)+parseInt(order.toppingCost))*parseInt(order.pizzaNumber)}</td>
  </tr>`)
  });
}

checkout.addEventListener("click", function(e){
  e.preventDefault();

  checkOut();
})

function checkOut(){
  var q1= prompt("Would you like your pizza to be delivered to you?");
  if(q1=="yes"){
    var q2= prompt("Please enter your location: ")
    console.log(q2);
  }else{
    console.log("Your order will take approxiamately 30 minutes to get to you. Thank you and have a great day.")
  }
}