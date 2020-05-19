using ASPNERCore31_JWT.Models;
using System.Collections.Generic;
using System.Linq;

namespace ASPNERCore31_JWT.Services
{
    public class ProductRepository : IRepository<Product, int>
    {
        MyAppDbContext ctx;
        List<Product> products = new List<Product>();
        public ProductRepository(MyAppDbContext ctx)
        {
            this.ctx = ctx;
            this.products.Add(new Product() { ProductName = "A", Price = 100, ProductRowId = 1 });
            this.products.Add(new Product() { ProductName = "B", Price = 200, ProductRowId = 2 });
            this.products.Add(new Product() { ProductName = "C", Price = 300, ProductRowId = 3 });
        }
        public Product Create(Product entity)
        {
            //ctx.Products.Add(entity);
            //ctx.SaveChanges();
            entity.ProductRowId = this.products.Max(m => m.ProductRowId) + 1;
            this.products.Add(entity);
            return entity;
        }

        public IEnumerable<Product> Get()
        {
            return this.products;
         //   return ctx.Products.ToList();
        }

        public Product Get(int id)
        {
            return this.products.Where(m => m.ProductRowId == id).FirstOrDefault();
            //return ctx.Products.Find(id);
        }
    }
}
