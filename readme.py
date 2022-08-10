import feedparser
import time
import os
import re
import pytz
from datetime import datetime


def get_posts(feed_url):

    result = ""
    siteUrl = os.environ["SITE_URL"]
    feed = feedparser.parse(siteUrl + feed_url)
    feed_entries = feed["entries"]
    feed_entries_length = len(feed_entries)
    all_number = feed_entries_length

    for entrie in feed_entries[all_number-1: -1: -1]:
        entrie = feed_entries[i] 
        title = entrie["title"]
        link = entrie["url"]
        result = result + "\n" + "[" + title + "](" + link + ")" + "\n"

    return result


def main():

    bmqy_feed = get_posts("/search.xml")
    # print(bmqy_feed)

    insert_info = bmqy_feed

    # 替换 ---start--- 到 ---end--- 之间的内容
    # pytz.timezone('Asia/Shanghai')).strftime('%Y年%m月%d日%H时M分')
    fmt = '%Y-%m-%d %H:%M:%S %Z%z'
    insert_info = "<!--START_SECTION:bmqy-->\n\n## 博客目录(" + datetime.fromtimestamp(int(time.time()), pytz.timezone(
        'Asia/Shanghai')).strftime('%Y-%m-%d %H:%M:%S') + "更新)" + "\n" + insert_info + "\n<!--END_SECTION:bmqy-->"

    # 获取README.md内容
    with open(os.path.join(os.getcwd(), "README.md"), 'r', encoding='utf-8') as f:
        readme_md_content = f.read()

    new_readme_md_content = re.sub(
        r'\<\!\-\-START_SECTION:bmqy\-\->(.|\n)*\<\!\-\-END_SECTION:bmqy\-\-\>', insert_info, readme_md_content)
    print("==new_readme_md_content==>>", new_readme_md_content)

    with open(os.path.join(os.getcwd(), "README.md"), 'w', encoding='utf-8') as f:
        f.write(new_readme_md_content)


main()
