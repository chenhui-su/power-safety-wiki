# Power Safety HTML Visual Prototype to Astro

这个目录是把仓库根目录下的 `Power_safty.html` 作为视觉原型，按 Astro 工程方式反拆后的第一版源码骨架。

## 目标

- 保留 `Power_safty.html` 的分幕叙事结构
- 将单文件拆成页面、组件、数据、样式和客户端脚本
- 为后续接入 Markdown 内容集合保留明确扩展点

## 当前拆分范围

- `src/pages/index.astro`
  - 单页入口，对应原型首页
- `src/components/prototype/`
  - 章节组件、地图组件、事件卡片、档案弹层、站点导航
- `src/data/prototype.ts`
  - 章节顺序、事件数据、档案弹层数据
- `src/data/worldCoastline.ts`
  - 世界海岸线 SVG 数据
- `src/styles/prototype.css`
  - 原型样式
- `src/scripts/prototype-client.ts`
  - 章节切换、地图回放、档案弹层等交互

## 与单文件原型的关系

这不是对 `Power_safty.html` 的逐行机械切割，而是按工程边界重组：

- HTML 结构 -> Astro 页面和组件
- 内联样式 -> 独立 CSS
- 全局脚本 -> 单独的客户端模块
- 硬编码数据 -> `src/data/prototype.ts`

## 当前适合做什么

- 继续细化视觉和动效
- 将事件数据换成 Markdown frontmatter 聚合
- 把档案弹层升级为独立详情页
- 把静态原型收敛成正式可维护站点

## 已完成验证

- 已执行 `npm install`
- 已执行 `npm run build`
- 当前 Astro 原型可以静态构建通过

## 为 Markdown 接入预留的结构

- `src/content/config.ts`
  - 已定义 `cases` collection schema，后续可直接校验内容组提供的 frontmatter
- `src/content/cases/CASE_TEMPLATE.md.example`
  - 提供案例正文模板，内容组可复制后改成真实 `.md` 文件
- `src/content/cases/placeholder.md`
  - 占位案例，保证 collection 在当前阶段即可通过构建并提供最小示例
- `src/data/prototype.ts`
  - 当前仍使用原型数据驱动首页，后续可以逐步改成从 content collection 聚合

## 当前不包含的内容

- 还没有接入真实 Markdown 内容源
- 还没有完整复刻 `Power_safty.html` 的每一段动画细节
- 还没有把首页事件卡片、地图点位和档案弹层正式改为读取 content collection
