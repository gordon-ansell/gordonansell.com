---
excerpt: >-
  I've signed up to something called the Daily Blogging Challenge, which you can
  read more about at the start of this article. It's a test week this week and
  the first challenge just comes with a prompt of *Top 5*.
description: >-
  Details about the top 5 third-party apps I use on macOS and iOS: iA Writer,
  Agenda, Keep-It, VS Code and NetNewsWire.
title: The top 5 third-party apps I use
date: 2021-02-15T20:55:00.000Z
tags:
  - Tech
  - Opinion
---
I should probably first explain what's going on here. I signed up to something called the [Daily Blogging Challenge](https://dailybloggingchallenge.com), in which participants will write a post a day on a pre-determined topic for the entire month of March. There's a [Discord channel for this challenge here](https://discord.gg/b7xUSCVsMa).

My blogging is a bit erratic and generally consists of a flurry of posts followed by a gap where I haven't got much to write about. I just fancied the challenge of trying to create something on a daily basis for a subject I'm given. The subjects will be broad and that plays into my hands a little bit because, as my regular readers know, this blog has no niche and I post all sorts of nonsense.

But it's not March, I hear you cry. True, but I happen to be in possession of a time machine I purchased quite reasonably on eBay …

Wait, that not true at all. What's happening is that there's a test week to see how it goes. Some posts will be short and some will be longer, but I'll try and get something out for each daily topic.

The topic for today is *Top 5* and I've been really boring and decided to start with technology. If my blog were to have a niche it would be technology — nearly half my posts are in the *Tech* category. I toyed with idea of doing my top 5 songs, but that changes on a daily basis and five just isn't enough.

So without further ado, here are the Top 5 third-party apps I use.

***

## iA Writer

This is where I do most of my writing. I've tried loads of writing apps but this seems to fit my needs at the moment. I'll explain why.

I wrote my own static blogging software as an exercise in learning Javascript and Node. This all began when I was mainly using macOS on a MacBook. I could install a Node/NPM environment on macOS, run my static blogging software, via Terminal, against the directory where I keep the articles and then just FTP the output to my server.

However, as time went on I started to use my iPad a lot more for writing, and installing the sort of Node/NPM environment I need on the iPad is trickier. There's no Terminal on the iPad. So I moved the build environment to the server, outside of the public web root, and I started using GitHub to keep my articles in sync between my MacBook and my iPad.

So these are the steps I'd follow to start an article on my MacBook and finish it on my iPad:

1. Use the macOS GitHub client to pull the latest files.
2. Use iA Writer to write the first half of the article.
3. Commit and push the article to GitHub via the macOS client.
4. Go to the iPad and use Working Copy to pull the article I started on the MacBook.
5. Use iA Writer on iPadOS to finish the article.
6. FTP the article to my server.
7. SSH into the server and run my static blogging software to build the site.
8. Commit and push the article to GitHub via Working Copy.

It's certainly more convoluted than it needs to be. I could, for example, keep my iA Writer articles in iCloud and let macOS and iOS sync via that. The thing is, I once had a problem with iCloud back in the days when I used Ulysses as my main writing app. Ulysses blamed Apple and I spent much time talking to Apple support and never really resolved the issue. It did clear when I next took OS updates to both platforms, but it left me wary of both Ulysses and iCloud.

To be fair, my confidence in iCloud is now back and I use it to sync virtually everything except my articles.

Or I could simply install a Git client on the server. I chose not to for reasons I cannot remember, but I'm sure they were good reasons.

But I've been waffling on about my process here and said little about why I prefer iA Writer. I could run my process via any writing app that allows access to external folders.

I like iA Writer's clean interface and I find it a comfortable environment to work in. It also has one particular feature I really love. As with a lot of static blogging software, my own uses front-matter to define post titles, dates and a whole lot of other stuff. iA Writer has a handy feature whereby you can put your front-matter directly in the post and the app will recognise it as such. You'd have to use some sort of metadata with a lot of apps.

I think the main reason I've stuck with iA Writer for the last year and a bit is simply because no other writing app has given me a compelling reason to move away from it.

## Agenda

I use *Agenda* for all my notes, to-do lists and the 'lite' project management I sometimes need to do. It's too embarrassing to mention the number of different notes/to-do/project management apps I've used in the past, but I like Agenda's date-based organisation system and that it includes my macOS/iOS calendar as an integral part of it. Just by opening Agenda, I can see all I need to see to organise my day. 

Agenda is not perfect. *Bear Writer* is a better pure notes app, *Things* is a better to-do app and *OmniFocus* is a better project management app. You could substitute a lot of other apps in place of the ones I mentioned: *Drafts*, *ToDoist*, *Craft* and many others. Been there, got the t-shirt.

Agenda is a compromise, but it's a compromise I like.

## VS Code (macOS only)

I do all my coding is *VS Code*. It's free and it does pretty much everything I need of it.

That said, I used to use Panic Software's *Coda*, which is now discontinued, but they have a new coding IDE called *Nova* and I aim to test that out at some point. I've liked most of the products Panic have released; *Transmit* is my staple FTP app on macOS.

## Keep-It

I remember somebody mentioning the advent of the paperless office back in the days when I used to do my IT on mainframes, which would be the 80s. It was the second worst prediction I've ever heard[^1] because we seemed to generate far more paperwork from then onwards. The problem was that we digitised things, but kept the paperwork too, not entirely trusting the computers to keep things safe.

Things are a bit better these days and I use Keep-It and scan and store any tree-based communication I get. I'm guilty of still keeping some paper copies of things, but only if it's really, really important.

I use it for all digital documentation too — things like manuals and instruction booklets. It's a convenient repository for most things. I looked at *DevonThink*, but I don't really need something as complex (or expensive) as that.

## Any RSS Reader

I currently use *NetNewsWire* for RSS but I've titled this section 'Any RSS Reader' so I can have a bit of a rant.

I know lots of non-techie people and some of them think The Internet = Facebook. This makes me grind my teeth for a while, but then I try to explain there's a whole World Wide Web out there and hundreds of interesting blogs to read rather than the soundbites served up on Facebook. 

Sometimes they say they can't be bothered to visit loads of different blogs. I tell them I can't either, which is why I subscribe to their RSS feeds and get the blog posts pushed to my machine. I try and encourage people step outside of Facebook and social media in general. I'm a big fan of the IndieWeb.

As to *NetNewsWire* itself, it's free, it's open-source and a shining testament to how good such apps can be. I started using it as soon as it had the ability to synchronise with Feedly.

[^1]: The worst prediction was made by my mathematics teacher in 1976 when he said that by the year 2000 we'll all be flying around on jet-packs, and we'd only be working two days a week because robots would do most things for us (yet, in 2021, my stupid robot floor cleaner is foiled by something as simple as a rug).

