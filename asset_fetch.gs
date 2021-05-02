var name_list = ["Sepehr","Dara", "Farid" , "Saman", "Faezeh", "Shirin"] 
//var name_list = ["Faezeh"] 
//var name_list = ["Sepehr"] 
var baseUrl = "https://api.binance.com";
var baseUrl1 = "https://api1.binance.com";
var baseUrl2 = "https://api2.binance.com";
var baseUrl3 = "https://api3.binance.com";
var baseUrl_future = "https://fapi.binance.com"
var url = baseUrl
var Qmainurl = "https://api3.binance.com/api/v1/ticker/price?symbol="
//FetchAssets()
//FetchFuture()
var QBTCdataa = UrlFetchApp.fetch(Qmainurl + "BTCUSDT");
var Qw = JSON.parse(QBTCdataa.getContentText());
var QBTCUSDTprice = Number(Qw.price)
Logger.log("BTCUSDT price is:  " + QBTCUSDTprice)

function FetchAssets() {
  SpreadsheetApp.getActive()
    .getRange('Accounts Summary!A10:A15').setValue("False");
  Logger.log("Function FetchAssets is running : ........ " )
  var api = "/api/v3/account" ;

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
    var dataa = UrlFetchApp.fetch(baseUrl + api + query, params);
    Utilities.sleep(500)
    //Logger.log( i + ")  :  " person +  "   -->    " + dataa.getContentText())
    
    ii = 0
   
    var sucess = 1
    while (!(dataa.getContentText()).includes('"asset":"BTC"')) {
      ii++;
      if (ii > 10){
        break
      }
      
      if (ii > 8){
        url = baseUrl1
      } else if (ii > 5){
        url = baseUrl2
      } else if (ii > 2){
        url = baseUrl3
      } else {
        url = baseUrl
      }
      
      Utilities.sleep(1000)
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
      

      var dataa = UrlFetchApp.fetch(url + api + query, params);
      
      Logger.log(ii + "  --> " + dataa.getContentText())
      
      if (!(dataa.getContentText()).includes('"asset":"BTC"')) {
        sucess = 0
      }else{
        sucess = 1
      }
      
    }
    
    if (sucess = 1) {
      Logger.log("success = " + sucess)
      toast (ii + " _ " + sucess + " \n " + url , person )
      var w = JSON.parse(dataa.getContentText());
      Utilities.sleep(1000)
      var genData = w.balances;
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(person);
      var date = new Date();
      var cell = sheet.getRange("O1");
      cell.setValue(date);
      let values = [];  // Added
      var range = sheet.getRange("L10:M12");
      var cell = range.getCell(1, 1);
      if (cell.getValue()){
        var rangesToClear = ["N2:N103", "O2:O103", "P2:P103"];        // enter all range references here
        for (var iii = 0; iii < rangesToClear.length; iii++){
          sheet.getRange(rangesToClear[iii]).clearContent();
        }
      }

      for (var iiii in genData) {     
        var freemoney =  Number(genData[iiii].free)
        var lockedmoney =  Number(genData[iiii].locked)
        var totalmoney = freemoney + lockedmoney
        
        if (((totalmoney) > 0) || (genData[iiii].asset == "USDT")){
          if (genData[iiii].asset == "USDT"){
            Qprice = 1
          } else {

            Logger.log(genData[iiii].asset)
            var Qsymbol = genData[iiii].asset
            var Qpair = Qsymbol + "USDT"
            if (genData[iiii].asset != "USDT") 

        
            try {
              var Qdataa = UrlFetchApp.fetch(Qmainurl + Qsymbol + "USDT" );
              var Qw = JSON.parse(Qdataa.getContentText());
              var Qprice = Qw.price
            } catch (e) {
            // Logs an ERROR message.
              var Qdataa = UrlFetchApp.fetch(Qmainurl +  Qsymbol + "BTC");
              var Qw = JSON.parse(Qdataa.getContentText());
              var QBTCprice = Number(Qw.price)
              var Qprice = QBTCprice * QBTCUSDTprice

              console.error('myFunction() yielded an error: ' + e);
            }
          }
          Logger.log(person + "  "  + iiii + "  " + genData[iiii].asset + "  " + totalmoney +  "  QP:  -->" + Qprice)
          values.push([genData[iiii].asset, totalmoney,Qprice ]);
          sheet.getRange("N2:P" + (values.length + 1)).setValues(values);  // Added
          
          if (genData[iiii].asset == "BTC"){
            var cell = sheet.getRange("L7");
            cell.setValue(totalmoney);
          }
          
          if (genData[iiii].asset == "USDT"){
            var cell = sheet.getRange("L6");
            cell.setValue(totalmoney);
          }
        }
        
      }
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Accounts Summary");
      
      if (person == "Dara"){
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Accounts Summary").getRange("A10").setValue("True");
      } else if (person =="Farid"){
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Accounts Summary").getRange("A11").setValue("True");
      } else if (person == "Sepehr"){
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Accounts Summary").getRange("A12").setValue("True");
      } else if (person == "Shirin"){
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Accounts Summary").getRange("A13").setValue("True");
      } else if (person == "Faezeh"){
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Accounts Summary").getRange("A14").setValue("True");
      } else if (person == "Saman"){
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Accounts Summary").getRange("A15").setValue("True");
      } 
  
        
        
        
    }
        

  }
}


function DailySnapshot() {
  Logger.log("Function DailySnapshot is running : ........ " )
  var api = "/sapi/v1/accountSnapshot"; // Please input API Endpoint you want.
  for(let i = 0; i < name_list.length; i++){ 
          
    var person = name_list[i]
    var timestamp = Number(new Date().getTime()).toFixed(0);
    var string = "type=SPOT&timestamp=" + timestamp; // Please input query parameters for the inputterd API.
    //Logger.log(person)
    var key = APIKEY(person)[0];
    var secret = APIKEY(person)[1];
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
    //Utilities.sleep(500)
    var dataa = UrlFetchApp.fetch(baseUrl + api + query, params);
    //Utilities.sleep(500)
    //Logger.log(person + " - daily snapshot -> " + dataa.getContentText())
    num = 0
    /*
    while ((dataa.getContentText()) == "")  {
            num++;
            var dataa = UrlFetchApp.fetch(baseUrl + api + query, params);
            Utilities.sleep(2000)
            Logger.log(num, "  --> " , dataa.getContentText())
    }
    */

    var w = JSON.parse(dataa.getContentText());
    var genData = w.snapshotVos;
    var totalavalableUSDT = 0
    //Logger.log(genData)

    var howmanydata = Number(genData.length) - 1
    //Utilities.sleep(1000)
    //Logger.log(howmanydata)
    var totalfreebtc = genData[howmanydata].data.totalAssetOfBtc
    var totalAssetOfBtcs = Number(totalfreebtc)
    
    for (var j in genData[howmanydata].data.balances){    
      var assets = genData[howmanydata].data.balances[j].asset
      
      if (assets == "BTC") {
        var lockeds = Number(genData[howmanydata].data.balances[j].locked)
        var totalLocked = lockeds
        totalAssetOfBtcs = totalLocked + totalAssetOfBtcs

      } else if (assets == "USDT"){
        //Logger.log("Dara total BTC = " + assets + CRYPTOFINANCE("BINANCE:" +"BTC/USD"))
        var BTC = Number(CRYPTOFINANCE("BINANCE:" +"BTC/USD"))
        var USDT = 1/BTC
        var frees = Number(genData[howmanydata].data.balances[j].free)
        var lockeds = Number(genData[howmanydata].data.balances[j].locked)
        totalavalableUSDT = frees + lockeds
        totalLocked = lockeds * USDT
        totalAssetOfBtcs = totalLocked + totalAssetOfBtcs
        //log(assets + totalAssetOfBtcs)

      } else {
        var lockeds = Number(genData[howmanydata].data.balances[j].locked)
        var totalLocked = Number(CRYPTOFINANCE("BINANCE:" + assets +"/BTC")) * lockeds
        totalAssetOfBtcs = totalLocked + totalAssetOfBtcs
      }
      
    }
    Logger.log( person + "  total BTC = " + totalAssetOfBtcs)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(person+"(dont-touch)");
    //var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dara(dont-touch)");
    var date = new Date();
    sheet.appendRow([date, genData[howmanydata].updateTime, totalAssetOfBtcs, totalavalableUSDT])
  }
}


function FetchFuture() {
  Logger.log("Function FetchFuture is running : ........ " )
  var api = "/fapi/v2/balance" ;
  //var api = "/api/v3/account" ;

  for(let i = 0; i < name_list.length; i++){ 
          
    var person = name_list[i]
    //var person = "sepehr"
    var timestamp = Number(new Date().getTime()).toFixed(0);
    var string = "timestamp=" + timestamp;
    //Logger.log(i +  person)
    var key = APIKEY(person)[0];
    var secret = APIKEY(person)[1];
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
    var dataa = UrlFetchApp.fetch(baseUrl_future + api + query, params);
    
    ii = 0
    /*
    while ((dataa.getContentText()).includes("msg")) {
            ii++;
            var dataa = UrlFetchApp.fetch(baseUrl + api + query, params);
            Utilities.sleep(2000)
            //Logger.log(i +  "  -msg-> "  +  dataa.getContentText())
    }
    Logger.log(i+person);
    */
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(person);

    //if ( ((dataa.getContentText()).includes("404")) | ((dataa.getContentText()).includes("msg=Invalid")) ){
    if  ((dataa.getContentText()).includes("msg")) {
      sheet.getRange("L13").setValue("API not future enabled");
      sheet.getRange("L14").setValue("API not future enabled");
      sheet.getRange("L15").setValue("API not future enabled");
            
    } else {
      Logger.log(person)
      var w = JSON.parse(dataa.getContentText());
      Logger.log(w)
      var balance = w[1].balance
      var availableBalance = w[1].availableBalance
      //var maxWithdrawAmount = w[0].maxWithdrawAmount
      //var crossWalletBalance = w[0].crossWalletBalance
      var crossUnPnl = w[1].crossUnPnl
      Logger.log(i+person + " Future Balance = " +  balance);

      sheet.getRange("L13").setValue(balance);
      sheet.getRange("L14").setValue(availableBalance);
      sheet.getRange("L15").setValue(crossUnPnl);
      //sheet.getRange("L16").setValue(maxWithdrawAmount);
      //sheet.getRange("L17").setValue(crossWalletBalance);

    }
    
    
    

  }
}


function APIKEY(name) {
  var person = name
  if (name == "Sepehr") {
    //var key = '*********************************************************8FOXqcd'; // old (no future)
    //var secret = '*********************************************************3ZXoG2'; // old (no future)
    var key = '*********************************************************bCHOWLz'; // future)
    var secret = '*********************************************************aJyXDWLj4'; // future)
              
  } else if (name == "Dara"){
    var key = '*********************************************************8DlfJSp'; // Please input your key.
    var secret = '*********************************************************7fwKuhlbj'; // Please input your secret.
     
  } else if (name == "Farid"){
    var key = '*********************************************************Ru8i0LQ'; // Please input your key.
    var secret = '*********************************************************5fW2waA4Lp'; // Please input your secret.
     
  } else if (name == "Saman"){
    var key = '*********************************************************rqt8tNFx'; // Please input your key.
    var secret = '*********************************************************nXM9RqhmY'; // Please input your secret.
       
  } else if (name == "Faezeh"){
    var key = '*********************************************************qVBTXl8c'; // Please input your key.
    var secret = '*********************************************************WAyDlpv8f'; // Please input your secret.
     
  } else if (name == "Shirin"){
    var key = '*********************************************************dp7Eaywj'; // Please input your key.
    var secret = '*********************************************************UfK28Uf'; // Please input your secret.
  }    
      
  return [key,secret]
}

function toast(body, title, timeout) {
  return SpreadsheetApp.getActive().toast(
    body,
    title || "Binance to Google Sheets",
    timeout || 10 // In seconds
  );
}

// Let's all treat those lovely APIs with respect and don't hammer them to hard to avoid bans. This script will do 
// one single call to Binance to fetch the tickers and dump them in the 'Binance24h' sheet.  - wkr, Moosy Research
function BINTickFetch(){
  Logger.log("Function BINTickFetch is running : ........ " )
  var rows=[],obj_array=null, msg="";
  try {obj_array=JSON.parse(UrlFetchApp.fetch("https://api.binance.com/api/v3/ticker/price").getContentText());} catch (e) { msg=e; obj_array=null;}
  if (obj_array!=null){
    for (r in obj_array) rows.push([obj_array[r].symbol, parseFloat(obj_array[r].price)]);
    var ss=SpreadsheetApp.getActiveSpreadsheet(),sheet=ss.getSheetByName('Binance24h');ss.getRange("Binance24h!A1").setValue(new Date());
    try {var range=sheet.getRange(2,1,sheet.getLastRow(),2).clearContent();} catch(e) {Logger.log("error");}
    if (rows != "") range=sheet.getRange(2,1,rows.length,2); range.setValues(rows); 
  }
  if (msg!="") Browser.msgBox("Oops, Binance API did not provide any valid data and returned an error. \\n\\n"+msg);
}
 
