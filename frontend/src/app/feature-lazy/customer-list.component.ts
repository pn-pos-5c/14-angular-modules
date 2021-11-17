import {Component, OnInit} from '@angular/core';
import {DummyService} from '../core/dummy.service';
import {CustomerService} from './customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customerNames = ['Hansi', 'Susi', 'Pepi'];

  constructor(private dummy: DummyService, private customer: CustomerService) {
    console.log('*** constructor CustomerListComponent');
    console.log(`    next val: ${dummy.getNext()}`);
  }

  ngOnInit(): void {
  }

}
