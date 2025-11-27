#!/bin/bash

echo "GitHub Deployment Script for Harinand Sindukumar's Personal Website"
echo "================================================================"

# Check if Git is installed
if ! command -v git &> /dev/null
then
    echo "Error: Git is not installed or not in PATH"
    echo "Please install Git from https://git-scm.com/"
    exit 1
fi

# Check if repository has been set up
if ! git remote get-url origin &> /dev/null
then
    echo "Error: No remote repository configured"
    echo "Please create a GitHub repository named 'harinand-sindukumar.github.io'"
    echo "Then run: git remote add origin https://github.com/YOUR_USERNAME/harinand-sindukumar.github.io.git"
    exit 1
fi

# Get the remote URL
REMOTE_URL=$(git remote get-url origin)
echo "Current remote repository: $REMOTE_URL"

echo ""
echo "Adding all files..."
git add .

echo ""
echo "Committing changes..."
git commit -m "Update website"

echo ""
echo "Pushing to GitHub..."
git push origin gh-pages

echo ""
echo "Deployment complete!"
echo "Your website will be available at: https://harinand-sindukumar.github.io"
echo "Note: It may take a few minutes for changes to appear live."