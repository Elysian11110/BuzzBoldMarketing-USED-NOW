#!/bin/bash
# GitHub Push Script for BuzzBold

echo "=========================================="
echo "  BuzzBold - GitHub Push Script"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: Not in buzzbold directory"
    exit 1
fi

echo "Step 1: Enter your GitHub username"
read -p "GitHub username: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "Error: GitHub username is required"
    exit 1
fi

echo ""
echo "Step 2: Creating repository URL..."
REPO_URL="https://github.com/${GITHUB_USER}/buzzbold.git"
echo "Repository URL: $REPO_URL"
echo ""

echo "Step 3: Checking git status..."
git status

echo ""
echo "Step 4: Adding GitHub remote..."
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

echo ""
echo "Step 5: Ready to push!"
echo ""
echo "IMPORTANT: When prompted for password, use a Personal Access Token"
echo "Get token from: https://github.com/settings/tokens"
echo ""
read -p "Press Enter to push to GitHub..."

echo ""
echo "Pushing to GitHub..."
git push -u origin master

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================="
    echo "  ✅ SUCCESS! Code pushed to GitHub"
    echo "=========================================="
    echo ""
    echo "View your repository at:"
    echo "https://github.com/${GITHUB_USER}/buzzbold"
    echo ""
else
    echo ""
    echo "=========================================="
    echo "  ❌ Push failed"
    echo "=========================================="
    echo ""
    echo "Common fixes:"
    echo "1. Create repository first at: https://github.com/new"
    echo "2. Use Personal Access Token as password"
    echo "3. Get token from: https://github.com/settings/tokens"
    echo ""
fi
