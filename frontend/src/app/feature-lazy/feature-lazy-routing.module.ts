import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-list.component';
import {CustomerComponent} from './customer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: CustomerListComponent},
      {path: ':name', component: CustomerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureLazyRoutingModule {
}
