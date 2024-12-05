"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this.items = []; // Array of Item objects that will be displayed in the cart view
    }
    // Method to add an item to the cart
    addItem(item) {
        const existingItemIndex = this.items.findIndex(i => item.id === i.id);
        // Check if the item already exists in the cart
        if (!existingItemIndex) {
            this.items[existingItemIndex].quantity += item.quantity;
        }
        else {
            this.items.push(item);
        }
    }
    // Method to remove an item from the cart
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }
    calculateTotalPrice() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    // Method to display the items in the cart
    displayCart() {
        if (this.items.length === 0) {
            console.log("Cart is empty");
            return;
        }
        else {
            console.log("Items In Cart");
            this.items.forEach((item) => {
                console.log(`ID:${item.id} , Name:${item.name} , Price:${item.price} , Quantity:${item.quantity}`);
            });
        }
    }
}
exports.ShoppingCart = ShoppingCart;
// Example usage
