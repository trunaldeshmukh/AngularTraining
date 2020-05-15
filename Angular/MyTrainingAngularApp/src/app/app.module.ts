import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductReactiveFormComponent } from './components/productreactivecomponent/app.productreactiveform.component';
import { TableDirectiveComponent } from './directives/table.component.directive';
import { RadioDropDownComponent } from './directives/radiodropdown/radiodropdown.component';

import { SimpleElementComponent } from './litelementcomponents/app.simple.element.component';
import { DataGridComponent } from './litelementcomponents/app.datagridelement.component';

import { CustomerOrderDetailsComponent } from './components/customer-order/customeorderdetails.component';
import { OrderListComponent } from './components/customer-order/orderlist.component';
import { CustomerSearchComponent } from './components/customer-order/customersearch.component';

// import all LitElements from its path
import './litelementapp/app.simpleelement.litelement';
import './litelementapp/app.datagrid.litelement';
import { from } from 'rxjs';

// imports: array that imports all standard Angular moaulds and custom
// extenal modules for the current NG App.

// declatrations: array, used for declaring all components, deirectives
// for the current NG app. All components will be initialized in declartion

// providers: array, this is a DI container to register all NG
// services so that they can be injected in other NG Objects

// bootstrap : array, that contains one or more components to be
// rendered when AppModule is loaded in browser

// entryComponent: for Custom Elements (Depricated in NG 9)

// BrowserModule: The mandatory module for BootStrap NGModule
// Per NG Application we can have 'Only-One' instance of BrowserModule

@NgModule({
  declarations: [
    AppComponent,
    ProductReactiveFormComponent,
    TableDirectiveComponent,
    RadioDropDownComponent,
    SimpleElementComponent,
    DataGridComponent,
    CustomerOrderDetailsComponent,
    OrderListComponent,
    CustomerSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [CustomerOrderDetailsComponent]
})
export class AppModule { }
