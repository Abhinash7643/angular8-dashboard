import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { ArticlesComponent } from './articles/articles.component';
import { PersonlistComponent } from './personlist/personlist.component';


export const DashbordRoute: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "dashbord",
        component: DashboardComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'articles',
        component: ArticlesComponent
      },
      {
        path: 'personlist',
        component: PersonlistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DashbordRoute)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
