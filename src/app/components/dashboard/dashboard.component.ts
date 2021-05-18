import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../interfaces/interface';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: Coffee[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    return this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
