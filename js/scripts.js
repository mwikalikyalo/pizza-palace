//function for placing an order
function placeOrder() { 
  //get inputs from form
  var name = capitalize_inputs($("input#name").val());
  var size = $("#pizza-size").val();
  var crust = $("#pizza-crust").val();
  var toppings = [];
  $.each($('input[name="toppings"]:checked'),
      function() {
          toppings.push($(this).val());
      });
  var number = $("#pizza-number").val();
  
  //size prices
  var sizeCost; 
      if (size === "Small") {
          sizeCost = 400;
      }else if (size === "Medium") {
          sizeCost = 600;
      }else if (size === "Large") {
          sizeCost = 800;
      };

  //crust prices
  var pricesCrust; 
      if (crust === "stuffed crust") {
          crustCost = 550;
      }else if (crust === "thin crust") {
          crustCost = 350;
      }else if (crust === "cracker crust") {
          crustCost = 500;
      }else if (crust === "pan pizza crust") {
          crustCost = 400;
      }else if (crust === "thick crust") {
          crustCost = 650;
      }else if (crust === "flat bread crust") {
          crustCost = 450;
      };

  //toppings
  var pricesToppings;
      if(toppings === "pepperoni and garlic") {
          toppingCost = 150;
      }else if (toppings === "mushrooms and green peppers"){
          toppingCost = 150;
      }else if (toppings === "bacon and cheddar cheese"){
          toppingCost = 350;
      }else if (toppings = "chicken periperi and mozarella cheese"){
          toppingCost = 300;
      }else if (toppings = "beef barbeceque and parmesan cheese"){
          toppingCost = 200;
      }else if (toppings = "Hawaian(Pineapples) and sausages"){
          toppingCost = 250;
      };
    