const { matterMarkdownAdapter } = require('@elog/cli')

/**
 * 自定义文档插件
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @param {ImageClient} imageClient 图床下载器，可用于图片上传
 * @return {Promise<DocDetail>} 返回处理后的文档对象
 */
const format = async (doc, imageClient) => {
  const cover = doc.properties.cover
  // 将 cover 字段中的 notion 图片下载到本地
  if (imageClient) {
    // 只有启用图床平台image.enable=true时或image.enablForExt=true，imageClient才能用，否则请自行实现图片上传
    const url = await imageClient.uploadImageFromUrl(cover, doc)
    // cover链接替换为本地图片
    doc.properties.cover = url
  }
  // ...对文档进行处理
  delete doc.properties['_updated']
  delete doc.properties['_date']
  delete doc.properties['insertTime']
  delete doc.properties['updateTime']
  delete doc.properties['ID']
  // 处理日期，+8小时
  const dateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  let theDate = doc.properties.date.string
  let theDateObj = new Date(theDate.replace(' ', 'T') + 'Z');
  theDate = theDateObj.toLocaleString('zh-CN', dateOptions).replace(/\//g, '-');

  let theUpdate = doc.properties.updated.string
  let theUpdateObj = new Date(theUpdate.replace(' ', 'T') + 'Z');
  theUpdate = theUpdateObj.toLocaleString('zh-CN', dateOptions).replace(/\//g, '-');
  doc.properties.abbrlink = doc.properties.abbrlink.number || doc.properties['_abbrlink']
  doc.properties.urlname = `${theDate.split(' ')[0]}-${doc.properties.title}`
  doc.properties.date = theDate
  doc.properties.updated = theUpdate
  delete doc.properties['_abbrlink']
  doc.body = matterMarkdownAdapter(doc)
  return doc
}

module.exports = {
  format,
}
