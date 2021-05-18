import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../../interfaces/interface';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: Coffee;
  items: Coffee[] = [];
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}

  viewData(id: number) {
    this.router.navigate(['/home/details'], {
      queryParams: {
        id: id,
      },
    });
  }

  addToCart(item: Coffee, event) {
    event.stopPropagation();
    this.dataService.addItems(item).then(() => {
      this.dataService.addToCart.emit(item);
    });
    // this.storage.set('product', id).then(() => {
    //   this.dataService.addToCart.emit(id);
    // });
  }
}
