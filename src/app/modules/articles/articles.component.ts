import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public person = [];
  public errorMsg;
  constructor( private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getEmployees().subscribe(data =>
      this.person = data,
      error => this.errorMsg = error)
  }

}
