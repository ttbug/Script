/*

[rewrite_local]
^https?:\/\/api\.craft\.do\/subscription\/teams\/get-subscriptions? url script-response-body https://raw.githubusercontent.com/ttbug/Script/main/craft-team.js

[MITM]
hostname = api.craft.do

*/

var data = JSON.parse($response.body);
data = {
    "tier": "Pro",
    "status":
    {
        "isOverAllocationLimitActive": false,
        "hasOverAllocatedMembers": false,
        "gracePeriod":
        {
            "isActive": false
        },
        "trialSeatPeriod":
        {
            "isActive": false
        }
    },
    "seats":
    {
        "base": 1,
        "normal": 1,
        "trial": 0,
        "exceptional":
        [],
        "total": 1,
        "allowMemberOverAllocation": false
    },
    "subscriptions":
    [
        {
            "subscriptionId": "6a8ab54b-2075-1aa5-37d5-ddc08b444707",
            "isPrimary": true,
            "tier": "Pro",
            "provider": "License",
            "renewPeriod": "None",
            "isActive": true,
            "expirationTime": 1814225539229,
            "rawType": "License"
        }
    ]
}
$done({ body: JSON.stringify(data) });
