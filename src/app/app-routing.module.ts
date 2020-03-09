import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { PersonlistComponent } from './modules/personlist/personlist.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'default',
    component: DashboardComponent
  },{
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
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
