

// Record history from a cell and append to next available row
function recordValue() {
    var read_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Accounts Summary");
    
    var date = new Date();
    // Totals
    var Total_BTC = read_sheet.getRange("F16").getValue();
    var Total_USD = read_sheet.getRange("G16").getValue();
    var Total_PL= read_sheet.getRange("H16").getValue();
    var Total_AV_USDT = read_sheet.getRange("I16").getValue();

    // P&L
    var Dara_PL = read_sheet.getRange("H10").getValue();
    var Farid_PL = read_sheet.getRange("H11").getValue();
    var Sepehr_PL = read_sheet.getRange("H12").getValue();
    var Shirin_PL = read_sheet.getRange("H13").getValue();
    var Faezeh_PL = read_sheet.getRange("H14").getValue();
    var Saman_PL = read_sheet.getRange("H15").getValue();

    // USD
    var Dara_USD = read_sheet.getRange("G10").getValue();
    var Farid_USD = read_sheet.getRange("G11").getValue();
    var Sepehr_USD = read_sheet.getRange("G12").getValue();
    var Shirin_USD = read_sheet.getRange("G13").getValue();
    var Faezeh_USD = read_sheet.getRange("G14").getValue();
    var Saman_USD = read_sheet.getRange("G15").getValue();

    // BTC
    var Dara_BTC = read_sheet.getRange("F10").getValue();
    var Farid_BTC = read_sheet.getRange("F11").getValue();
    var Sepehr_BTC = read_sheet.getRange("F12").getValue();
    var Shirin_BTC = read_sheet.getRange("F13").getValue();
    var Faezeh_BTC = read_sheet.getRange("F14").getValue();
    var Saman_BTC = read_sheet.getRange("F15").getValue();      


    var chart_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Charts");
    //var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("chart");
    chart_sheet.appendRow([date, Total_BTC, Total_USD, Total_PL, Total_AV_USDT,
                                Dara_PL, Farid_PL, Sepehr_PL, Shirin_PL, Faezeh_PL, Saman_PL,
                                Dara_USD, Farid_USD, Sepehr_USD, Shirin_USD, Faezeh_USD, Saman_USD,
                                Dara_BTC, Farid_BTC, Sepehr_BTC, Shirin_BTC, Faezeh_BTC, Saman_BTC
                        ]);
}
