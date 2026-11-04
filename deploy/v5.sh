#!/bin/bash
#
# BOOTSTRA/386 v5: make the drop-in bundle and put the docs on the site.
#
#   deploy/v5.sh               # everything
#   deploy/v5.sh make_build    # the zip at the repo root
#   deploy/v5.sh build_site    # the docs into site/v5.3.1/
#   deploy/v5.sh push_site     # commit and push site/ (the gh-pages checkout)

set -e
ver=5.3.1
docs=5.3
root=$(cd "$(dirname "$0")/.." && pwd)
base="/BOOTSTRA.386/v$ver"

make_build() {
  # Compile css, copy the font, glyphs and js into dist/, then zip dist/
  # as bootstrap-$ver-dist/ into bootstra.386-latest-v5.zip at the root,
  # like the v2/v3/v4 bundles.
  cd "$root/v$ver"
  npm run css
  npm run release-zip
  ls -la "$root/bootstra.386-latest-v5.zip"
}

build_site() {
  # The docs are a hugo site written for the root of a domain. On the
  # github pages site the whole thing lives under /BOOTSTRA.386/v5.3.1/
  # so every root-absolute link in the output is rewritten to it. (Hugo
  # cannot be given a base with a path: its ref shortcodes stop resolving.)
  cd "$root/v$ver"
  npm run css
  node_modules/.bin/hugo --environment development --cleanDestinationDir -d _site_pages
  rm -rf "$root/site/v$ver"
  mkdir -p "$root/site/v$ver"
  cp -r _site_pages/. "$root/site/v$ver/"
  rm -f "$root/site/v$ver/CNAME"
  find "$root/site/v$ver" -name '*.html' -print0 | xargs -0 sed -Ei \
    -e "s#(href|src|action|data-bs-target)=\"/docs/#\1=\"$base/docs/#g" \
    -e "s#(href|src)=\"/(assets|dist)/#\1=\"$base/\2/#g" \
    -e "s#href=\"/\"#href=\"$base/\"#g" \
    -e "s#href=\"/docs/#href=\"$base/docs/#g"
  find "$root/site/v$ver" -name '*.css' -print0 | xargs -0 sed -Ei \
    -e "s#url\(\"?/docs/#url(\"$base/docs/#g"
  find "$root/site/v$ver" -name '*.js' -print0 | xargs -0 sed -Ei \
    -e "s#(['\"])/docs/$docs/#\1$base/docs/$docs/#g"
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
