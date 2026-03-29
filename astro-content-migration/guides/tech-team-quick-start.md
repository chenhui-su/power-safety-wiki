# 技术组快速上手指南

本文档面向后续 Astro 新项目的技术组成员，负责内容接入、视频链接入库、本地预览和部署发布。

## 文档分工

- 本文档：面向技术组成员
- `guides/content-team-getting-started.md`：面向内容策划组
- `guides/contributing.md`：统一协作规范

## 一、环境要求

| 软件 | 推荐版本 | 说明 |
| ---- | ---- | ---- |
| Node.js | 22.x | Astro 项目运行环境 |
| npm | 跟随 Node.js | 包管理与脚本执行 |
| VS Code | 最新版 | 推荐编辑器 |
| Git | 最新版 | 仓库管理 |

## 二、克隆并启动项目

```bash
git clone <astro-new-repo-url>
cd <astro-new-repo-name>
npm install
npm run dev
```

默认开发地址通常为：

```text
http://localhost:4321
```

## 三、建议中的目录结构

```text
src/
  content/
    pages/
    incidents/
  components/
    home/
  pages/
    index.astro
    incidents/[slug].astro
public/
```

## 四、技术组日常工作

### 1. 接收审核通过的材料

审核通过后，技术组通常会收到：

- 案例 Markdown
- 图片或图表素材
- 视频文件

### 2. 入库内容

建议操作：

1. 将案例 Markdown 放入 `src/content/incidents/`
2. 将素材放入 `public/cases/<slug>/`
3. 检查 frontmatter 字段是否完整
4. 在本地预览案例页与首页摘要

### 3. 上传视频并回填链接

1. 视频服务器成员上传视频
2. 生成可访问链接
3. 仓库维护成员回填 `video_url`
4. 检查页面嵌入效果

### 4. 提交与部署

```bash
git add .
git commit -m "feat: add <slug> incident content"
git push origin main
```

## 五、预览检查重点

- 首页是否能读取案例 frontmatter
- 地图点位是否正常
- 案例详情页标题、摘要、正文是否正常
- 视频链接是否可访问
- 资源路径是否正确

## 六、当前特别说明

这份迁移包只整理了项目背景、流程说明和内容模板，还没有正式案例正文。技术组搭建新仓库时，建议先接入模板和空索引，再逐步上线首批案例。
