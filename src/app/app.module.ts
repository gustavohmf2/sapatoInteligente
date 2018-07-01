import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { routing } from './routingModule';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ClientManagerComponent } from './client-manager/client-manager.component';
import { TriggerManagerComponent } from './trigger-manager/trigger-manager.component';
import { StatisticManagerComponent } from './statistic-manager/statistic-manager.component';
import { HomeComponent } from './home/home.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { TriggerAddComponent } from './trigger-add/trigger-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { UserChartsComponent } from './user-charts/user-charts.component';
import { NotificationComponent } from './notification/notification.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ClientManagerComponent,
    TriggerManagerComponent,
    StatisticManagerComponent,
    HomeComponent,
    ClientAddComponent,
    TriggerAddComponent,
    UserChartsComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    Angular2FontawesomeModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }