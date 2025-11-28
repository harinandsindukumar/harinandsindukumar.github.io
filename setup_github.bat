@echo off
echo Setting up GitHub repository for Harinand Sindukumar's Personal Website
echo =====================================================================

echo 1. Creating repository on GitHub...
echo Please go to https://github.com/new and create a repository with the following settings:
echo    - Name: harinand-sindukumar.github.io
echo    - Visibility: Public
echo    - Initialize: No
echo    - Click "Create repository"
echo.
echo Press any key after you've created the repository...
pause

echo.
echo 2. Pushing code to GitHub...
git push -u origin gh-pages

if %errorlevel% equ 0 (
    echo.
    echo Success! Your website is now pushed to GitHub.
    echo.
    echo Next steps:
    echo 1. Go to your repository settings on GitHub
    echo 2. Scroll down to the "Pages" section
    echo 3. Under "Source", select "gh-pages" branch
    echo 4. Click "Save"
    echo.
    echo Your website will be available at: https://harinandsindukumar.netlify.app
) else (
    echo.
    echo There was an error pushing to GitHub.
    echo Please make sure you've created the repository and try again.
)

echo.
echo Note: Your GitHub username is now harinandsindukumar
echo Repository URL: https://github.com/harinandsindukumar/harinandsindukumar.github.io

echo.
echo NOTE: Website is now deployed to Netlify at: https://harinandsindukumar.netlify.app

pause