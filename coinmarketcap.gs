function tickerprice() {
  var params = {
        'method': 'get',
        'muteHttpExceptions': true,
    };
  var baseUrl = "https://api3.binance.com";
  var api = "/api/v3/ticker/price" ;
  var dataa = UrlFetchApp.fetch(baseUrl + api,params);
  Logger.log(dataa)
}
