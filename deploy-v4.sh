#!/bin/bash

make_build() {
  # we're going to make this stuff we keep out of the repo
  build=build
  rm -r $build
  mkdir -p $build/{css,fonts,js}
  ./update-icons.sh $build/fonts
  for what in fonts css js; do
    cp -puv v4.4.1/dist/$what/* $build/$what
  done

  [[ -e bootstra.386-latest-v4.zip ]] && rm bootstra.386-latest-v4.zip

  zip -r bootstra.386-latest-v4.zip $build
}

deploy_site(){
  # I need to like inline sed some crap
  # ug why ... ... ug! Also zsh does better replacers
  cp -v v4.4.1/site/docs/4.4/demo.html v4.4.1/dist/{css/bootstrap.css,js/bootstrap.bundle.js} site/

  # Let's hope this doesn't break the planet ... all I need
  # to do is make this shit local. lol those 3 slashes, classic
  # exercise left up to the reader.
  sed -Ei s'/\/docs\/4.4\/dist\/(css|js)\///g' site/demo.html

  cd site
  git commit -am "updates"
  git push origin HEAD
}

todo=${1:-make_build deploy_site}
for i in $todo; do
  eval $i
done

