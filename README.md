# Home

这是一个由浙江大学计算机科学与技术学院学生会为服务全体计算机学院同学所搭建的网页，从[这里](https://zjucssu.github.io/home/)访问主页。

# 本地构建指南

0. 安装 python、git 等必要工具 
   - 推荐使用 python 3.11 以保证稳定性，参考 https://devguide.python.org/versions/
1. 将 repo 克隆到本地

```shell
# 使用 HTTPS 协议
git clone https://github.com/ZJUCSSU/home.git
# 或使用 SSH 协议
git clone git@github.com:ZJUCSSU/home.git
```

2. 安装 python 依赖，包括 `mkdocs`、`mkdocs-material` 以及一些第三方插件

```shell
cd home
pip install -r requirements.txt
```

3. 启动 mkdocs 本地服务

```shell
mkdocs serve
```
   - 然后可以通过 localhost:8000 预览网站

# 贡献指南

*TODO，可能最后会放在网页里*

