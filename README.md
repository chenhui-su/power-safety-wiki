# ⚡ 电力系统大停电事故案例库

[![MkDocs](https://img.shields.io/badge/MkDocs-Material-blue)](https://squidfunk.github.io/mkdocs-material/)
[![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey)](LICENSE)
[![SJTU 130](https://img.shields.io/badge/SJTU-130周年校庆-red)](https://www.sjtu.edu.cn/)

> 🎓 上海交通大学 130 周年校庆献礼项目（2026年4月6日）

电力系统安全分析领域的权威知识平台，汇集全球重大停电事故案例，结合 AI 辅助分析，打造最好的中文电力安全知识库。

> 🚧 当前仓库处于协作启动阶段：优先提供框架、模板与贡献流程，案例内容持续补充中。

## 🌟 项目特色

- 📚 **系统全面**：覆盖全球主要大停电事故，按地区、年代、类型多维度索引
- 🤖 **AI 辅助**：每个案例配备 NotebookLM 生成的智能分析视频
- 📖 **规范严谨**：统一内容模板，学术级参考文献要求
- 🌍 **多语言**：支持中英文，扩大国际影响力
- 👥 **内部协作**：网站内部成员分工协作，持续完善内容

## 📂 案例索引

| 地区 | 事故 | 年份 | 状态 |
|------|------|------|------|
| ... | 更多案例持续更新 | | 📝 招募中 |

## 🚀 快速开始

### 在线访问

访问网站：[https://chenhui-su.github.io/power-safety-wiki/](https://chenhui-su.github.io/power-safety-wiki/)

### 本地预览

**技术组成员（仓库维护 / 部署）**：请阅读 [QUICK_START.md](QUICK_START.md) 完成环境配置与仓库操作。  
**内容创作者（无仓库权限）**：请阅读 [getting-started.md](getting-started.md) 完成内容撰写、预览截图与素材打包提审。

#### 一键启动（推荐）

```bash
# Windows：双击运行
scripts\start.bat

# macOS/Linux
chmod +x scripts/start.sh && ./scripts/start.sh
```

#### 手动启动

```bash
# 克隆仓库
git clone https://gitee.com/ch_su/power-safety-wiki.git
cd power-safety-wiki

# 创建并激活虚拟环境
python -m venv .venv
# Windows: .\.venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate

# 安装依赖
pip install -r requirements.txt

# 启动本地服务
mkdocs serve

# 访问 http://localhost:8000
```

## 🤝 参与贡献

我们欢迎所有对电力系统安全感兴趣的同学参与内容贡献！

> 🔒 当前阶段暂未开放外部编辑，贡献流程面向网站内部人员。

1. 📖 阅读 [贡献指南](CONTRIBUTING.md)
2. 🎯 在「贡献记录表」中认领事故主题
3. 📝 本地完成案例文档，并使用 `mkdocs serve` 预览后截图
4. 🎬 使用 NotebookLM 生成分析视频
5. 📦 将 `项目文件 + 预览截图 + 视频文件` 打包提交内容组审核
6. ✅ 内容组审核通过后，由技术组完成视频上传、页面入库与部署

> 💡 **无需编程经验**：你只需要完成内容撰写与素材打包，内容组和技术组会协助完成审核与上线。

详见 👉 [CONTRIBUTING.md](CONTRIBUTING.md)

## 📁 项目结构

```
power-safety-wiki/
├── mkdocs.yml              # 站点配置
├── docs/
│   ├── index.md            # 首页
│   ├── about.md            # 关于页面
│   └── incidents/          # 事故案例
│       ├── index.md        # 案例索引
│       ├── _template.md    # 内容模板
│       └── YYYY-region/    # 各事故目录
├── CONTRIBUTING.md         # 贡献指南
└── README.md               # 本文件
```

## 👥 团队

### 核心团队

| 职责 | 成员 |
|------|------|
| 项目负责人 | [助教姓名] |
| 组织组 | 王湘、滨程、... |
| 技术组 | 晨辉、民康、... |
| 内容组 | 睿丞、志震、广绪、... |
| 宣传组 | 滨程、民康、... |

### 贡献者

感谢所有为本项目做出贡献的同学！

<!-- 贡献者列表将在此自动生成 -->

## 📅 里程碑

- [x] 2026-03-17 骨干内部碰头会
- [x] 2026-03-22 仓库、模板、贡献指南就位
- [ ] 2026-03-23 课上启动会
- [ ] 2026-03-30 课上推进会
- [ ] 2026-04-01 ~ 04-05 最终集成测试
- [ ] **2026-04-06 🎉 校庆献礼，正式上线**

## 📜 许可证

本项目采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 许可证。

- ✅ 可自由分享、演绎
- ✅ 需署名来源
- ❌ 禁止商业使用
- 🔄 相同方式共享

## 🔗 相关链接

- 📱 公众号：「AI的尽头是电力」
- 🏫 [上海交通大学](https://www.sjtu.edu.cn/)
- 📧 联系我们：[email@example.com]

---

<p align="center">
  <b>献礼上海交通大学 130 周年校庆</b><br>
  <i>让每一个做电力系统安全分析的人，第一个想到这个网站</i>
</p>

