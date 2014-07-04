#!/bin/bash
#
# Converts an image, replacing it in-place ... I know! dangerous right?

# first we take the image and convert it to our 16 color map without
# dithering

ascii() {
  tmp=`mktemp --suffix=png`
  convert $1 -remap img-ref/ega16-palette.png -resize 70x $tmp
  img2txt -W 30 -x 12.4 -y 20 -f tga $1 | convert tga:- $1
  rm $tmp
}

color16() {
  convert $1 -resize 120x - | convert - -filter box -dither FloydSteinberg -remap img-ref/ega16-palette.png -resize 360x $1
}
color16 $1
