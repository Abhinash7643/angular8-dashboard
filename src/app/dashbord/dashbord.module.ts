import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { PersonlistComponent } from './personlist/personlist.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardService } from '../shared/service/dashboard.service';
import { ArticleService } from '../shared/service/article.service';
import { PersonService } from '../shared/service/person.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ArticlesComponent,
    PersonlistComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashbordRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
  ],
  providers:[
    DashboardService,
    ArticleService,
    PersonService
  ]
})
export class DashbordModule { }
