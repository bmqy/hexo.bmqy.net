# 北门清燕的博客 - hexo版

<!--START_SECTION:bmqy-->

## 博客目录(2022-08-10 19:01:19更新)

<!--END_SECTION:bmqy-->

## 关于本项目
### 博客目录
博客目录部分的生成受```https://github.com/zhaoolee/WordPressXMLRPCTools```项目启发，特此感谢。

特此贴一下对项目的魔改```https://github.com/bmqy/WordPressXMLRPCTools```,再次感谢[@zhaoolee](https://github.com/zhaoolee/)。
### 环境变量配置
- COS_BUCKET
- COS_REGION
- COS_SECRET_ID
- COS_SECRET_KEY
- SITE_URL
- TELEGRAM_TO
- TELEGRAM_TOKEN
- ~~FTP_HOST~~
- ~~FTP_PASSWORD~~
- ~~FTP_PORT~~
- ~~FTP_REMOTE~~
- ~~FTP_USERNAME~~

## Hexo配置
### 固定ID
固定ID推荐使用```hexo-abbrlink2```
- Add plugin to Hexo:
```
npm install hexo-abbrlink2 --save
```
- Modify permalink in ```config.yml``` file:
```
permalink: posts/:abbrlink/
```
- optional settings:
```
abbrlink:
  start: 1000 # the first id, default 0
```
## Next配置

### 创建标签云
默认无标签页，打开链接会```404```
创建标签页：
```
hexo new page tags
```
```
---
date: 2021-08-04 13:22:27
type: "tags"
---
```

### 创建分类页
默认无分类页，打开链接会```404```
创建分类页：
```
hexo new page categories
```
```
---
date: 2021-08-04 13:22:33
type: "categories"
---
```

### 自定义样式
```hexo```根目录下的```source```新增一个```_data```目录，在该目录下新建```styles.styl```，这个文件将存放我们自定义的样式，然后在```_config.next.yml```文件中```custom_file_path```选项里面将```style```那一行取消注释。
```
custom_file_path:
    #head: source/_data/head.njk
    #header: source/_data/header.njk
    #sidebar: source/_data/sidebar.njk
    #postMeta: source/_data/post-meta.njk
    #postBodyEnd: source/_data/post-body-end.njk
    #footer: source/_data/footer.njk
    #bodyEnd: source/_data/body-end.njk
    #variable: source/_data/variables.styl
    #mixin: source/_data/mixins.styl
    style: source/_data/styles.styl
```

### 添加备案号
```
footer:
    # Beian ICP and gongan information for Chinese users. See: https://beian.miit.gov.cn, http://www.beian.gov.cn
    beian:
        enable: true
        icp: xxxxxx
```


## 自动化部署
### COS
- Installation
```
npm install hexo-deployer-cos --save
```
- Options
You can configure in _config.yml as follows:
```
deploy:
  type: cos
  secretId: yourSecretId
  secretKey: yourSecretKey
  bucket: yourBucket
  region: yourRegion
```
> For projects that use pipelines, you may not want to expose COS properties in the project file, so we support getting them through environment variables.
```
COS_SECRET_ID=yourSecretId
COS_SECRET_KEY=yourSecretKey
COS_BUCKET=yourBucket
COS_REGION=yourRegion
```
> Environment variables have lower priority than _config.xml configuration
### FTPSync
- Install hexo-deployer-ftpsync.
```
npm install hexo-deployer-ftpsync --save
```
- Edit settings.
```
deploy:
  type: ftpsync
  host: <host>
  user: <user>
  pass: <password>
  remote: [remote]
  port: [port]
  ignore: [ignore]
  connections: [connections]
  verbose: [true|false]
```
### 文章更新时间设置：
> updated_option
>
> updated_option 控制了当 Front Matter 中没有指定 updated 时，updated 如何取值：
>
> mtime: 使用文件的最后修改时间。这是从 Hexo 3.0.0 开始的默认行为。
>
> date: 使用 date 作为 updated 的值。可被用于 Git 工作流之中，因为使用 Git 管理站点时，文件的最后修改日期常常会发生改变
>
> empty: 直接删除 updated。使用这一选项可能会导致大部分主题和插件无法正常工作。
use_date_for_updated 选项已经被废弃，将会在下个重大版本发布时去除。请改为使用 updated_option: 'date'。

### CDN缓存刷新
> 该方案参考自：https://segmentfault.com/a/1190000039707833
> 
> 腾讯云官方给我们提供了一个解决方案，可以在COS存储桶的函数计算->CDN缓存刷新函数中配置一个函数，参考截图：
![](https://image.bmqy.net/upload/WX20220806-220705@2x.png)
>
>但这个方案存在一个问题，由于我们的静态网站有默认索引页面index.html，而官方提供的这个函数只会刷新对应的文件的URL，而不会刷新索引URL，例如http://www.bytelife.net/index.html这个文件，通常我们的请求是http://www.bytelife.net/，因此官方的方案针对于静态网站来说不算完美。
>
>优化方案
>可以通过简单修改官方的函数来解决这个问题，点击刚刚创建的CDN缓存刷新函数列表中的函数名称，将index.js文件内容替换为下面的代码，最后点击右上角的“部署”按钮即可：
``` js
/* eslint-disable no-param-reassign */
'use strict';

const TimeoutWatcher = require('./common/TimeoutWatcher');
const CosCdnRefreshTask = require('./common/CosCdnRefreshTask');
const { getParams, logger, getLogSummary } = require('./common/utils');

exports.main_handler = async (event, context) => {
  /**
   * set a timer to terminate the cdn refresh task, ensure log message is printed
   */
  let runningTask;
  const watcher = new TimeoutWatcher({
    timeLimit: context.time_limit_in_ms,
    trigger(error) {
      if (runningTask && runningTask.cancelTask) {
        runningTask.cancelTask(error);
      }
    },
    error: new Error('task is timeout'),
  });

  logger({
    title: 'param as follow: ',
    data: { event },
  });

  /**
   * parse param from event and process.env
   */
  const { secretId, secretKey, token, objects, triggerType, cdnHosts } =    getParams(event);

  logger({
    title: 'param is parsed success',
  });

  const taskResults = [];

  const task = new CosCdnRefreshTask({
    secretId,
    secretKey,
    token,
    objects,
    triggerType,
    cdnHosts,
  });

  if (watcher.isTimeout()) {
    // if current is timeout, trigger the cancel task in next tick
    process.nextTick(() => task.cancelTask(watcher.error));
  } else {
    runningTask = task;
  }

  const results = await task.runTask();
  results.forEach(item => {
    taskResults.push(item)
    // 如果以 /index.html 结尾，则增加目录首页/
    // 例如 https://www.xxxx.com/index.html, 则增加 https://www.xxxx.com/
    if(item.params.urls[0].lastIndexOf('/index.html') == (item.params.urls[0].length - 11)){
      taskResults.push(item.substr(0, item.length - 10))
    }
  });

  watcher.clear();

  logger({
    title: 'cos cdn refresh full logs:',
    data: taskResults,
  });

  const { status, messages } = getLogSummary({
    name: 'cos cdn refresh',
    results: taskResults,
  });

  logger({
    messages: messages.map(item => item.replace(/, /g, '\n')),
  });

  context.callbackWaitsForEmptyEventLoop = false;

  if (status === 'fail') {
    throw messages.join('; ');
  } else {
    return messages.join('; ');
  }
};
```
## 更多
更多说明详见：https://www.bmqy.net/2649.html