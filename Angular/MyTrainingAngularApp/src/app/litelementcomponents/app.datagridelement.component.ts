import { Component, OnInit } from '@angular/core';
import { Product } from '../models/app.product';
import { Logic } from '../models/app.logic';

@Component({
    selector: 'app-datagrid-component',
    templateUrl: './app.datagridelement.view.html'
})

export class DataGridComponent implements OnInit {
    products: Array<Product> = new Array<Product>();
    logic: Logic = new Logic();
    constructor() { }

    ngOnInit() {
        this.products = this.logic.getProducts();
    }
}
