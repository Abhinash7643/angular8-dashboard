import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



export const AppRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				loadChildren: () => import('./layout/default.module').then(m => m.DefaultModule)
			},
			{
				path: 'products',
				loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
				path: 'dashboard',
				loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule)
			}
		]
	}
];


// const routes: Routes = [{
//   path: '',
//   component: LandingComponent,
//   children: [{
//     path: '',
//     component: DashboardComponent
//   },
//   {
//     path: 'default',
//     component: DefaultComponent
//   },{
//     path: 'posts',
//     component: PostsComponent
//   },
//   {
//     path: 'articles',
//     component: ArticlesComponent
//   },
//   {
//     path: 'personlist',
//     component: PersonlistComponent
//   }]
// }];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
