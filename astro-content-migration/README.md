# Astro Content Migration Pack

这个目录用于存放后续迁移到 Astro 新项目的内容源文件，目标是先把“可直接复用的内容”整理出来，再在新仓库中接入页面、组件和数据聚合逻辑。

## 目录说明

- `project/README.md`
  - 面向 Astro 新项目的项目说明草稿
- `guides/contributing.md`
  - 调整后的协作与审核流程
- `guides/content-team-getting-started.md`
  - 面向内容策划组的 Astro 版本上手说明
- `guides/tech-team-quick-start.md`
  - 面向技术组的 Astro 版本上手说明
- `content/pages/about.md`
  - 可迁移的“关于项目”页面内容
- `content/pages/home.md`
  - 首页文案源，供 Astro 首页组件拆分使用
- `content/incidents/index.md`
  - 案例索引现状说明
- `content/incidents/_template.md`
  - 面向 Astro 内容集合的案例模板

## 调整原则

1. 去掉 MkDocs 专属语法，如 `!!!`、`=== tab` 和依赖 Material 主题的卡片结构。
2. 保留项目背景、协作流程和内容结构要求。
3. 将案例内容改为“单文件 Markdown + frontmatter”的 Astro 友好格式。
4. 明确标注当前阶段尚无案例正文，不把占位页误当作已完成内容迁移。

## 迁移建议

后续新建 Astro 项目时，建议将本目录内容按以下方式接入：

- `content/pages/*.md` -> `src/content/pages/*.md`
- `content/incidents/*.md` -> `src/content/incidents/*.md`
- `guides/*.md` -> 新项目根目录 `docs/` 或仓库根目录说明文件
- `project/README.md` -> 新项目根目录 `README.md`

## 当前状态

当前迁移包只整理了背景、流程、模板和首页文案，没有收录任何事故正文案例。后续正式迁移时，应先从 `content/incidents/_template.md` 出发补齐首批案例。
