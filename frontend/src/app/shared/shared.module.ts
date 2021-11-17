import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LabelTextComponent} from './label-text/label-text.component';
import {InitCapsPipe} from './pipes/init-caps.pipe';


@NgModule({
  declarations: [LabelTextComponent, InitCapsPipe],
  imports: [
    CommonModule
  ],
  exports: [LabelTextComponent, InitCapsPipe]
})
export class SharedModule {
}
