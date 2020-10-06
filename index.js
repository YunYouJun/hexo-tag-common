"use strict";

const tabs = require("./lib/tabs")(hexo);

// register tabs
hexo.extend.tag.register("tabs", tabs);
hexo.extend.tag.register("subtabs", tabs);
hexo.extend.tag.register("subsubtabs", tabs);

// config
hexo.config.common_tag = Object.assign(
  {
    cdn: true,
  },
  hexo.config.common_tag
);

const defaultConfig = hexo.config.common_tag;

let cssHref = "";
let jsSrc = "";
if (defaultConfig.cdn) {
  cssHref = "https://cdn.jsdelivr.net/npm/hexo-tag-common@latest/css/index.css";
  jsSrc = "https://cdn.jsdelivr.net/npm/hexo-tag-common@latest/js/index.js";
}

const linkTag = `<link href="${cssHref}" rel="stylesheet">`;
const scriptTag = `<script src="${jsSrc}">`;
hexo.extend.injector.register("head_begin", linkTag, "page");
hexo.extend.injector.register("head_begin", linkTag, "post");
hexo.extend.injector.register("body_end", scriptTag, "page");
hexo.extend.injector.register("body_end", scriptTag, "post");
