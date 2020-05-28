#!/bin/sh
set -x 
for i in v4.4.1/site/docs/4.4/dist/css/fonts/ site/fonts/; do
	./icon-gen.js $i
done
