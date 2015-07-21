#!/usr/bin/env bash
set -e

if [ $# -eq 0 ]; then
    echo "usage: $0 [commit message]"
    exit 0
fi

if [ ! -d "gh-pages" ]; then
    echo "Cloning gh-pages in order to push content."
    git clone git@github.com:juvinious/paintown-www.git -b gh-pages gh-pages
fi

echo "Building and compiling..."
grunt

push(){
    git commit -a -m "$1"
    git push
    cd gh-pages
    git commit -a -m "Sync with master"
    git push
    cd ..
    git pull
}

echo "Are you sure you want to commit?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) push $1; break;;
        No ) exit;;
    esac
done