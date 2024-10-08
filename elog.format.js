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
  const theDate = doc.properties.date.string
  const theUpdate = doc.properties.updated.string
  doc.properties.abbrlink = doc.properties.abbrlink.number || doc.properties['_abbrlink']
  doc.properties.urlname = `${theDate.split(' ')[0]}-${doc.properties.title}`
  doc.properties.category = doc.properties.categories ? doc.properties.categories[0] : '未分类'
  doc.properties.summary = doc.properties.excerpt ? doc.properties.excerpt : ''
  doc.properties.date = `${new Date(theDate).toISOString()}`
  doc.properties.lastMod = `${new Date(theUpdate).toISOString()}`
  delete doc.properties['_abbrlink']
  delete doc.properties['excerpt']
  delete doc.properties['updated']
  delete doc.properties['categories']
  doc.body = matterMarkdownAdapter(doc)
  return doc
}

module.exports = {
  format,
}
