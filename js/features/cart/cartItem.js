export default class CartItem {
  constructor(cartItem) {
    this.id = cartItem.id;
    this.title = cartItem.title;
    this.price = cartItem.price;
    this.image = cartItem.image;
    this.quantaty = 1;
    this.total = this.price;
  }
  calculateTotal = function () {
    this.total = (Number(this.price) * Number(this.quantaty)).toFixed(2);
  }
}
