# Contributing to // BOOTSTRA.386 //

Looking to contribute something to BOOTSTRA.386?

Don't you worry! It's a whole lot fucking easier than the laundry list of rules for contributing to Bootstrap!

**Here's how you can help.**

## Reporting issues

File a bug, send me an email, hit me up on facebook, send me something in the mail with letters cut out from magazines ... I don't care ... I'll address your concerns if I can.

Preferably, I like a screen shot and context. Here's an example of a good bug:

> The calculations for a span4 are done in a way that centering text doesn't follow the grid rules:
>
> <img src=http://i.imgur.com/hTiYHSB.png>


## Key branches

- `master` is the latest, deployed version.
- `gh-pages` is the hosted docs (not to be used for pull requests).


## Notes on the repo

Bootstrap sez: As of v2.0.0, Bootstrap's documentation is powered by Mustache templates and built via `make` before each commit and release. This was done to enable internationalization (translation) in a future release by uploading our strings to the [Twitter Translation Center](http://translate.twttr.com/). Any edits to the docs should be first done in the Mustache files and then recompiled into the HTML.

Alright, I'm not going to change that I guess.


## Pull requests

You know what? bootstrap has all these rules. I assume you know what you are doing. I mean for the love of God, you are Reading Documentation - who does that now? really? Exactly. Trust me, you're fine.

## Coding standards: CSS

Bootstrap had all these rules here - they don't matter. These do:

  * All generated text must be vertically aligned.  The letters should start at the same horizontal offset down the page, as a grid
  * All generated text must be horizontally aligned.  Borders, margins, and paddings must be a function of the height of the font or
    the height of the font / 2 if you are doing some special ASCII-like thing.
  * Foreground colors can be any of the EGA 16 - background can only be the first 8.
  * Things like shadows, darken, lighten, border-radius, underline, italics, bold - none of this is allowed - it has to have been able to have been generated in a generic ANSI terminal - think IBM AT era.

## Coding standards: HTML

- Whatever kind of whitespace you want
- Whatever kind of quotes you want
- It can be indented like the IOCCC for all I care.
- Use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags) or don't ... the browser will figure it out - really.


## Coding standards: JS

Bootstrap sez: 
- No semicolons
- Comma first
- 2 spaces (no tabs)
- strict mode
- "Attractive"

I say:
### semicolons
Ok, look, use semi-colons, or don't - in fact, you can pad everything with semicolons for all I care.  
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

### strict mode 

eh, don't care.

### Attractive

Different strokes ... have a good time - make the code awesome and fun to read.


## License

By contributing your code, you agree to license your contribution under the terms of the APLv2: https://github.com/twitter/bootstrap/blob/master/LICENSE

