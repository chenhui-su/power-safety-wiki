# Makefile - 常用命令快捷方式
# 使用方法: make <命令>

.PHONY: install serve build clean help

# 默认目标
.DEFAULT_GOAL := help

# 安装依赖
install:
	pip install -r requirements.txt
	pre-commit install
	@echo "✅ 依赖安装完成，pre-commit hooks 已启用"

# 本地预览
serve:
	mkdocs serve -a 0.0.0.0:8000
	@echo "🚀 访问 http://localhost:8000"

# 构建静态站点
build:
	mkdocs build
	@echo "✅ 站点已构建到 site/ 目录"

# 清理构建文件
clean:
	rm -rf site/
	rm -rf __pycache__/
	find . -type f -name "*.pyc" -delete
	@echo "🧹 清理完成"

# 检查 Markdown 格式
lint:
	pre-commit run --all-files
	@echo "✅ 格式检查完成"

# 快速启动（安装 + 预览）
quick:
	@make install
	@make serve

# 帮助信息
help:
	@echo "电力系统大停电事故案例库 - 开发命令"
	@echo ""
	@echo "可用命令:"
	@echo "  make install  - 安装依赖并配置 pre-commit"
	@echo "  make serve    - 启动本地预览服务器"
	@echo "  make build    - 构建静态站点"
	@echo "  make clean    - 清理构建文件"
	@echo "  make lint     - 运行格式检查"
	@echo "  make quick    - 快速启动（安装+预览）"
	@echo ""
	@echo "首次使用请运行: make install"
