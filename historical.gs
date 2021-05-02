var baseUrl = "https://api.binance.com";
var baseUrl1 = "https://api1.binance.com";
var baseUrl2 = "https://api2.binance.com";
var baseUrl3 = "https://api3.binance.com";
var baseUrl_future = "https://fapi.binance.com"
var url = baseUrl

function Histo_trades() {
  Logger.log("Function Historical is running : ........ " )
  var api = "/api/v3/myTrades" ;
  var name_list = ["Sepehr"]
  for(let i = 0; i < name_list.length; i++){
    var person = name_list[i]
    Logger.log(person)
    var key = APIKEY(person)[0];
    var secret = APIKEY(person)[1];
    var timestamp = Number(new Date().getTime()).toFixed(0);
    var string = "timestamp=" + timestamp;
    var signature = Utilities.computeHmacSha256Signature(string, secret);
    signature = signature.map(function(e) {
        var v = (e < 0 ? e + 256 : e).toString(16);
        return v.length == 1 ? "0" + v : v;
    }).join("");
    var query = "?" + string + "&signature=" + signature;
    var params = {
        'method': 'get',
        'headers': {'X-MBX-APIKEY': key},
        'muteHttpExceptions': true,
    };

    var params = {
        'method': 'get',
        'headers': {'X-MBX-APIKEY': key},
        'muteHttpExceptions': true,
    };
    var dataa = UrlFetchApp.fetch(baseUrl + api + query, params);
    //var dataa = UrlFetchApp.fetch(url + api, params);
    Logger.log(dataa)
    
  }
}
