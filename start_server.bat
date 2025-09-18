@echo off
echo 🌙 Iniciando servidor local para o protótipo 3D...
echo.

REM Tentar Node.js primeiro
node start_server_node.js 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js não encontrado. Tentando Python...
    python start_server.py 2>nul
    if %errorlevel% neq 0 (
        echo ❌ Nem Node.js nem Python foram encontrados.
        echo 💡 Instale Node.js ou Python para executar o servidor local.
        echo 🌐 Alternativa: Use a versão embedded (prototipo_3d_embedded.html)
        pause
        exit /b 1
    )
)

pause