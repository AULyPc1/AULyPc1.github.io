---
title: 使用BroadcastChannel和Telegram搭建简单的微博客
published: 2025-01-14
description: 'Turn your Telegram Channel into a MicroBlog.'
image: 'https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_use_BroadcastChannel/homepage.webp'
tags: [BroadcastChannel, 微博客]
category: 网站
draft: false
language: ''
series: 博客改造
---
最近接触到了这个👇项目  
可以通过连接你的telegram频道，将频道的内容转化为网页  
::github{repo="ccbikai/BroadcastChannel"}  

下面👇是我的页面链接  
~~[AULyPcの日常](https://timeline.aulypc0x0.online/)~~  
(电报频道被风控，后续部署显示异常，故取消该页面)  
  
因为页面看起来更类似时间线排列的形式  
~~所以就使用``timeline.xxx.xxx``作为二级域名使用~~  
该二级域名后来被我作为备用博客站点使用  

该项目可以通过Docker部署或者通过Cloudflare、Netlify、Vercel等平台部署  
由于没用过docker所以我就通过vercel进行了部署  

> 在这之前，首先要有有一个公开可访问的telegram频道  
> 有关注意事项官方也提到过  
>    - 检查频道是否是公开的，``必须是公开``的  
>    - 频道用户名是``字符串``，不是数字  
>    - 关闭频道 ``Restricting Saving Content`` 设置项  
>    - 修改完环境变量后需要重新部署  
>    - Telegram 会屏蔽一些敏感频道的公开展示，可以通过访问 `https://t.me/s/频道用户名` 确认  
  
部署过程很简单，按照官方readme的步骤来就行  
> 1. [Fork](https://github.com/ccbikai/BroadcastChannel/fork) 此项目到你 GitHub  
> 2. 在 Cloudflare/Netlify/Vercel 创建项目  
> 3. 选择 `BroadcastChannel` 项目和 `Astro` 框架  
> 4. 配置环境变量 `CHANNEL` 为你的频道名称。此为最小化配置，更多配置见下面的配置项  
> 5. 保存并部署  
> 6. 绑定域名（可选）  
> 7. 更新代码，参考 GitHub 官方文档 [从 Web UI 同步分叉分支](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui)  

环境变量的配置按需即可，但要注意``CHANNEL``必须配置  
按照下图找到environment variables准备配置环境变量  
<img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_use_BroadcastChannel/env1.webp" border=0 width=650 height="">
按照官方给出的环境变量模板，按需添加即可  
<img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_use_BroadcastChannel/env2.webp" border=0 width=650 height="">
配置完成后进行重新部署  
<img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_use_BroadcastChannel/deployments.webp" border=0 width=650 height="">
部署成功后就可以直接访问vercel给出的链接了  
如果有需求的话，也可以在vercel绑定自己的域名  
域名的绑定可以在``setting-domains``中找到，具体怎么设置这里就不多赘述了  
<img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_use_BroadcastChannel/domains.webp" border=0 width=650 height="">

配置部署完成后，当你在频道内发送消息后，几分钟？后就能在网页上查看到了  
<img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_use_BroadcastChannel/telegram1.webp" border=0 width=650 height="">
但既然用上telegram了，不用点bot就说不过去了(  
这里我用的是[AximoBot](https://t.me/AximoBot)以及[IFTTT](https://ifttt.com/explore)这两个bot  
<img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_use_BroadcastChannel/telegram-bot.webp" border=0 width=400 height="">
AximoBot主要抓取Twitter推文数据以及一些RSS，缺点是抓取时间间隔有点长，好像是1小时吧  
毕竟twitter的API限制，能免费用已经很不错了  
IFTTT搭配[BotFather](https://telegram.me/BotFather)来使用  
主要是一些应用与telegram之间的联系  
比如youtube点赞视频后，推送到telegram频道内，进而可以从前面部署的网页中查看  
还有比如spotify音乐、twitch直播等等  
<img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_use_BroadcastChannel/ifttt.webp" border=0 width=400 height="">
当然，ifttt的抓取时间也比较长，大概半小时  
而且每个账号只能使用两个关联，且有些还需要升级会员才行(比如twitter有关的功能)  
可以多开几个账号来缓解数量限制的问题  

另外博主对页面中的时间显示进行了更改  
按官方部署后，页面中的时间是```xxx hours ago```的形式  
这样的话不太方便我们计算发布的时间  
故改为下图右侧的形式  
<img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_use_BroadcastChannel/time.webp" border=0 width=400 height="">
在```src/components/item.astro```中进行修改  
```astro title="src/components/item.astro" del={2,11} ins={3,12}
const datetime = dayjs(post.datetime).tz(timezone)
const timeago = datetime.isBefore(dayjs().subtract(1, 'w')) ? datetime.format('HH:mm · ll · ddd') : datetime.fromNow()
const timeago = datetime.format('HH:mm · YYYY年MM月DD日 · ddd')
---

<div class="item" style={{ 'view-transition-name': `post-${post.id}` }}>
  <div class="time-box">
    <div class="dot"></div>
    <div class="time">
      <a href={`${SITE_URL}posts/${post.id}`} title={post.datetime} class="item-link">
        <time datetime={post.datetime} title={timeago}>{timeago}</time>
        <time>{timeago}</time> <!-- 👈这里的时间做了修改-->
      </a>
    </div>
  </div>
```
以上，have yourself!