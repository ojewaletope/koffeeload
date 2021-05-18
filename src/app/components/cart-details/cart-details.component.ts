import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Coffee } from '../../interfaces/interface';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
})
export class CartDetailsComponent implements OnInit, OnDestroy {
  cartItems: Coffee[] = [];
  totalSum: any;
  data: Coffee[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getItems().then((data) => {
      this.cartItems = data;
      this.totalSum = this.calculateTotalSum(this.cartItems);
    });
    this.getRecentlyViewed();
  }
  deleteItem(id) {
    console.log(id);
    // const index = this.cartItems.findIndex((item) => {
    //   console.log(item.id);
    //   return item.id === id;
    // });
    // console.log(index);
    this.cartItems.splice(id, 1);
    this.dataService.addItems(this.cartItems).then(() => {
      this.dataService.getItems().then((data) => {
        this.cartItems = data;
        this.totalSum = this.calculateTotalSum(this.cartItems);
      });
    });
  }
  getRecentlyViewed() {
    return this.dataService.getData().subscribe((res) => {
      this.data = res;
    });
  }
  calculateTotalSum(arr) {
    return arr.reduce((total, item: any) => item.price + total, 0);
  }
  ngOnDestroy(): void {
    this.dataService.removeItems();
  }
}
