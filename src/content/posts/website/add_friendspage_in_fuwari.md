---
title: 给你的Fuwari添加一个友链页面
published: 2024-09-04
updated: 2025-08-27
description: '给你的Fuwari添加一个友链页面'
image: 'https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/img/20220728_195930.webp'
tags: [Fuwari]
category: 网站
draft: false
series: 博客改造
---

:::note[封面来源]
[しぐれうい-まだ足りない](https://www.pixiv.net/artworks/106841865)
:::

### 创建友链页面
:::warning[注意]
Fuwari主题作者saicaca表示友链页面未来会进行设计和添加[#35](https://github.com/saicaca/fuwari/issues/35/)  
本文章仅临时参考使用  
  
此部分参考~SakuAikoi大佬的教程~  
上述作者站点转移，SakuAikoi的名字也被弃用，新站点为https://blog.atri.pw/  
在魔改前推荐各位提前做好备份工作  
:::

在`src\content\spec`目录下新建文件`friends.md`这个就是友链页面的文件  
在`src\types\config.ts`文件内添加以下内容  

```ts title="src\types\config.ts" ins={5}
export enum LinkPreset {
  Home = 0,
  Archive = 1,
  About = 2,
  Friends = 3,
}
```

> 在`src\i18n\i18nKey.ts`文件内添加以下内容  

```ts title="src\i18n\i18nKey.ts" ins={4}
  author = 'author',
  publishedAt = 'publishedAt',
  license = 'license',
  friends = 'friends',
```

> 按照自己的语言，在 ```src\i18n\languages``` 目录中编辑相应语言文件  
> 这里拿 ```zh_CN.ts``` 举例  

```ts title="src\i18n\languages\zh_CN.ts" ins={4}
  [Key.author]: '作者',
  [Key.publishedAt]: '发布于',
  [Key.license]: '许可协议',
  [Key.friends]: '友链',
```

> 在 ```src\constants\link-presets.ts``` 文件内添加下方内容

```ts title="src\constants\link-presets.ts" ins={5-8}
   [LinkPreset.Archive]: {
     name: i18n(I18nKey.archive),
     url: '/archive/',
   },
   [LinkPreset.Friends]: {
     name: i18n(I18nKey.friends),
     url: '/friends/',
   },
 }
```

> 在 ```src\pages``` 目录下，copy一份 ```about.astro``` 文件的副本  
> 改名为 ```friends.astro``` ，在此文件中更改下述内容  

```astro title="src\pages\friends.astro" del={1,4,7} ins={2,5,8}
  const aboutPost = await getEntry('spec', 'about')
  const friendsPost = await getEntry('spec', 'friends')

  const { Content } = await aboutPost.render()
  const { Content } = await friendsPost.render() 

  <MainGridLayout title={i18n(I18nKey.about)} description={i18n(I18nKey.about)}>
  <MainGridLayout title={i18n(I18nKey.friends)} description={i18n(I18nKey.friends)}>
```

> 最后一步，在 ```src\config.ts``` 文件内添加内容，注意要在 ```LinkPreset.About``` 末尾添加```,```  

> ```ts title="src\config.ts" ins={6}
> export const navBarConfig: NavBarConfig = {
>   links: [
>     LinkPreset.Home,
>     LinkPreset.Archive,
>     LinkPreset.About,
>     LinkPreset.Friends,
>     {
> ```

> 至此，友链页面完成创建  
> 但只能在 ```friends.md``` 内用markdown写一些简单的内容  

### 创建友链卡片效果
:::note[创建卡片效果友链]
此部分代码参考[La02^](https://www.la02.cc/links/)大佬的页面  
在之前创建的 ```friends.astro``` 文件中编辑  
编辑时请提前做好备份工作，注意缩进  
:::

:::warning[注意]
2025.8.27更新  
感谢AkatsukiMio对本文章的[勘误](https://blog.akatsukimio.top/posts/%E5%8B%98%E8%AF%AFaulypc%E3%81%AEblog%E4%B8%AD%E7%BB%99%E4%BD%A0%E7%9A%84fuwari%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%8F%8B%E9%93%BE%E9%A1%B5%E9%9D%A2%E7%9A%84%E9%94%99%E8%AF%AF/)  
之前可能添加随机排列功能时，文章更新不到位😥  

由于遇到渲染后的静态网页，在刷新后随机排列不生效，用Copilot生成了新的负责随机排列的js代码  
:::

> <img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_build_your_website/friends_card.png" width="70%" title="友链卡片效果"/>

```astro title="src\pages\friends.astro" ins={3-16,21-38,45-60}
const friendsPost = await getEntry("spec", "friends");

if (!friendsPost) {
	throw new Error("About page content not found");
}

const { Content } = await render(friendsPost);
const items = [
	{
    title: 'Astro',
    imgurl: 'https://avatars.githubusercontent.com/u/44914786?s=48&v=4',
    desc: 'The web framework for content-driven websites. ⭐️ Star to support our work!',
    siteurl: 'https://github.com/withastro/astro',
    tags: ['框架'],
  },
]
---
<MainGridLayout title={i18n(I18nKey.friends)} description={i18n(I18nKey.friends)}>
  <div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32">
    <div class="card-base z-10 px-9 py-6 relative w-full ">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 my-4" id="friends-list">
        {items.map((item) => (
          <div class="friend-card flex flex-nowrap items-stretch h-28 gap-4 rounded-[var(--radius-large)]">
            <div class="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900">
              <img src={item.imgurl} alt="站点头像" class="w-full h-full object-cover" />
            </div>
            <div class="grow w-full">
              <div class="font-bold transition text-lg text-neutral-900 dark:text-neutral-100 mb-1">{item.title}</div>
              <div class="text-50 text-sm font-medium">{item.desc}</div>
            </div>
            <a href={item.siteurl} target="_blank" rel="noopener noreferrer" class="flex btn-regular w-[3.25rem] rounded-lg bg-[var(--enter-btn-bg)] hover:bg-[var(--enter-btn-bg-hover)] active:bg-[var(--enter-btn-bg-active)] active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="transition text-[var(--primary)] text-4xl mx-auto iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
      <Markdown class="mt-2">
        <Content />
      </Markdown>
    </div>
  </div>

<!--在此处👇插入随机排列JS脚本 -->
<script>
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('friends-list');
    if (!container) return;
    const cards = Array.from(container.children);
    // 洗牌算法
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    // 重新插入
    cards.forEach(card => container.appendChild(card));
});
</script>
<!--在此处👆插入随机排列JS脚本 -->

</MainGridLayout>
```

> ```const items``` 部分就是添加的友链部分  
> 可以往下面继续添加  
> 以上，have yourself