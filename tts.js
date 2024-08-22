/*

[rewrite_local]

^http:\/\/text-to-speech\.xinmengmakeji\.com\/api\/user url script-response-body https://raw.githubusercontent.com/ttbug/Script/main/tts.js

[MITM]
hostname = text-to-speech.xinmengmakeji.com

*/

var obj = JSON.parse($response.body);


obj = {
  "time" : "2024-08-21 22:42:34.742",
  "status" : 1,
  "data" : {
    "vip_product_id" : "month",
    "vip_expiry_date" : "2025-08-24 22:36:27",
    "vip_type" : 1,
    "invitation_code" : "udu2yd",
    "integral" : 0,
    "vip_expiry_date_1970" : 1724250987000
  }
}

$done({body:JSON.stringify(obj)});