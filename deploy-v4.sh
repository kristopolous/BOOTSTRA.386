#!/bin/bash
# I need to like inline sed some crap
# ug why ... ... ug! Also zsh does better replacers
cp -v v4.4.1/site/docs/4.4/demo.html v4.4.1/dist/{css/bootstrap.css,js/bootstrap.bundle.js} site/

# we're going to make this stuff we keep out of the repo
build=build
rm -r $build
mkdir -p $build/css/fonts $build/js
./update-icons.sh $build/css/fonts
cp -puv v4.4.1/site/docs/4.4/dist/css/fonts/* $build/css/fonts
cp -puv v4.4.1/site/docs/4.4/demo.html v4.4.1/dist/{css/bootstrap.css,js/bootstrap.bundle.js} $build
zip -r bootstra.386-latest-v4.zip build

# Let's hope this doesn't break the planet ... all I need
# to do is make this shit local. lol those 3 slashes, classic
# exercise left up to the reader.
sed -Ei s'/\/docs\/4.4\/dist\/(css|js)\///g' site/demo.html

cd site
git commit -am "updates"
git push origin HEAD
