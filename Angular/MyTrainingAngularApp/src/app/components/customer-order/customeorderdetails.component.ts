import { Component, OnInit } from '@angular/core';
import { CustomerOrderService } from 'src/app/services/customer.order.service';
import { Customer } from 'src/app/models/app.customer';
import { Order } from 'src/app/models/app.order';
import { CustomerSearchFilter } from 'src/app/models/app.serachfilter';

@Component({
    selector: 'app-customer-order-details',
    templateUrl: './customer-order-details.view.html',
    styles: [`th , td{
        text-align:center;
    }`]
})
export class CustomerOrderDetailsComponent implements OnInit {
    customers: Array<Customer> = [];
    orders: Array<Order> = [];
    constructor(private serv: CustomerOrderService) { }
    ngOnInit(): void {
        this.getCustomers(null);
    }

    getCustomers(filer: CustomerSearchFilter) {
        this.customers = [];
        this.customers = this.serv.getCustomers(filer);
    }
    getOrders(customerId: number) {
        this.orders = [];
        this.orders = this.serv.getOrdersForCustomer([customerId]);
        console.log('orders :' + JSON.stringify(this.orders) + ' for id:' + customerId);
    }
    searchCutsomer(filter: CustomerSearchFilter) {
        if (filter) {
            if (filter.CustomerName) {
                this.getCustomers(filter);
            } else if (filter.CustomerCity) {
                this.getCustomers(filter);
            }
            this.orders = [];
            this.orders = this.serv.getOrdersForCustomer(this.customers.map(m => m.CustomerId));
        }
    }
}
