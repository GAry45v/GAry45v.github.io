# 发布 Academic Pages 主页

这个目录已经按 Academic Pages 模板定制好，目标仓库是：

```text
GAry45v.github.io
```

发布后访问地址是：

```text
https://GAry45v.github.io
```

## 首次发布

1. 打开 GitHub，创建 public repository。
2. Repository name 填：`GAry45v.github.io`。
3. 不要再选别的模板；这个目录已经是 Academic Pages 模板。
4. 将本目录推送到仓库的 `main` 分支。
5. 如果 Pages 没有自动启用，进入 `Settings -> Pages`，选择 `Deploy from a branch`、`main` 和 `/root`。
6. 等 GitHub Pages 构建完成后访问 `https://GAry45v.github.io`。

## 本地 Git 发布

在本目录执行：

```bash
git remote set-url origin git@github.com:GAry45v/GAry45v.github.io.git
git branch -M main
git push -u origin main
```

Academic Pages 上游模板保留为 `upstream`，个人仓库使用 `origin`。

## 公开信息说明

- 头像位于 `images/self.jpg`。
- Email、WeChat 和 RedNote 在页面上不直接显示具体值，但其值仍会存在于公开仓库和网页源码中。
- 论文投稿或录用状态发生变化后，需要同步更新 `_pages/about.md` 与 `_publications/`。
