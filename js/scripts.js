 
  //function for placing an order
  var form= document.getElementsById("forms");
  var name= document.getElementById("yourname");
  var pizzaCrust= document.getElementById("pizza-crust");
  var pizzaSize=  document.getElementById("pizza-size");
  var pizzaToppings= document.getElementById("pizza-toppings");
  var pizzaNumber= document.getElementById("pizza-number");
  var confirmOrder= document.getElementById("confirmorder");

  form.addEventListener("confirmOrder",(e) => {
      e.preventDefault();

        checkInput();
    });
  
    function checkInput(){
      var name= name.value();
      var pizzaCrust= pizzaCrust.value();
      var pizzaSize= pizzaSize.value();
      var pizzaToppings= pizzaToppings.value();
      var pizzaNumber= pizzaNumber.value();
      var crustCost;
          if("pizzaCrust===small"){
            crustCost= 300;   
        }else if("pizzaCrust===medium"){
            crustCost= 350;
        }else if("pizzaCrust===large"){
            crustCost= 450;
        }
      var toppingCost;
          if("pizzaToppings===small"){
              toppingCost= 250;
          }else if("pizzaToppings===medium"){
              toppingCost= 300;
          }else if("pizzaToppings===large"){
              toppingCost= 400;
          }
    }

    
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

    //prevent client from making another order
        $('#placeorder').prop('disabled', true); 
        $("#yourorder").show();
        var price = (sizeCost + crustCost + toppingsCost);
        var totalPrice = parseInt(price * number);
        $(".salutation").text("Hey" + " " + name + ". Here's your order:");
        $(".pizza-size").append('<tr><td id="pizza-size">' + size);
        $(".number").append('<tr><td id="number">' + number);
        $(".pizza-crust").append('<tr><td id="pizza-crust">' + crust);
        $(".pizzaTotal1").append('<tr><td id="pizzaTotal1">' + totalPrice);
        arrayTotal.push(totalPrice); 
        if (toppings == "") {
            $(".toppings").append('<tr><td id="pizza-toppings">' + "-");
        }
        if (toppings != "") {
            $(".toppings").append('<tr><td id="pizza-toppings">' + toppings);
        }
        $(".name").text(name);
  