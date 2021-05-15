import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../../interfaces/interface';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: Coffee;
  constructor() {}

  ngOnInit() {}
}
