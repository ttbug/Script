/*

[rewrite_local]
^https?:\/\/api\.craft\.do\/auth\/v3\/profile$ url script-response-body https://raw.githubusercontent.com/ttbug/Script/main/craft.js

[MITM]
hostname = api.craft.do

*/

var data = JSON.parse($response.body);
data = {
    "userId": "39a4448a-2846-cf62-c043-94d068af80f0",
    "profileImgUrl": "https://renderserver.craft.do/api/logo?type=u&colorIdx=5&caption=c",
    "email": "ttbuge@gmail.com",
    "firstName": "colin",
    "lastName": "hu",
    "market": "CN",
    "spaces":
    [
        {
            "id": "39a4448a-2846-cf62-c043-94d068af80f0",
            "name": "colin’s Space",
            "logoUrl": "https://renderserver.craft.do/api/logo?type=s&colorIdx=5&caption=cS",
            "properties":
            {},
            "tier": "Pro",
            "role": "owner",
            "teamId": "747012e0-eb03-32fa-12e3-e0de43e77484",
            "teamVisiblity": "private",
            "contributors":
            [
                {
                    "id": "39a4448a-2846-cf62-c043-94d068af80f0",
                    "email": "ttbuge@gmail.com",
                    "firstName": "colin",
                    "lastName": "hu",
                    "profileImgUrl": "https://renderserver.craft.do/api/logo?type=u&colorIdx=5&caption=c",
                    "role": "owner"
                }
            ],
            "limits":
            {
                "maxStorageMB": 51200
            }
        },
        {
            "id": "297e6440-ce49-0a77-b16a-162c7cdc18ee",
            "name": "技术栈",
            "logoUrl": "https://renderserver.craft.do/api/logo?type=s&colorIdx=1&caption=%E6%8A%80",
            "properties":
            {},
            "tier": "Pro",
            "role": "owner",
            "teamId": "747012e0-eb03-32fa-12e3-e0de43e77484",
            "teamVisiblity": "private",
            "contributors":
            [
                {
                    "id": "39a4448a-2846-cf62-c043-94d068af80f0",
                    "email": "ttbuge@gmail.com",
                    "firstName": "colin",
                    "lastName": "hu",
                    "profileImgUrl": "https://renderserver.craft.do/api/logo?type=u&colorIdx=5&caption=c",
                    "role": "owner"
                }
            ],
            "limits":
            {
                "maxStorageMB": 51200
            }
        }
    ],
    "creationTime": 1646227218495,
    "teams":
    [
        {
            "id": "747012e0-eb03-32fa-12e3-e0de43e77484",
            "name": "colin’s Team",
            "logoUrl": "https://renderserver.craft.do/api/logo?type=t&colorIdx=5&caption=cT",
            "tier": "Pro",
            "members":
            [
                {
                    "id": "39a4448a-2846-cf62-c043-94d068af80f0",
                    "email": "ttbuge@gmail.com",
                    "firstName": "colin",
                    "lastName": "hu",
                    "profileImgUrl": "https://renderserver.craft.do/api/logo?type=u&colorIdx=5&caption=c",
                    "role": "admin"
                }
            ],
            "role": "admin",
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
                },
                "trialInfo":
                {
                    "v2":
                    {
                        "isTrialActive": false,
                        "isAlreadyUsed": false,
                        "usedTypes":
                        []
                    }
                }
            },
            "isPrivate": true,
            "subscriptionInfo":
            {
                "provider": "License",
                "rawType": "License",
                "subscriptionId": "6a8ab54b-2075-1aa5-37d5-ddc08b444707",
                "renewPeriod": "None",
                "expirationTime": 1814225539229
            },
            "limits":
            {
                "isExportDisabled": false,
                "disableBigFormatCards": false,
                "disableIndocStats": false,
                "disablePrinting": false,
                "disableStats": false
            }
        }
    ]
}
$done({ body: JSON.stringify(data) });
