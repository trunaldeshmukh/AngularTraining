import { Injectable } from '@angular/core';
import { Customer } from '../models/app.customer';
import { Order } from '../models/app.order';
import { CustomerSearchFilter } from '../models/app.serachfilter';

@Injectable({
    providedIn: 'root'
})
export class CustomerOrderService {
    customers: Array<Customer> = [];
    filterCustomers: Array<Customer> = [];
    orders: Array<Order> = [];
    constructor() {
        this.customers.push(new Customer(1, 'Name A', 'City A', 'Email A', '001'));
        this.customers.push(new Customer(2, 'Name B', 'City B', 'Email B', '002'));
        this.customers.push(new Customer(3, 'Name C', 'City C', 'Email C', '003'));
        this.customers.push(new Customer(4, 'Name D', 'City A', 'Email D', '004'));

        this.orders.push(new Order(1, 'product 1', new Date(), 1, 10, 100));
        this.orders.push(new Order(2, 'product 2', new Date(), 1, 20, 200));
        this.orders.push(new Order(3, 'product 3', new Date(), 2, 2, 500));
        this.orders.push(new Order(4, 'product 4', new Date(), 4, 1, 1000));
    }
    getCustomers(filter: CustomerSearchFilter): Array<Customer> {
        this.filterCustomers = this.customers;
        if (filter && filter.CustomerName) {
            this.filterCustomers = this.filterCustomers.filter(m => m.CustomerName.toLowerCase() === filter.CustomerName.toLowerCase());
        }
        if (filter && filter.CustomerCity) {
            this.filterCustomers = this.filterCustomers.filter(m => m.City.toLowerCase() === filter.CustomerCity.toLowerCase());
        }
        return this.filterCustomers;
    }
    getOrdersForCustomer(customerIds: Array<number>): Array<Order> {
        if (customerIds) {
            return this.orders.filter(m => customerIds.includes(m.CustomerId));
        } else {
            return null;
        }
    }
}
