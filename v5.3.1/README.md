# BOOTSTRA/386 5.3.1

A fork of [Bootstrap 5.3.1](https://getbootstrap.com/docs/5.3/) that renders
everything on an 8x14 character grid in the 16 colors of an EGA card. It is
not a theme: Bootstrap's theming engine cannot flatten a framework down to
one font, one size and one weight, so the Sass itself is gutted and rebuilt.
The markup, the class names, the CSS variables and the JavaScript are all
stock Bootstrap, so anything written for 5.3 drops in.

```html
<link rel="stylesheet" href="dist/css/bootstrap.min.css">
<script src="dist/js/bootstrap.bundle.min.js"></script>
<script src="dist/js/bootstrap-386.js"></script>
```

`dist/fonts/` has to sit next to `dist/css/`: it holds the font and the glyph
images that checkboxes, selects, scrollbars and dithers are drawn with.

## What is different

The layout of the tree is Bootstrap's. `scss-ref/` is the untouched 5.3.1
Sass for comparison, `scss/` is this fork.

 * `scss/_variables.scss` and `scss/_utilities.scss` are generated from
   `scss-ref/` by `build/setvars.py` and `build/setutils.py`, so that every
   stock variable keeps existing. Edit the overrides in those scripts and run
   `npm run bootstra-vars`.
 * The grid primitives are `$space-width` (8px, one column), `$line-height`
   (14px, one row) and `$fp` (where the font lives). Spacing utilities put
   x on the column grid and y on the row grid.
 * `scss/mixins/_dos.scss` has the single line box border, the dialog drop
   shadow, the "pressed into its shadow" state and friends.
 * `scss/_dos.scss` has the loading animation, the block cursor, the
   scrollbars and the fixups that keep `.bg-*` utilities readable.
 * `dos-bright()` / `dos-dark()` walk a palette color up or down its
   intensity bit. `color-contrast()` works and only ever answers black or
   white.
 * `build/icon-gen.py` renders strings of the font to SVG with fontTools.
   `[X]`, `( )`, `█░░`, `▼`, `▒` and so on come from there.
 * `data-bs-theme="dark"` swaps the blue screen for a black one.
 * `js/dos.js` is the loading animation and `_386` helpers, now without
   jQuery. It is copied to `dist/js/bootstrap-386.js`.

Things that do not exist in text mode keep their class names and do
nothing: `.rounded-*`, `.shadow-*`, `.fw-*`, `.fst-italic`, `.fs-*`,
`.lh-*`, `.opacity-*`.

The look follows the v2.3.1 BOOTSTRA.386: headings are told apart by
decoration instead of size (`h1` is a cyan banner, `h2` is centered,
`h3` is `>>> flanked <<<`, `h4` is magenta), a button is `< a word >` on
a gray block with a black drop shadow and pushes into the shadow when
pressed, navs and navbars are gray menu bars with red hot keys, links
are yellow and inline code is white on black. `<strong>` is white,
`<em>` is `/slashed/`. A button leaves the row below it empty for its
shadow; inside navbars, input groups and dialog footers it does not.

## Configuration

Settings go in a global `_386` object declared before `bootstrap-386.js`:

```html
<script>_386 = { fastLoad: false, onePass: false, speedFactor: 1.0 }</script>
```

 * `fastLoad` skips the loading animation.
 * `onePass` skips the second, cursor only, pass.
 * `speedFactor` is a multiplier; higher is faster.

For the full screen paint-in the page has to start out hidden. Without it
only the cursor fly-by runs:

```html
<noscript><style>body { visibility: visible }</style></noscript>
<style>body { visibility: hidden }</style>
```

`_386.magicCursor()` swaps the mouse pointer for a block that snaps to the
grid, `_386.scrollLock()` keeps the page scrolled in whole rows and
`_386.centerNudger()` moves odd length centered text onto the grid.

## Building

```
npm install
npm run css        # compile, prefix, rtl, minify, then copy font + glyphs + js into dist/
npm run docs-build # the docs site into _site/ (needs the extended hugo from node_modules)
```

`npm run docs-serve` runs hugo bound to `0.0.0.0:9001`. The docs site is
the stock Hugo site with its chrome rewritten (`site/layouts/`,
`site/assets/scss/`); search and ads are gone. The JavaScript plugins
are stock Bootstrap and are not rebuilt here; `dist/js/bootstrap.bundle.js`
is the upstream 5.3.1 build.

The scss is compiled with `--quiet-deps`; stock 5.3.1 still uses `/`
division and newer sass versions warn about it.
