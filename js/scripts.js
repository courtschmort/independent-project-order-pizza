// BACK-END LOGIC

function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 10
}

Pizza.prototype.totalPrice = function() {
  for (i = 0; i < this.toppings.length; i ++) {
    this.price += 1;
  }
  if (this.size === "large") {
    this.price += 5;
  } else if (this.size === "small") {
    this.price -= 5;
  }
  return this.price;
}

// FRONT-END LOGIC
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();

    var size = $("input:radio[name=size]:checked").val();

    var toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      toppingsArray.push(toppings);
    });

    var pizza = new Pizza(size, toppingsArray);

    var total = pizza.totalPrice();

    if (name != "") {
      $("#output").show();
      $(".name").text(name);
      $(".total").text("$" + total.toFixed(2));
      $(".size").text(size);
    } else {
      alert("Please enter your name.");
    };

    var elmnt = document.getElementById("output");
    elmnt.scrollIntoView();

  });
});
