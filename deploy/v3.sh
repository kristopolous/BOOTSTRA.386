#!/bin/bash
#
# BOOTSTRA/386 v3: make the drop-in bundle and put the docs on the site.
#
#   deploy/v3.sh               # everything
#   deploy/v3.sh make_build    # bootstra.386-latest-v3.zip at the repo root
#   deploy/v3.sh build_site    # the docs into site/v3.3.2/
#   deploy/v3.sh push_site     # commit and push site/ (the gh-pages checkout)

set -e
ver=3.3.2
root=$(cd "$(dirname "$0")/.." && pwd)

make_build() {
  # build-386.sh compiles the Less with a current lessc; no vagrant needed.
  cd "$root/v$ver"
  ./build-386.sh
  rm -rf "bootstrap-$ver-dist" "$root/bootstra.386-latest-v3.zip"
  mkdir -p "bootstrap-$ver-dist/css" "bootstrap-$ver-dist/js" "bootstrap-$ver-dist/fonts"
  cp -pr dist/css/. "bootstrap-$ver-dist/css/"
  cp -p dist/js/*.js "bootstrap-$ver-dist/js/"
  cp -p dist/fonts/* "bootstrap-$ver-dist/fonts/"
  zip -qr9 "$root/bootstra.386-latest-v3.zip" "bootstrap-$ver-dist"
  rm -rf "bootstrap-$ver-dist"
  ls -la "$root/bootstra.386-latest-v3.zip"
}

build_site() {
  # The docs are the prebuilt jekyll output in _gh_pages/ with relative
  # links, so they are copied as they are to the root of site/v3.3.2/.
  cd "$root/v$ver"
  ./build-386.sh
  mkdir -p "$root/site/v$ver"
  rm -rf "$root/site/v$ver/_gh_pages"
  cp -pr _gh_pages/. "$root/site/v$ver/"
  rm -f "$root/site/v$ver/CNAME"
  # The home page was rendered as if it lived one directory down, so its
  # links climb out of v3.3.2/. Point them back at the page's own directory.
  sed -i 's#\(href\|src\)="\.\./#\1="./#g' "$root/site/v$ver/index.html"
  du -sh "$root/site/v$ver"
}

push_site() {
  cd "$root/site"
  git add -A "v$ver"
  git commit -m "v$ver docs" || true
  git push origin HEAD
}

todo=${*:-make_build build_site push_site}
for i in $todo; do
  $i
done
