import {Component, OnInit} from '@angular/core';
import {DummyService} from '../core/dummy.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderIds = [11, 22, 33, 44];

  constructor(private dummy: DummyService) {
    console.log('*** constructor OrderListComponent');
    console.log(`     next val: ${dummy.getNext()}`);
  }

  ngOnInit(): void {
  }

}
