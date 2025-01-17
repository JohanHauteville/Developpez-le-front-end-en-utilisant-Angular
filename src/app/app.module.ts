import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartNgxComponent } from './pie-chart-ngx/pie-chart-ngx.component';
// import { LineChartComponent } from '@swimlane/ngx-charts'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './detail/detail.component';
import { LineChartNxComponent } from './line-chart-nx/line-chart-nx.component';
import { NotificationComponent } from './notification/notification.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, PieChartComponent, PieChartNgxComponent, DetailComponent, LineChartNxComponent, NotificationComponent],
  imports: [BrowserModule,BrowserAnimationsModule , AppRoutingModule, HttpClientModule, NgChartsModule, NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
