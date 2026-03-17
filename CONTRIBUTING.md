# 贡献指南

欢迎参与「电力系统大停电事故案例库」项目！本指南将帮助你顺利完成内容贡献。

---

## 📋 目录

- [参与流程](#参与流程)
- [内容规范](#内容规范)
- [文件命名规范](#文件命名规范)
- [Markdown 写作指南](#markdown-写作指南)
- [AI 视频嵌入](#ai-视频嵌入)
- [提交方式](#提交方式)
- [审核流程](#审核流程)
- [常见问题](#常见问题)

---

## 🚀 参与流程

### 第一步：认领主题

1. 查看 [事故主题清单](docs/incidents/index.md) 中的待认领主题
2. 在组织组的「贡献记录表」中登记认领
3. 每组认领 **1 个**事故主题

### 第二步：准备内容

1. 下载 [事故页面模板](docs/incidents/_template.md)
2. 收集事故相关资料（官方报告、学术论文、新闻报道）
3. 使用 NotebookLM 等工具制作 AI 辅助分析视频
4. 按模板结构撰写内容

### 第三步：提交内容

- **内容组成员**：通过 Git PR 提交
- **普通贡献者**：将文件发送给内容组，由内容组代为提交

### 第四步：等待审核

1. 内容组初审（内容完整性、准确性）
2. 技术组复审（格式规范、链接有效性）

---

## 📝 内容规范

### 必须包含的模块

| 模块 | 说明 | 字数建议 |
|------|------|----------|
| 事故概况 | 时间、地点、规模、影响 | 信息框 + 500字 |
| 原因分析 | 技术原因、管理原因、连锁反应 | 800-1500字 |
| AI 辅助分析 | NotebookLM 视频嵌入 | 视频 3-10 分钟 |
| 经验与启示 | 技术、管理、对我国借鉴 | 500-800字 |
| 参考文献 | 至少 3 条，含官方报告 | - |

### 内容质量要求

✅ **必须做到**：
- 事实准确，数据有来源
- 时间线清晰，因果关系明确
- 参考文献格式规范
- 语言通顺，无错别字

❌ **请避免**：
- 直接复制粘贴大段原文（需改写）
- 使用未经核实的网络信息
- 遗漏关键技术细节
- AI 视频链接失效

---

## 📁 文件命名规范

### 目录命名

格式：`年份-地区关键词`（全小写，连字符分隔）

```
✅ 正确示例：
incidents/2003-us-canada/
incidents/1965-us-northeast/
incidents/2012-india/

❌ 错误示例：
incidents/2003美加大停电/     # 不要用中文
incidents/2003_US_Canada/     # 不要用下划线和大写
incidents/blackout-2003/      # 年份放前面
```

### 文件命名

- 主文件统一命名为 `index.md`
- 图片：`fig-序号-描述.png`（如 `fig-01-timeline.png`）
- 数据：`data-描述.csv`（如 `data-load-curve.csv`）

---

## ✍️ Markdown 写作指南

### 标题层级

```markdown
# 一级标题（页面标题，只用一次）

## 二级标题（大章节：一、二、三...）

### 三级标题（小节：1.1、1.2...）

#### 四级标题（细分内容，尽量少用）
```

### 信息框

```markdown
!!! info "提示标题"
    提示内容，用于补充说明

!!! warning "警告标题"
    警告内容，用于强调重要信息

!!! note "备注标题"
    备注内容，用于注释说明
```

### 表格

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容 | 内容 | 内容 |
```

### 流程图（Mermaid）

```markdown
​```mermaid
flowchart TD
    A[开始] --> B{判断}
    B -->|是| C[结果1]
    B -->|否| D[结果2]
​```
```

### 图片插入

```markdown
![图片描述](../assets/images/your-image.png)

<!-- 如需居中和添加说明 -->
<figure markdown>
  ![图片描述](../assets/images/your-image.png){ width="600" }
  <figcaption>图 1：图片说明文字</figcaption>
</figure>
```

---

## 🎬 AI 视频嵌入

### B站视频（推荐）

```html
<div class="video-container">
  <iframe 
    src="//player.bilibili.com/player.html?bvid=你的BV号&page=1" 
    scrolling="no" 
    border="0" 
    frameborder="no" 
    framespacing="0" 
    allowfullscreen="true">
  </iframe>
</div>
```

### YouTube 视频

```html
<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/你的VIDEO_ID" 
    title="AI 辅助分析视频"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
```

### 视频制作建议

1. 使用 [NotebookLM](https://notebooklm.google.com/) 上传或直接搜索事故相关资料
2. 生成 AI 播客/对话形式的分析内容
3. 视频时长控制在 3-10 分钟
4. 上传至 B站，获取 BV 号

---

## 📤 提交方式

### 方式一：Git 提交（技术组/内容组成员）

```bash
# 1. 克隆仓库
git clone https://gitee.com/ch_su/power-safety-wiki.git
cd power-safety-wiki

# 2. 创建分支
git checkout -b add/2003-us-canada

# 3. 添加文件
mkdir -p docs/incidents/2003-us-canada
cp docs/incidents/_template.md docs/incidents/2003-us-canada/index.md
# 编辑 index.md ...

# 4. 提交
git add .
git commit -m "feat: 添加2003年美加大停电案例"

# 5. 推送并创建 PR
git push origin add/2003-us-canada
# 在 Gitee 网页上创建 Pull Request
```

### 方式二：文件提交（普通贡献者）

1. 下载模板，本地编辑完成
2. 将完成的 `index.md` 文件及相关图片打包
3. 发送至内容组联系人（微信/邮件）
4. 内容组审核后代为提交，PR 描述中注明原作者

---

## ✅ 审核流程

```
提交 PR
   ↓
内容组初审
   ├─ 通过 → 技术组复审
   └─ 不通过 → 返回修改意见
         ↓
技术组复审
   ├─ 通过 → 合并上线 🎉
   └─ 不通过 → 返回修改意见
```

### 审核标准

| 审核项 | 通过标准 |
|--------|----------|
| 内容完整性 | 所有必需模块齐全 |
| 事实准确性 | 关键数据有文献支撑 |
| 格式规范 | 符合模板结构，Markdown 语法正确 |
| 链接有效 | 参考文献链接、视频链接可访问 |
| 语言质量 | 无明显错别字和语法错误 |

---

## ❓ 常见问题

### Q: 我没有 Git 经验，怎么参与？

A: 你只需要：
1. 下载 Markdown 模板
2. 用任意文本编辑器（推荐 VS Code）编辑
3. 完成后发给内容组即可

### Q: 找不到足够的参考资料怎么办？

A: 建议资料来源：
- 官方调查报告（IEEE、NERC、国家能源局等）
- 学术论文（知网、IEEE Xplore、Google Scholar）
- 权威新闻报道

### Q: AI 视频必须用 NotebookLM 吗？

A: NotebookLM 是推荐工具，你也可以使用其他 AI 工具，但需确保：
- 内容基于真实资料，不是 AI 编造
- 视频质量清晰，音频清楚
- 上传至可嵌入的平台（B站/YouTube）

### Q: 如何本地预览我的页面？

A: 
```bash
# 安装依赖
pip install mkdocs-material

# 启动本地服务
mkdocs serve

# 访问 http://localhost:8000
```

---

## 📞 联系方式

- **技术组**：[联系方式]
- **内容组**：[联系方式]  
- **组织组**：[联系方式]

---

感谢你的贡献！每一份付出都将被铭记。🎉

> 贡献者署名永久保留，共同打造交大在电力安全分析领域的学术 IP。

