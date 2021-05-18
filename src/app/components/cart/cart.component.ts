import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: number[] = [];
  constructor(private router: Router, private dataService: DataService) {
    this.dataService.addToCart.subscribe((res) => {
      this.cartItems.push(res);
      console.log(this.cartItems);
    });
  }

  ngOnInit() {}

  openCart() {
    this.router.navigateByUrl('/home/cart-details');
  }
}
