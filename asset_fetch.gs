{\rtf1\ansi\ansicpg1252\cocoartf2578
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red20\green67\blue174;\red255\green255\blue254;\red46\green49\blue51;
\red24\green25\blue27;\red162\green0\blue16;\red77\green80\blue85;\red186\green6\blue115;\red18\green115\blue126;
}
{\*\expandedcolortbl;;\cssrgb\c9412\c35294\c73725;\cssrgb\c100000\c100000\c99608;\cssrgb\c23529\c25098\c26275;
\cssrgb\c12549\c12941\c14118;\cssrgb\c70196\c7843\c7059;\cssrgb\c37255\c38824\c40784;\cssrgb\c78824\c15294\c52549;\cssrgb\c3529\c52157\c56863;
}
\margl1440\margr1440\vieww37900\viewh19680\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
var\cf4  \cf5 name_list\cf4  = [\cf6 "Sepehr"\cf4 ,\cf6 "Dara"\cf4 , \cf6 "Farid"\cf4  , \cf6 "Saman"\cf4 , \cf6 "Faezeh"\cf4 , \cf6 "Shirin"\cf4 ] \cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf7 \cb3 //var name_list = ["Saman"] \cf4 \cb1 \
\cf7 \cb3 //var name_list = ["Sepehr"] \cf4 \cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 var\cf4  \cf5 baseUrl\cf4  = \cf6 "https://api.binance.com"\cf4 ;\cb1 \
\cf2 \cb3 var\cf4  \cf5 baseUrl1\cf4  = \cf6 "https://api1.binance.com"\cf4 ;\cb1 \
\cf2 \cb3 var\cf4  \cf5 baseUrl2\cf4  = \cf6 "https://api2.binance.com"\cf4 ;\cb1 \
\cf2 \cb3 var\cf4  \cf5 baseUrl3\cf4  = \cf6 "https://api3.binance.com"\cf4 ;\cb1 \
\cf2 \cb3 var\cf4  \cf5 baseUrl_future\cf4  = \cf6 "https://fapi.binance.com"\cf4 \cb1 \
\cf2 \cb3 var\cf4  \cf5 url\cf4  = \cf5 baseUrl\cf4 \cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf7 \cb3 //FetchAssets()\cf4 \cb1 \
\
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 function\cf4  \cf8 FetchAssets\cf4 () \{\cb1 \
\cb3   \cf8 SpreadsheetApp\cf4 .\cf5 getActive\cf4 ()\cb1 \
\cb3     .\cf5 getRange\cf4 (\cf6 'Accounts Summary!A10:A15'\cf4 ).\cf5 setValue\cf4 (\cf6 "False"\cf4 );\cb1 \
\cb3   \cf8 Logger\cf4 .\cf5 log\cf4 (\cf6 "Function FetchAssets is running : ........ "\cf4  )\cb1 \
\cb3   \cf2 var\cf4  \cf5 api\cf4  = \cf6 "/api/v3/account"\cf4  ;\cb1 \
\
\cb3   \cf2 for\cf4 (\cf2 let\cf4  \cf5 i\cf4  = \cf9 0\cf4 ; \cf5 i\cf4  < \cf5 name_list\cf4 .\cf5 length\cf4 ; \cf5 i\cf4 ++)\{\cb1 \
\cb3     \cf2 var\cf4  \cf5 person\cf4  = \cf5 name_list\cf4 [\cf5 i\cf4 ]\cb1 \
\cb3     \cf8 Logger\cf4 .\cf5 log\cf4 (\cf5 person\cf4 )\cb1 \
\cb3     \cf2 var\cf4  \cf5 key\cf4  = \cf8 APIKEY\cf4 (\cf5 person\cf4 )[\cf9 0\cf4 ];\cb1 \
\cb3     \cf2 var\cf4  \cf5 secret\cf4  = \cf8 APIKEY\cf4 (\cf5 person\cf4 )[\cf9 1\cf4 ];\cb1 \
\cb3     \cf2 var\cf4  \cf5 timestamp\cf4  = \cf8 Number\cf4 (\cf2 new\cf4  \cf8 Date\cf4 ().\cf5 getTime\cf4 ()).\cf5 toFixed\cf4 (\cf9 0\cf4 );\cb1 \
\cb3     \cf2 var\cf4  \cf5 string\cf4  = \cf6 "timestamp="\cf4  + \cf5 timestamp\cf4 ;\cb1 \
\cb3     \cf2 var\cf4  \cf5 signature\cf4  = \cf8 Utilities\cf4 .\cf5 computeHmacSha256Signature\cf4 (\cf5 string\cf4 , \cf5 secret\cf4 );\cb1 \
\cb3     \cf5 signature\cf4  = \cf5 signature\cf4 .\cf5 map\cf4 (\cf2 function\cf4 (\cf5 e\cf4 ) \{\cb1 \
\cb3         \cf2 var\cf4  \cf5 v\cf4  = (\cf5 e\cf4  < \cf9 0\cf4  ? \cf5 e\cf4  + \cf9 256\cf4  : \cf5 e\cf4 ).\cf5 toString\cf4 (\cf9 16\cf4 );\cb1 \
\cb3         \cf2 return\cf4  \cf5 v\cf4 .\cf5 length\cf4  == \cf9 1\cf4  ? \cf6 "0"\cf4  + \cf5 v\cf4  : \cf5 v\cf4 ;\cb1 \
\cb3     \}).\cf5 join\cf4 (\cf6 ""\cf4 );\cb1 \
\cb3     \cf2 var\cf4  \cf5 query\cf4  = \cf6 "?"\cf4  + \cf5 string\cf4  + \cf6 "&signature="\cf4  + \cf5 signature\cf4 ;\cb1 \
\cb3     \cf2 var\cf4  \cf5 params\cf4  = \{\cb1 \
\cb3         \cf6 'method'\cf4 : \cf6 'get'\cf4 ,\cb1 \
\cb3         \cf6 'headers'\cf4 : \{\cf6 'X-MBX-APIKEY'\cf4 : \cf5 key\cf4 \},\cb1 \
\cb3         \cf6 'muteHttpExceptions'\cf4 : \cf2 true\cf4 ,\cb1 \
\cb3     \};\cb1 \
\cb3     \cf2 var\cf4  \cf5 dataa\cf4  = \cf8 UrlFetchApp\cf4 .\cf5 fetch\cf4 (\cf5 baseUrl\cf4  + \cf5 api\cf4  + \cf5 query\cf4 , \cf5 params\cf4 );\cb1 \
\cb3     \cf8 Utilities\cf4 .\cf5 sleep\cf4 (\cf9 500\cf4 )\cb1 \
\cb3     \cf7 //Logger.log( i + ")  :  " person +  "   -->    " + dataa.getContentText())\cf4 \cb1 \
\cb3     \cb1 \
\cb3     \cf5 ii\cf4  = \cf9 0\cf4 \cb1 \
\cb3    \cb1 \
\cb3     \cf2 var\cf4  \cf5 sucess\cf4  = \cf9 1\cf4 \cb1 \
\cb3     \cf2 while\cf4  (!(\cf5 dataa\cf4 .\cf5 getContentText\cf4 ()).\cf5 includes\cf4 (\cf6 '"asset":"BTC"'\cf4 )) \{\cb1 \
\cb3       \cf5 ii\cf4 ++;\cb1 \
\cb3       \cf2 if\cf4  (\cf5 ii\cf4  > \cf9 10\cf4 )\{\cb1 \
\cb3         \cf2 break\cf4 \cb1 \
\cb3       \}\cb1 \
\cb3       \cb1 \
\cb3       \cf2 if\cf4  (\cf5 ii\cf4  > \cf9 8\cf4 )\{\cb1 \
\cb3         \cf5 url\cf4  = \cf5 baseUrl1\cf4 \cb1 \
\cb3       \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 ii\cf4  > \cf9 5\cf4 )\{\cb1 \
\cb3         \cf5 url\cf4  = \cf5 baseUrl2\cf4 \cb1 \
\cb3       \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 ii\cf4  > \cf9 2\cf4 )\{\cb1 \
\cb3         \cf5 url\cf4  = \cf5 baseUrl3\cf4 \cb1 \
\cb3       \} \cf2 else\cf4  \{\cb1 \
\cb3         \cf5 url\cf4  = \cf5 baseUrl\cf4 \cb1 \
\cb3       \}\cb1 \
\cb3       \cb1 \
\cb3       \cf8 Utilities\cf4 .\cf5 sleep\cf4 (\cf9 1000\cf4 )\cb1 \
\cb3       \cf2 var\cf4  \cf5 timestamp\cf4  = \cf8 Number\cf4 (\cf2 new\cf4  \cf8 Date\cf4 ().\cf5 getTime\cf4 ()).\cf5 toFixed\cf4 (\cf9 0\cf4 );\cb1 \
\cb3       \cf2 var\cf4  \cf5 string\cf4  = \cf6 "timestamp="\cf4  + \cf5 timestamp\cf4 ;\cb1 \
\cb3       \cf2 var\cf4  \cf5 signature\cf4  = \cf8 Utilities\cf4 .\cf5 computeHmacSha256Signature\cf4 (\cf5 string\cf4 , \cf5 secret\cf4 );\cb1 \
\cb3       \cf5 signature\cf4  = \cf5 signature\cf4 .\cf5 map\cf4 (\cf2 function\cf4 (\cf5 e\cf4 ) \{\cb1 \
\cb3           \cf2 var\cf4  \cf5 v\cf4  = (\cf5 e\cf4  < \cf9 0\cf4  ? \cf5 e\cf4  + \cf9 256\cf4  : \cf5 e\cf4 ).\cf5 toString\cf4 (\cf9 16\cf4 );\cb1 \
\cb3           \cf2 return\cf4  \cf5 v\cf4 .\cf5 length\cf4  == \cf9 1\cf4  ? \cf6 "0"\cf4  + \cf5 v\cf4  : \cf5 v\cf4 ;\cb1 \
\cb3       \}).\cf5 join\cf4 (\cf6 ""\cf4 );\cb1 \
\cb3       \cf2 var\cf4  \cf5 query\cf4  = \cf6 "?"\cf4  + \cf5 string\cf4  + \cf6 "&signature="\cf4  + \cf5 signature\cf4 ;\cb1 \
\cb3       \cf2 var\cf4  \cf5 params\cf4  = \{\cb1 \
\cb3           \cf6 'method'\cf4 : \cf6 'get'\cf4 ,\cb1 \
\cb3           \cf6 'headers'\cf4 : \{\cf6 'X-MBX-APIKEY'\cf4 : \cf5 key\cf4 \},\cb1 \
\cb3           \cf6 'muteHttpExceptions'\cf4 : \cf2 true\cf4 ,\cb1 \
\cb3       \};\cb1 \
\cb3       \cb1 \
\
\cb3       \cf2 var\cf4  \cf5 dataa\cf4  = \cf8 UrlFetchApp\cf4 .\cf5 fetch\cf4 (\cf5 url\cf4  + \cf5 api\cf4  + \cf5 query\cf4 , \cf5 params\cf4 );\cb1 \
\cb3       \cb1 \
\cb3       \cf8 Logger\cf4 .\cf5 log\cf4 (\cf5 ii\cf4  + \cf6 "  --> "\cf4  + \cf5 dataa\cf4 .\cf5 getContentText\cf4 ())\cb1 \
\cb3       \cb1 \
\cb3       \cf2 if\cf4  (!(\cf5 dataa\cf4 .\cf5 getContentText\cf4 ()).\cf5 includes\cf4 (\cf6 '"asset":"BTC"'\cf4 )) \{\cb1 \
\cb3         \cf5 sucess\cf4  = \cf9 0\cf4 \cb1 \
\cb3       \}\cf2 else\cf4 \{\cb1 \
\cb3         \cf5 sucess\cf4  = \cf9 1\cf4 \cb1 \
\cb3       \}\cb1 \
\cb3       \cb1 \
\cb3     \}\cb1 \
\cb3     \cb1 \
\cb3     \cf2 if\cf4  (\cf5 sucess\cf4  = \cf9 1\cf4 ) \{\cb1 \
\cb3       \cf8 Logger\cf4 .\cf5 log\cf4 (\cf6 "success = "\cf4  + \cf5 sucess\cf4 )\cb1 \
\cb3       \cf5 toast\cf4  (\cf5 ii\cf4  + \cf6 " _ "\cf4  + \cf5 sucess\cf4  + \cf6 " \\n "\cf4  + \cf5 url\cf4  , \cf5 person\cf4  )\cb1 \
\cb3       \cf2 var\cf4  \cf5 w\cf4  = \cf8 JSON\cf4 .\cf5 parse\cf4 (\cf5 dataa\cf4 .\cf5 getContentText\cf4 ());\cb1 \
\cb3       \cf8 Utilities\cf4 .\cf5 sleep\cf4 (\cf9 1000\cf4 )\cb1 \
\cb3       \cf2 var\cf4  \cf5 genData\cf4  = \cf5 w\cf4 .\cf5 balances\cf4 ;\cb1 \
\cb3       \cf2 var\cf4  \cf5 sheet\cf4  = \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf5 person\cf4 );\cb1 \
\cb3       \cf2 var\cf4  \cf5 date\cf4  = \cf2 new\cf4  \cf8 Date\cf4 ();\cb1 \
\cb3       \cf2 var\cf4  \cf5 cell\cf4  = \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "O1"\cf4 );\cb1 \
\cb3       \cf5 cell\cf4 .\cf5 setValue\cf4 (\cf5 date\cf4 );\cb1 \
\cb3       \cf2 let\cf4  \cf5 values\cf4  = [];  \cf7 // Added\cf4 \cb1 \
\cb3       \cf2 var\cf4  \cf5 range\cf4  = \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "L10:M12"\cf4 );\cb1 \
\cb3       \cf2 var\cf4  \cf5 cell\cf4  = \cf5 range\cf4 .\cf5 getCell\cf4 (\cf9 1\cf4 , \cf9 1\cf4 );\cb1 \
\cb3       \cf2 if\cf4  (\cf5 cell\cf4 .\cf5 getValue\cf4 ())\{\cb1 \
\cb3         \cf2 var\cf4  \cf5 rangesToClear\cf4  = [\cf6 "N2:N19"\cf4 , \cf6 "O2:O19"\cf4 ];        \cf7 // enter all range references here\cf4 \cb1 \
\cb3         \cf2 for\cf4  (\cf2 var\cf4  \cf5 iii\cf4  = \cf9 0\cf4 ; \cf5 iii\cf4  < \cf5 rangesToClear\cf4 .\cf5 length\cf4 ; \cf5 iii\cf4 ++)\{\cb1 \
\cb3           \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf5 rangesToClear\cf4 [\cf5 iii\cf4 ]).\cf5 clearContent\cf4 ();\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\
\cb3       \cf2 for\cf4  (\cf2 var\cf4  \cf5 iiii\cf4  \cf2 in\cf4  \cf5 genData\cf4 ) \{     \cb1 \
\cb3         \cf2 var\cf4  \cf5 freemoney\cf4  =  \cf8 Number\cf4 (\cf5 genData\cf4 [\cf5 iiii\cf4 ].\cf5 free\cf4 )\cb1 \
\cb3         \cf2 var\cf4  \cf5 lockedmoney\cf4  =  \cf8 Number\cf4 (\cf5 genData\cf4 [\cf5 iiii\cf4 ].\cf5 locked\cf4 )\cb1 \
\cb3         \cf2 var\cf4  \cf5 totalmoney\cf4  = \cf5 freemoney\cf4  + \cf5 lockedmoney\cf4 \cb1 \
\cb3         \cb1 \
\cb3         \cb1 \
\cb3         \cf2 if\cf4  (((\cf5 totalmoney\cf4 ) > \cf9 0\cf4 ) || (\cf5 genData\cf4 [\cf5 iiii\cf4 ].\cf5 asset\cf4  == \cf6 "USDT"\cf4 ))\{\cb1 \
\cb3           \cf8 Logger\cf4 .\cf5 log\cf4 (\cf5 person\cf4  + \cf6 "  "\cf4   + \cf5 iiii\cf4  + \cf6 "  "\cf4  + \cf5 genData\cf4 [\cf5 iiii\cf4 ].\cf5 asset\cf4  + \cf6 "  "\cf4  + \cf5 totalmoney\cf4 )\cb1 \
\cb3           \cf5 values\cf4 .\cf5 push\cf4 ([\cf5 genData\cf4 [\cf5 iiii\cf4 ].\cf5 asset\cf4 , \cf5 totalmoney\cf4 ]);\cb1 \
\cb3           \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "N2:O"\cf4  + (\cf5 values\cf4 .\cf5 length\cf4  + \cf9 1\cf4 )).\cf5 setValues\cf4 (\cf5 values\cf4 );  \cf7 // Added\cf4 \cb1 \
\cb3           \cb1 \
\cb3           \cf2 if\cf4  (\cf5 genData\cf4 [\cf5 iiii\cf4 ].\cf5 asset\cf4  == \cf6 "BTC"\cf4 )\{\cb1 \
\cb3             \cf2 var\cf4  \cf5 cell\cf4  = \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "L7"\cf4 );\cb1 \
\cb3             \cf5 cell\cf4 .\cf5 setValue\cf4 (\cf5 totalmoney\cf4 );\cb1 \
\cb3           \}\cb1 \
\cb3           \cb1 \
\cb3           \cf2 if\cf4  (\cf5 genData\cf4 [\cf5 iiii\cf4 ].\cf5 asset\cf4  == \cf6 "USDT"\cf4 )\{\cb1 \
\cb3             \cf2 var\cf4  \cf5 cell\cf4  = \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "L6"\cf4 );\cb1 \
\cb3             \cf5 cell\cf4 .\cf5 setValue\cf4 (\cf5 totalmoney\cf4 );\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3         \cb1 \
\cb3       \}\cb1 \
\cb3       \cf2 var\cf4  \cf5 sheet\cf4  = \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf6 "Accounts Summary"\cf4 );\cb1 \
\cb3       \cb1 \
\cb3       \cf2 if\cf4  (\cf5 person\cf4  == \cf6 "Dara"\cf4 )\{\cb1 \
\cb3         \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf6 "Accounts Summary"\cf4 ).\cf5 getRange\cf4 (\cf6 "A10"\cf4 ).\cf5 setValue\cf4 (\cf6 "True"\cf4 );\cb1 \
\cb3       \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 person\cf4  ==\cf6 "Farid"\cf4 )\{\cb1 \
\cb3         \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf6 "Accounts Summary"\cf4 ).\cf5 getRange\cf4 (\cf6 "A11"\cf4 ).\cf5 setValue\cf4 (\cf6 "True"\cf4 );\cb1 \
\cb3       \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 person\cf4  == \cf6 "Sepehr"\cf4 )\{\cb1 \
\cb3         \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf6 "Accounts Summary"\cf4 ).\cf5 getRange\cf4 (\cf6 "A12"\cf4 ).\cf5 setValue\cf4 (\cf6 "True"\cf4 );\cb1 \
\cb3       \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 person\cf4  == \cf6 "Shirin"\cf4 )\{\cb1 \
\cb3         \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf6 "Accounts Summary"\cf4 ).\cf5 getRange\cf4 (\cf6 "A13"\cf4 ).\cf5 setValue\cf4 (\cf6 "True"\cf4 );\cb1 \
\cb3       \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 person\cf4  == \cf6 "Faezeh"\cf4 )\{\cb1 \
\cb3         \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf6 "Accounts Summary"\cf4 ).\cf5 getRange\cf4 (\cf6 "A14"\cf4 ).\cf5 setValue\cf4 (\cf6 "True"\cf4 );\cb1 \
\cb3       \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 person\cf4  == \cf6 "Saman"\cf4 )\{\cb1 \
\cb3         \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf6 "Accounts Summary"\cf4 ).\cf5 getRange\cf4 (\cf6 "A15"\cf4 ).\cf5 setValue\cf4 (\cf6 "True"\cf4 );\cb1 \
\cb3       \} \cb1 \
\cb3   \cb1 \
\cb3         \cb1 \
\cb3         \cb1 \
\cb3         \cb1 \
\cb3     \}\cb1 \
\cb3         \cb1 \
\
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\
\cf2 \cb3 function\cf4  \cf8 DailySnapshot\cf4 () \{\cb1 \
\cb3   \cf8 Logger\cf4 .\cf5 log\cf4 (\cf6 "Function DailySnapshot is running : ........ "\cf4  )\cb1 \
\cb3   \cf2 var\cf4  \cf5 api\cf4  = \cf6 "/sapi/v1/accountSnapshot"\cf4 ; \cf7 // Please input API Endpoint you want.\cf4 \cb1 \
\cb3   \cf2 for\cf4 (\cf2 let\cf4  \cf5 i\cf4  = \cf9 0\cf4 ; \cf5 i\cf4  < \cf5 name_list\cf4 .\cf5 length\cf4 ; \cf5 i\cf4 ++)\{ \cb1 \
\cb3           \cb1 \
\cb3     \cf2 var\cf4  \cf5 person\cf4  = \cf5 name_list\cf4 [\cf5 i\cf4 ]\cb1 \
\cb3     \cf2 var\cf4  \cf5 timestamp\cf4  = \cf8 Number\cf4 (\cf2 new\cf4  \cf8 Date\cf4 ().\cf5 getTime\cf4 ()).\cf5 toFixed\cf4 (\cf9 0\cf4 );\cb1 \
\cb3     \cf2 var\cf4  \cf5 string\cf4  = \cf6 "type=SPOT&timestamp="\cf4  + \cf5 timestamp\cf4 ; \cf7 // Please input query parameters for the inputterd API.\cf4 \cb1 \
\cb3     \cf7 //Logger.log(person)\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 key\cf4  = \cf8 APIKEY\cf4 (\cf5 person\cf4 )[\cf9 0\cf4 ];\cb1 \
\cb3     \cf2 var\cf4  \cf5 secret\cf4  = \cf8 APIKEY\cf4 (\cf5 person\cf4 )[\cf9 1\cf4 ];\cb1 \
\cb3     \cf2 var\cf4  \cf5 signature\cf4  = \cf8 Utilities\cf4 .\cf5 computeHmacSha256Signature\cf4 (\cf5 string\cf4 , \cf5 secret\cf4 );\cb1 \
\cb3     \cf5 signature\cf4  = \cf5 signature\cf4 .\cf5 map\cf4 (\cf2 function\cf4 (\cf5 e\cf4 ) \{\cb1 \
\cb3         \cf2 var\cf4  \cf5 v\cf4  = (\cf5 e\cf4  < \cf9 0\cf4  ? \cf5 e\cf4  + \cf9 256\cf4  : \cf5 e\cf4 ).\cf5 toString\cf4 (\cf9 16\cf4 );\cb1 \
\cb3         \cf2 return\cf4  \cf5 v\cf4 .\cf5 length\cf4  == \cf9 1\cf4  ? \cf6 "0"\cf4  + \cf5 v\cf4  : \cf5 v\cf4 ;\cb1 \
\cb3     \}).\cf5 join\cf4 (\cf6 ""\cf4 );\cb1 \
\cb3     \cf2 var\cf4  \cf5 query\cf4  = \cf6 "?"\cf4  + \cf5 string\cf4  + \cf6 "&signature="\cf4  + \cf5 signature\cf4 ;\cb1 \
\cb3     \cf2 var\cf4  \cf5 params\cf4  = \{\cb1 \
\cb3         \cf6 'method'\cf4 : \cf6 'get'\cf4 ,\cb1 \
\cb3         \cf6 'headers'\cf4 : \{\cf6 'X-MBX-APIKEY'\cf4 : \cf5 key\cf4 \},\cb1 \
\cb3         \cf6 'muteHttpExceptions'\cf4 : \cf2 true\cf4 ,\cb1 \
\cb3     \};\cb1 \
\cb3     \cf7 //Utilities.sleep(500)\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 dataa\cf4  = \cf8 UrlFetchApp\cf4 .\cf5 fetch\cf4 (\cf5 baseUrl\cf4  + \cf5 api\cf4  + \cf5 query\cf4 , \cf5 params\cf4 );\cb1 \
\cb3     \cf7 //Utilities.sleep(500)\cf4 \cb1 \
\cb3     \cf7 //Logger.log(person + " - daily snapshot -> " + dataa.getContentText())\cf4 \cb1 \
\cb3     \cf5 num\cf4  = \cf9 0\cf4 \cb1 \
\cb3     \cf7 /*\cf4 \cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf7 \cb3     while ((dataa.getContentText()) == "")  \{\cf4 \cb1 \
\cf7 \cb3             num++;\cf4 \cb1 \
\cf7 \cb3             var dataa = UrlFetchApp.fetch(baseUrl + api + query, params);\cf4 \cb1 \
\cf7 \cb3             Utilities.sleep(2000)\cf4 \cb1 \
\cf7 \cb3             Logger.log(num, "  --> " , dataa.getContentText())\cf4 \cb1 \
\cf7 \cb3     \}\cf4 \cb1 \
\cf7 \cb3     */\cf4 \cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 var\cf4  \cf5 w\cf4  = \cf8 JSON\cf4 .\cf5 parse\cf4 (\cf5 dataa\cf4 .\cf5 getContentText\cf4 ());\cb1 \
\cb3     \cf2 var\cf4  \cf5 genData\cf4  = \cf5 w\cf4 .\cf5 snapshotVos\cf4 ;\cb1 \
\cb3     \cf2 var\cf4  \cf5 totalavalableUSDT\cf4  = \cf9 0\cf4 \cb1 \
\cb3     \cf7 //Logger.log(genData)\cf4 \cb1 \
\
\cb3     \cf2 var\cf4  \cf5 howmanydata\cf4  = \cf8 Number\cf4 (\cf5 genData\cf4 .\cf5 length\cf4 ) - \cf9 1\cf4 \cb1 \
\cb3     \cf7 //Utilities.sleep(1000)\cf4 \cb1 \
\cb3     \cf7 //Logger.log(howmanydata)\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 totalfreebtc\cf4  = \cf5 genData\cf4 [\cf5 howmanydata\cf4 ].\cf5 data\cf4 .\cf5 totalAssetOfBtc\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 totalAssetOfBtcs\cf4  = \cf8 Number\cf4 (\cf5 totalfreebtc\cf4 )\cb1 \
\cb3     \cb1 \
\cb3     \cf2 for\cf4  (\cf2 var\cf4  \cf5 j\cf4  \cf2 in\cf4  \cf5 genData\cf4 [\cf5 howmanydata\cf4 ].\cf5 data\cf4 .\cf5 balances\cf4 )\{    \cb1 \
\cb3       \cf2 var\cf4  \cf5 assets\cf4  = \cf5 genData\cf4 [\cf5 howmanydata\cf4 ].\cf5 data\cf4 .\cf5 balances\cf4 [\cf5 j\cf4 ].\cf5 asset\cf4 \cb1 \
\cb3       \cb1 \
\cb3       \cf2 if\cf4  (\cf5 assets\cf4  == \cf6 "BTC"\cf4 ) \{\cb1 \
\cb3         \cf2 var\cf4  \cf5 lockeds\cf4  = \cf8 Number\cf4 (\cf5 genData\cf4 [\cf5 howmanydata\cf4 ].\cf5 data\cf4 .\cf5 balances\cf4 [\cf5 j\cf4 ].\cf5 locked\cf4 )\cb1 \
\cb3         \cf2 var\cf4  \cf5 totalLocked\cf4  = \cf5 lockeds\cf4 \cb1 \
\cb3         \cf5 totalAssetOfBtcs\cf4  = \cf5 totalLocked\cf4  + \cf5 totalAssetOfBtcs\cf4 \cb1 \
\
\cb3       \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 assets\cf4  == \cf6 "USDT"\cf4 )\{\cb1 \
\cb3         \cf7 //Logger.log("Dara total BTC = " + assets + CRYPTOFINANCE("BINANCE:" +"BTC/USD"))\cf4 \cb1 \
\cb3         \cf2 var\cf4  \cf8 BTC\cf4  = \cf8 Number\cf4 (\cf8 CRYPTOFINANCE\cf4 (\cf6 "BINANCE:"\cf4  +\cf6 "BTC/USD"\cf4 ))\cb1 \
\cb3         \cf2 var\cf4  \cf8 USDT\cf4  = \cf9 1\cf4 /\cf8 BTC\cf4 \cb1 \
\cb3         \cf2 var\cf4  \cf5 frees\cf4  = \cf8 Number\cf4 (\cf5 genData\cf4 [\cf5 howmanydata\cf4 ].\cf5 data\cf4 .\cf5 balances\cf4 [\cf5 j\cf4 ].\cf5 free\cf4 )\cb1 \
\cb3         \cf2 var\cf4  \cf5 lockeds\cf4  = \cf8 Number\cf4 (\cf5 genData\cf4 [\cf5 howmanydata\cf4 ].\cf5 data\cf4 .\cf5 balances\cf4 [\cf5 j\cf4 ].\cf5 locked\cf4 )\cb1 \
\cb3         \cf5 totalavalableUSDT\cf4  = \cf5 frees\cf4  + \cf5 lockeds\cf4 \cb1 \
\cb3         \cf5 totalLocked\cf4  = \cf5 lockeds\cf4  * \cf8 USDT\cf4 \cb1 \
\cb3         \cf5 totalAssetOfBtcs\cf4  = \cf5 totalLocked\cf4  + \cf5 totalAssetOfBtcs\cf4 \cb1 \
\cb3         \cf7 //log(assets + totalAssetOfBtcs)\cf4 \cb1 \
\
\cb3       \} \cf2 else\cf4  \{\cb1 \
\cb3         \cf2 var\cf4  \cf5 lockeds\cf4  = \cf8 Number\cf4 (\cf5 genData\cf4 [\cf5 howmanydata\cf4 ].\cf5 data\cf4 .\cf5 balances\cf4 [\cf5 j\cf4 ].\cf5 locked\cf4 )\cb1 \
\cb3         \cf2 var\cf4  \cf5 totalLocked\cf4  = \cf8 Number\cf4 (\cf8 CRYPTOFINANCE\cf4 (\cf6 "BINANCE:"\cf4  + \cf5 assets\cf4  +\cf6 "/BTC"\cf4 )) * \cf5 lockeds\cf4 \cb1 \
\cb3         \cf5 totalAssetOfBtcs\cf4  = \cf5 totalLocked\cf4  + \cf5 totalAssetOfBtcs\cf4 \cb1 \
\cb3       \}\cb1 \
\cb3       \cb1 \
\cb3     \}\cb1 \
\cb3     \cf8 Logger\cf4 .\cf5 log\cf4 ( \cf5 person\cf4  + \cf6 "  total BTC = "\cf4  + \cf5 totalAssetOfBtcs\cf4 )\cb1 \
\cb3     \cf2 var\cf4  \cf5 sheet\cf4  = \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf5 person\cf4 +\cf6 "(dont-touch)"\cf4 );\cb1 \
\cb3     \cf7 //var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dara(dont-touch)");\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 date\cf4  = \cf2 new\cf4  \cf8 Date\cf4 ();\cb1 \
\cb3     \cf5 sheet\cf4 .\cf5 appendRow\cf4 ([\cf5 date\cf4 , \cf5 genData\cf4 [\cf5 howmanydata\cf4 ].\cf5 updateTime\cf4 , \cf5 totalAssetOfBtcs\cf4 , \cf5 totalavalableUSDT\cf4 ])\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\
\cf2 \cb3 function\cf4  \cf8 FetchFuture\cf4 () \{\cb1 \
\cb3   \cf8 Logger\cf4 .\cf5 log\cf4 (\cf6 "Function FetchFuture is running : ........ "\cf4  )\cb1 \
\cb3   \cf2 var\cf4  \cf5 api\cf4  = \cf6 "/fapi/v2/balance"\cf4  ;\cb1 \
\cb3   \cf7 //var api = "/api/v3/account" ;\cf4 \cb1 \
\
\cb3   \cf2 for\cf4 (\cf2 let\cf4  \cf5 i\cf4  = \cf9 0\cf4 ; \cf5 i\cf4  < \cf5 name_list\cf4 .\cf5 length\cf4 ; \cf5 i\cf4 ++)\{ \cb1 \
\cb3           \cb1 \
\cb3     \cf2 var\cf4  \cf5 person\cf4  = \cf5 name_list\cf4 [\cf5 i\cf4 ]\cb1 \
\cb3     \cf7 //var person = "sepehr"\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 timestamp\cf4  = \cf8 Number\cf4 (\cf2 new\cf4  \cf8 Date\cf4 ().\cf5 getTime\cf4 ()).\cf5 toFixed\cf4 (\cf9 0\cf4 );\cb1 \
\cb3     \cf2 var\cf4  \cf5 string\cf4  = \cf6 "timestamp="\cf4  + \cf5 timestamp\cf4 ;\cb1 \
\cb3     \cf7 //Logger.log(i +  person)\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 key\cf4  = \cf8 APIKEY\cf4 (\cf5 person\cf4 )[\cf9 0\cf4 ];\cb1 \
\cb3     \cf2 var\cf4  \cf5 secret\cf4  = \cf8 APIKEY\cf4 (\cf5 person\cf4 )[\cf9 1\cf4 ];\cb1 \
\cb3     \cf2 var\cf4  \cf5 signature\cf4  = \cf8 Utilities\cf4 .\cf5 computeHmacSha256Signature\cf4 (\cf5 string\cf4 , \cf5 secret\cf4 );\cb1 \
\cb3     \cf5 signature\cf4  = \cf5 signature\cf4 .\cf5 map\cf4 (\cf2 function\cf4 (\cf5 e\cf4 ) \{\cb1 \
\cb3         \cf2 var\cf4  \cf5 v\cf4  = (\cf5 e\cf4  < \cf9 0\cf4  ? \cf5 e\cf4  + \cf9 256\cf4  : \cf5 e\cf4 ).\cf5 toString\cf4 (\cf9 16\cf4 );\cb1 \
\cb3         \cf2 return\cf4  \cf5 v\cf4 .\cf5 length\cf4  == \cf9 1\cf4  ? \cf6 "0"\cf4  + \cf5 v\cf4  : \cf5 v\cf4 ;\cb1 \
\cb3     \}).\cf5 join\cf4 (\cf6 ""\cf4 );\cb1 \
\cb3     \cf2 var\cf4  \cf5 query\cf4  = \cf6 "?"\cf4  + \cf5 string\cf4  + \cf6 "&signature="\cf4  + \cf5 signature\cf4 ;\cb1 \
\cb3     \cf2 var\cf4  \cf5 params\cf4  = \{\cb1 \
\cb3         \cf6 'method'\cf4 : \cf6 'get'\cf4 ,\cb1 \
\cb3         \cf6 'headers'\cf4 : \{\cf6 'X-MBX-APIKEY'\cf4 : \cf5 key\cf4 \},\cb1 \
\cb3         \cf6 'muteHttpExceptions'\cf4 : \cf2 true\cf4 ,\cb1 \
\cb3     \};\cb1 \
\cb3     \cf2 var\cf4  \cf5 dataa\cf4  = \cf8 UrlFetchApp\cf4 .\cf5 fetch\cf4 (\cf5 baseUrl_future\cf4  + \cf5 api\cf4  + \cf5 query\cf4 , \cf5 params\cf4 );\cb1 \
\cb3     \cb1 \
\cb3     \cf5 ii\cf4  = \cf9 0\cf4 \cb1 \
\cb3     \cf7 /*\cf4 \cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf7 \cb3     while ((dataa.getContentText()).includes("msg")) \{\cf4 \cb1 \
\cf7 \cb3             ii++;\cf4 \cb1 \
\cf7 \cb3             var dataa = UrlFetchApp.fetch(baseUrl + api + query, params);\cf4 \cb1 \
\cf7 \cb3             Utilities.sleep(2000)\cf4 \cb1 \
\cf7 \cb3             //Logger.log(i +  "  -msg-> "  +  dataa.getContentText())\cf4 \cb1 \
\cf7 \cb3     \}\cf4 \cb1 \
\cf7 \cb3     Logger.log(i+person);\cf4 \cb1 \
\cf7 \cb3     */\cf4 \cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 var\cf4  \cf5 sheet\cf4  = \cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 ().\cf5 getSheetByName\cf4 (\cf5 person\cf4 );\cb1 \
\
\cb3     \cf2 if\cf4  ((\cf5 dataa\cf4 .\cf5 getContentText\cf4 ()).\cf5 includes\cf4 (\cf6 "404"\cf4 )) \{\cb1 \
\cb3       \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "L13"\cf4 ).\cf5 setValue\cf4 (\cf6 "API not future enabled"\cf4 );\cb1 \
\cb3       \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "L14"\cf4 ).\cf5 setValue\cf4 (\cf6 "API not future enabled"\cf4 );\cb1 \
\cb3       \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "L15"\cf4 ).\cf5 setValue\cf4 (\cf6 "API not future enabled"\cf4 );\cb1 \
\cb3             \cb1 \
\cb3     \} \cf2 else\cf4  \{\cb1 \
\cb3       \cf2 var\cf4  \cf5 w\cf4  = \cf8 JSON\cf4 .\cf5 parse\cf4 (\cf5 dataa\cf4 .\cf5 getContentText\cf4 ());\cb1 \
\cb3       \cf2 var\cf4  \cf5 balance\cf4  = \cf5 w\cf4 [\cf9 0\cf4 ].\cf5 balance\cf4 \cb1 \
\cb3       \cf2 var\cf4  \cf5 availableBalance\cf4  = \cf5 w\cf4 [\cf9 0\cf4 ].\cf5 availableBalance\cf4 \cb1 \
\cb3       \cf7 //var maxWithdrawAmount = w[0].maxWithdrawAmount\cf4 \cb1 \
\cb3       \cf7 //var crossWalletBalance = w[0].crossWalletBalance\cf4 \cb1 \
\cb3       \cf2 var\cf4  \cf5 crossUnPnl\cf4  = \cf5 w\cf4 [\cf9 0\cf4 ].\cf5 crossUnPnl\cf4 \cb1 \
\cb3       \cf8 Logger\cf4 .\cf5 log\cf4 (\cf5 i\cf4 +\cf5 person\cf4  + \cf6 " Future Balance = "\cf4  +  \cf5 balance\cf4 );\cb1 \
\
\cb3       \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "L13"\cf4 ).\cf5 setValue\cf4 (\cf5 balance\cf4 );\cb1 \
\cb3       \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "L14"\cf4 ).\cf5 setValue\cf4 (\cf5 availableBalance\cf4 );\cb1 \
\cb3       \cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf6 "L15"\cf4 ).\cf5 setValue\cf4 (\cf5 crossUnPnl\cf4 );\cb1 \
\cb3       \cf7 //sheet.getRange("L16").setValue(maxWithdrawAmount);\cf4 \cb1 \
\cb3       \cf7 //sheet.getRange("L17").setValue(crossWalletBalance);\cf4 \cb1 \
\
\cb3     \}\cb1 \
\cb3     \cb1 \
\cb3     \cb1 \
\cb3     \cb1 \
\
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\
\cf2 \cb3 function\cf4  \cf8 APIKEY\cf4 (\cf5 name\cf4 ) \{\cb1 \
\cb3   \cf2 var\cf4  \cf5 person\cf4  = \cf5 name\cf4 \cb1 \
\cb3   \cf2 if\cf4  (\cf5 name\cf4  == \cf6 "Sepehr"\cf4 ) \{\cb1 \
\cb3     \cf7 //var key = '\cf6 \cb3 **************************************************\cf7 \cb3 GtEe8FOXqcd'; // old (no future)\cf4 \cb1 \
\cb3     \cf7 //var secret = '\cf6 \cb3 **************************************************\cf7 \cb3 TZUmfT3ZXoG2'; // old (no future)\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 key\cf4  = \cf6 \'91**************************************************I2KTKmUbCHOWLz'\cf4 ; \cf7 // future)\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 secret\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 nzmRaJyXDWLj4'\cf4 ; \cf7 // future)\cf4 \cb1 \
\cb3               \cb1 \
\cb3   \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 name\cf4  == \cf6 "Dara"\cf4 )\{\cb1 \
\cb3     \cf2 var\cf4  \cf5 key\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 m8DlfJSp'\cf4 ; \cf7 // Please input your key.\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 secret\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 N7fwKuhlbj'\cf4 ; \cf7 // Please input your secret.\cf4 \cb1 \
\cb3      \cb1 \
\cb3   \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 name\cf4  == \cf6 "Farid"\cf4 )\{\cb1 \
\cb3     \cf2 var\cf4  \cf5 key\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 u8i0LQ'\cf4 ; \cf7 // Please input your key.\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 secret\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 W2waA4Lp'\cf4 ; \cf7 // Please input your secret.\cf4 \cb1 \
\cb3      \cb1 \
\cb3   \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 name\cf4  == \cf6 "Saman"\cf4 )\{\cb1 \
\cb3     \cf2 var\cf4  \cf5 key\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 qt8tNFx'\cf4 ; \cf7 // Please input your key.\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 secret\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 M9RqhmY'\cf4 ; \cf7 // Please input your secret.\cf4 \cb1 \
\cb3        \cb1 \
\cb3   \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 name\cf4  == \cf6 "Faezeh"\cf4 )\{\cb1 \
\cb3     \cf2 var\cf4  \cf5 key\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 RqVBTXl8c'\cf4 ; \cf7 // Please input your key.\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 secret\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 AyDlpv8f'\cf4 ; \cf7 // Please input your secret.\cf4 \cb1 \
\cb3      \cb1 \
\cb3   \} \cf2 else\cf4  \cf2 if\cf4  (\cf5 name\cf4  == \cf6 "Shirin"\cf4 )\{\cb1 \
\cb3     \cf2 var\cf4  \cf5 key\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 p7Eaywj'\cf4 ; \cf7 // Please input your key.\cf4 \cb1 \
\cb3     \cf2 var\cf4  \cf5 secret\cf4  = \cf6 '\cf6 \cb3 **************************************************\cf6 \cb3 jBUfK28Uf'\cf4 ; \cf7 // Please input your secret.\cf4 \cb1 \
\cb3   \}    \cb1 \
\cb3       \cb1 \
\cb3   \cf2 return\cf4  [\cf5 key\cf4 ,\cf5 secret\cf4 ]\cb1 \
\cb3 \}\cb1 \
\
\
\cf2 \cb3 function\cf4  \cf5 toast\cf4 (\cf5 body\cf4 , \cf5 title\cf4 , \cf5 timeout\cf4 ) \{\cb1 \
\cb3   \cf2 return\cf4  \cf8 SpreadsheetApp\cf4 .\cf5 getActive\cf4 ().\cf5 toast\cf4 (\cb1 \
\cb3     \cf5 body\cf4 ,\cb1 \
\cb3     \cf5 title\cf4  || \cf6 "Binance to Google Sheets"\cf4 ,\cb1 \
\cb3     \cf5 timeout\cf4  || \cf9 10\cf4  \cf7 // In seconds\cf4 \cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf7 \cb3 // Let's all treat those lovely APIs with respect and don't hammer them to hard to avoid bans. This script will do \cf4 \cb1 \
\cf7 \cb3 // one single call to Binance to fetch the tickers and dump them in the 'Binance24h' sheet.  - wkr, Moosy Research\cf4 \cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 function\cf4  \cf8 BINTickFetch\cf4 ()\{\cb1 \
\cb3   \cf8 Logger\cf4 .\cf5 log\cf4 (\cf6 "Function BINTickFetch is running : ........ "\cf4  )\cb1 \
\cb3   \cf2 var\cf4  \cf5 rows\cf4 =[],\cf5 obj_array\cf4 =\cf2 null\cf4 , \cf5 msg\cf4 =\cf6 ""\cf4 ;\cb1 \
\cb3   \cf2 try\cf4  \{\cf5 obj_array\cf4 =\cf8 JSON\cf4 .\cf5 parse\cf4 (\cf8 UrlFetchApp\cf4 .\cf5 fetch\cf4 (\cf6 "https://api.binance.com/api/v3/ticker/price"\cf4 ).\cf5 getContentText\cf4 ());\} \cf2 catch\cf4  (\cf5 e\cf4 ) \{ \cf5 msg\cf4 =\cf5 e\cf4 ; \cf5 obj_array\cf4 =\cf2 null\cf4 ;\}\cb1 \
\cb3   \cf2 if\cf4  (\cf5 obj_array\cf4 !=\cf2 null\cf4 )\{\cb1 \
\cb3     \cf2 for\cf4  (\cf5 r\cf4  \cf2 in\cf4  \cf5 obj_array\cf4 ) \cf5 rows\cf4 .\cf5 push\cf4 ([\cf5 obj_array\cf4 [\cf5 r\cf4 ].\cf2 symbol\cf4 , \cf5 parseFloat\cf4 (\cf5 obj_array\cf4 [\cf5 r\cf4 ].\cf5 price\cf4 )]);\cb1 \
\cb3     \cf2 var\cf4  \cf5 ss\cf4 =\cf8 SpreadsheetApp\cf4 .\cf5 getActiveSpreadsheet\cf4 (),\cf5 sheet\cf4 =\cf5 ss\cf4 .\cf5 getSheetByName\cf4 (\cf6 'Binance24h'\cf4 );\cf5 ss\cf4 .\cf5 getRange\cf4 (\cf6 "Binance24h!A1"\cf4 ).\cf5 setValue\cf4 (\cf2 new\cf4  \cf8 Date\cf4 ());\cb1 \
\cb3     \cf2 try\cf4  \{\cf2 var\cf4  \cf5 range\cf4 =\cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf9 2\cf4 ,\cf9 1\cf4 ,\cf5 sheet\cf4 .\cf5 getLastRow\cf4 (),\cf9 2\cf4 ).\cf5 clearContent\cf4 ();\} \cf2 catch\cf4 (\cf5 e\cf4 ) \{\cf8 Logger\cf4 .\cf5 log\cf4 (\cf6 "error"\cf4 );\}\cb1 \
\cb3     \cf2 if\cf4  (\cf5 rows\cf4  != \cf6 ""\cf4 ) \cf5 range\cf4 =\cf5 sheet\cf4 .\cf5 getRange\cf4 (\cf9 2\cf4 ,\cf9 1\cf4 ,\cf5 rows\cf4 .\cf5 length\cf4 ,\cf9 2\cf4 ); \cf5 range\cf4 .\cf5 setValues\cf4 (\cf5 rows\cf4 ); \cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 if\cf4  (\cf5 msg\cf4 !=\cf6 ""\cf4 ) \cf8 Browser\cf4 .\cf5 msgBox\cf4 (\cf6 "Oops, Binance API did not provide any valid data and returned an error. \\\\n\\\\n"\cf4 +\cf5 msg\cf4 );\cb1 \
\cb3 \}\cb1 \
\cb3  \cb1 \
\
}