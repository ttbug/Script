#!name=Youtube (Music) Enhance
#!desc=适用于 Youtube & Youtube Music
#!arguments=屏蔽上传按钮:true,屏蔽选段按钮:true,字幕翻译语言:zh-Hans,歌词翻译语言:zh-Hans,脚本执行引擎:auto,启用调试模式:false
#!arguments-desc=- 屏蔽参数：[true, false] \n- 翻译参数：[语言代码, off] \n- 脚本引擎：[auto, jsc, webview]\n\n1. 语言代码遵循 Google Translate Languages Codes, 当填入 off 时关闭翻译\n2. 推荐使用 jsc 引擎，但你仍可以切换成 webview 体验 Surge 新特性\n3. 开启调试模式用于输出更多日志

# > Note
# Youtube 画中画和后台播放可在客户端内关闭
#   - 设置 -> 播放 -> 画中画
#   - 设置 -> 后台播放和下载 -> 后台播放


[Rule]
AND,((DOMAIN-SUFFIX,googlevideo.com), (PROTOCOL,UDP)),REJECT
AND,((DOMAIN,youtubei.googleapis.com), (PROTOCOL,UDP)),REJECT

[Script]
youtube.response = type=http-response,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting|get_watch),requires-body=1,max-size=-1,binary-body-mode=1,engine={{{脚本执行引擎}}},script-path=https://raw.githubusercontent.com/ttbug/Script/refs/heads/main/youtube-preview.js,argument="{"lyricLang":"{{{歌词翻译语言}}}","captionLang":"{{{字幕翻译语言}}}","blockUpload":{{{屏蔽上传按钮}}},"blockImmersive":{{{屏蔽选段按钮}}},"debug":{{{启用调试模式}}}}"

[Map Local]
^https?:\/\/[\w-]+\.googlevideo\.com\/initplayback.+&oad data-type=text data="" status-code=502

[MITM]
hostname = %APPEND% *.googlevideo.com, youtubei.googleapis.com
