---
title: 一些写作和功能语法
published: 2025-09-02
description: '简单写个文章，免得写文章时经常使用语法，以及忘记都添加了什么东西'
image: ''
tags: [语法]
category: 网站
draft: false
series: 博客改造
---

# 基本markdown写作语法
## 文本样式

**文字加粗**  
*文字倾斜*  
***文字倾斜加粗***  
~~文字删除~~  
<ins>文本下划线</ins>  
文本<sup>上标</sup>  
文本<sub>下标</sub>  
`文本高亮/引用`
<font color="#1576abff">文字颜色</font>  
<span style="color: #00faddff">文本颜色</span>  
<font size=5>文字字号</font>  
<span style="font-size: 10px">文字字号</span>  

```md
**文字加粗**  
*文字倾斜*  
***文字倾斜加粗***  
~~文字删除~~  
<ins>文本下划线</ins>  
文本<sup>上标</sup>  
文本<sub>下标</sub>  
`文本高亮/引用`
<font color="#1576abff">文字颜色</font>  
<span style="color: #00faddff">文本颜色</span>  
<font size=5>文字字号</font>  
<span style="font-size: 10px">文字字号</span>  
```

## 链接引用
通过将链接文本用方括号 [ ] 括起来，然后将 URL 用括号 ( ) 括起来，可创建内联链接。  
[GitHub Pages](https://pages.github.com/)  
```
[GitHub Pages](https://pages.github.com/)   
```

## 图像
通过添加 ! 并 将 alt 文本用 [ ] 括起来，可显示图像  
替换文字是等效于图像中信息的短文本。 然后将图像的链接用括号 () 括起来  

```md
![](图片链接)  
<img src="图片链接">
```
:::note
fuwari中多张图片不能自动的以宫格形式组合  
之前使用的fluid主题就包含这个功能  
但在fuwari中可以通过某些语法来实现  
:::

<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000038.webp" width=260 height=""></td>
    <td><img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000037.webp" width=260 height=""></td>
    <td><img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000036.webp" width=260 height=""></td>
  </tr>
</table>

```md
<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000038.webp" width=260 height=""></td>
    <td><img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000037.webp" width=260 height=""></td>
    <td><img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000036.webp" width=260 height=""></td>
  </tr>
</table>
```

## 折叠文字

<details>
    <summary>Installing Expressive Code</summary>
    Expressive Code provides integrations into many different frameworks, including Astro, Starlight, Next.js, and any framework that supports rehype plugins.
</details>

```md
<details>
    <summary>Installing Expressive Code</summary>
    Expressive Code xxxxxxxxxxxxxx.
</details>
```

## 任务列表

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

```md
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:
```

# Fuwari自带功能
## github仓库卡片效果
::github{repo="AULyPc/aulypc_fuwari_blog"}

```
::github{repo="AULyPc/aulypc_fuwari_blog"}
```

## 警告提醒便签组件
:::NOTE
这是NOTE
:::
:::TIP
这是TIP
:::
:::IMPORTANT
这是IMPORTANT
:::
:::WARNING
这是WARNING
:::
:::CAUTION
这是CAUTION
:::
:::NOTE[可自定义]
后加[xxx]可自定义小标题
:::
```md
:::NOTE
可以有NOTE、TIP、IMPORTANT、WARNING、CAUTION这几种
:::
:::NOTE[可自定义]
后加[xxx]可自定义小标题
:::
```

# 其他功能语法
## spoiler黑幕

:spoiler[鼠标悬停此处可显示]

来源[pull-602#](https://github.com/saicaca/fuwari/pull/602#)  
在此基础上修改，修复emjio不能被黑幕遮挡  

```
:spoiler[鼠标悬停此处可显示]
```


## 链接卡片样式 一
在Markdown段落中仅包含一个“裸”链接（没有描述性文字的链接）或类似内容，它将自动转换为链接卡片样式  
来源👇  

https://astro.build/

但可能会遇到插件抓取目标链接Open Graph元数据失败现象  
可以直接使用下方代码编辑  

<div class="link-card__container">
  <a href="https://lit.link/en/aulypc/" class="link-card">
    <div class="link-card__info">
      <div class="link-card__title">AULyPc lit.link</div> <!-- 标题-->
      <div class="link-card__description">您好/nice to meet you/こんにちは、One link to tell your story.</div> <!-- 描述-->
      <div class="link-card__metadata">
        <div class="link-card__domain"> <!-- 左下图标-->
          <img alt="favicon" class="link-card__favicon" src="https://www.google.com/s2/favicons?domain=lit.link">
          <span class="link-card__domain-name">lit.link</span>
        </div>
      </div>
    </div>
    <div class="link-card__thumbnail"> <!-- 右侧缩略图-->
      <Image src="https://prd.storage.lit.link/images/creators/06fbb06d-4ac4-4ba1-b522-84bcdec23ce9/ogp/ogp_image.jpg" alt="thumbnail" class="link-card__image"/>
    </div>
  </a>
</div>

```md
<div class="link-card__container">
  <a href="https://lit.link/en/aulypc/" class="link-card">
    <div class="link-card__info">
      <div class="link-card__title">AULyPc lit.link</div> <!-- 标题-->
      <div class="link-card__description">您好/nice to meet you/こんにちは、One link to tell your story.</div> <!-- 描述-->
      <div class="link-card__metadata">
        <div class="link-card__domain"> <!-- 左下图标-->
          <img alt="favicon" class="link-card__favicon" src="https://www.google.com/s2/favicons?domain=lit.link">
          <span class="link-card__domain-name">lit.link</span>
        </div>
      </div>
    </div>
    <div class="link-card__thumbnail"> <!-- 右侧缩略图-->
      <Image src="https://prd.storage.lit.link/images/creators/06fbb06d-4ac4-4ba1-b522-84bcdec23ce9/ogp/ogp_image.jpg" alt="thumbnail" class="link-card__image"/>
    </div>
  </a>
</div>
```

## 链接卡片样式 二
来源[博主Pinpe](https://github.com/Pinpe/Pinpe-top/blob/main/src/content/spec/about/index.md)  
自修改样式，使其和链接卡片一的背景颜色及动画保持一致  

<div class="lnk" onclick="window.open('https://expressive-code.com/', '_blank');">
    <div class="gc-titlebar" style="display: flex;align-items: center;justify-content: space-between;margin-bottom: .5rem;color: var(--tw-prose-headings);font-size: 1.25rem;font-weight: 500;">
        ✨ Expressive Code
    </div>
    <div>Present your source code on the web, making it easy to understand and visually stunning. All batteries included!</div>
</div>

```md
<div class="lnk" onclick="window.open('https://expressive-code.com/', '_blank');">
    <div class="gc-titlebar" style="display: flex;align-items: center;justify-content: space-between;margin-bottom: .5rem;color: var(--tw-prose-headings);font-size: 1.25rem;font-weight: 500;">
        ✨ Expressive Code
    </div>
    <div>Present your source code on the web, making it easy to understand and visually stunning. All batteries included!</div>
</div>
```

## 图片标题功能
来源[pull 351](https://github.com/saicaca/fuwari/pull/351)  
 - 多图片多标题  

![](https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000038.webp "胶片漏光了")
![](https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000037.webp "富士山🗻下")

```md title=多图片多标题
![](https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000038.webp "胶片漏光了")
![](https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000037.webp "富士山🗻下")
```

 - 多图片单标题  

![](https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000030.webp "[光] 与【影】")
![](https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000029.webp)

```md title=多图片单标题
![](https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000030.webp "[光] 与【影】")
![](https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000029.webp)
```

## Expressive Code

详细使用教程由于篇幅过多，详情见官方文档  
<div class="lnk" onclick="window.open('https://expressive-code.com/', '_blank');">
    <div class="gc-titlebar" style="display: flex;align-items: center;justify-content: space-between;margin-bottom: .5rem;color: var(--tw-prose-headings);font-size: 1.25rem;font-weight: 500;">
        ✨ Expressive Code
    </div>
    <div>Present your source code on the web, making it easy to understand and visually stunning. All batteries included!</div>
</div>

## 图片倾斜

::github{repo="micku7zu/vanilla-tilt.js"}

:::note
该效果仅在电脑端生效  
:::

<img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/film/8_E100_E6/000030.webp" data-tilt data-tilt-max="5" width="70%" title=""/>

```md
<img src="your-image.webp"
     alt="图片"
     data-tilt
     data-tilt-max="5"           <!-- 最大倾斜角度，默认15 -->
     data-tilt-speed="400"        <!-- 动画速度，默认400ms -->
     data-tilt-perspective="1000" <!-- 透视距离，默认1000px -->
     data-tilt-scale="1.1"        <!-- 鼠标悬停时缩放，默认1 -->
     data-tilt-glare="true"       <!-- 是否开启高光效果，默认false -->
     data-tilt-maxglare="0.5"     <!-- 高光最大透明度，默认1 -->
/>
```