#!/bin/bash
# 手动部署脚本 - 将构建产物推送到 gh-pages 分支
# 使用方法: ./scripts/deploy.sh

set -e

echo "🔨 构建站点..."
mkdocs build

echo "📦 准备部署..."
cd site

# 初始化 git
git init
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🚀 推送到 gh-pages 分支..."
# 替换为你的仓库地址
git push -f https://gitee.com/ch_su/power-safety-wiki.git main:gh-pages

cd ..
rm -rf site/.git

echo "✅ 部署完成！"
echo "📝 请到 Gitee 仓库设置中开启 Pages 服务，选择 gh-pages 分支"

