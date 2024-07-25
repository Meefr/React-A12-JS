import CartItem from "../cart/cartItem.js";
import { cartList } from "../../shares/ui/dom-elements.js";

export default class CartManager {
  constructor() {
    this.cartItems = [];
    this.#handelToggleCart();
    this.#loadCart();
  }

  #handelToggleCart = function () {
    $("#cart-btn").on("click", function () {
      $("#cart-element").css("right", "0px");
    });
    $("#close-btn").on("click", function () {
      $("#cart-element").css("right", "-100%");
    });
  };
  #loadCart = function () {
    cartList.html(
      this.cartItems
        .map((item, index) => {
          return `<div class="d-flex justify-content-around align-items-center gap-2 position-relative p-4 border">
          <div class="position-absolute top-0 start-0  d-flex justify-content-center align-items-center"
          style="width: 30px; height: 30px; cursor:pointer;">
          <i class="fa-solid fa-xmark icon close-icon" data-product='${JSON.stringify(
            index
          )}'></i>
          </div>
          <div class="w-25">
           <img class="w-100"  src="${item.image}" alt="">
         </div>
                <div class="d-flex flex-column gap-2 justify-content-center align-items-center flex-wrap">
                  <h5 class="m-0">${item.title}</h5>
                  <p class="m-0">Price: <span>${item.quantity}</span> x <span>${
            item.price
          }</span> : <span>${item.total}</span></p>
                </div>
                <div class="d-flex flex-row flex-md-column gap-3 justify-content-center align-items-center flex-wrap">
                  <i class="fa-solid fa-up-long icon add-icon" style="cursor:pointer;" data-product='${JSON.stringify(
                    index
                  )}'></i>
                  <i class="fa-solid fa-down-long icon decrease-icon" style="cursor:pointer;" data-product='${JSON.stringify(
                    index
                  )}'></i>
                </div>
              </div>`;
        })
        .join("")
    );
  };

  //add to cart
  addToCart = function (product) {
    let index = this.cartItems.findIndex((item) => item.id === product.id);
    if (index === -1) {
      let cartItem = new CartItem(product);
      cartItem.calculateTotal();
      this.cartItems.push(cartItem);
    } else {
      this.cartItems[index].quantaty++;
      this.cartItems[index].calculateTotal();
    }
    this.#loadCart();
  };
  //delete
  deleteFromCart = function (index) {
    try {
      if (index === -1) {
        throw new Error("no product to delete");
      } else {
        this.cartItems.splice(index, 1);
      }
    } catch (e) {
      console.log(e);
    }
    this.#loadCart();
  };
  //increase
  increase = function (index) {
    try {
      if (index === -1) {
        throw new Error("no product to delete");
      } else {
        this.cartItems[index].quantaty++;
        this.cartItems[index].calculateTotal();
      }
    } catch (e) {
      console.log(e);
    }
    this.#loadCart();
  };

  //decrease
  decrease = function (index) {
    try {
      if (index === -1) {
        throw new Error("no product to delete");
      } else {
        this.cartItems[index].quantaty--;
        this.cartItems[index].calculateTotal();
        if (this.cartItems[index].quantaty <= 0) {
          this.cartItems.splice(index, 1);
        }
      }
    } catch (e) {
      console.log(e);
    }
    this.#loadCart();
  };
}

//cartItem
