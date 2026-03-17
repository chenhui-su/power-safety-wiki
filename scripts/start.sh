#!/bin/bash
# 电力系统大停电事故案例库 - 本地预览启动脚本

set -e

echo ""
echo "========================================"
echo "  电力系统大停电事故案例库 - 本地预览"
echo "========================================"
echo ""

# 检查 Python
if ! command -v python3 &> /dev/null; then
    echo "[错误] 未找到 Python3，请先安装 Python"
    exit 1
fi

# 检查虚拟环境
if [ ! -d ".venv" ]; then
    echo "[!] 虚拟环境不存在，正在创建..."
    python3 -m venv .venv
    echo "[✓] 虚拟环境创建成功"
fi

# 激活虚拟环境
echo "[*] 激活虚拟环境..."
source .venv/bin/activate

# 检查依赖
if ! pip show mkdocs &> /dev/null; then
    echo "[!] 依赖未安装，正在安装..."
    pip install --upgrade pip
    pip install -r requirements.txt
    echo "[✓] 依赖安装成功"
fi

echo ""
echo "[✓] 环境准备完成"
echo "[*] 正在启动本地预览服务器..."
echo ""
echo "----------------------------------------"
echo "  浏览器访问: http://localhost:8000"
echo "  按 Ctrl+C 停止服务器"
echo "----------------------------------------"
echo ""

mkdocs serve
