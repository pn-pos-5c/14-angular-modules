import {Component} from '@angular/core';
import {DummyService} from './core/dummy.service';
import {OtherService} from './core/other.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularModules';

  constructor(private dummy: DummyService, private other: OtherService) {
    console.log('*** constructor AppComponent');
  }
}
