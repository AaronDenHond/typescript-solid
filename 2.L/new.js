"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* import {Discount} from "./classes/Discount"; until needed*/
var NoDiscount_1 = require("./classes/NoDiscount");
var FixedDiscount_1 = require("./classes/FixedDiscount");
var VariableDiscount_1 = require("./classes/VariableDiscount");
var Shoppingbasket_1 = require("./classes/Shoppingbasket");
var Product_1 = require("./classes/Product");
/* type discountType = "variable" | "fixed" | "none"; we refactored this, no more need*/
var cart = new Shoppingbasket_1.ShoppingBasket();
cart.addProduct(new Product_1.Product('Chair', 25, new FixedDiscount_1.FixedDiscount(10)));
//cart.addProduct(new Product('Chair', 25, new DiscountOld("fixed", -10)));
cart.addProduct(new Product_1.Product('Table', 50, new VariableDiscount_1.VariableDiscount(25)));
cart.addProduct(new Product_1.Product('Bed', 100, new NoDiscount_1.NoDiscount()));
var tableElement = document.querySelector('#cart tbody');
cart.products.forEach(function (product) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);
    console.log(product);
    tableElement.appendChild(tr);
});
