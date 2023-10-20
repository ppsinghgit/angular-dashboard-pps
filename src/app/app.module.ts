import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChartsComponent } from './charts/charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {
  IgxCategoryChartModule,
  IgxDataChartCategoryModule,
  IgxDataChartInteractivityModule,
  IgxDataChartStackedModule,
  IgxDataLegendModule,
  IgxStackedFragmentSeriesModule,
} from 'igniteui-angular-charts';

@NgModule({
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxDataLegendModule,
    IgxCategoryChartModule,
    IgxDataChartCategoryModule,
    IgxDataChartInteractivityModule,
    IgxDataChartStackedModule,
    IgxStackedFragmentSeriesModule,
    IgxCategoryChartModule,
  ],
  declarations: [AppComponent, HelloComponent, ChartsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
