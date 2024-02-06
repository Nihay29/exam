import { Component } from '@angular/core';
import { ShoppingBagService } from '../shopping-bag.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrl: './men.component.css',
})
export class MenComponent {
  topsMen = [
    {
      id: 1,
      price: 60,
      imageUrl:
        'https://i.pinimg.com/736x/9a/b7/b6/9ab7b6607e441f0971c40a802fc512df.jpg',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      inStock: false,
    },
    {
      id: 2,
      price: 100,
      imageUrl:
        'https://i.pinimg.com/736x/a2/c7/bd/a2c7bd4f3d7ae2e1c83e7e0865d744ba.jpg',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
    },
    {
      id: 3,
      price: 85,
      imageUrl:
        'https://i.pinimg.com/736x/79/88/83/7988830799c3ba6c84d01eceb5e42b5a.jpg',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
    },
  ];

  constructor(private shoppingBag: ShoppingBagService) {}
  addtocart(topsMen: any) {
    this.shoppingBag.addToCart(topsMen);
  }
}
