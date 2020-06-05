#!/bin/bash
abort() {
  echo "$2"
  exit $1
}

{
  [ -e ~/temp/docs ] && rm -r ~/temp/docs
  cp -r v2.3.1/docs ~/temp

  git checkout gh-pages
  [ $? -eq 0 ] || abort $? "Failed to checkout"

  cp -r ~/temp/docs/* .

  git commit -am "docs update"
  [ $? -eq 0 ] || abort $? "Failed to commit"

  git push
  [ $? -eq 0 ] || abort $? "Failed to push"

  git checkout master
}
