import os
import re

# 自动获取脚本所在目录
root_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')
print("当前根目录：", root_path)

# ========== 功能 1：删除所有 .htm 文件 ==========
def delete_htm_files():
    for folder, subfolders, files in os.walk(root_path):
        for file in files:
            if file.lower().endswith(".htm"):
                file_path = os.path.join(folder, file)
                print("删除文件：", file_path)
                try:
                    os.remove(file_path)
                except Exception as e:
                    print("删除失败：", e)

# ========== 功能 2：将所有 .htm 链接改为 .html ==========
def replace_htm_links():
    pattern = re.compile(r'\.htm([\'"])')

    for folder, subfolders, files in os.walk(root_path):
        for file in files:
            if file.lower().endswith((".html", ".htm", ".js", ".txt", ".md", ".xml", ".css")):
                file_path = os.path.join(folder, file)

                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()

                    new_content = pattern.sub(r'.html\1', content)

                    if new_content != content:
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        print("已替换链接:", file_path)

                except Exception as e:
                    print("处理失败:", file_path, "-", e)

# ========== 功能 3：删除 framework-info 区块 ==========
def remove_framework_info():
    pattern = re.compile(
        r'<span\s+class="framework-info">.*?</span>\s*</div>',
        re.DOTALL
    )

    for folder, _, files in os.walk(root_path):
        for file in files:
            if file.lower().endswith(".html"):
                file_path = os.path.join(folder, file)

                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()

                    new_content = pattern.sub("", content)

                    if new_content != content:
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        print("已删除 framework-info:", file_path)

                except Exception as e:
                    print("错误:", file_path, e)




# ========== 主程序 ==========
if __name__ == "__main__":
    print("开始删除 .htm 文件...")
    delete_htm_files()

    print("开始替换 .htm → .html ...")
    replace_htm_links()

    print("开始删除 framework-info 区块...")
    remove_framework_info()

    print("全部完成！")
