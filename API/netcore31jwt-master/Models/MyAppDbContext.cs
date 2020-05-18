using Microsoft.EntityFrameworkCore;

namespace ASPNERCore31_JWT.Models
{
    public class MyAppDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public MyAppDbContext(DbContextOptions<MyAppDbContext> options):base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
    
}
