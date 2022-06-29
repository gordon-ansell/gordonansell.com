---
title: Transferring from Day One to Apple Notes
excerpt: >-
  I'm swapping between apps again. I decided Apple Notes is good enough to use
  for more things now, so I set about transferring all the stuff I had in Bear
  App, OmniFocus and Day One into Apple Notes.
description: >-
  How I went about transferring my journal from Day One to Apple Notes. It isn't
  simple because Day One's export facilities are not that extensive.
date: 2022-02-07T12:45:00.000Z
tags:
  - Apple Notes
  - Tech
  - Bear
  - OmniFocus
  - GTD
  - Help
---
![Apple Notes icon.](/assets/images/posts/2022/02/2022-02-07-notes-icon.png "@itemprop=image|class=s50 right")
I'm messing about with my admin (GTD) apps again. This came about because I had a look at Apple Notes again and found it is much improved since I last looked, which was a few years ago.

After a few days playing around with Apple Notes I thought it could replace Bear App, Day One and OmniFocus, which I had been using as my go-to apps for notes, journaling and to-dos respectively. Those apps are excellent, but the improvements to Apple's in-built app gave me the opportunity to combine the functions of those apps and lose three subscriptions in the process[^1]. Losing subscriptions is a good idea right now because everyone in the UK will be paying about a £1,000,000 a month for their energy from April onwards.

Having decided to make the switch, there's then the thorny issue of transferring everything into Apple Notes. I didn't even attempt to export stuff from OmniFocus and import it into Apple Notes — I just typed everything into Notes from scratch, although I didn't have many incomplete projects anyway. Day One is a problem, though. I had over 1,000 journal entries and there's no way I was typing those up from scratch.

Apple Notes can import text, rich text (.rtf or .rtfd) and HTML formats. Day One can export to text, PDF and JSON, and you might think a text export would be ideal, but it exports all your journal entries into one file rather than each entry as a separate file. I chose to export the entries as JSON. All the journal entries are still in one file, but Bear App can import that JSON file (File -> Import From … -> Day One). I then exported from Bear App to rich text, which gives you separate files. These will be .rtfd files if they have accompanying images, otherwise they're plain .rtf files. I could then import these files into Apple Notes.

It wasn't that simple, of course, because nothing is ever simple. Yes, it works, but I found the files I imported into Apple Notes were displayed in a font so tiny that only a bird of prey could read it. This is because RTF uses control sequences to set fonts and such. An RTF file will look something like this:

```
{\rtf1\ansi\ansicpg1252\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica-Bold;\f1\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural\partightenfactor0

\f0\b\fs42 \cf0 This is a title\

\f1\b0\fs28 \CocoaLigature0 \
This is a paragraph.\
\
This is another paragraph.\
\
This is the last paragraph.}
``` 

All those control sequences around the text are setting the font faces, styles and sizes etc., and when Apple Notes imports the file it respects those settings. Not only did I want a font size readable by humans, but I wanted it to match the default title and body styles used by Apple Notes. That meant I needed to parse the files exported by Bear App and change them as necessary before importing them into Apple Notes.

Before doing that, I wanted to see what the RTF of a typical Apple Notes entry looked like. That's not easy to get because Apple Notes' export facilities are dismal. On macOS they'll let you export a PDF and that's it. Internally they're stored in a database that obfuscates any RTF-ness of the entries.

There is a way to get an RTF file out of Apple Notes on iOS/iPadOS, though. Thanks to [Wim Postma](https://wimpostma.com/how-to-export-and-backup-notes-from-apple-notes/) for that. So, armed with the internal structure of an Apple Notes file, I could change the files exported from Bear before importing them into notes. I didn't do this by hand — I wrote some Node-based Javascript code to parse the 1,000+ files and change them to match a typical Apple Notes entry[^2].

[I've said this before](/why-isnt-there-an-open-standard-for-notes-apps/) and I'll say it again, there needs to be a standardised format for anything that might be called 'notes' (which includes journals and similar). [TextBundle](http://textbundle.org) is one attempt at something like that, but I think something in XML would be better.



[^1]: I found [this video](https://www.youtube.com/watch?v=RmMwBuQvf0g) instructive about how to use Apple Notes for project management (and to-dos).

[^2]: The process was actually a bit more complicated than this. I wanted the file names and titles of each file to be in 'YYYY-MM-DD Journal' format, so I wrote another bit of code that parsed the JSON that came out of Day One before importing the files into Bear. 
