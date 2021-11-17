import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeatureEagerRoutingModule} from './feature-eager-routing.module';
import {OrderListComponent} from './order-list.component';
import {OrderDetailComponent} from './order-detail.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    FeatureEagerRoutingModule,
    SharedModule
  ]
})
export class FeatureEagerModule {
}
