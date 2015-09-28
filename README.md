### Download the [latest zip file](https://github.com/kristopolous/BOOTSTRA.386/blob/master/bootstra.386-latest-v2.zip?raw=true) with all the necessary JS and CSS to get started right away.

Bootstrap/386 is a [Twitter bootstrap v2/v3](http://twitter.github.io/bootstrap/) theme to make webpages look like they are from the 1980s. 
A bootstrap v3 version is in the works and this copy will be changed as things progress (July 5 2014).
 
 * March 5 2015: started. It's not as faithful to DOS as v2 is yet --- but I'm working on it.
 * March 8 2015: preliminary build: [zip file](https://github.com/kristopolous/BOOTSTRA.386/blob/master/bootstra.386-latest-v3.zip?raw=true)
 * March 12 2015: Beta testing open: [follow here](https://github.com/kristopolous/BOOTSTRA.386/issues/7)
 * <s>March 13 2015: pre1 tagged. [please use this commit id](https://github.com/kristopolous/BOOTSTRA.386/tree/bs3-pre1) for bug reporting.</s>
 * <s>April 19 2015: pre2 tagged. [use this](https://github.com/kristopolous/BOOTSTRA.386/tree/bs3-pre2)</s>
 * Sept 27 2015: Fixed a number of small things. Just use v3 or v2 --- they're both fine.

> Psstt! I'm also super excited about my new project, a DVR for radio - a free open source service to Get MP3s of any radio show - [at any time, right now](https://indycast.net).

# [Demo Link](http://kristopolous.github.io/BOOTSTRA.386/)

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

### Bugs and Stuff

Check out the [contribution](https://github.com/kristopolous/BOOTSTRA.386/blob/master/CONTRIBUTING.md) doc - it's easy, I swear.

### Contact

 * [Mailing list](https://groups.google.com/forum/#!forum/bootstra-386)
 * Also try my github username on your messaging platform of choice 

### See [the wiki](https://github.com/kristopolous/BOOTSTRA.386/wiki/) for more documentation.
