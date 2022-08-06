import feedparser
import time
import os
import re


def get_posts(feed_url):

    result = ""
    feed = feedparser.parse(feed_url)
    feed_entries = feed["entries"]
    feed_entries_length = len(feed_entries)
    all_number = feed_entries_length

    for entrie in feed_entries[0: all_number]:
        title = entrie["title"]
        link = entrie["link"]
        result = result + "\n" + "[" + title + "](" + link + ")" + "\n"

    return result


def main():

    bmqy_feed = get_posts("https://www.bmqy.net/search.xml")
    print(bmqy_feed)

    insert_info = bmqy_feed

# 替换 ---start--- 到 ---end--- 之间的内容

    insert_info = "---start---\n## 目录(" + time.strftime(
        '%Y年%m月%d日') + "更新)" + "\n" + insert_info + "---end---"

    # 获取README.md内容
    with open(os.path.join(os.getcwd(), "README.md"), 'r', encoding='utf-8') as f:
        readme_md_content = f.read()

    new_readme_md_content = re.sub(
        r'---start---(.|\n)*---end---', insert_info, readme_md_content)

    with open(os.path.join(os.getcwd(), "README.md"), 'w', encoding='utf-8') as f:
        f.write(new_readme_md_content)

    print("==new_readme_md_content==>>", new_readme_md_content)


main()
