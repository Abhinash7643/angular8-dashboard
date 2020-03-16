import { Injectable } from '@angular/core';
import { IPerson } from '../models/IPerson';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  person: IPerson[];
  public errorMsg;
  constructor(private dashboardService : DashboardService) { }

  getAllPerson(): IPerson[]{
     this.dashboardService.getPerson().subscribe(data =>this.person = data);
     return this.person;
  }
}
