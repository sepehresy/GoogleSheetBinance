
function PriceSnap() {
    var read_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Binance");
    
    var date = new Date();
    var sample = read_sheet.getRange("B2").getValue();
    if (sample > 0){
      Logger.log(sample)
      // Copy from 17th row, 4th column, all rows for one column 
      var valuesToCopy = read_sheet.getRange("A1:B").getValues();

      //Paste to another sheet from first cell onwards
      read_sheet.getRange("R1:S").setValues(valuesToCopy);
      read_sheet.getRange("T1").setValue(date);

    }

    var sample2 = read_sheet.getRange("F3").getValue();
    if (sample2 > 0){
      Logger.log(sample2)
      // Copy from 17th row, 4th column, all rows for one column 
      var valuesToCopy2 = read_sheet.getRange("D1:O").getValues();

      //Paste to another sheet from first cell onwards
      read_sheet.getRange("V1:AG").setValues(valuesToCopy2);
      read_sheet.getRange("AH1").setValue(date);
      

    }
}

   
