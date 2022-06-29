---
excerpt: >-
  Just some things a learnt whilst developing my own static site generator (SSG)
  software. For what it's worth, I don't recommend writing your own. There are
  already plenty good options out there. Techy-techy stuff, this.
description: >-
  Some guidelines if you decide to create your own static site generator (SSG)
  software, which you shouldn't.
title: Rolling your own SSG
date: 2021-01-22T11:10:00.000Z
tags:
  - SSG
  - Tech
  - Web Development
  - Javascript
  - Node
  - Help
---
If I'm honest I probably shouldn't have bothered writing my own static site generator (SSG) software. There are already many good options out there.

I did it as a technical exercise and a reason to learn Javascript. By trade I'm an IT geek and, once we get away from the mainframe years, it has mainly been C/C++. I learnt PHP to a reasonable degree too but had only ever tinkered with Javascript.

Given that this is my first major Javascript application, I couldn't possibly recommend using it as a template as it is probably riddled with inefficiencies.

It works for me though and possibly the only major advantage of rolling your own software is you can make it do exactly what you want it to.

Take all this with my lack of Javascript experience in mind, but these are the major steps I figured out my software would need to do.

## Read the filesystem
You need to read all the raw files that constitute your site. I do that first and build an index of them. 

You'll want to add some filtering facilities to ignore certain files, such as the 'dot' files editors and operating systems place in directories. 

If you're using Node then *readdir* or *readdirSync* from Node's 'fs' module are probably what you need.

## Process the files
Now that you have a list of relevant files you need to do something with them. I simply use the file's extension to decide what to do with it. 

If it's a '.md' then we're talking about a post or page. Each one of those contains front-matter, which is things like the post's title and date, so I trim off this front-matter and I'm left with a post in markdown. I didn't write my own markdown processor, I use one called [Showdown](http://showdownjs.com). What you have at the end of this is your markdown converted to HTML.

## Render the files

You're not just going to want to display that raw HTML to users. You'll want it formatted nicely through a template. Again, I didn't write my own templating system, I used [Nunjucks](https://mozilla.github.io/nunjucks/). So the raw HTML gets rendered through Nunjucks, the front-matter we saved earlier gets added as titles, dates, descriptions and other metadata and we save the nicely formatted page somewhere. Borrowing from a lot of other SSGs, I write this out to a '_site' directory.

Ultimately, you'll just FTP the entire contents of the '_site' directory to your live website.

—

That is of course hugely simplified.

What do we do with images for example? Well we could just copy them across and that would work fine, but I wanted to do a bit more than that. I wanted to take each image file and generate various different sizes of it. For that I used [Sharp](https://www.npmjs.com/package/sharp). Images are then rendered via the the 'img' tag's 'srcset' attribute so that browsers serve up an appropriately sized image.

My first attempts at creating this software were extremely naive. I'm guessing an experienced Javascript programmer would describe my later attempts as naive too, but hopefully a bit less naive than my early attempts.

There was no concurrency in my early attempts but then I got a handle on [Javascript promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and managed to improve the speed of things considerably.

Later versions added a sort of plug-in architecture using [Node events](https://nodejs.org/api/events.html) to give the plug-ins an opportunity to intervene.

So, should you roll your own? Absolutely not. There are so many good, extensible SSGs out there, written by people with lots of Javascript experience, that you'd have to be an idiot to roll your own from scratch. It's okay for me because I'm a card-carrying idiot, but I think you're better off letting someone else worry about the core code and just concentrating on configuring the bits you want to change via the SSG's own intervention facilities.

I'm writing this just in case there are other buffoons out there like me.

