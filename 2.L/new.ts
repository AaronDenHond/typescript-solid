/* import {Discount} from "./classes/Discount"; until needed*/
import {NoDiscount} from "./classes/NoDiscount";
import {FixedDiscount} from "./classes/FixedDiscount";
import {VariableDiscount} from "./classes/VariableDiscount";
import {ShoppingBasket} from "./classes/Shoppingbasket";
import {Product} from "./classes/Product";

/* type discountType = "variable" | "fixed" | "none"; we refactored this, no more need*/

let cart = new ShoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount( 10)));
//cart.addProduct(new Product('Chair', 25, new DiscountOld("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));

const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
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
    tableElement!.appendChild(tr);
});