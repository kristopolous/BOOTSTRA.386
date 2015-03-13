# Contributing to // BOOTSTRA.386 //

Looking to contribute something to BOOTSTRA.386?

Don't you worry! It's Easy!

**Basic idea**

Bootstra.386 is an attempt to make an accurate-as-possible replica of a DOS or Console style interface in the web-browser using the bootstrap templating engine.  

It's in this authors opinion that there are great rewards and pleasure from a faithful exercise of this and that there is a high level of satisfaction that is a direct result of the level of care and precision taken in so doing.

It gets to a point where it's indistinguishable from an early 90s DOS screen.  The mind defies the eyes, "how is this a web page?" as if some great orchestration of CSS magic had been performed in front of you ... truly exhilirating.  

I want all to feel this magic.  It's wonderful.

**Here's how you can help.**

## Issues

To file a bug you could 

 * file an issue on github.
 * hit up the mailing list.
 * send me an email.
 * hit me up on facebook.
 * mail me something with letters cut out from magazines.
 * knock on my door at 4am and place into my palm, a dutifully hand-written description with annotated diagrams.
 
Preferably, I like a screen shot and context. Here's an example of a good bug:

> The calculations for a span4 are done in a way that centering text doesn't follow the grid rules:
>
> <img src=http://i.imgur.com/hTiYHSB.png>


## CSS guidelines

  * All generated text must be vertically aligned.  The letters should start at the same horizontal offset down the page, as a grid
  * All generated text must be horizontally aligned.  Borders, margins, and paddings must be a function of the height of the font or
    the height of the font / 2 if you are doing some special ASCII-like thing.
  * Foreground colors can be any of the EGA 16 - background can only be the first 8.
  * Things like shadows, darken, lighten, border-radius, underline, italics, bold - none of this is allowed - it has to have been able to have been generated in a generic ANSI terminal - think IBM AT era.
  * Colors and spacing should be endogeneous.  That is to say that it should be based on something defined from the baseline variables.less.  There is only a few exceptions.  Generally speaking, things should be "@white" and not "#fff".  That one is obvious, but it also helps avoiding things like #F7F7F7 which appear all throughout regular bootstrap that look white-like, but actually are off enough that it destroys the magic.

## HTML guidelines

( * attractive intentional dust * )

## JS guidelines

### semicolons
use semi-colons, or don't - in fact, you can pad everything with semicolons.
I mean, if the browser takes it, then that's really fine by me. Want to submit code like this?

      ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;function (obj, cb) {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;;;// Try to return quickly if there's nothing to do.;;;
      ;;;;if (obj.length === 0) { return; };;;;;;;;;;;;;;;;;;;;
      ;;;;if (_.isArr(obj)) {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;;;;;obj.forEach(cb);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;;;} else {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;;;;;for( var key in obj ) {;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;;;;;;;cb(key, obj[key]);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;;;;;};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;;;};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

That's fine. Really. I know sed. don't worry.

### commas
whatever you want.  If  you want to write:

    if ( n === (  
                  (0,0)
                   ,7,  
                    v)
    ) {

I will consider you an awesome and creative human being and gladly accept your madness.

### spaces

Be creative, have fun.

### other styles

Different strokes ... have a good time - make the code awesome and fun to read - like a zine self-published at a co-op. 

be more awesomer!

## License

By contributing your code, you agree to license your contribution under the terms of the [APLv2](LICENSE)

