@echo off
chcp 65001 >nul
title 电力系统大停电事故案例库 - 本地预览

echo.
echo ========================================
echo   电力系统大停电事故案例库 - 本地预览
echo ========================================
echo.

:: 检查虚拟环境是否存在
if not exist ".venv\Scripts\activate.bat" (
    echo [!] 虚拟环境不存在，正在创建...
    python -m venv .venv
    if errorlevel 1 (
        echo [错误] 创建虚拟环境失败，请检查 Python 是否正确安装
        pause
        exit /b 1
    )
    echo [✓] 虚拟环境创建成功
)

:: 激活虚拟环境
echo [*] 激活虚拟环境...
call .venv\Scripts\activate.bat

:: 检查依赖是否安装
pip show mkdocs >nul 2>&1
if errorlevel 1 (
    echo [!] 依赖未安装，正在安装...
    pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
    if errorlevel 1 (
        echo [错误] 依赖安装失败
        pause
        exit /b 1
    )
    echo [✓] 依赖安装成功
)

echo.
echo [✓] 环境准备完成
echo [*] 正在启动本地预览服务器...
echo.
echo ----------------------------------------
echo   浏览器访问: http://localhost:8000
echo   按 Ctrl+C 停止服务器
echo ----------------------------------------
echo.

mkdocs serve

pause
