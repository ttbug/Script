/*

我的时间：https://apps.apple.com/app/id1481796842

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "Pro": {
    //"expires_date": "2333-02-23T02:33:33Z",
    "product_identifier": "ninja.fxc.mytime.pro.lifetime",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
guding.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";

guding.subscriber.subscriptions = {
  "ninja.fxc.mytime.pro.lifetime": {
    //"expires_date": "2333-02-23T02:33:33Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
