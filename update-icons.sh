#!/bin/sh
path=${1:-v4.4.1/site/docs/4.4/dist/css/fonts/ site/fonts/}
set -x 
for i in $path; do
	./icon-gen.js $i
done
