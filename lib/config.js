module.exports = (hexo) => {
  hexo.config.tag_common = Object.assign(
    {
      cdn: 'https://fastly.jsdelivr.net/npm/',
      layout: ["post", "page"],
    },
    hexo.config.tag_common
  );
  return hexo.config.tag_common;
};
