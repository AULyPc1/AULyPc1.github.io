---
title: 在Fuwari使用自定义字体
published: 2024-12-18
description: '简单记录下自己如何更改fuwari主题字体的过程'
image: 'https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/use_custom_fonts_in_fuwari/cover.png'
tags: [自定义字体]
category: 网站
draft: false
series: 博客改造
---

资料来源  
- Astro官方文档--[使用自定义字体](https://docs.astro.build/zh-cn/guides/fonts/)  
- 博主Alliana的文章--[Fuwariで好きなフォントを使う](https://ab2m.link/posts/fuwari-customfont/)  
- 感谢字体来源 BA游戏字体 https://kivo.wiki/  
- 以及主题--[vitepress-theme-bluearchive](https://github.com/Alittfre/vitepress-theme-bluearchive)  

:::note
注意，本人并未系统学过代码的编写、前端后端巴拉巴拉  
此篇文章类似于过程的记录，如有错误、不足之处，欢迎指出  
同时如果您想要按照此过程对您的站点进行改造  
请提前做好备份工作  
此外，字体文件是放在public内的，对网页加载或多或少会产生影响  
:::

:::important
2025年4月11日更新  
时隔好久升级了下博客，更新了好多功能  
所以本教程(旧时撰写)已经不具有时效性  
但可以酌情进行参考  
更新后的自定义字体采用[蓝柯大佬](https://www.blueke.top/)在文章评论区的建议  
使用引用外部css  
:::

按照astro官方文档，首先需要添加您的字体到```public/fonts/```目录(没有fonts就自己新建一个)  
这里通过Blue Archive主题博客[vitepress-theme-bluearchive](https://github.com/Alittfre/vitepress-theme-bluearchive)来获取ba的游戏字体  
字体的来源该主题下也提到了，来自https://kivo.wiki/  再次感谢  
接着将以下@font-face语句添加到你的CSS中  

```css
/* 注册你的自定义字体并告诉浏览器它在哪里 */
@font-face {
  font-family: 'DistantGalaxy';
  src: url('/fonts/DistantGalaxy.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```
这里我们在```scr/styles```内，新建```global.css```全局css文件
:::tip
fuwari旧版是没有styles文件夹的
:::

下面是其中一个例子  
```css title="scr\styles\global.css"
@font-face {
  font-family: "Blueaka";
  src:local("BlueakaBeta2GBK DemiBold"),url('/public/fonts/Blueaka/Blueaka-a5f72e5b0a3c1e84.woff2') format('woff2');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  unicode-range:U+d65f-d7a3,U+e76c,U+e7c7-e7c8,U+e7e7-e7f3,U+e815-e847;
  }
```

接着在```tailwind.config.cjs```内进行更改  

```js title="tailwind.config.cjs" /Blueaka/ del={9} ins={10}
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}'],
  darkMode: 'class', // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
        sans: ['Blueaka', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```

最后别忘了在```scr\styles\markdown.css```内对code部分更改```font-family```  
如果没生效，那就试着将```src/components/misc/Markdown.astro```内code部分```font-family```也进行更改  
(如果Markdown.astro内有code部分的话...)

```css title="scr\styles\markdown.css" /Blueaka/
code {
        @apply bg-[var(--inline-code-bg)] text-[var(--inline-code-color)] px-1 py-0.5 rounded-md overflow-hidden;
        font-family: 'Blueaka', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
        &:before {
            content:none;
        }
        &:after {
            content:none;
        }
```

> 2025年3月8日更新  
> 2025年初时在自己的电脑上预览时发现  
> 使用谷歌浏览器时(版本为134.0.6998.35)字体仍显示默认字体  
> 尝试使用edge和火狐浏览器同样也是  
> 但在手机/平板上预览时字体确正确显示为自定义字体  
> 因为当初自定义修改字体的时候是在公司的笔记本电脑上进行的  
> 不知道和这个有没有关系  
> 若有大佬朋友知道是什么原因的话，欢迎留言，谢谢  

> 2025年4月11日更新  
> 升级了下博客，更新了好多功能  
> 部分文件、文件夹可能有所改变  
> 所以本教程(旧时撰写)已经不具有时效性  
> 但可以酌情进行参考  
> 更新后的自定义字体采用[蓝柯大佬](https://www.blueke.top/)在文章评论区的建议  
> 使用引用外部css  
> 字体采用霞鹜文楷  
::github{repo="lxgw/LxgwWenkaiGB"}  