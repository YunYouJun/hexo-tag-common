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

## Todo

- [x] Tabs

## Reference

- [tag-plugins | next](https://theme-next.js.org/docs/tag-plugins/)
