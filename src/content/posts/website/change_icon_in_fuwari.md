---
title: 替换Fuwari图标ICON
published: 2024-09-04
description: '替换Fuwari图标ICON'
image: 'https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/img/513323.webp'
tags: [Fuwari]
category: 网站
draft: false
series: 博客改造
---
:::note[封面来源]
[bluearchive.jp](https://bluearchive.jp/fankit)
:::
> ### 更换图标
> <img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_build_your_website/icon_before.png" width="50%" title="默认图标"/>
> <img src="https://raw.githubusercontent.com/AULyPc1/aulypc_fuwari_blog/main/picture/mypic/data/how_to_build_your_website/icon_after.png" width="50%" title="默认图标"/>
> 
> :::note
> icon图标的[网站](https://icones.js.org/)
> :::
> 
> 更改了分类的图标  
> 在 ```src/components/postmeta.astro``` 文件进行更改  
> ```astro title="src/components/postmeta.astro" del={5} ins={6}
> <!-- categories -->
> <div class="flex items-center">
>     <div class="meta-icon"
>     >
>          <Icon name="material-symbols:book-2-outline-rounded" class="text-xl"></Icon>
>          <Icon name="material-symbols:menu-rounded" class="text-xl"></Icon>
>     </div>
> ```
> :::tip[更改其他图标]
> 例如标签tag图标的方法与上述类似  
> 找到该文件 ```<!-- tags -->``` 处进行修改  
> 博主在更改部分图标后，有时会出现刷新页面后图标出现不出来的现象  
> 所以没有需求的话，还是尽量不更改图标  
> :::
> 以上