## Preface

When the headquarters in Boston tasked us with a full-screen interface that supported pointing devices connected through any bus, full color displays, and to work on everything from palmtops to mainframes, and then to have it all fit on a 1.44MB 3.5" floppy, we knew we had our work cut out for us.

Luckily we got together our global team of software developers with resumes from Ashton-Tate to Quarterdeck and everywhere in between was up for the challenge.

This is our story.

## Planning Party

When Nolan Bushnell sold Atari to start Chuck-E-Cheese a few years ago, we joked he was just going lower in the stack - providing the fuel to the fire on Sandhill Road. At least fuel to a team of kids, the oldest of which was 24, who I was eating late night pizza in Menlo Park on a Friday in early January.

We were talking about the future of computing and how it was going to change the office of the 1990s. We had been passing around this book, Smalltalk-80, describing some personal office computers by Xerox, unrelated to their 500 series minicomputers, to be used by just a single non-technical person to do work in a way that obsoletes the mail room, switchboard, and even the secretary.

Xerox had even found a way to make these computers talk to each other similar to how Kahn, Kleinrock and Cerf did with their ARPA project at UCLA but without the giant BBN machine. Instead it was an add-on board - Metcalfe, the inventor, called it Ethernet.

As we ate our pizza, Gilda, a gifted Engineer from Stanford, pointed out that this was only going to be useful if non-technical people, without reading manuals, were able to effectively use the computers.

"This is a monumental task", she says, while munching on a slice of pizza, "think about the desk calculator. We can't effecively explain the memory and percent buttons to people, how do you expect those same people to typeset a sales report by themselves?"

The question went unanswered. Xerox's machines sold about as well as cars from South Korea.  People would flip over a mouse and try to roll the ball with their hands like it's one of Bushnell's video games.

Hasegawa, our designer, who is ex-Omron and Matsushita was busy drawing on a napkin. Our primary target is the office and a simplification of common tasks. Recently he had been trying to replace the schedulebook. 

He opens up the napkin and start drawing flow diagrams and the rest of us look over. "In Japanese", he says "the days of the week are single characters. It's a nice shorthand." There's a key up in the left-hand side that says

  Monday - M
  Tuesday - T
  Wednesday - W
  tHursday - H
  Friday - F
  Saturday - S
  sUnday - U

"See you press one of the letters and then by default that's for all those days. Then you can follow it by a number for the time. So you can do "MWF1000" for 10 AM. Then you can enter details on the next screen..."

"Ok so what", Orion strokes his beard, looking at it "it's just data entry without a purpose. How does it make your life easier?"

"Well" Hasegawa breathes in, "You can save your schedule to a disk. Then pass it to your colleagues, they can import your schedule, look for conflicts, know your availability..."

The team looked back at me and I thought about it for a moment. "Wouldn't we see something like this already?" I paused for a second, "You could put a large communal calendar on a corkboard and each team could pencil in their meetings and then someone could refer to the common calendar for scheduling." I peered at Hasegawa's diagram, "what I'm trying to say is, we don't see this so you're proposing a new kind of behavior. What makes you think people will do in the digital world something they couldn't do easier in the analog one?"

This is one of the most vexxing questions I have. Doing what they are already doing, but on a computer is a much better pitch than asking them to do a new thing on a computer that they've never done before.

Like most conversations this dissappeared into the ether as fever dreams of future imaginaries fueled by fantasy and confusion.

## On the road

The drive on Sunday to Vegas was a bit much for the 1973 Winnebego. It was the only vehicle we could rent that we could plug a power strip into. Going to Comdex is kinda like camping. Ok, not really. It's actually crucial. If you miss it, then you might as well just go out of business.

It's the one time a year that companies are foolish enough to demo unannouced products and on top of that, send the actual engineers that are working on them. They get exactly zero training on what not to say. If you showered them with enough attention, they'd probably give you their SYSOP password to show how clever they were.

Among engineers the only skill required for spycraft is smiles and flattery.

The back of the Winnebego has Hasegawa, Orion, Gilda and a fourth member, Thomas, sitting around 3 microcomputers as I drive down the I-5 past fields of food and cows. So many fragrant cows. Almost makes me want to go Vegetarian.

If you haven't had the chance to use a computer yet, let me introduce you to the strangeness. You get a 40 pound box that you place on a table and plug into a wall. Then you flip a switch and the it gets increasingly noisy until the box sounds like it needs muffler. The machine chirps a beep as the screen or television you plugged into turns on and, usually, you see an incrementing number in the top left. It will go up into the hundreds in increments of 16. This checks what is known as volatile memory, it's what the computer needs to shuffle things around in its brain.

A top of the line computer these days will go up to 640, which is about the size in computer terms, of a paperback novel. This takes minutes. Enough for you to make a cup of coffee. 

And then the diskette drives make a disturbing crunching sound as their lights go red, looking to see if anything is in there. If it's not, then the default system loads. 

Regardless of the computer this is eventually a prompt which consists of a series of characters followed by a blinking rectangle called a cursor.  Now it's your turn: you instruct the computer what to do through terse languages inside of the default software with names like "CP/M" and "MS-DOS". Yes, it's all caps with characters in between them. For the first name you just say the letters and omit the slash. The second name is not a fair maiden named Ms. Dos nor do you say all the letters. Instead the "MS" is letters and the "DOS" part rhymes with loss.

And these machines, costing thousands of dollars each, are, eventually, supposed to replace the back-office and be orchestrated by the general public.

Everyone assumes this will be inevitable and people will do all kinds of things on the micro: look up recipes, casually chat with friends, maybe even fall in love or store home videos and their record collection. All this and more on the black screen with the blinking rectangle.

As I cut across to Bakersfield I adjust the rear view mirror to see the young engineers fully bought into this implausible future. But little did I know, that in 48 hours, a single demo on the floor of the Las Vegas Convention center would make me believe it as well.

## Visi-on Vision

Comdex isn't open to the public but that hasn't stopped it from becoming one of the largest events in Vegas. Wyse, Tandy, Olivetti, all have massive labyrinthian displays. We break up the team to start investigating.

Gilda loops back up with me first: "DEC has a bunch of their new Rainbows on display. Bad command or file name". That's a bit of shop talk.

Let's back up for a second. In order to understand things you need to know a bit more about these computers. The terse language that you type while running the MS-DOS softare can generate a variety of common errors. It's worth taking the time to provide a glossary here:

 * "Abort, Retry, Fail?"
   *MS-DOS*: When the computer expects to read data from a computer disk but is unable to (perhaps the disk got damaged or was removed).
   *To Us*: This is the primary business question. Should we abort the effort and pivot to something else, retry with more resources, or admit failure and roll it up. An associated error here is.

 * "Disk not ready in Drive A"
   *MS-DOS*: This is the first part of the two line error with "Abort, Retry, Fail?", nominally to inform the user what they are supposed to do.
   *To Us*: The software isn't ready yet or is full of bugs. If the software glitches, this is relevant

 * "Bad command or file name"
   *MS-DOS*: It means you tried to command the computer at the prompt in a way it didn't understand. Usually this happens through a typo. Either way the computer balks at you and say "nope".
   *To Us*: The product doesn't work. It doesn't feel right or engage the user in a meaningful way. It could also mean it's too slow or exorbitantly expensive. Regardless, it lacks viability.

 * "Press any key to continue"
   *MS-DOS*: The computer has performed an operation or is expecting something and is waiting for the user to engage with it before continuing. 
   *To Us*: It's a call for action, to end conversation, adjourn the meeting and do something. It's basically an exasperated "do something!" request.

It's worth noting these are mostly negative. We don't really have aphorisms for success. I think there's a tendency to break bad news with a bit of humor in a hope that it lands lighter. 

Hasegawa comes running over to me. He's still too far away for me to hear him but has he gets closer I hear "they did it, they did it". He's flustered, surprised, almost nervous. Gilda and I give him a confused look. "They're called VisiCorp", come look. 

We follow him through the maze of stalls and see a large crowd around a number of IBM PCs. I'm a fairly tall guy so I peaked over and see a black 3 button mouse hooked up to a screen with a cascade of graphical boxes. One of them is a bar graph and another looks like a Lotus-123 screen, no - that's their own version. 

The employee clicks on one of the boxes with a region hidden and it comes to the front, almost as if it's a stack. Inside it is a number of words in a horizontal strip. The employee moves the mouse over the item and clicks on it. No hotkeys, no Wordperfect function strip. And then the text redraws as slanted italics. 

People applaud like they just saw ng Harry Houdini break out of a safe. No jargon. I peer down the aisle and see Orion at the Commodore booth looking at some new portables and motion him to come over.  Hasegawa's mouth is open in shock. The employee changes a value in the spreadsheet and then the bar-graph redraws itself automatically.

He moves the mouse over to the word print and clicks the mouse button and then a few moments later, his Okidata printer head starts moving and produces exactly what we see on screen. "Holy shit" Orion blurts out, "can I buy that here?"

The answer was irrelevant. Everyone that day was sold. We saw the future. It was like the Xerox experience machine but on a microcomputer. This is what Boston was waving their hands about but nobody had known what it looked like.

Hasegawa took his camera and put in a new roll of film and started snapping pictures of the demo. I looked at him, "I'm sure they won't mind" he says.

The rest of the day we tried not to look too auspicious as we hanged around the VisiCorp table like groupies. Thomas, who comes from 15 years of ERP software, filled up his entire notebook full of diagrams and notes in pitman shorthand which I assure you, none of us but him could read.

Closing time hit and by then we had buttered up the VisiCorp engineers through our flattery and got more details on the implementation than I feel at liberty to disclose. I even tried to buy them dinner but was rebuffed.

As we hopped into the Winnebego to go off and find some place to eat and were exchanging notes, Orion looked around and said "Press any to continue?"

I looked back and we all agreed. We don't need to stay in Vegas another day. Fuck the food, we got what we came for. It's time to go back to Menlo Park.

---

We ask the candidate what his idea would look like. 

"Ok, so let's redesign WordStar in your vision. Show us what these pull-downs will look like", I say. "Just get up and draw it."

He draws on the chalkboard this oblong rectangle. Inside it are the words "File" "Edit" "View" "Windows" and "Help". Then he scratches a rectangle around the "File" and says "Alright the user point the mouse at this and then a rectangle below appears" as he places the words "New", "Open", "Open Recent", "Save", "Save As", and "Exit".

Gilda gets up and walks up to him as she picks up her chalk. "Alright but here's the problems." she doesn't even look at the candidate as she starts pressing dots on the chalkboard, "see, File is a noun, Edit and View are verbs. You've just gon from Noun-Verb in the first column to Verb-Noun in the second. And also, why is exiting the program in the File menu? Who would look for it there?"

The candidate looks back at the board and mumbles, "I ... I never thought of that..."

Craig gets up from his chair and walks on over as well. "Sorry, but here's another. So you've split "Save" and "Save As" and "Open" and "Open Recent", why not just put that distinction into a further dialog box? Also one distinction is temporal and the other is canonical."

The candidate turns back and stares at us in utter bafflement, almost as if his world is shattered. 

Gilda shoots back "And what happens when the person clicks on Edit". The candidate innocently stammers, "that's where you can manipulate the clipboard buffer and do things like format the thing you are working on."

The room full of engineers shake their head in disbelief. I was breaking out in a cold sweat, nervous that inviting such a crackpot in would ruin my standing with my team.

The palpable silence breaks by a doorknock as the lead sales rep, Michael tries to pull me away for a call. 

It strikes me that this interview was over but I get an audacious, and perhaps cruel idea to salvage my reputation. I say "Hey Mike, I'm wondering if you can take a few seconds and tell me what you see on the chalkboard". 

Now Mike comes from 20 years at Woolworths, he's en excellent sales guy but really doesn't know much about computers. He's been the "average-user" guinea pig before and has become famous for splashing cold water on the hottest idea.

"Well", Michael starts scratching his head, "it looks like WordStar. That's a nice hierarchy. I hope you're putting formatting and clipboard stuff in the Edit box. Also, that separation in the box under File clears everything up. It's the stuff I want to do with the thing. Add Print in there and it's perfect. This is the first thing I've seen that makes sense. Anyway Chuck, I'll see you in 5." and he closes the door. 

Everyone's mouth is open in shock as the only sound we hear is his squeaky shoes stepping down the carpeted hallway walking away.

I shrug my shoulders and look around the room, "Alright, fuck it." I pause and look for negative rection. Seeing none, I continue "I guess you're hired. See you Monday 9 am. You go by Claude right?"

"Yeah."

Craig murmurs in disbelief, "We should get the security guard in here and see if she can figure it out".

## Claude's world
January 1984 wasn't really a time of significance. It's hard to explain but not all times are equally accessible. There's a topology and the distances are very non-euclidean. It's just as uneven and entropic as everything else this universe creates. For whatever reason, the next easily accessible date that requires under 50KW and wasn't millions of years ago is January 1984, 15 years before I was born. I have about a 5 minute window at 3:32am tonight to catch it otherwise I will be sent off to somewhere in the Proterozoic.

Everyone thinks time travel is going to be glamorous but really, you go back to a time before you were born as nobody. 

No friends, bank account, connections, place to live... 

The best way to travel isn't to get vintage currency, that's expensive. What I do is purchase jewelry at estate sales. Then I pawn it off. At least that way I'll have a few hundred bucks. 

But that money and the rest of the stuff in my Samsonite really doesn't last long. My chance to return won't open up for 6 months and this money will last about 2 weeks if I'm stingy.

What I need is a job. 

Silicon Valley seems obvious since I already knew the future and they will just hire anyone off the street if they sound like they can hack it. This sounds like it would be easy. I had always admired BOOTSTRA Technologis as building revolutionary products in the mid-1980s ever since reading Tracy Kidder's masterpiece on its development.

I wanted to be there, on those team, in those rooms, involved in those conversations. The artistry, audacity, and irreverance of the early computing revolution before it became the oppressive tastemaker has always captured my interest.

I had forgotten that revolutionaries are controversial at best and being dismissed is the more common response. There was only one Steve Jobs and he ain't me. I was about to learn that the hard way, or maybe, not at all. Regardless, I'm up for the challenge.

The cheap motel I'm staying in is going to be torn down after the Loma Linda earthquake and replaced with a mall. That will then get torn down and replaced with a 5-over-1 in 2023. Right now, however, it's $19.99/night. 1984 prices, gotta love them.

After landing the job I had a weekend to kill. It's weird to walk around the place you grew up in and see a bunch of things you don't recognize. My favorite third-wave coffee house is a music store with the name "Sam Goody", in the distance all I see is smog and the most exotic foreign food I can find is sushi.

There's all these details nobody talks about and you don't realize until you're there: people purchasing newspapers from newstands or cigarette vending machines in diners with hazes of smoke on the ceilings. Even the cars. You think you know what the cars are going to be like.  Did you know that not all cars had side-view mirrors on both sides? There's a bunch without them. And they're noisy.

Even the lights are different. They have harsh bright glows and buzzing sounds, flickering like the lights in some kind of video game. And then there's the lack of phones of course. I've got mine back at the hotel room, sure, along with my modern laptop and USB power brick ... I wasn't going to travel completely empty-handed.

But it's not just phones, it's screens in general. Small CRTs flicker everywhere with washed out color and have this high pitched squeal when you turn them on. 40 years ago can feel so familiar yet at the same time, so foreign. The NES version of Super Mario Bros is still 18 months in the future.


---


Knowing history doesn't give you the aiblity to change the future, only to become needlessly invested in the futility of your ability to affect it.

---

"What the hell is this thing?", I scoffed, "two terabytes of storage, on chip the size of my fingernail?". I looked at the convincing plastic rectangle festooned with logos and claiming "2TB" by some imaginary company named "Lenovo". Underneath it was bespeckled with tiny yellow colored teeth. I guess this prankster thought they could just slide it in like an Atari 2600 cartridge. Into what I have no idea. Getting 2 kilobytes in this form-factor would have been an accomplishment. It felt as fragile as a tortilla chip. 


 (1) the awkward monday, (2) the explanation of the future like it's obvious. A manual pretotyping. They make cardboard cutouts and index cards and then non technical people come in with pointer sticks to emulate a mouse and try to accomplish tasks as they go back and realize "ok we need pillboxes" or whatever bootstrap feature. (3) the storm of companies like microsoft and apple working on their own version. (4) the discovery of espionage - a microsoft agent has been in their midst (5) the customer feedback "we don't need this yet" "I'm not doing these things with my computer right now" (6) the boss discovering the smart phone and the microsd card. (7) Claude presenting a speculative future world holding his dead cell phone and saying "these will be common in the future" and laying out the world of the 2020s to the perplexing awe of the coworkers and saying he uses these to "imagine tomorrow" and (8) his exit back to the future.

--


It was time for me to go. Literally. In 6 months, I built BOOTSTRA/386 and now it my window to leave. I had heard about the legendary Claude with no last name who had brought the microcomputer to the masses and really, during that interview I just used the name as a joke. 

That's always the problem with time-travel, did I become my future reality? Was it inevitable or did I build it? I've entered the grandfather paradox of technology. Maybe putting "Quit" in the File drop down is actually a bad idea. Who knows? It's too late now. The sands of time sweep through all our fingers the same. Windwos close before we realize they were ever open and opportunities enter the world of imagined counterfactuals. 

Our negotiation with time is the most powerful relationship we ostensibly have control over. And yet, it will always have control over us.

I came empty-handed and now I will leave them empty, a mystery of the ages. We were always going to be eclipsed by the Macintosh. That was unavoidable. Building the most legendary forgotten empire with all but a floppy disk and this story to show are my two vast and trunkless legs of stones in the desert. For a glimmer of the past, I was ozymandias, king of kings.

But now, I look on my own works, however mighty, and all they fill me with is dispair.

I set my time machine for 2025 and I pull the lever.


<img width="768" height="512" alt="group" src="https://github.com/user-attachments/assets/35fe878b-2f64-47df-8859-ff2708011ec5" />
From Left to Right: Claude, Hasagawa, Craig, Gilda, and Chuck



<img width="495" height="480" alt="Untitled" src="https://github.com/user-attachments/assets/fd98acbc-f325-43c6-b852-f1f49a37f5fe" />
Here's the now famous 'Claude-box' demo photo by Hasegawa, originally included in his 1991 text "Pen Computing Design" which coined multi-touch rotation, pinch-zoming, and gestural swipes.

---


"Abort, Retry, Fail?" isn't just a DOS-error, it's the core contention of our business.
shock-a-roo
sharaku
Sincerely,
C:\> aude


