import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    private products: Array<Product>;
    private masterProducts: Array<Product>;
    private prds = Products;
    constructor() {
        this.products = new Array<Product>();
        this.prds.forEach((p, i) => {
            this.products.push(
                new Product(p.ProductId, p.ProductName, p.Price, p.Catgory)
            );
        });

        this.masterProducts = this.products.map(x => Object.assign({}, x));
    }

    getProducts(): Array<Product> {
        return this.products;
    }

    saveProducts(prd: Product): Array<Product> {
        this.products.push(prd);
        return this.products;
    }
    saveOrUpdateProducts(prd: Product): Array<Product> {
        const index = this.products.findIndex(x => x.ProductId === prd.ProductId);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
        this.products.push(prd);
        return this.products;
    }
    deleteProducts(prd: Product): Array<Product> {
        const index = this.products.indexOf(prd);
        if (index !== -1) {
            this.products.splice(index, 1);
        }

        return this.products;
    }

    getSearchResult(searchText: any): Array<Product> {
        if (searchText.length > 1) {
            this.products = this.masterProducts.filter(x => !(x.ProductName.toLocaleLowerCase().search(searchText.toLocaleLowerCase())) ||
                !(x.Category.toLocaleLowerCase().search(searchText.toLocaleLowerCase())));
        } else {
            this.products = this.masterProducts.map(x => Object.assign({}, x));
        }
        return this.products;
    }
}
