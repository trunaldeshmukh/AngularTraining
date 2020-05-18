using ASPNERCore31_JWT.Models;
using ASPNERCore31_JWT.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ASPNERCore31_JWT.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        IRepository<Product, int> repository;
        public ProductsController(IRepository<Product, int> repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var prds = repository.Get();
            return Ok(prds);
        }

        [HttpPost]
     
        public IActionResult Post(Product product)
        {
            if (ModelState.IsValid)
            {
                repository.Create(product);
                return Ok(product);
            }
            return BadRequest(ModelState);
        }
    }
}