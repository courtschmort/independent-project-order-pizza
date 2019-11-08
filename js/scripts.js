// BACK-END LOGIC

function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 8
}

Pizza.prototype.totalPrice = function() {
  this.toppings.forEach(function(topping) {
    this.price += 1;
  });
  if (this.size === "Large") {
    this.price += 8;
  } else if (this.size === "Medium") {
    this.price += 6;
  } else {
    return this.price;
  }
});

// FRONT-END LOGIC
