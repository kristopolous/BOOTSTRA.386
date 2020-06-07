#!/bin/sh
path=${1:-v4.4.1/site/docs/4.4/dist/fonts/ site/fonts/}
set -x 
for i in $path; do
  [ -d $i ] || mkdir -p $i
	./icon-gen.js $i
done
