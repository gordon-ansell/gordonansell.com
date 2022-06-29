---
excerpt: >-
  I had cause to transfer some notes from the Agenda app to the Day One app
  today. Due to a lack of interoperability between the two I had to cobble
  together a script to bridge the gap. This got me wondering why there's no open
  standard for notes.
description: >-
  Given the number of notes apps on the market today, I wondered why there isn't
  an open standard to support interoperability between them.
title: Why isn't there an open standard for notes apps?
date: 2021-05-15T18:45:00.000Z
tags:
  - Tech
  - macOS
  - Javascript
  - Help
---
There are a plethora of notes apps for macOS and iOS these days. I have a bunch of them myself. A single notes app should be enough, particularly as many of them have similar feature sets, but I struggle to settle on a single app. I tend to use just one app at a time because I like to have a go-to place where all my notes are, but after a while I’ll be tempted by another app and switch to that instead. Often I’ll go in a circle and use three or four different notes apps and end up back where I started.

A psychiatrist would probably nod knowingly at this deep-rooted craziness and trace it all back to the time my shoe fell off when I was seven. It isn’t just notes apps either; I jump between different apps in many genres.

The point of this missive relates particularly to notes, though. All this jumping around means I’m forever exporting my notes from one app and importing them into another. This isn’t always as easy as it should be. Apps have their own sets of import and export formats, and even when they support the same formats — JSON or whatever — the fields the first app exports are often different to the fields the second app expects to import.

Why isn’t there an open standard for notes? I appreciate each notes app has its own features and peculiarities to support, but you can get essential interoperability with a few basic fields. I’m talking about something similar to the way [OPML](http://dev.opml.org/spec2.html) works for outliners. 

Any single note could get away with a very simple format, along the lines of:

```xml
<title>This is the note’s title</title>
<dateCreated>2021-05-15T19:20:30.45+01:00</dateCreated>
<text type=“plain”>This is just a plain text note, which is the most interoperable standard there is, but we could probably also have a type=“markdown” given how ubiquitous it is these days. You don’t want to push too many formats, though, because that just complicates matters.</text>
```

Importantly, the *dateCreated* should be to some standard, such as [UTC](https://www.w3.org/TR/NOTE-datetime).

In all likelihood you’re going to want to import and export more than one note at a time, so you might have a structure more like this:

```xml
<opennote version=“1.0”>
    <title>Gordy’s Notes</title>
    <item>
        <title>Note 1</title>
        <dateCreated>2021-05-14T19:20:30.45+01:00</dateCreated>
        <text type=“plain”>This is my first note’s text.</text>
    </item>
    <item>
        <title>Note 2</title>
        <dateCreated>2021-05-15T19:20:30.45+01:00</dateCreated>
        <text type=“plain”>This is my second note’s text.</text>
    </item>
    <item>
        <title>Note 3</title>
        <dateCreated>2021-05-16T19:20:30.45+01:00</dateCreated>
        <text type=“markdown”># header1
        ## header 2
        This is my third note’s text.</text>
    </item>
</opennote>
```

It would be helpful if every notes app supported importing and exporting just that, but you could include images too:

```xml
<opennote version=“1.0”>
    <title>Gordy’s Notes</title>
    <item>
        <title>Note 1</title>
        <dateCreated>2021-05-14T19:20:30.45+01:00</dateCreated>
        <text type=“plain”>This is my first note’s text.</text>
        <image>file:///foo.jpg</image>
        <image>file:///bar.jpg</image>
    </item>
</opennote>
```

That doesn’t really tell you much about where the images are in the text of course, but you can at least import the images into another app. If you wanted to be fancier and support the block structure of a lot of notes apps, you might have something like this instead:

```xml
<opennote version=“1.0”>
    <title>Gordy’s Notes</title>
    <item>
        <title>Note 1</title>
        <dateCreated>2021-05-14T19:20:30.45+01:00</dateCreated>
        <block type=“header1”>My header 1 title.</block>
        <block type=“text”>Here’s a photo of my cat:</block>
        <block type=“image”>file:///foo.jpg</block>
        <block type=“text”>Here’s another line of text.</block>
        <tag>Cat</tag>
        <tag>Bossy</tag>
    </item>
</opennote>
```

I’d be wary of making it too complicated. Interoperability is often best served with simplicity. It’s about striking a balance between supporting the necessary features and keeping it simple.

Note that my examples are in XML, but they could just as easily be in JSON. The important thing is that it becomes a standard which helps people avoid being locked in to a particular notes app. This sort of thing doesn’t always appeal to app developers of course, but it’s certainly better for users.

The way I came to this today was exporting notes from the Agenda app to the Day One journaling app. I had about nine months of daily entries I wanted to transfer and there’s no common import/export format both apps support. I had to knock up some javascript to do it for me, which amounted to exporting the notes from Agenda as a markdown file, running my script to reformat them slightly (particularly the format of the date) and then importing them into Day One as a plain text file. I had the notes in Agenda collected into directories for each month, so I did this a month at a time.

I include my code below just in case someone else wants to do this, but it comes with more warnings than a nuclear reactor. I wrote this small Node script in about 10 minutes and it's not going to qualify me for the coding hall of fame. It's a hack of the most pernicious potential and you use it your own risk:

```javascript
#!/usr/bin/env node
 
'use strict';
var fs = require('fs');

const idata = "/Users/gordy/Downloads/Agenda Journal/exp.md";
const odata = "/Users/gordy/Downloads/import/ready.txt"

const idataread = fs.readFileSync(idata, 'UTF8');
const lines = idataread.split(/\r?\n/);

var final = '';

for (var line of lines) {
    if ('# ' == line.substr(0, 2)) {
        var work = line.substr(2);
        var sp = work.split('--');
        var t = sp[0].trim();
        if ('Untitled Note' == t) {
            continue;
        }
        var dt = new Date(t);
        var fmt = dt.getDate() + ' ' + dt.toLocaleString('default', {month: 'short'}) + ' ' + dt.getFullYear() + ' at 21:00:00 GMT'
        final += 'Date:  ' + fmt + '\n\n';
    } else if ('' == line.trim()) {
        continue;
    } else if ('---' == line.trim()) {
        final += '\n\n\n\n';
    } else {
        final += line.split('@').join('#').trim() + '\n\n';
    }
}

console.log(final);

fs.writeFileSync(odata, final);
```

The `idata` at the top of the file is where you've exported your Agenda notes to. You do that first, then you run this script and the `odata` is where you're writing the results of this script to. You then import that file into Day One.

This line formats the date to something acceptable to Day One:

```javascript
var fmt = dt.getDate() + ' ' + dt.toLocaleString('default', {month: 'short'}) + ' ' + dt.getFullYear() + ' at 21:00:00 GMT'
```

You might need to alter that to reflect your local date format, which is what Day One expects. You can find that out by exporting a Day One entry in plain text and looking at the way it's formatted.

If you're wondering what this is:

```javascript
        if ('Untitled Note' == t) {
            continue;
        }
```

It's because Agenda sometimes exports a spurious untitled note that has nothing in it and isn't visible in the Agenda app itself. Not sure why it does that but I had to ignore those notes.

To be honest, I cannot imagine there's much call for something that exports from Agenda and imports to Day One, but I'll file the script away for the next time I circle through a bunch of notes apps and have to do this again. Most people probably aren't as crazy with apps as me.

