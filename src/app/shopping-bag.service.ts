import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingBagService {
  private itemsInCart: any[] = [];
  private total_price: number = 0;

  cartUpdated = new EventEmitter<void>();

  addToCart(product: any) {
    this.itemsInCart.push(product);
    this.total_price += product.price;
    this.cartUpdated.emit();
  }

  getCartItems() {
    return this.itemsInCart.slice();
  }

  getCartCount() {
    return this.itemsInCart.length;
  }

  getTotalPrice() {
    return this.total_price;
  }
}
