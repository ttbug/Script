/*

Revenuecat解锁合集，已解锁APP及下载地址请见说明：https://github.com/Guding88/Script/blob/main/Readme.md

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/ttbug/Script/main/APPheji_Revenuecat.js
//^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Guding88/Script/main/APPheji_Revenuecat.js

[MITM]
hostname = api.revenuecat.com

*/
const guding = {};

const headers = $request.headers;
const uac = headers['User-Agent'] || headers['user-agent'];
//排除已禁止MITM的APP
const forbiddenApps = ['Fileball', 'APTV'];
const forbiddenAppFound = forbiddenApps.find(appName => (uac && uac.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本`);
  $done({});
}

const guding6 = JSON.parse(
  (typeof $response != "undefined" && $response.body) || null
);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  guding.headers = $request.headers;
} else if (guding6 && guding6.subscriber) {
  guding6.subscriber.subscriptions = guding6.subscriber.subscriptions || {};
  guding6.subscriber.entitlements = guding6.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
    const reg = /^[a-z]+$/;
    if (key === "User-Agent" && !reg.test(key)) {
      var lowerkey = key.toLowerCase();
      $request.headers[lowerkey] = $request.headers[key];
      delete $request.headers[key];
    }
  }
  var UA = $request.headers["user-agent"];
  const app = "gd";
  const UAMappings = {
    Nightcam:{name:'nightcam_pro',id:'com.ahmetserdarkaradeniz.nightcamyearlyalternative'},//11.26
    APTV: { name: "pro", id: "com.kimen.aptvpro.lifetime" },
    "Photo%20Vault": { name: "PRO", id: "2fa_0499_1y" },
    Authenticator: { name: "PRO", id: "2fa_0499_1y" },
    PhotoRoom: { name: "business", id: "com.background.business.yearly" },
    Structured: { name: "pro", id: "today.structured.pro" },
    LUTCamera: {
      name: "ProVersionLifeTime",
      id: "com.uzero.funforcam.lifetimepurchase",
    },
    Clockology: {
      name: "Clockology+",
      id: "com.mikehill.clockologyios.yearly",
    },
    Falendar: { name: "Falendar+", id: "falendar_68_life" },
    "G%20E%20I%20S%20T": {
      name: "memorado_premium",
      id: "com.memorado.subscription.yearly.v2",
    },
    PinPaper: { name: "allaccess", id: "Paper_Lifetime" },
    Lungy: { name: "Deluxe", id: "lungy_1999_lifetime" },
    MOZE: { name: "Premium", id: "https://t.me/Guding88" },
    Monefy: { name: "monefy_premium", id: "monefy.yearlysubscription" },
    OffScreen: {
      name: "Entitlement.Pro",
      id: "tech.miidii.offscreen.subscription.year.intro.first_year_discount",
    },
    Paper: { name: "pro", id: "com.fiftythree.paper.pro_12" },
    "Photo%20Cleaner": {
      name: "premium",
      id: "com.monocraft.photocleaner.lifetime.3",
    },
    Pillow: {
      name: "premium",
      id: "com.neybox.pillow.premium.year.specialoffer",
    },
    pixel_me_tokyo: { name: "pro", id: "pm_jpy2000_7d0" },
    Purr: { name: "Pro", id: "com.purr.annual.trial" },
    Reflectly: {
      name: "Growth_Bundle_Subscription",
      id: "com.tbd.Done.growth.bundle.yearly.v6",
    },
    HealthView: {
      name: "Growth_Bundle_Subscription",
      id: "com.tbd.Done.growth.bundle.yearly.v6",
    },
    TimeBloc: {
      name: "Growth_Bundle_Subscription",
      id: "com.tbd.Done.growth.bundle.yearly.v6",
    },
    SleepTimer: {
      name: "Growth_Bundle_Subscription",
      id: "com.tbd.Done.growth.bundle.yearly.v6",
    },
    Tally: {
      name: "Growth_Bundle_Subscription",
      id: "com.tbd.Done.growth.bundle.yearly.v6",
    },
    Grateful: {
      name: "Growth_Bundle_Subscription",
      id: "com.tbd.Done.growth.bundle.yearly.v6",
    },
    Last: {
      name: "Growth_Bundle_Subscription",
      id: "com.tbd.Done.growth.bundle.yearly.v6",
    },
    Done: {
      name: "Growth_Bundle_Subscription",
      id: "com.tbd.Done.growth.bundle.yearly.v6",
    },
    Ape: { name: "pro", id: "ape.weekly.discount" },
    Waterlytics: { name: "Pro", id: "app.waterlytics.pro.yearly.v2" },
    WidgetSmith: { name: "Premium", id: "PremiumAnnualWidget" },
    Browser: { name: "pro", id: "pro_zoomable" },
    "%E8%BD%A6%E7%A5%A8%E7%A5%A8": { name: "vip", id: "eticket_6_life" },
    app: { name: "Pro", id: "com.wengqianshan.diet.pro" },
    "%E6%9E%81%E7%AE%80%E5%BC%B9%E5%B9%95": {
      name: "pro",
      id: "com.abouttime.flash.year",
    },
    MinimalDiary: { name: "pro", id: "com.mad.MinimalDiary.lifetime" },
    "Zen%20Flip%20Clock": {
      name: "pro",
      id: "com.mad.zenflipclock.iap.buymeacoffee",
    },
    "%E6%98%9F%E5%BA%A7": { name: "Premium", id: "com.rk.horoscope.month12" },
    "Time%20Machine": {
      name: "timemachine_pro",
      id: "com.abouttime.timemachine.year",
    },
    todo: { name: "Pro", id: "com.abouttime.todo.year" },
    "%E6%B0%B4%E5%BF%83%E8%AE%B0": {
      name: "pro",
      id: "com.abouttime.heart.year",
    },
    Pomodoro: { name: "Plus", id: "com.MINE.PomodoroTimer.plus.lifetime" },
    "My%20Time": { name: "Pro", id: "ninja.fxc.mytime.pro.lifetime" },
    StarDiary: { name: "pro", id: "com.gsdyx.StarFocus.nonConsumable.forever" },
    StarFocus: { name: "pro", id: "com.gsdyx.StarFocus.nonConsumable.forever" },
    iRead: { name: "vip", id: "com.vip.forever_1" },
    "shipian-ios": { name: "vipOffering", id: "shipian_25_forever" },
    HabitMinder: {
      name: "habitminder_premium",
      id: "habitminder.yearlysubscription",
    },
    Echo: { name: "PLUS", id: "com.LEMO.LemoFm.plus.lifetime.l3" },
    "Dark%20Noise": { name: "pro", id: "dn_4999_lifetime" },
    VideoToPhoto: { name: "Premium", id: "VideoToPhoto_premium" },
    ChatGPTApp: { name: "Basic", id: "com.palligroup.gpt3.yearly" },
    Noto: { name: "pro", id: "com.lkzhao.editor.full" },
    'PDF%20Viewer':{ name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'},
    'Worrydolls':{ name: 'magicmode', id: 'magicmode'},
    'VSCO':{ name: 'pro', id: 'vscopro_global_5999_annual_AutoFreeTrial'},
    'FTChatAI':{ name: 'pro', id: 'ft_ai_1799_1y'},
    'Anybox':{ name: 'pro', id: 'cc.anybox.Anybox.annual'},
    'Thiro':{ name: 'pro', id: 'atelerix_pro_lifetime'},
    'Zoomerang':{ name: 'pro', id: 'zoomerang.yearly'},
    'FastingForWoman':{ name: 'wefast_premium', id: 'wefast.yearlysubscription'},
    'Cookie':{ name: 'allaccess', id: 'app.ft.Bookkeeping.lifetime'},
    '%E5%9B%BE%E7%89%87%E6%B6%88%E9%99%A4':{ name: 'premium membership', id: 'com.skysoft.removalfree.introduction.yearly'},
    '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE':{ name: 'pro', id: 'com.happydogteam.relax.lifetimePro'},
    'TouchRetouchBasic':{ name: 'premium', id: 'tr5_yearlysubsc_20dlrs_1'},
    'Photomator':{ name: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_lifetime_v1_pro_offer'},
    'Mojo':{ name: 'pro', id: 'video.mojo.pro.yearly'},
    'Photon':{ name: 'photon.paid', id: 'photon.paid.yearly'},
    'Drops':{ name: 'premium', id: 'premium_yearly_full_price_tier_c_free_trial_7_int'},
    'loopsie':{ name: 'pro-iOS', id: 'com.gamelounge.loopsie.ios.one_time'},
    'TruthOrDare':{name:'premium', id:'truth_or_dare_premium_monthly'},
    'Zettelbox':{name: 'Power Pack', id:'powerpack_yearly_1'},
    'Project%20Delta':{name: 'rc_entitlement_obscura_ultra', id:'com.benricemccarthy.obscura4.obscura_ultra_sub_annual'},
    'money_manager':{name:'premium',id:'com.happy.fastdiet.forever'},
    'fastdiet':{name:'premium',id:'com.happy.fastdiet.forever'},
    'audiomack':{name:'Premium1',id:'com.premium.yearly'},
    'tiimo':{name:'full_access',id:'lifetime.iap'},
    'card':{ name: 'vip', id: 'card_vip'},
    'Noverdue':{ name: 'pro', id: 'noverdue.yearly.plan0'},
    'ImAFish':{ name: 'Pro', id: 'ProOver'},
    'GradientMusic':{ name: 'Pro', id: 'com.gradient.vision.new.music.one.time.79'},
    'streaks':{ name: 'patron', id: 'com.andyworks.streaks.yearlyPatron'},
    'Grow':{ name: 'grow_pro', id: 'grow_lifetime'},//版本号：857848362
    'Strides':{ name: 'plus', id: 'Annual'},
    'Summit_iOS':{ name: 'pro', id: 'Summit_Monthly1'},
    'PomoStiker':{ name: 'lifetimeForever', id: 'com.daya.lifetimeforever'},
    'Uio':{ name: 'PRO', id: 'com.daya.Uio.quarterly'},
    'Snipd':{ name: 'premium', id: 'snipd_premium_1y_7199_trial_2w_v2'},
    //'Cuto':{ name: 'cutopro', id: 'com.potatsolab.cuto.pro'},
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'tiimo':{ name: 'full_access', id: 'lifetime.iap'},
    'Subtrack':{ name: 'pro', id: 'com.mohitnandwani.subtrack.subtrackpro.family'},
    'reader': { name: 'vip2', id: 'com.valo.reader.vip2.year'},
    'Funexpected%20Math':{ name: 'plus', id: 'Plus6Months14DaysTrial'},
    'Sex%20Actions':{ name: 'Premium Plus', id: 'ru.sexactions.subscriptionPlusWeek1'},
    'Hi%E8%AE%BA%E5%9D%9B/69': { name: 'plus', id: 'plus_yearly'},
    'No%20Fusion':{ name: 'LivePhoto', id: 'com.grey.livephoto.reference.price'},
    'FoJiCam':{ name: 'ProVersionLifeTime', id: 'com.uzero.cn.fojicam.life1'},
    //'ShellBoxKit':{ name: 'pro', id: 'ShellBoxKit.Lifetime'},
    'Ask':{ name: 'Perplexity Pro', id: 'pro_200_yr_1w_new'},
    'PipDoc':{ name: 'pro', id: 'pipdoc_pro_lifetime'},
    'YubePip':{ name: 'pro', id: 'yubepip_pro_lifetime'},
    'iplayTV':{ name: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12'},
    'BORD': { name: 'pro_membership', id: 'bord_plus_2499_lifetime'},  //BORD-照片拓展方形
    'FRMD': { name: 'all_access', id: 'frmd_plus_999_lifetime'},  //FRMD相机
    'HRZN': { name: 'pro', id: 'plus_999_lifetime'},  //HRZN-胶片相机
    'FujiLifeStyle': { name: 'FUJIStyle Pro(Year)', id: 'FujiStyle2024003' },  //FUJISTYLE-富士康色彩配方
    'FoJiCam':{ name: 'ProVersionLifeTime', id: 'com.uzero.cn.fojicam.life1'},
    'Tyson':{ name: 'pro', id: 'lux_7999_1y_2w0'},//来自大圣的徕卡
    'Yosum':{ name: 'Premium', id: 'terrykuo.co.yosum.premiummembership'},
    'iplayTV':{ name: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12'},
    'TQBrowser':{ name: 'pro', id: 'com.tk.client.lifetime'},
    'nasctl':{ name: 'pro', id: 'nasctl_pro'},
    'Sleepo':{ name: 'pro', id: 'sleepo_premium_lifetime_free'},
    'Super%20AI%20Chat':{ name: 'premium', id: 'chatbot_v4_1999_1y'},
    //'PicSeedClient':{ name: 'Pro', id: 'com.picseed.sub.pro.event.annual'},//PicSeed
    'Free':{ name: 'pro', id: 'appspree_pro_lifetime'},//Appspree
    'PastePal':{ name: 'pro', id: 'com.onmyway133.PastePal.pro'},//PastePal
    'XGBA':{ name: 'xGBA.pro', id: 'xGBA.lifetime.20240502'},
    'memesoundboard':{ name: 'pro', id: 'lifetime_3499'},//Meme Soundboard, Effects: Deez
    'gloriousYouth':{ name: 'gloriousYouth', id: 'gloriousYouth'},
    '%E8%B0%9C%E5%BA%95%E6%97%B6%E9%92%9F':{ name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.pro'},
    'ScreenRecordCase':{ name: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra'},
    'No%20Fusion': { name: 'LivePhoto', id: 'com.grey.nofusion.livephoto' },  //NoFusion-相机
    'Photoooo': { name: 'lifetime', id: 'canoe_28_rnb_forever' },  //Phorase-专业AI消除助手
    'dtdVibe':{name:'pro',id:'com.dtd.aroundu.year'},//9.26
    'DtdVibe':{name:'pro',id:'com.dtd.playlist.premium.subscription.yearr'},//9.26
    'Binsoo': { name: 'vibe', id: 'annual' },  //Binsoo-照片滤镜/编辑
    'PicLoom': { id: 'com.efsoft.picloom_nc_lifetime', cm: 'sjc' },  //PicLoom
    'Video%20Teleprompter': { name: 'videoPremium', id: 'com.joeallenpro.videoteleprompter.upgrade.yearly_a' },  //Video Teleprompter
    'Morphose': { name: 'ProStandard', id: 'com.pixery.morphose.yearly' },
    'ProCamera': { name: 'private_lightbox_entitlement&san_fran_entitlement&pro_camera_up_entitlement&procamera_full_entitlement',id:'com.cocologics.ProCamera.Up.Yearly'},
  };
  const data = {
    expires_date: "6666-06-06T06:06:06Z",
    original_purchase_date: "2023-02-23T02:33:33Z",
    purchase_date: "2023-02-23T02:33:33Z",
    ownership_type: "PURCHASED",
    store: "app_store",
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, "i").test(UA)) {
      const { name, id } = UAMappings[i];
      guding6.subscriber.subscriptions = {};
      guding6.subscriber.subscriptions[id] = data;
      guding6.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      guding6.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  guding.body = JSON.stringify(guding6);
}
$done(guding);
