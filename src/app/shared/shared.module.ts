import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { NgxContentLoadingModule } from "ngx-content-loading";
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { NetworkErrorComponent } from './components/network-error/network-error.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    CardLoaderComponent,
    LoadingPlaceholderComponent,
    NetworkErrorComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule,
    HighchartsChartModule,
    FlexLayoutModule,
    NgxContentLoadingModule

  ],
  exports:[
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    CardLoaderComponent,
    NetworkErrorComponent
  ]
})
export class SharedModule { }
