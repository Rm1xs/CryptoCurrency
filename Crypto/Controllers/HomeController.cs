﻿using Crypto.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;

namespace Crypto.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public string API_KEY = "f7e09e36-abe6-462c-86c9-97c18a18036d";

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult getalltokens()
        {
            List<TokenList> meny_data = new List<TokenList>();
            var data = makeAPICall();
            var result = JsonConvert.DeserializeObject<CryptoData>(data, Converter.Settings);
            foreach (var item in result.Data)
            {
                meny_data.Add(new TokenList { Id = item.Id, Name = item.Name,  TotalSupply = item.TotalSupply, Price = Math.Round(item.Quote.Usd.Price, 3, MidpointRounding.ToEven), MarketCap = item.Quote.Usd.MarketCap, PercentChange24H = Math.Round(item.Quote.Usd.PercentChange24H, 1, MidpointRounding.ToEven), Symbol = item.Symbol, Volume24H = Math.Round(item.Quote.Usd.Volume24H, 1, MidpointRounding.ToEven)});
            }
            return Json(new { data = meny_data });
        }
        string makeAPICall()
        {
            var URL = new UriBuilder("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest");

            var queryString = HttpUtility.ParseQueryString(string.Empty);
            queryString["start"] = "1";
            queryString["limit"] = "5000";
            queryString["convert"] = "USD";

            URL.Query = queryString.ToString();

            var client = new WebClient();
            client.Headers.Add("X-CMC_PRO_API_KEY", API_KEY);
            client.Headers.Add("Accepts", "application/json");
            return client.DownloadString(URL.ToString());

        }
    }
}
