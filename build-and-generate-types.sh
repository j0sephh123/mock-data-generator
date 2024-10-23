#!/bin/bash
# Define project paths
PROJECT_1_PATH="/home/joseph/projects/mock-data-generator/shared"
PROJECT_2_PATH="/home/joseph/projects/mock-data-generator/client"
PROJECT_3_PATH="/home/joseph/projects/mock-data-generator/server"

# Navigate to Project 1 and build & pack
echo "Building and packing Project 1..."
cd "$PROJECT_1_PATH" || exit
npm run build
npm pack

# Find the latest .tgz file created by npm pack
PACKAGE_FILE=$(ls -t *.tgz | head -n 1)

if [ -z "$PACKAGE_FILE" ]; then
  echo "Error: No package file found in Project 1."
  exit 1
fi

# Navigate to Project 2 and install the packed file
echo "Installing package in Project 2..."
cd "$PROJECT_2_PATH" || exit
npm install "$PROJECT_1_PATH/$PACKAGE_FILE"

# Navigate to Project 3 and install the packed file
echo "Installing package in Project 3..."
cd "$PROJECT_3_PATH" || exit
npm install "$PROJECT_1_PATH/$PACKAGE_FILE"

echo "Build, pack, and installation complete."
