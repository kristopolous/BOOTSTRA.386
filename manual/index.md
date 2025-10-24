## Preface

When the headquarters in Boston tasked us with a full-screen interface that supported pointing devices connected through any bus, full color displays, and to work on everything from palmtops to mainframes, and then to have it all fit on a 1.44MB 3.5" floppy, we knew we had our work cut out for us.

Luckily we got together our global team of software developers with resumes from Ashton-Tate to Quarterdeck and everywhere in between was up for the challenge.

This is our story.

## Planning Party

When Nolan Bushnell sold Atari to start Chuck-E-Cheese a few years ago, we joked he was just going lower in the stack - providing the fuel to the fire on Sandhill Road. At least fuel to a team of ambitious engineers who I was eating late night pizza in Menlo Park on a Saturday night around New Year with.

We were talking about the future of computing and how it was going to change the office of the 1990s. We had been passing around this book, Smalltalk-80, describing some personal office computers by Xerox, unrelated to their 500 series minicomputers, to be used by just a single non-technical person to do work in a way that obsoletes the mail room, switchboard, and even the secretary.

Xerox had even found a way to make these computers talk to each other similar to how Kahn, Kleinrock and Cerf did with their ARPA project at UCLA but without the giant BBN machine. Instead it was an add-on board - Metcalfe, the inventor, called it Ethernet.

As we ate our pizza, Gilda, a gifted Engineer from Stanford, pointed out that this was only going to be useful if non-technical people, without reading manuals, were able to effectively use the computers.

"This is a monumental task", she says, while munching on a slice of pizza, "think about the desk calculator. We can't effectively explain the memory and percent buttons to people, how do you expect those same people to typeset a sales report by themselves?"

The question went unanswered. Xerox's machines sold about as well as cars from South Korea.  People would flip over a mouse and try to roll the ball with their hands like it's one of Bushnell's video games.

Hasegawa, our designer, who is ex-Omron and Matsushita was busy drawing on a napkin. Our primary target is the office and a simplification of common tasks. Recently he had been trying to replace the schedule-book. 

He opens up the napkin and start drawing flow diagrams and the rest of us look over. "In Japanese", he says "the days of the week are single characters. It's a nice shorthand." There's a key up in the left-hand side that says "Monday - M, Tuesday - T, Wednesday - W, tHursday - H, Friday - F, Saturday - S, sUnday - U"

"See you press one of the letters and then by default that's for all those days. Then you can follow it by a number for the time. So you can do "MWF1000" for 10 AM. Then you can enter details on the next screen..."

"OK so what", Orion strokes his beard, looking at it skeptically, "it's just data entry without a purpose. How does it make your life easier?"

"Well" Hasegawa breathes in, "You can save your schedule to a disk. Then pass it to your colleagues, they can import your schedule, look for conflicts, know your availability..."

Orion tips his head in contemplation with a face that reads "maybe". The team looked back at me and I also thought about it for a moment. 

"Wouldn't we see something like this already?" I pause, "I mean at a traditional office. You could put a large communal calendar on a corkboard and each team could pencil in their meetings and then someone could refer to the common calendar for scheduling." I peered at Hasegawa's diagram, "what I'm trying to say is, we don't see the communal calendar in the wild so you're proposing a new kind of behavior. What makes you think people will do in the digital world something they couldn't do easier in the analog one?"

This is one of my most common analytical tools when I'm trying to assess product viability in the marketplace. Selling a product where people do what they are already doing, but on a computer is a much easier sale than asking them to do a new thing on a computer that they've never done before.

But like most of our Saturday night conversations this disappeared into the ether as fever dreams of future imaginaries fueled by fantasy and confusion.

## On the road
The drive on Sunday to Vegas was a bit much for the 1973 Winnebago. It was the only vehicle we could rent that could take a power. Going to Comdex is kinda like camping. OK, not really, we had a hotel. It's actually a crucial convention for the tech industry. If you miss it, then you might as well just go out of business.

It's the one time a year that companies are foolish enough to demo unannounced products and on top of that, send the actual engineers that are working on them. They get exactly zero training on what not to say. If you showered them with enough attention, they'd probably give you their SYSOP password to show how clever they were.

Among engineers the only skill required for spy-craft is smiles and flattery. The biggest bets in Vegas that week are placed on the floor of the Convention Center.

The back of the Winnebago has Hasegawa, Orion, Gilda and a fourth member, Thomas, sitting around 3 microcomputers as I drive down the I-5 past fields of food and cows. So many fragrant cows. Almost makes me want to go Vegetarian.

If you haven't had the chance to use a computer yet, let me introduce you to the strangeness. You get a 40 pound box that you place on a table and plug into a wall. Then you flip a switch and it gets increasingly noisy until the box sounds like it needs muffler. The machine chirps a beep as the screen or television you plugged into turns on and, usually, you see an incrementing number in the top left. It will go up into the hundreds in increments of 16. This checks what is known as volatile memory, it's what the computer needs to shuffle things around in its brain.

A top of the line computer these days will go up to 640, which is about the size in computer terms of a paperback novel. This takes minutes. Enough for you to make a cup of coffee. 

And then the diskette drives make a disturbing crunching sound as their lights go red, looking to see if anything is in there. If it's not, then the default system loads or maybe you have to have something in there to start.  Depends on the computer.

Regardless, this is eventually followed by a prompt which consists of a series of characters followed by a blinking rectangle called a cursor.  Now it's your turn: you instruct the computer what to do through terse languages inside of that default software, which has names like "CP/M" and "MS-DOS". Yes, it's all caps with symbols in between them. For the first name you just say the letters and omit the slash. The second name is not a fair maiden named Ms. Dos nor do you say all the letters. Instead the "MS" is letters and the "DOS" part rhymes with loss.

These machines, costing thousands of dollars each, are, eventually, supposed to replace the back-office and be orchestrated by the general public.

Everyone assumes this will be inevitable and people will do all kinds of things on the microcomputer: look up recipes, casually chat with friends, maybe even fall in love or store home videos and their record collection. All this and more on the black screen with the blinking rectangle.

As I cut across to Bakersfield I adjust the rear view mirror to see the young engineers fully bought into this implausible future. But little did I know, that in 24 hours, a single demo on the floor of the Las Vegas Convention center would make me believe it as well.

## Visi-on Vision

Comdex isn't open to the public but that hasn't stopped it from becoming one of the largest events in Vegas. Wyse, Tandy, Olivetti, all have massive labyrinthian displays. We break up the team to start investigating.

Gilda loops back up with me first: "DEC has a bunch of their new Rainbows on display. Bad command or file name". That's a bit of shop talk.

Let's back up for a second. In order to understand things you need to know a bit more about these computers. The terse language that you type while running the MS-DOS software can generate a variety of common errors. Here's the glossary:

 * "Abort, Retry, Fail?"
   * *MS-DOS*: When the computer expects to read data from a computer disk but is unable to (perhaps the disk got damaged or was removed).
   * *To Us*: This is the primary business question. Should we abort the effort and pivot to something else, retry with more resources, or admit failure and roll it up. 

 * "Disk not ready in Drive A"
   * *MS-DOS*: This is the first part of the two line error with "Abort, Retry, Fail?", nominally to inform the user what they are supposed to do.
   * *To Us*: The software isn't ready yet or is full of bugs. If the software glitches, this is usually how we describe it.

 * "Bad command or file name"
   * *MS-DOS*: You tried to issue a command in a way the computer does not understand. Usually this happens through a typo. Either way the computer balks at you with this message.
   * *To Us*: The product doesn't work. It doesn't feel right or engage the user in a meaningful way. It could also mean it's too slow or exorbitantly expensive. Regardless, it lacks viability.

 * "Press any key to continue"
   * *MS-DOS*: The computer has performed an operation or is expecting something and is waiting for the user to engage with it before continuing. 
   * *To Us*: It's a call for action, to end conversation, adjourn the meeting and do something else, often something that is obvious and needs attention. 

It's worth noting these aphorisms are mostly negative. We don't really have any for success. I think there's a tendency to break bad news with a bit of humor in a hope that it lands lighter.  I don't know if it works, but we do it anyway.

I respond to Gilda, "it doesn't look like they're going to PDP IBM again" - a reference to their gang-buster microcomputer in the 1960s that made them successful. All their efforts in the world of microcomputers have felt like a circus without substance.

Just at that moment, Hasegawa comes running over to me catching his breath. He's still too far away for me to hear him but has he gets closer I hear "they did it, they did it". He's flustered, surprised, almost nervous. Gilda and I give him a confused look. "They're called VisiCorp", come look. 

We follow him through the maze of stalls and see a large crowd around a number of IBM PCs. I'm a fairly tall guy so I peak over and see a black 3 button mouse hooked up to a screen displaying a cascade of black boxes in a monochrome graphics mode. In one of the boxes is a bar graph and another looks like a Lotus-123 screen, no - that's their own spreadsheet. 

The employee clicks on one of the boxes with a region hidden and it comes to the front, almost as if it's a stack of applications. Inside this box is a number of words in a horizontal strip. The employee moves the mouse over the item labeled "Italics" and clicks on it. No hotkeys, no Wordperfect function strip. And then the text redraws as slanted italics. 

People applaud like they just saw Harry Houdini break out of a safe. No jargon, no manuals. You just point and click. I peer down the aisle and see Orion at the Commodore booth looking at some new portables and motion him to come over.  Hasegawa's mouth continues to be open in shock. The employee changes a value in the spreadsheet and then the bar-graph redraws itself automatically. It's stunning.

He moves the mouse arrow over to the word "Print" and clicks the mouse button and then a few moments later, an Okidata printer head starts moving and produces exactly what we see on screen. "Holy shit" Orion blurts out, "can I buy that here?"

The answer was irrelevant. Everyone that day was sold. We saw the future. It was like the Xerox experience but on a microcomputer. This is what Boston was waving their hands about. Nobody had known what it looked like.

Hasegawa takes his camera and puts in a new roll of film and starts snapping pictures of the demo. I look at him, "I'm sure they won't mind" he says.

The rest of the day we try not to look too auspicious as we hang around the VisiCorp booth like groupies. Thomas, who comes from 15 years of ERP software, fills up his entire notebook full of diagrams and pitman shorthand which I assure you, none of us but him can read.

Closing time hits and by then I have buttered up the VisiCorp engineers through flattery and got more details on the implementation than I feel at liberty to disclose. I even try to buy them dinner but am rebuffed.

As we hop into the Winnebago to go off and find some place to eat, my team can't stop talking as they  exchange notes. Orion looks around and said "Press any to continue?"

I look back and we are at a consensus. We don't need to stay in Vegas another day. Forget the food, we got what we came for. It's time to go back to Menlo Park.

## Menlo Return 

I was tired. Probably too tired for the all night drive back through the desert and up the I-5. The Winnebago had two beds and luckily Hasegawa was up for trading off on the drive. I can't sleep though. I hear everyone talking as my head fills with anxiety.

We blaze past Barstow as I see a sky full of stars out the back window. "We can't just clone them" Thomas gripes as he looks over his notes. "We need to be finishing races they're still lacing up for." 

"Yeah sure, I mean sure" Gilda agrees, "but are we really going to get into the game with Wordstar and Multimate? Isn't that a crowded marketplace? And is that really our product?"

Orion sips some cold green tea he's been nursing since Vegas as he lays on the other mattress, "What we really need to be is a graphical DOS. Like swap out all the services, clone them, but do so graphically. The applications are stupid, they are just function calling, we just make those functions do something else. Call us instead." 

"Yea but to do what?" Gilda asks rubbing her temples. "I mean look, if WordPerfect is looking for like Alt-F2, we can't just translate that into a mouse or display a box on the screen, every application is different in how that exists internally. The applications themselves have to be aware of the difference in a way in order to have the affordances."

Hasegawa shouts back "Hey, I need to stop for gas. But also I've got something to say". As the Winnebago slides off the highway in a town called Tehachapi that closes at 8pm except for a single Texaco and a Denny's, I give up on sleeping. Maybe we should go get some food after all. 

I pull myself out of bed, "Mind if I buy you Denny's?" It's always nice not to have to ask twice. 

Monday night at Denny's in Tehachapi is downright pleasant. It was us, some long haul truckers and a couple that looks like they'd been there since the WPA during the new deal. Hasegawa asks for extra napkins and a set of crayons. The waitress just brings him pen and paper. Nice place.

I order eggs and hash browns. I am still a bit nauseous from the smell of cows from the I-5 less than 24 hours ago. "OK so here's the deal" I start. "We've got a runway until Q4, latest. We need a deliverable by then and it has to be compelling. Boston has more money than patience so I've got money but not time to burn. All this talk about rewriting DOS, it's too ambitious, we can't do it by then. We need something else."

Hasegawa mumbles "toolkit" loud enough for Thomas to hear. "A tool-kit?" I say. "Yes, SDK. We need to have an easy way for developers to plug into our GUI. Maybe it can be a fall-back, you don't have to use us. So the customer they don't need our tool, they can still use the program without us."

"But we enhance the experience" I finish. "Yes, the worst experience is the current paradigm"

Gilda looks down, "well we need something more concrete than that" 

I respond, "We have time. Not much. But we have some. At least enough to finish this food". 

And so we did. And then I slept for real and woke up Tuesday morning in our office parking lot in the back of the Winnebago in the chilly 7am January weather of Northern California. Everyone else had gone home and let me sleep, very kind of them. I suppose I'm dressed well enough for the office. It was time to get to work.

## Version 0.0

## The problem with Thomas 

## Boston Tea Party

## The Hail Mary

Everyone has read mythical man-month, the idea that adding another developer too late in the game actually makes the product take longer.  The problem is it's March and we're basically right where we were at in the Tehachapi Denny's - not willing to clone VisiCorp and trying to move ahead. And now we not only have the Apple Lisa to deal with but thanks to Thomas we know that Microsoft is working on a graphical system as well. I'm sure IBM and Digital Research is in the game as well. 

I feel asphyxiated before taking the first breath. I lean back in my chair. On the edge of my desk sit a pile of resumes. We get a trickle in constantly regardless of whether we have a job posted and it's my job to go through them and I do, sometimes, do my job on occasion. 

Going through resumes is hard. The method I've landed on is "do I want to talk to this person?". I'm not really interested if they are "good at the job" in as much as I'm interested in can they help define the space. Orion's "resume", for instance, was just a hand written note from Steve Wozniak, "Hire Orion. Woz".

It worked. That's all he needed. 

As I shuffle through the pile I see another unconventional one that catches my eye by a guy named "Claude". It's strange, just a letter and a phone number, no credentials, no work history, nothing else listed:

  Hey Chuck,

  I know you're leaning back in your chair reading this trying to get yourself out of a jam. Nobody reads resumes unless
  they need somebody. I also know there's a lot of sharks in the waters your swimming in. IBM, Apple, Microsoft. How will 
  you break ahead and how can I help? 

  Let me convince you with a little innovation I call marching ants. You have a selection area and you could just draw a box.
  
  The problem is you can't choose white because some things are black and you can't choose black because some things are white and inverting things can also be hard to see if the area is complex enough.

  So, what about a light show? Alternate the pixels and then cycle them, providing the illusion of an animated rectangle to delineate a selection like ants marching.

  The code is easy. Your team probably has it written, they just need to call it. 

  There's plenty more where that came from. Give me a call.
  ~Claude

It was like an alien in a UFO had just landed in my backyard. I have no idea who he is but I've got the money and project is on its last legs with respect to time. So why not?

I picked up the phone and dialed the number.


---

We ask the candidate what his idea would look like. 

"OK, so let's redesign WordStar in your vision. Show us what these pull-downs will look like", I say. "Just get up and draw it."

The candidate looks around the room almost as if asking permission to get up and then pushes his chair back and walks over to the chalkboard. He draws an oblong horizontal rectangle. Inside it are the words "File" "Edit" "View" "Windows" and "Help". Then he scratches a rectangle around the "File" and says "Alright the user points the mouse at this and then a rectangle below appears, we call it a menu" as he places the words "New", "Open", "Open Recent", "Save", "Save As", and "Exit".

Gilda gets up and walks up to him as she picks up her chalk. "Interesting idea, but here's the problems." she doesn't even look at the candidate as she starts pressing dots on the chalkboard, "see, File is a noun, Edit and View are verbs. You've just gone from Noun-Verb in the first column to Verb-Noun in the second. And also, why is exiting the program in the File's command box? Who would look for it there? Why not under the Windows command box?"

The candidate looks back at the board and mumbles, "I ... I never thought of that..."

Orion gets up from his chair revealing his sandals and shorts as walks on over as well. "Sorry, but here's another. So you've split "Save" and "Save As" and "Open" and "Open Recent", why not just put that distinction into a further box? Also one distinction is temporal and the other is canonical."

The candidate turns back and stares at us in utter bafflement, almost as if his world is shattered. 

Gilda shoots back "And what happens when the person clicks on Edit". The candidate innocently stammers, "that's where you can manipulate the clipboard buffer and do things like format the thing you are working on."

The room full of engineers shake their head in disbelief. I was breaking out in a cold sweat, nervous that inviting such a crackpot in would ruin my standing with my team.

The palpable silence breaks by a door-knock as the lead sales rep, Michael tries to pull me away for a call. 

It strikes me that this interview was over but I get an audacious, and perhaps cruel idea to salvage my reputation. I say "Hey Mike, I'm wondering if you can take a few seconds and tell me what you see on the chalkboard". 

Now Mike comes from 20 years at Woolworth's, he's en excellent sales guy but really doesn't know much about computers. He's been the "average-user" guinea pig before and has become famous for splashing cold water on the hottest idea.

"Well", Michael starts scratching his head, "it looks like WordStar. That's a nice hierarchy. I hope you're putting formatting and clipboard stuff in the Edit box. Also, that separation in the box under File clears everything up. It's the stuff I want to do with the thing. Combining the vertical and the horizontal is very convenient, I like how I can continue to see everything. Add Print in there and it's perfect." He chuckles a bit in bemusement, "This is the first thing I've seen you guys do that makes sense. Anyway Chuck, I'll see you in 5." and he closes the door. 

Everyone's mouth is open in shock as the only sound I hear is Michael's squeaky shoes stepping down the carpeted hallway walking away.

I shrug my shoulders and look around the room, "Alright, fuck it." I pause and look for negative reaction. Seeing none, I continue "I guess you're hired. See you Monday 9 am. You go by Claude right?"

"Yeah."

Orion murmurs in disbelief, "We should get the security guard in here and see if that drawing makes sense to her as well".

## Claude's world
Everyone thinks time travel is going to be glamorous but really, you go back to a time before you were born as nobody. 

No friends, bank account, connections, place to live... 

March 1983 wasn't really a time of significance. It's hard to explain but not all times are equally accessible. There's a topology and the distances are very non-euclidean. It's just as uneven and entropic as everything else this universe creates. For whatever reason, the next easily accessible date that requires under 50KW and wasn't millions of years ago is March 1983, 25 years before I was born. I have about a 5 minute window at 3:32am tonight to catch it otherwise I will be sent off to somewhere in the Proterozoic.

The best way to travel isn't to get vintage currency, that's expensive. What I do is purchase jewelry at estate sales. Then I pawn it off. At least that way I'll have a few hundred bucks. 

But that money and the rest of the stuff in my Samsonite really doesn't last long. My chance to return won't open up for 6 months and this money will last about 2 weeks if I'm stingy.

What I need is a job. 

Silicon Valley seems obvious since I already knew the future and they will just hire anyone off the street if they sound like they can hack it. This sounds like it would be easy. I had always admired BOOTSTRA Technologies as building revolutionary products in the mid-1980s ever since reading Tracy Kidder's masterpiece on its development.

I wanted to be there, on those team, in those rooms, involved in those conversations. The artistry, audacity, and irreverence of the early computing revolution before it became the oppressive taste-maker has always captured my interest.

I had forgotten that revolutionaries are controversial at best and being dismissed is the more common response. There was only one Steve Jobs and he ain't me. I was about to learn that the hard way, or maybe, not at all. Regardless, I'm up for the challenge.

The cheap motel I'm staying in is going to be torn down after the Loma Linda earthquake and replaced with a mall. That will then get torn down and replaced with a 5-over-1 in 2028. Right now, however, it's $19.99/night. 1983 prices, gotta love them.

After landing the job I had a weekend to kill. It's weird to walk around the place you grew up in and see a bunch of things you don't recognize. My favorite third-wave coffee house is a music store with the name "Sam Goody", in the distance all I see is smog and the most exotic foreign food I can find is sushi.

There's all these details nobody talks about and you don't realize until you're there: people purchasing newspapers from newsstands or cigarette vending machines in diners with hazes of smoke on the ceilings. Even the cars. You think you know what the cars are going to be like.  Did you know that not all cars had side-view mirrors on both sides? There's a bunch without them. And they're noisy.

Even the lights are different. They have harsh bright glows and buzzing sounds, flickering like the lights in some kind of video game. And then there's the lack of phones of course. I've got mine back at the hotel room, sure, along with my modern laptop and USB power brick ... I wasn't going to travel completely empty-handed.

But it's not just phones, it's screens in general. Small CRTs flicker everywhere with washed out color and have this high pitched squeal when you turn them on. 50 years ago can feel so familiar yet at the same time, so foreign. The NES version of Super Mario Bros is still 18 months in the future.


---


Knowing history doesn't give you the ability to change the future, only to become needlessly invested in the futility of your ability to affect it.

---

"What the hell is this thing?", I scoffed, "two terabytes of storage, on chip the size of my fingernail?". I looked at the convincing plastic rectangle festooned with logos and claiming "2TB" by some imaginary company named "Lenovo". Underneath it was bespeckled with tiny yellow colored teeth. I guess this prankster thought they could just slide it in like an Atari 2600 cartridge. Into what I have no idea. Getting 2 kilobytes in this form-factor would have been an accomplishment. It felt as fragile as a tortilla chip. 


 (1) the awkward monday, (2) the explanation of the future like it's obvious. A manual pretotyping. They make cardboard cutouts and index cards and then non technical people come in with pointer sticks to emulate a mouse and try to accomplish tasks as they go back and realize "OK we need pillboxes" or whatever bootstrap feature. (3) the storm of companies like Microsoft and apple working on their own version. (4) the discovery of espionage - a Microsoft agent has been in their midst (5) the customer feedback "we don't need this yet" "I'm not doing these things with my computer right now" (6) the boss discovering the smart phone and the microsd card. (7) Claude presenting a speculative future world holding his dead cell phone and saying "these will be common in the future" and laying out the world of the 2020s to the perplexing awe of the coworkers and saying he uses these to "imagine tomorrow" and (8) his exit back to the future.

--


It was time for me to go. Literally. In 6 months, I built BOOTSTRA/386 and now it my window to leave. I had heard about the legendary Claude with no last name who had brought the microcomputer to the masses and really, during that interview I just used the name as a joke. 

That's always the problem with time-travel, did I become my future reality? Was it inevitable or did I build it? I've entered the grandfather paradox of technology. Maybe putting "Quit" in the File drop down is actually a bad idea. Who knows? It's too late now. The sands of time sweep through all our fingers the same. Windows close before we realize they were ever open and opportunities enter the world of imagined counterfactuals. 

Our negotiation with time is the most powerful relationship we ostensibly have control over. And yet, it will always have control over us.

I came empty-handed and now I will leave them empty, a mystery of the ages. We were always going to be eclipsed by the Macintosh. That was unavoidable. Building the most legendary forgotten empire with all but a floppy disk and this story to show are my two vast and trunkless legs of stones in the desert. For a glimmer of the past, I was Ozymandias, king of kings.

But now, I look on my own works, however mighty, and all they fill me with is despair.

I set my time machine for 2025 and I pull the lever.


<img width="768" height="512" alt="group" src="https://github.com/user-attachments/assets/35fe878b-2f64-47df-8859-ff2708011ec5" />
From Left to Right: Claude, Hasagawa, Orion, Gilda, and Chuck



<img width="495" height="480" alt="Untitled" src="https://github.com/user-attachments/assets/fd98acbc-f325-43c6-b852-f1f49a37f5fe" />
Here's the now famous September 1983 'Claude-box' demo photo by Hasegawa, originally included in his 1991 text "Pen Computing Design" which coined multi-touch rotation, pinch-zooming, and gestural swipes.

---


"Abort, Retry, Fail?" isn't just a DOS-error, it's the core contention of our business.
shock-a-roo
sharaku
Sincerely,
C:\> aude


