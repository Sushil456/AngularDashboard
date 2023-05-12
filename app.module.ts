import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatdashboardComponent } from './components/matdashboard/matdashboard.component';
import { MatdashComponent } from './components/matdash/matdash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GrafanadashComponent } from './components/grafanadash/grafanadash.component';
import { ManualCardComponent } from './components/manual-card/manual-card.component';
import { ExcelComponent } from './components/excel/excel.component';
import { NgChartComponent } from './components/ng-chart/ng-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { ApiDataComponent } from './components/api-data/api-data.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MatdashboardComponent,
    MatdashComponent,
    GrafanadashComponent,
    ManualCardComponent,
    ExcelComponent,
    NgChartComponent,
    ApiDataComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
