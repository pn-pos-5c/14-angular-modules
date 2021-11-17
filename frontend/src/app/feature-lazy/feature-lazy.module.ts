import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeatureLazyRoutingModule} from './feature-lazy-routing.module';
import {CustomerListComponent} from './customer-list.component';
import {CustomerComponent} from './customer.component';
import {SharedModule} from '../shared/shared.module';
import {CustomerService} from './customer.service';


@NgModule({
  declarations: [CustomerListComponent, CustomerComponent],
  imports: [
    CommonModule,
    FeatureLazyRoutingModule,
    SharedModule
  ],
  providers: [CustomerService]
})
export class FeatureLazyModule {
}
