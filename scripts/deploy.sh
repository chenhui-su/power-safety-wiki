#!/bin/bash
# 手动部署脚本 - 将构建产物推送到 gh-pages 分支
# 使用方法: ./scripts/deploy.sh

set -e

echo "🔨 构建站点..."
mkdocs build

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REMOTE_URL="$(git -C "$REPO_ROOT" remote get-url origin 2>/dev/null || true)"

if [ -z "$REMOTE_URL" ]; then
  echo "❌ 未找到 origin 远程仓库地址，请先配置 git remote。"
  exit 1
fi

echo "📦 准备部署..."
cd site

# 初始化 git
git init
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🚀 推送到 gh-pages 分支..."
git push -f "$REMOTE_URL" HEAD:gh-pages

cd ..
rm -rf site/.git

echo "✅ 部署完成！"
echo "📝 请到仓库 Pages 设置中选择 gh-pages 分支作为发布源"

