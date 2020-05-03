#!/bin/bash
#
# This is hilarious. I smiled and laughed when I wrote it. 
# Stupid code that works is the best.
#
fn=Fixedsys500c.otf
for i in $(find v* -name Fixedsys500c.otf); do
  wewant=$(dirname $i)
  symlink=$(echo $wewant | sed -E 's/[^\/]*\//..\//g')
  path=$(dirname $symlink)/fonts
  rm -r $wewant
  ln -s $path $wewant
done
