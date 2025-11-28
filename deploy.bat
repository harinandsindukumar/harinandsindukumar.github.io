@echo off
echo GitHub Deployment Script for Harinand Sindukumar's Personal Website
echo ================================================================

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

REM Check if repository has been set up
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: No remote repository configured
    echo Please create a GitHub repository named 'harinand-sindukumar.github.io'
    echo Then run: git remote add origin https://github.com/harinandsindukumar/harinandsindukumar.github.io.git
    pause
    exit /b 1
)

REM Get the remote URL
for /f "tokens=*" %%i in ('git remote get-url origin') do set REMOTE_URL=%%i
echo Current remote repository: %REMOTE_URL%

echo.
echo Adding all files...
git add .

echo.
echo Committing changes...
git commit -m "Update website"

echo.
echo Pushing to GitHub...
git push origin gh-pages

echo.
echo Deployment complete!
echo Your website will be available at: https://harinandsindukumar.github.io
echo Note: It may take a few minutes for changes to appear live.
pause