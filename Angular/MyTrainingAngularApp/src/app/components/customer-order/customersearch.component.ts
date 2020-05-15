import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerSearchFilter } from 'src/app/models/app.serachfilter';

@Component({
    selector: 'app-customer-search',
    templateUrl: './customer-search.view.html',
})
export class CustomerSearchComponent implements OnInit {
    @Output() emitSearch = new EventEmitter<CustomerSearchFilter>();
    searchFilter: CustomerSearchFilter;
    constructor() {
        this.searchFilter = new CustomerSearchFilter('', '');
    }
    ngOnInit(): void { }

    search() {
        this.emitSearch.emit(this.searchFilter);
    }
}
