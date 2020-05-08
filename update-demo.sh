#!/bin/sh
#cp v4.4.1/site/docs/4.4/demo.html site/
cp v4.4.1/dist/css/bootstrap.css site/
cd site
git commit -am "updates"
git push origin HEAD
