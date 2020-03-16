import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { DashbordModule } from './dashbord/dashbord.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    SharedModule,
    ProductModule,
    DashbordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
