"use strict";
const url_for = hexo.extend.helper.get("url_for").bind(hexo);
const path = require("path");

const tabs = require("./lib/tabs")(hexo);

// register tabs
hexo.extend.tag.register("tabs", tabs, { ends: true });
hexo.extend.tag.register("subtabs", tabs, { ends: true });
hexo.extend.tag.register("subsubtabs", tabs, { ends: true });

// config
hexo.config.tag_common = Object.assign(
  {
    cdn: true,
  },
  hexo.config.tag_common
);

const defaultConfig = hexo.config.tag_common;

let cssHref = "/css/tag-common/index.css";
let jsSrc = "/js/tag-common/index.js";
if (defaultConfig.cdn) {
  cssHref = "https://cdn.jsdelivr.net/npm/hexo-tag-common@latest/css/index.css";
  jsSrc = "https://cdn.jsdelivr.net/npm/hexo-tag-common@latest/js/index.js";
} else {
  const fs = require("hexo-fs");
  hexo.extend.generator.register("tag-common-css", function (locals) {
    return {
      path: url_for(cssHref),
      data: function () {
        return fs.createReadStream(path.join(__dirname, "./css/index.css"));
      },
    };
  });
  hexo.extend.generator.register("tag-common-js", function (locals) {
    return {
      path: url_for(jsSrc),
      data: function () {
        return fs.createReadStream(path.join(__dirname, "./js/index.js"));
      },
    };
  });
}

const linkTag = `<link href="${cssHref}" rel="stylesheet"/>`;
const scriptTag = `<script src="${jsSrc}"></script>`;
hexo.extend.injector.register("head_begin", linkTag, "page");
hexo.extend.injector.register("head_begin", linkTag, "post");
hexo.extend.injector.register("body_end", scriptTag, "page");
hexo.extend.injector.register("body_end", scriptTag, "post");
