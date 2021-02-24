using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crypto.Models
{
    public class TokenList
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
        public double TotalSupply { get; set; }
        public double Price { get; set; }
        public double Volume24H { get; set; }
        public double PercentChange24H { get; set; }
        public double MarketCap { get; set; }
    }
}
