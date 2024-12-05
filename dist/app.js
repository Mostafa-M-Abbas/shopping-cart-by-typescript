"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shoppingCart_class_1 = require("./classes/shoppingCart.class");
const cart = new shoppingCart_class_1.ShoppingCart();
// Adding items to the cart
cart.addItem({ id: 1, name: "Apple", price: 0.5, quantity: 4 });
cart.addItem({ id: 2, name: "Banana", price: 0.3, quantity: 6 });
cart.addItem({ id: 3, name: "Orange", price: 0.8, quantity: 3 });
// Display items
cart.displayCart();
// Remove an item
cart.removeItem(2);
// Display items after removal
cart.displayCart();
// Calculate the total price
const totalPrice = cart.calculateTotalPrice();
console.log(`Total Price: $${totalPrice.toFixed(2)}`);
