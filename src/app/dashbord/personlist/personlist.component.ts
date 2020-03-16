import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { IPerson } from '../../shared/models/IPerson';
import {MatTableDataSource} from '@angular/material/table';
import { PersonService } from '../../shared/service/person.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.scss']
})
export class PersonlistComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  data: IPerson[];
  public errorMsg;

  displayedColumns: string[] = ['id', 'name', 'email', 'branch'];
  dataSource = new MatTableDataSource<IPerson>(this.personService.getAllPerson());
  constructor(private personService : PersonService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



  // ngOnInit() {
  //   this.employee = new Employee();

  //   this.id = this.route.snapshot.params['id'];

  //   this.employeeService.getEmployee(this.id)
  //     .subscribe(data => {
  //       console.log(data)
  //       this.employee = data;
  //     }, error => console.log(error));
  // }

}
