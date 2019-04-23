using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;



namespace ShoppingCartApp.Controllers
{
     [Route("api/[controller]")]
     public class ShoppingCartDashboardController:Controller
     {
          [HttpGet("[action]")]
          public IEnumerable<Order> Orders()
          {
              return new List<Order>(){
                  new Order(){OrderId=1,Price=100,CreatedDate=DateTime.Now,Status="Placed"},
                  new Order(){OrderId=2,Price=200,CreatedDate=DateTime.Now,Status="Placed"},
                  new Order(){OrderId=3,Price=300,CreatedDate=DateTime.Now,Status="Placed"},
                  new Order(){OrderId=4,Price=400,CreatedDate=DateTime.Now,Status="Placed"},
                  new Order(){OrderId=5,Price=500,CreatedDate=DateTime.Now,Status="Placed"}
              };
          }
     }

    public class Order
    {
        public int OrderId { get; set; }
        public int Price { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Status { get; set; }
    }

    public enum OrderStatus
    {
        Placed,
        Cancelled,
        ShippingInProgress,
        Shipped,
        Returned,
    }
}