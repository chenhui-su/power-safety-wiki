# 🚀 电力系统大停电事故案例库 - 协作人员快速上手指南

> **版本**: v1.0 | **更新日期**: 2026年3月 | **适用对象**: 技术组、内容组成员

---

## 📌 文档分工

- 本文档（`QUICK_START.md`）：面向内部协作人员（有仓库权限、需要走 Git 协作流程）
- `getting-started.md`（仓库根目录）：面向内部普通贡献者（以内容撰写和提交流程为主）
- 两份文档都面向网站内部人员，默认读者具备基础的电脑与命令行操作能力

---

## 📋 30分钟快速上手路线图

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  步骤1        步骤2        步骤3        步骤4        步骤5        步骤6     │
│  ↓            ↓            ↓            ↓            ↓            ↓         │
│ 安装         安装          安装         克隆         配置          运行      │
│ Python  →    Git     →    VS Code  →   项目    →   环境     →   预览      │
│ (10分钟)    (5分钟)       (5分钟)      (2分钟)     (5分钟)       (3分钟)    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 一、环境要求

| 软件 | 推荐版本 | 必要性 | 下载地址 |
|------|----------|--------|----------|
| Python | **3.11.x** | 必须 | https://www.python.org/downloads/ |
| Git | 最新版 | 必须 | https://git-scm.com/downloads |
| VS Code | 最新版 | 推荐 | https://code.visualstudio.com/ |

---

## 二、Python 安装详细步骤

### Windows 系统

#### 步骤 1：下载

访问 https://www.python.org/downloads/release/python-3119/

下载 **Windows installer (64-bit)**

#### 步骤 2：安装（重要！）

运行下载的安装程序，**第一个界面非常关键**：

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Install Python 3.11.9                                      │
│                                                             │
│  ☑ Install launcher for all users (recommended)            │
│  ☑ Add Python 3.11 to PATH        ← ← ← 必须勾选！！！      │
│                                                             │
│  ┌─────────────────────┐                                    │
│  │   Install Now       │  ← 点击这个                        │
│  └─────────────────────┘                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

⚠️ **如果忘记勾选 "Add Python to PATH"**：
- 需要卸载后重新安装
- 或手动添加环境变量（较复杂）

#### 步骤 3：验证安装

按 `Win + R`，输入 `cmd`，打开命令提示符，执行：

```cmd
python --version
```

✅ 成功显示：`Python 3.11.9`

❌ 如果显示 "不是内部或外部命令"：
- 检查是否勾选了 PATH 选项
- 尝试重启电脑
- 尝试使用 `py --version`

### macOS 系统

#### 方法一：Homebrew（推荐）

```bash
# 1. 安装 Homebrew（如果没有）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. 安装 Python
brew install python@3.11

# 3. 验证
python3 --version
```

#### 方法二：官网安装包

1. 访问 https://www.python.org/downloads/macos/
2. 下载 Python 3.11.x 的 .pkg 文件
3. 双击安装
4. 打开终端验证：`python3 --version`

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install python3.11 python3.11-venv python3-pip -y
python3.11 --version
```

---

## 三、Git 安装

### Windows

1. 下载：https://git-scm.com/download/win
2. 运行安装程序，**一路默认即可**
3. 验证：打开 cmd，输入 `git --version`

### macOS

```bash
# 方法一：直接在终端输入 git，系统会提示安装
git

# 方法二：使用 Homebrew
brew install git
```

### 配置 Git 用户信息（所有系统）

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"

# 解决中文显示问题
git config --global core.quotepath false
```

---

## 四、VS Code 安装及配置

### 安装

1. 下载：https://code.visualstudio.com/
2. 安装（默认选项即可）

### 推荐扩展

打开 VS Code，按 `Ctrl+Shift+X` 打开扩展面板，搜索并安装：

```
必装：
- Chinese (Simplified) Language Pack   # 中文界面
- Markdown All in One                   # Markdown 编辑
- YAML                                  # YAML 语法支持

推荐：
- GitLens                               # Git 增强
- markdownlint                          # Markdown 语法检查
```

---

## 五、克隆并运行项目

### 5.1 创建工作目录

```bash
# Windows (在 PowerShell 或 CMD 中)
mkdir C:\Projects
cd C:\Projects

# macOS / Linux
mkdir -p ~/Projects
cd ~/Projects
```

### 5.2 克隆项目

```bash
git clone https://gitee.com/ch_su/power-safety-wiki.git
cd power-safety-wiki
```

### 5.3 创建虚拟环境

```bash
# Windows
python -m venv .venv

# macOS / Linux
python3 -m venv .venv
```

### 5.4 激活虚拟环境

**⚠️ 每次打开新终端都需要执行这一步！**

```bash
# Windows PowerShell
.\.venv\Scripts\Activate.ps1

# Windows CMD
.\.venv\Scripts\activate.bat

# macOS / Linux
source .venv/bin/activate
```

激活成功标志：命令行前出现 `(.venv)`

```
(.venv) C:\Projects\power-safety-wiki>     ← 看到这个就对了
```

#### PowerShell 脚本执行问题

如果遇到 "禁止运行脚本" 错误：

```powershell
# 以管理员身份运行 PowerShell，执行：
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# 输入 Y 确认
```

### 5.5 安装依赖

```bash
# 确保虚拟环境已激活（命令行前有 .venv）

pip install --upgrade pip
pip install -r requirements.txt
```

如果下载慢，使用清华镜像：

```bash
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 5.6 启动预览

```bash
mkdocs serve
```

打开浏览器访问：**http://localhost:8000**

🎉 看到网站页面就成功了！

---

## 六、日常工作流程

### 每次开始工作

```bash
# 1. 进入项目目录
cd C:\Projects\power-safety-wiki      # Windows
cd ~/Projects/power-safety-wiki       # macOS/Linux

# 2. 激活虚拟环境
.\.venv\Scripts\Activate.ps1          # Windows PowerShell
source .venv/bin/activate             # macOS/Linux

# 3. 拉取最新代码
git pull origin main

# 4. 启动本地预览
mkdocs serve
```

### 编辑内容

1. 用 VS Code 打开项目文件夹：`code .`
2. 编辑 `docs/` 目录下的 `.md` 文件
3. 保存后浏览器自动刷新

### 提交修改

```bash
# 查看修改
git status

# 添加文件
git add .

# 提交（写清楚做了什么）
git commit -m "feat: 添加XX大停电案例"

# 推送
git push origin main
```

---

## 七、项目目录结构说明

```
power-safety-wiki/
├── docs/                       # 📁 文档源文件（主要工作目录）
│   ├── index.md                #    首页
│   ├── about.md                #    关于页面
│   ├── incidents/              # 📁 事故案例目录
│   │   ├── index.md            #    案例索引
│   │   ├── _template.md        #    ⭐ 模板文件（复制使用）
│   │   └── 2003-us-canada/     #    各事故子目录
│   │       └── index.md
│   └── assets/                 # 📁 静态资源
│       └── css/
├── getting-started.md          # 📖 内部普通贡献者指南
├── mkdocs.yml                  # ⚙️ 网站配置文件
├── requirements.txt            # 📦 Python 依赖
├── CONTRIBUTING.md             # 📖 贡献指南
├── README.md                   # 📖 项目说明
└── QUICK_START.md              # 📖 本文件
```

**内容组主要编辑的文件**：
- `docs/incidents/` 目录下的 `.md` 文件

---

## 八、常用命令速查表

| 命令 | 作用 |
|------|------|
| `mkdocs serve` | 启动本地预览 |
| `mkdocs serve -a 0.0.0.0:8080` | 使用 8080 端口（8000 被占用时） |
| `mkdocs build` | 构建静态网站 |
| `git status` | 查看修改状态 |
| `git add .` | 添加所有修改 |
| `git commit -m "消息"` | 提交修改 |
| `git pull` | 拉取远程更新 |
| `git push` | 推送本地修改 |
| `Ctrl + C` | 停止 mkdocs serve |

---

## 九、常见问题速查

| 问题 | 解决方案 |
|------|----------|
| `python` 命令找不到 | Windows 尝试 `py`；macOS/Linux 用 `python3` |
| 虚拟环境激活失败 | PowerShell 执行策略问题，见第五节 |
| pip 安装超时 | 使用清华镜像：`-i https://pypi.tuna.tsinghua.edu.cn/simple` |
| 8000 端口被占用 | 使用 `mkdocs serve -a 0.0.0.0:8080` |
| git push 被拒绝 | 检查是否有仓库权限，联系技术组 |
| 中文文件名乱码 | `git config --global core.quotepath false` |

---

## 十、获取帮助

### 技术支持

- **技术组-晨辉**：[微信号/邮箱]
- **技术组-民康**：[微信号/邮箱]

### 官方文档

- MkDocs：https://www.mkdocs.org/
- Material 主题：https://squidfunk.github.io/mkdocs-material/
- Git 教程：https://www.liaoxuefeng.com/wiki/896043488029600

### 提交问题

仓库 Issue：https://gitee.com/ch_su/power-safety-wiki/issues

---

## ✅ 自检清单

完成环境配置后，确认以下所有项目：

- [ ] `python --version` 显示 3.10.x 或 3.11.x
- [ ] `git --version` 显示版本号
- [ ] 项目已克隆到本地
- [ ] 虚拟环境可以正常激活（命令行前有 `.venv`）
- [ ] `mkdocs --version` 显示版本号
- [ ] `mkdocs serve` 可以启动，浏览器能访问 localhost:8000
- [ ] VS Code 可以正常打开和编辑 .md 文件

**全部打勾？恭喜你，可以开始贡献了！🎉**

---

## 📝 下一步行动

1. ✅ 阅读 `CONTRIBUTING.md` 了解贡献规范
2. ✅ 查看 `docs/incidents/_template.md` 熟悉内容模板
3. ✅ 在组织组登记认领一个事故主题
4. ✅ 开始你的第一篇贡献！

---

> 📌 **温馨提示**：
> - 遇到问题先看本文档的"常见问题"部分
> - 仍然无法解决再联系技术组
> - 每次工作前记得 `git pull` 拉取最新代码
> - 编辑时保持 `mkdocs serve` 运行，可以实时预览

---

*本文档由技术组维护，如有建议请反馈*

