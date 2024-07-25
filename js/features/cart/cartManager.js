export default class CartManager {
  constructor() {
    this.cartItems = [];
    this.#handelToggleCart();
  }

  #handelToggleCart = function () {
    $("#cart-btn").on("click", function () {
      $("#cart-element").css("right", "0px");
    });
    $("#close-btn").on("click", function () {
      $("#cart-element").css("right", "-100%");
    });
  };

  //add to cart
  //delete
  //increase
  //decrease
}

//cartItem
