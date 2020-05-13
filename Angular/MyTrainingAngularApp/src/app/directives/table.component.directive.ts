import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table-directive',
    templateUrl: './table.directive.view.html'
})
export class TableDirectiveComponent implements OnInit {
    private dataSource: Array<any>;
    headers: Array<string>;
    // an event that will be emitted
    // with payload as generic data
    // in this case data type is 'any'
    @Output() onRowSelected: EventEmitter<any>;

    constructor() {
        this.dataSource = new Array<any>();
        this.headers = new Array<string>();
        this.onRowSelected = new EventEmitter<any>();
    }

    @Input()
    set DataSource(val: Array<any>) {
        if (val.length > 0) {
            this.dataSource = val;
            for (const p in this.dataSource[0]) {
                if (p) {
                    this.headers.push(p);
                }
            }
        } else {
            this.dataSource = new Array<any>();
        }
    }

    get DataSource(): Array<any> {
        return this.dataSource;
    }

    onRowSelectedEvent(r: any) {
        // emit() method will emit an event
        this.onRowSelected.emit(r);
    }

    ngOnInit(): void { }
}
