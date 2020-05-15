import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/app.order';

@Component({
    selector: 'app-order-list',
    templateUrl: 'orderlist.view.html',
    styles: [`th , td{
        text-align:center;
    }`]
})

export class OrderListComponent implements OnInit {
    @Input() orders: Array<Order> = [];
    constructor() { }

    ngOnInit() { }
}
