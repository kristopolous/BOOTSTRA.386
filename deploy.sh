#!/bin/bash
[ -e ~/temp/docs ] && rm -r ~/temp/docs
cp -r docs ~/temp
git checkout gh-pages
if [ $? -eq 0 ]; then
  cp -r ~/temp/docs/* .
  git commit -am "docs update"
  git checkout master
else
  echo "Failure"
fi
# scp ./docs/assets/css/bootstrap.css 9ol.es:/usr/qaa.ath.cx/www/BOOTSTRA.386/assets/css
