import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../interfaces/interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: Coffee[] = [];
  constructor() {}

  ngOnInit() {
    this.data = [
      {
        name: 'Cappuccino',
        price: 20,
        img: 'assets/img/capuccino.png',
      },
      {
        name: 'C. Macchiatto',
        price: 20,
        img: 'assets/img/macchiatto.png',
      },
      {
        name: 'Corretto',
        price: 25,
        img: 'assets/img/correto.png',
      },
    ];
  }
}
