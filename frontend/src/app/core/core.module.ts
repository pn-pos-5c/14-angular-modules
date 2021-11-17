import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DummyService} from './dummy.service';
import {OtherService} from './other.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DummyService, OtherService
  ]
})
export class CoreModule {
}
