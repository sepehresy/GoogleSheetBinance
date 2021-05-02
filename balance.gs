
function Balancesheet() {
    var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Balance");
    
    for(let i = 0; i < name_list.length; i++){
    var person = name_list[i]
    
    let values = []
    var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(person);
    var data = sheet1.getRange("N2:Q19").getValues();
    //sheet2.getRange("N2:Q19").setValues(data);
    var ss = JSON.stringify(data)
    Logger.log(person +  JSON.stringify(data))
    sheet2.getRange("A2:D").setValues(ss);  // Added
    //sheet2.appendRow(ss);

    
    }
}
