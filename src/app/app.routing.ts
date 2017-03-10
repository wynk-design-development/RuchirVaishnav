import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustDetailsComponent } from './custdetails/custdetails.component';
import { OrderHistComponent } from './orderhist/orderhist.component';

const appRoutes: Routes = [
  {
    component: CustDetailsComponent,
    path: 'customer-details',
  },
  {
    component: OrderHistComponent,
    path: 'order-history',
  },
  {
    // unknown page redirects to /readme
    path: '**',
    redirectTo: '/customer-details',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
