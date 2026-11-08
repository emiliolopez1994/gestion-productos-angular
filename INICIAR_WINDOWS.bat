@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Instalando dependencias por primera vez...
  call npm install
  if errorlevel 1 (echo ERROR: verifica que Node.js este instalado.& pause & exit /b 1)
)
call npm start
pause
