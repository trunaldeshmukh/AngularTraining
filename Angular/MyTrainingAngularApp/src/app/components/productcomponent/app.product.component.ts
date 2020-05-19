import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
@Component({
    selector: 'app-product-component',
    templateUrl: './product.view.html'
})
export class ProductComponent implements OnInit {
    product: Product;
    products: Array<Product>;

    private logic: Logic;
    cats = Categories;
    headers: Array<string>;
    constructor() {
        this.product = new Product(0, '', 0, '');
        this.products = new Array<Product>();
        this.logic = new Logic();
        this.headers = new Array<string>();
    }

    // inoked after the ctor
    // write a performance internsicive code
    // whihc we cannot write in ctor
    ngOnInit(): void {
        this.products = this.logic.getProducts();
        // read product Scehma from Product class
        for (const p in this.product) {
            if (p) {
                this.headers.push(p);
            }
        }
    }
    clear(): void {
        this.product = new Product(0, '', 0, '');
    }
    save(): void {
        this.products = this.logic.saveOrUpdateProducts(this.product);
        console.log(JSON.stringify(this.products));
    }
    getSelectedProduct(p: Product): void {
        this.product = Object.assign({}, p);
    }

    deleteProduct(prd: Product) {
        this.products = this.logic.deleteProducts(prd);
    }

    onRadioChange(value) {
        if (value === 'asc') {
            this.products = this.products.sort((a, b) => a.ProductName > b.ProductName ? 1 : -1);
        } else {
            this.products = this.products.sort((a, b) => a.ProductName < b.ProductName ? 1 : -1);
        }
    }

    onKeyUp(event) {
        const searchText = event.target.value;
        this.products = this.logic.getSearchResult(searchText);
    }
}
