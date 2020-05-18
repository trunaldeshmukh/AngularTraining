using System.ComponentModel.DataAnnotations;
namespace ASPNERCore31_JWT.Models
{
    public class Product
    {
        [Key]
        public int ProductRowId { get; set; }
        [Required(ErrorMessage ="Product Name is required")]
        public string ProductName { get; set; }
        [Required(ErrorMessage = "Product Price is required")]
        public int Price { get; set; }
    }
}
