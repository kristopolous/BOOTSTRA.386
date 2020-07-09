# [See A Demo By Clicking Here](http://kristopolous.github.io/BOOTSTRA.386/)

### Download for your favorite bootstrap version with all the necessary JS and CSS to get started right away:

 * BOOTSTRA/386 ][ (from 2013) [144KB](https://github.com/kristopolous/BOOTSTRA.386/blob/master/bootstra.386-latest-v2.zip?raw=true)
 * BOOTSTRA/386 <i>iii</i> (from 2015) [423KB](https://github.com/kristopolous/BOOTSTRA.386/blob/master/shit-that-dont-work/bootstra.386-latest-v3.zip?raw=true)
 * BOOTSTRA/386 4 (2020 - in progress) - [demo](http://kristopolous.github.io/BOOTSTRA.386/demo.html) - [remaining issues](https://github.com/kristopolous/BOOTSTRA.386/issues/85) - [current build](https://github.com/kristopolous/BOOTSTRA.386/blob/master/bootstra.386-latest-v4.zip?raw=true)

Bootstrap/386 is a Twitter bootstrap v2/3<sup>1</sup>/4 theme to make webpages look like they are from the gentler, less distracting time of the 1980s. 

<a href=http://i.imgur.com/chWpJfb.jpg><img src=http://i.imgur.com/chWpJfbl.jpg></a>
<pre>
     ____  ____  ____  _____________________  ___    ____        __   _____ ____  _____
    / __ )/ __ \/ __ \/_  __/ ___/_  __/ __ \/   |  / __ \     _/_/  |__  /( __ )/ ___/
   / __  / / / / / / / / /  \__ \ / / / /_/ / /| | / /_/ /   _/_/     /_ &lt;/ __  / __ \ 
  / /_/ / /_/ / /_/ / / /  ___/ // / / _, _/ ___ |/ ____/  _/_/     ___/ / /_/ / /_/ / 
 /_____/\____/\____/ /_/  /____//_/ /_/ |_/_/  |_/_/      /_/      /____/\____/\____/  

      The Definitive All-in-one Graphical Tool-Kit for Micros and Terminals.  
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  There's a lot of micros and a lot of        this future has arrived.
  graphics modes. Today there's CGA,          
  Hercules, MDA, and EGA. And that's only     Use primitives like buttons, "toolbars"
  on the IBM-PC.                              and various "widgets" that will control
                                              your application. We handle rendering
  What about Tandy, CDC, Honeywell,           these abstractions on screen for you.
  DEC, and Zenith? That's a different          
  problem. How about the portables on         Think of your software in terms of
  tomorrows' horizon? Plan to ignore the      Windows, Icons, Menus, and Pull-Downs.
  Compaq-1? Your customers won't.             Even a WIMP can do it (TM).
                                              
  Such incompatibilities shouldn't be         That's the new paradigm of full-screen
  your concern. You focus on making           interactive applications. Give your
  great microcomputer applications. We        customers the rich interface that are
  focus on making your application work       easy to use and also, easy to create.
  on tomorrow's computer.                     Give yourself that one-leg up on your
                                              competition. GUI is Good. GUI is God.
  It's called a "Graphical User Interface"    
  They've been in development for years       Just look at how beautiful
  at places like XEROX Parc in Palo Alto      your application can look with
  and Carnegie Mellon. And now, finally       BOOTSTRAP/386:

</pre>

<img src=http://i.imgur.com/CZKrANV.png>


### Configuration

Javascript settings are set via a global `_386` object.

#### Animation
The loading animation can be configured through the following values:

  * fastLoad `[bool]` (default: false) - disable all animation.
  * onePass `[bool]` (default: false) - when set, this will disable the second flyby cursor
  * speedFactor `[float]` (default: 1.0) - This controls how fast the animation happens. Higher values mean faster animation.

Example:

    _386 = { onePass: true, speedFactor: 1.25 };

> Note: For the progressive animation to work you may need to set this stanza in your regular CSS: `body { visibility: hidden }`.

### Accomodating users without javascript

During a [2018 April fools' prank, a user pointed out that this theme doesn't work without javascript](https://www.reddit.com/r/linux/comments/88lump/manjaro_websites_april_1st_prank_is_the_default/dwlz0rv/). This is a valid concern, however it cannot be addressed without a user manually doing something
since this is just a bootstrap theme.

Luckily, HTML5 permits [noscript in the head section](https://stackoverflow.com/questions/218162/embedding-extra-styles-with-noscript/1332058#1332058) which means that style can be put in the noscript section.  This means that putting this in the header would permit people without JS on to see the site:

```
  <noscript>
    <style>
      body { visibility: visible }
    </style>
  </noscript>
```

### Distractions

While you're here, let me plug another fun project I have. This one includes a 1990's style "made for tv" infomercial I made. It's a better way to [search manpages called mansnip](https://github.com/kristopolous/mansnip). At least watch the youtube video, that took me days.

Let's make software fun again, remember those days? Oh you're too young? Well trust me, it used to be a blast! Let's do *that* again, it was a good time.

Also you can give me money, as little as $1/month ... Click on that heart sponsor thing at the top ... I'm a sponsorer as well!

### Bugs and Stuff

Check out the [contribution](https://github.com/kristopolous/BOOTSTRA.386/blob/master/CONTRIBUTING.md) doc - it's easy, I swear.

### Contact

 * [Mailing list](https://groups.google.com/forum/#!forum/bootstra-386)
 * Also try my github username on your messaging platform of choice 

### See [the wiki](https://github.com/kristopolous/BOOTSTRA.386/wiki/) for more documentation.

### Attributions

The font for the v4 is by VileR, used under Creative Commons Share-Alike, which [can be found at int10h.org](https://int10h.org/oldschool-pc-fonts/fontlist/).

--- 
Notes

[1] The v3 version kinda sucked. You don't want that, do you? Brooks' 2nd system effect, not just the musings of 1975.  Anyway, v4 is coming ...
