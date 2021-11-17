import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderListComponent} from './order-list.component';
import {OrderDetailComponent} from './order-detail.component';

const routes: Routes = [
  {
    path: 'orders',
    children: [
      {path: '', component: OrderListComponent},
      {path: ':id', component: OrderDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureEagerRoutingModule {
}
