import { Component } from '@angular/core';
import { ShoppingBagService } from '../shopping-bag.service';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrl: './women.component.css',
})
export class WomenComponent {
  itemsinbag = 0;
  topsWomen = [
    {
      id: 1,
      price: 65,
      imageUrl:
        'https://i.pinimg.com/564x/8c/cf/84/8ccf841ffe4934b3e927643f3ba24998.jpg',
      size: ['XS', 'S', 'M', 'L'],
      inStock: true,
    },
    {
      id: 2,
      price: 95,
      imageUrl:
        'https://i.pinimg.com/564x/6b/c9/9b/6bc99b6cec7699802449be99d31d5c78.jpg',
      size: ['XS', 'S', 'M', 'L', 'XL'],
      inStock: true,
    },
    {
      id: 3,
      price: 79,
      imageUrl:
        'https://i.pinimg.com/564x/d9/c1/a7/d9c1a7f8cbc775dab4426d5b8f3a019e.jpg',
      size: ['XS', 'S', 'M', 'L', 'XL'],
      inStock: true,
    },
  ];

  constructor(private shoppingBag: ShoppingBagService) {}
  addtocart(topsWomen: any) {
    this.shoppingBag.addToCart(topsWomen);
  }
}
