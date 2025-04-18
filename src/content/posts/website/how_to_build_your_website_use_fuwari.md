---
title: 简单的从零开始搭建Fuwari
published: 2024-09-03
description: '简单的从零开始搭建Fuwari'
image: 'https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/img/20230509_024446.webp'
tags: [Fuwari]
category: 网站
draft: false
series: 博客改造
---
:::note[封面来源]
[瀬來ちゃん](https://x.com/sera_01282739/status/1632719614085054465)
:::

:::note
简单记录下自己使用[Astro框架](https://github.com/withastro/astro)以及[Fuwari主题](https://github.com/saicaca/fuwari)搭建博客的过程以及踩过的坑  
:::

> ### 使用方法流程
> 1. 使用此模板[生成新仓库](https://github.com/new?template_name=fuwari&template_owner=saicaca)或 Fork 此仓库
> 2. 进行本地开发，Clone 新的仓库，并执行  
> 安装依赖 ```pnpm install``` ```pnpm add sharp```  
> 若未安装 pnpm，执行→命令后，重新执行↑安装依赖 ```npm install -g pnpm```  
> 3. 通过配置文件 ```src/config.ts``` 自定义博客
> 4. 执行 ```pnpm new-post <filename>``` 创建新文章，并在 ```src/content/posts/``` 目录中编辑
> 5. 参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages 等  
> 部署前需编辑 ```astro.config.mjs``` 中的站点设置  

> ### 更换npm/pnpm镜像源
> 在国内因为众多原因，导致使用 npm/pnpm 进行包管理时，有时会遇到下载速度极慢或连接不稳定等问题  
> 为了解决这个问题，可以更换镜像源  
> 
> 查看当前源 ```npm config get registry```  
> 更换为淘宝镜像源``` npm config set registry https://registry.npmmirror.com/```  
> 还原默认源``` npm config set registry https://registry.npmjs.org/```  

> ### config.ts部分配置参考
>  站点信息&顶部图
> ```ts file=src\config.ts
> export const siteConfig: SiteConfig = {
>   title: '你的标题',
>   subtitle: '你的副标题',
>   lang: 'zh_CN',  // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
>   themeColor: {  // 主题色部分，按个人喜好配置
>     hue: 250,
>     fixed: false,
>   },
>   banner: {
>     enable: true,  // 是否开启顶部图
>     src: 'assets/images/你的图片',  // 顶部图存放路径
>     position: 'center',  //  defaults或者center
>     credit: {
>       enable: true,  // 是否显示顶部图文本描述
>       text: '想显示的文本',  // 输入文本等描述
>       url: 'https://xxxxxxxxxxxxx'  // 顶部图的来源url等
>     }
>   },

> 顶部导航栏github部分
> ```ts file=src\config.ts
> export const navBarConfig: NavBarConfig = {
>   links: [
>     LinkPreset.Home,
>     LinkPreset.Archive,
>     LinkPreset.About,
>     {
>       name: 'GitHub',
>       url: 'https://github.com/saicaca/fuwari',  // 想要跳转的url
>       external: true,  //是否显示外部链接图标并将在新标签中打开
>     },
>   ],
> }
> ```

左侧信息页配置
> ```ts file=src\config.ts
> export const profileConfig: ProfileConfig = {
>   avatar: 'assets/images/avatar.png',  // 头像图片文件路径
>   name: 'AULyPc',     // 你的昵称
>   bio: '这片大地...',  // 你的签名
>   links: [           // 社交栏配置
>     {
>       name: 'Twitter',
>       icon: 'fa6-brands:twitter',  // https://icones.js.org/ icon图标网站
>       url: 'https://twitter.com/AULyPc1',
>     },
>     {
>       name: 'Steam',
>       icon: 'fa6-brands:steam',
>       url: 'https://steamcommunity.com/profiles/76561198813644850/',
>     },
>     {
>       name: 'GitHub',
>       icon: 'fa6-brands:github',
>       url: 'https://github.com/AULyPc',
>     },
>     {
>       name: 'Email',
>       icon: 'material-symbols:mail',
>       url: 'mailto:cecilybenson8@gmail.com',
>     },
>   ],
> }
> ```

> ### 文章Frontmatter
> 执行 ```pnpm new-post <filename>``` 创建新文章页面后  
> 就可以在 ```src/content/posts/``` 目录中编辑你的第一篇文章了  
> 文章需包含以下内容  
> ```md
> ---
> title: My First Blog Post  <!-- 你的文章标题 -->
> published: 2023-09-09  <!-- 文章发布时间 -->
> description: This is the first post of my new Astro blog.  <!-- 简单描述你的文章，可有可无 -->
> image: /images/cover.jpg  <!-- 文章主页的封面，可有可无 -->
> tags: [Foo, Bar]  <!-- 文章标签 -->
> category: Front-end  <!-- 文章分类 -->
> draft: false  <!-- 文文章是否为草稿，默认false；设置为true后部署后不可见，但本地开发预览时仍可见 -->
> language: ''  <!-- 可有可无，按需设置 -->
> ---
> ```
> 
### 全局页面宽度
在文件```src\layouts\Layout.astro```内更改  
(新版主题好像没这块的代码)  
```astro file=src\layouts\Layout.astro
<style is:global>
	:root {
		--hue: var(--configHue);
		--page-width: 75rem; /*👈这里改全局页面宽度 */
	}
</style>
```
> 以上，have yourself  