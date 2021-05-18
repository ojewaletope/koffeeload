import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Coffee } from '../../interfaces/interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item: Coffee;
  topSelling: Coffee[];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      this.getData(param.id);
    });
    this.getTopSelling();
  }

  getData(id: number) {
    return this.dataService.getSingleData(id).subscribe((data) => {
      this.item = data;
    });
  }
  getTopSelling() {
    return this.dataService.getData().subscribe((data) => {
      this.topSelling = data;
    });
  }

  back() {
    this.location.back();
  }
}
