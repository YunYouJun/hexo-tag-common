# hexo-tag-common

[![npm](https://img.shields.io/npm/v/hexo-tag-common)](https://www.npmjs.com/package/hexo-tag-common)
[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/hexo-tag-common/badge)](https://www.jsdelivr.com/package/npm/hexo-tag-common)

Common tags for hexo.

> Demo: [tag-common | yun](https://www.yunyoujun.cn/yun/tag-common.html)

## Install

> You need to make sure your hexo is `v5.2.0` or above.

```sh
npm install hexo-tag-common
# yarn add hexo-tag-common
```

## Config

Set it in hexo `_config.yml`.

```yaml
tag_common:
  cdn: https://fastly.jsdelivr.net/npm/ # enable CDN, default is https://fastly.jsdelivr.net/npm/ 
  # which layout to use
  # more info see https://hexo.io/api/injector.html#to-lt-string-gt
  layout:
    - post
    - page
    # - home
```

## Feature

- [x] Tabs
  - iconify

### Tabs

You can use icon like by `@ri:home-4-line`.

![Use with icon](https://user-images.githubusercontent.com/25154432/172246743-2c84d6df-927b-4678-89b4-052d2664109f.png)

```md
{% tabs First unique name %}

<!-- tab First unique name 1 @ri:home-4-line -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab Icon Test @ri:cloud-line -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
```

## Reference

- [tag-plugins | next](https://theme-next.js.org/docs/tag-plugins/)

## [Sponsors](https://sponsors.yunyoujun.cn)

<p align="center">
  <a href="https://sponsors.yunyoujun.cn">
    <img src='https://sponsors.yunyoujun.cn/sponsors.svg'/>
  </a>
</p>
