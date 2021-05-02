function pricefetch() {
  ""&N2&"USDT"
  var symbol = "BTC"
  var pair = "USDT"
  var mainurl = "https://api3.binance.com/api/v1/ticker/price?symbol="
  var pair = symbol + "USDT"
  var url = mainurl + pair
  var dataa = UrlFetchApp.fetch(url);
  Logger.log(dataa)
  var w = JSON.parse(dataa.getContentText());
  Logger.log(w.price)
  //var genData = w.balances;

}
