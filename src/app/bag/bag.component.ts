import { Component } from '@angular/core';
import { ShoppingBagService } from '../shopping-bag.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.css',
})
export class BagComponent {
  cartItems: any[] = [];
  selectedSize: { [key: number]: string } = {};
  total: number = 0;
  constructor(private shoppingbag: ShoppingBagService) {}

  ngOnInit(): void {
    this.cartItems = this.shoppingbag.getCartItems();
    this.total = this.shoppingbag.getTotalPrice();
  }

  freeShipping(): boolean {
    return this.total > 50;
  }
}
