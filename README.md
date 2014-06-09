readability
===========

readability 是基于 Ghost 博客系统的一个主题，主题比较简洁，旨在提供一个比较好的阅读体验，并且是响应式的。效果参见 [jump out](http://sobear.me)。

其中的中英文排版使用了 [typo.css](http://typo.sofi.sh/)。

## 使用：

1. 在 github clone 或者下载该项目文件；
2. 将对应的 readability 文件夹移动到你的 ghost `content/themes/` 文件夹下;
3. 在你的博客管理页面(/ghost)将主题设置为 readbility。

Enjoy It!

## 目录结构:

主题的样式使用了CSS预处理语言，如果比较了解 gulp 和 stylus 你可以直接在 src 目录下修改，否则，在 `assets/css/screen.css` 里面添加自定义样式，在 `assets/js/index.js` 里添加脚本。

```
assets   -------------- 样式&脚本
	css  --------------  线上引入的css(screen.css)
	images ------------  常用图片
	js   --------------  线上引入的js
	src  --------------  dev: 开发环境
partials --------------  模板组件
  	comments.hbs ------  评论组件（多说）
  	links.hbs----------  友情链接
  	nav.hbs -----------  导航栏链接  	
  	share.hbs ---------  分享
default.hbs -----------  主题框架（header, footer）
index.hbs  -------------- 首页
post.hbs   -------------- 单个文章也
Gulpfile.js ------------- dev: gulp
package.json ------------ dev: 依赖的npm
```

## 自定义：

1. 改变导航栏链接：`partials/nav.hbs`

2. 添加友情链接：`partials/links.hbs`

3. 替换评论组件：`partials/comments.hbs`

默认使用多说的评论系统，你可以改为 disquis 或者其他。

## 协议：

MIT，注明来源即可。








