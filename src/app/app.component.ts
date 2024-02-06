import { Component } from '@angular/core';
import { ShoppingBagService } from './shopping-bag.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'exam1';
  cartCount = 0;

  constructor(private cartService: ShoppingBagService) {}

  ngOnInit() {
    this.cartService.cartUpdated.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }
}
