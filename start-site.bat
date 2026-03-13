@echo off
setlocal

cd /d "%~dp0"

echo [FluxCars] Starting development server...

if not exist "node_modules" (
  echo [FluxCars] node_modules not found. Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo [FluxCars] Failed to install dependencies.
    exit /b 1
  )
)

call npm run dev

endlocal
