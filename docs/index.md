---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'm-home-layout'


hero:
  name: 五点物语
  text: 注重积累、注重复盘
  tagline: 有一种鸟是关不住的
  image:
    src: https://avatars.githubusercontent.com/u/105765162?v=4
    alt: 五点物语
  actions:
    - text: 五点物语
      link: /Life/April
    - text: 前端导航
      link: /Froend/HTTP
      theme: alt

features:
  - icon: 📖
    title: 前端物语
    details: 整理前端常用知识点<br />如有异议按你的理解为主，不接受反驳
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
  - icon: 💡
    title: 奇淫技巧
    details: 各种各样的奇淫技巧<br />配合 CV 大法来解决疑难杂症
---
<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}

</style>
