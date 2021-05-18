import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../interfaces/interface';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  data: Coffee[] = [];
  constructor(private dataService: DataService, private location: Location) {}

  ngOnInit() {
    this.getShopData();
  }
  getShopData() {
    return this.dataService.getShopData().subscribe((data) => {
      this.data = data;
    });
  }
  back() {
    this.location.back();
  }
}
