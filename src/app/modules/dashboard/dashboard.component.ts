import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'
import { IPerson } from '../IPerson';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource: MatTableDataSource<IPerson>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data: IPerson[];
  public errorMsg;

  displayedColumns: string[] = ['id', 'name', 'email', 'branch'];
  constructor( private dashboardService : DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getPerson().subscribe(data =>
      this.dataSource = new MatTableDataSource(data),
      error => this.errorMsg = error)
      console.log('data',this.data);
      console.log('datasource',this.dataSource);
      this.dataSource.paginator = this.paginator;
  }

}
