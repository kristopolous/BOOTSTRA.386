#!/bin/bash
# I need to like inline sed some crap
# ug why ... ... ug! Also zsh does better replacers
cp -v v4.4.1/site/docs/4.4/demo.html v4.4.1/dist/{css/bootstrap.css,js/bootstrap.bundle.js} site/

# Let's hope this doesn't break the planet ... all I need
# to do is make this shit local. lol those 3 slashes, classic
# exercis left up to the reader.
sed -Ei s'/\/docs\/4.4\/dist\/(js|css)\///g' site/demo.html

cd site
git commit -am "updates"
git push origin HEAD
