import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientManagerComponent } from './client-manager/client-manager.component';
import { TriggerManagerComponent } from './trigger-manager/trigger-manager.component';
import { StatisticManagerComponent } from './statistic-manager/statistic-manager.component';
import { HomeComponent } from './home/home.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { TriggerAddComponent } from './trigger-add/trigger-add.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
	{ path: 'clientes', component: ClientManagerComponent },		  
	{ path: 'gatilhos', component: TriggerManagerComponent },
	{ path: 'estatisticas', component: StatisticManagerComponent },
	{ path: 'novoCliente', component: ClientAddComponent },
	{ path: 'novoGatilho', component: TriggerAddComponent },
	{ path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(routes); 