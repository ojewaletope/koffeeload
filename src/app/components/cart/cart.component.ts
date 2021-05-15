import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  openCart() {
    this.router.navigateByUrl('/home/cart-details');
  }
}
