const {matterMarkdownAdapter} = require('@elog/plugin-adapter')

// 自定义文档处理器
// doc的类型定义为 DocDetail，详情见下方 DocDetail 类型定义
const format = (doc) => {
  // ...对文档进行处理
  const theDate = doc.properties.date.string
  const theUpdate = doc.properties.updated.string
  doc.properties.date = theDate
  doc.properties.updated = theUpdate
  const newPost = matterMarkdownAdapter(doc);
  return newPost;
};

module.exports = {
  format,
};
