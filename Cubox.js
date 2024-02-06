/*

[rewrite_local]
^https?:\/\/cubox\.(cc|pro)\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/ttbug/Script/main/Cubox.js

[MITM]
hostname = cubox.cc, cubox.pro

*/
var guding = JSON.parse($response.body);
guding.data.isExpire = false;
guding.data.expireTime ="2066-06-06T06:06:06Z";
$done({ body: JSON.stringify(guding) });
