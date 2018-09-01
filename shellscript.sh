#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo 

cp about.html public/about.html -f
cp research.html public/research.html -f
cp projects.html public/projects.html -f
cp images public/images -f -r
cp favicon.ico public/favicon.ico -f
cp CNAME public/CNAME -f

# Go To Public folder
cd public
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site NEW `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push 

# Come Back up to the Project Root
cd ..