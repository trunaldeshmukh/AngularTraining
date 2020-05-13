import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MyCustomValidator } from './app.custom.validator';
@Component({
    selector: 'app-productreactive-component',
    templateUrl: './productreactiveform.view.html',
    styles: [`.form-control.invalid-value {
        border-color: #dc3545;
        padding-right: 2.25rem;
        background-repeat: no-repeat;
        background-position: center right calc(2.25rem / 4);
        background-size: calc(2.25rem / 2) calc(2.25rem / 2);
      }`]
})
export class ProductReactiveFormComponent implements OnInit {
    product: Product;
    products: Array<Product>;
    private logic: Logic;
    cats = Categories;
    headers: Array<string>;
    value: number;
    frmPrd: FormGroup;
    constructor() {
        this.logic = new Logic();
        this.product = new Product(0, '', 0, '');
        this.products = this.logic.getProducts();
        this.headers = new Array<string>();
        this.value = 0;

        // Bind the Product Model class to the FormGroup
        // Each public proeprty form the Model class will be bound using the
        // FormControl as Name/Value pair in FormGroup
        // FormControl will bind with Model property

        // the frmPrd will be Property-Bind with the [formGroup] property of the HTML form
        // All 'keys' will be bound to the editable elements using its 'formControlName' property
        this.frmPrd = new FormGroup({
            ProductId: new FormControl(this.product.ProductId,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(6),
                    Validators.pattern('[0-9]+'),
                    MyCustomValidator.checkEven,
                    MyCustomValidator.checkUniqueProductId(this.products.map(x => x.ProductId))
                ])),
            ProductName: new FormControl(this.product.ProductName, MyCustomValidator.checkProductName),
            Price: new FormControl(this.product.Price, [Validators.required, Validators.min(1)]),
            Category: new FormControl(this.product.Category, [Validators.required])
        });
    }
    // inoked after the ctor
    // write a performance internsicive code
    // whihc we cannot write in ctor
    ngOnInit(): void {
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
        // read the submitted value from the FromGroup
        this.product = this.frmPrd.value;
        this.products = this.logic.saveProducts(this.product);
        console.log(JSON.stringify(this.products));
    }
    getSelectedProduct(evt): void {
        console.log(JSON.stringify(evt));
        this.frmPrd.setValue(evt);
    }
    categorySeelected(val: string) {
        this.frmPrd.controls.Category.setValue(val);
    }
}
