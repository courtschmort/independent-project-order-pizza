// BACK-END LOGIC

function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 10
}

Pizza.prototype.totalPrice = function() {
  this.toppings.forEach(function(topping) {
    this.price += 1;
  });
  if (this.size === "Large") {
    this.price += 5;
  } else if (this.size === "Small") {
    this.price -= 5;
  } else {
    return this.price;
  }
});

// FRONT-END LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


  })
})
