---
excerpt: >-
  Despite no longer coding professionally, I still code for my own purposes.
  It's mainly web-based coding and I need some sort of code editor to help me
  out. __In this article I review Coda__, which is one of the main code editors
  in my toolbox. Over all, it's a great app but it suffers from a couple of
  problems.
description: >-
  A review of Panic's Coda, which is a code editor, FTP and terminal app for
  macOS and iOS. It's basically very good but suffers from one or two drawbacks.
leader: >-
  Coda is my code editor of choice (mainly web coding) on macOS and iOS. It's a
  great product but it could really do with proper synchronisation of files
  between platforms, maybe via iCloud.
title: Coda review - nearly the perfect code editor
date: 2018-10-13T08:45:00.000Z
tags:
  - Tech
  - Review
  - Apple
  - iOS
  - Web Development
ratingStars: 4
schema:
  product:
    '@id': /#product
    '@type': SoftwareApplication
    name: Coda
    operatingSystem:
      - macOS
      - iOS
    applicationCategory: Development
layout: post-review.njk
---


![Themed code snippet.](/assets/images/posts/2018/10/2018-10-13-coda-code-snippet.jpg "caption=Themed code snippet.|class=s33 left|title=Themed code snippet.|@itemprop=image")
By trade I’m a software engineer. Or at least I was. These days I try to avoid writing software other than for web-based applications, which means I code mainly in HTML, CSS/SCSS and PHP, and I don’t do this professionally at the moment but merely for my own benefit.

The above is just for context so you know where my review is coming from.

I’m going to review both the [macOS Coda](https://panic.com/coda/) (2.6.10) and the [iOS Coda](https://panic.com/coda-ios/) (2.2.9) in one go here. They’re quite similar — you just click a mouse on the macOS version and prod a screen on the iOS version. So I’ll do them both together and then note any significant differences between the two versions as I go along.

I’m reviewing Coda as a ‘lite’ code editor too, so I’m not comparing it to what you might call ‘heavy’ code editors, by which I mean things like Xcode and Microsoft Visual Studio.

## The Projects Screen
Coda can organise your files into projects and the projects screen is probably the first one you’ll encounter when you start up Coda.

It’s here that you enter your project details, selecting a local directory to store files in and entering FTP (or SFTP and even WebDav) details for remote transfers.

Coda also has an in-built terminal you can use to SSH to your remote machine. This is _extremely_ handy, particularly on iOS. You can configure your terminal settings via the project settings screen.

On macOS there’s also support for source control — either GIT or Subversion — and there’s a database connector. iOS does not currently support these features.

## The Main Screen
![Coda main screen on iOS.](/assets/images/posts/2018/10/2018-10-13-coda-main-window-ios.jpg "caption=Coda main screen on iOS.|title=Coda main screen on iOS.|@itemprop=image")
The main screen in Coda has your local files on the left and your remote files on the right in what we might consider to be the ‘classic’ manner.

On iOS you prod files to access the function menus and and macOS you right-click them, much as you’d expect. From the function menus you can upload, download, move, duplicate, delete and edit files in the expected way.

When you edit a file you get the code window and you’ll find your code is coloured nicely according to the language you’re coding in. On macOS you can further select from various themes to colour your code via Coda’s settings.

That is, essentially, a description of what Coda does and serves as very brief overview of how to use it, but what do I think of it?

![Coda main screen on macOS.](/assets/images/posts/2018/10/2018-10-13-coda-main-window-macos.jpg "caption=Coda main screen on macOS.|title=Coda main screen on macOS.|@itemprop=image")

## The Good Points
In terms of a ‘lite’ code editor, Coda is the best I’ve found. It’s easy to use and it has an attractive, well-designed interface on both macOS and iOS. [Panic](https://panic.com), the makers of Coda, have been around for a while now and they seem to understand user interfaces very well. This is particularly noticeable on iOS where Coda is one of the most intuitive applications I’ve used on the platform.

What Coda really is is a code editor with cut-down versions of a couple of other Panic products tagged onto it. Panic make [Transmit](https://panic.com/transmit/), which is the best FTP software I’ve used on macOS and you’re pretty much getting a pared-down version of that in Coda. They also make a terminal app called [Prompt](https://panic.com/prompt/), which forms the basis of Coda’s terminal facility.

I’d say this is the ideal editor for things like HTML, CSS and PHP, although you might want a ‘heavier’ app if you’re after more code insight and debugging facilities. It’s horses for courses but it’s the app I use for most of my web-based coding. Or at least that’s the case as far as macOS is concerned.

![Code window on macOS.](/assets/images/posts/2018/10/2018-10-13-coda-code-window-macos.jpg "caption=Code window on macOS.|title=Code window on macOS.|@itemprop=image")

## The Bad Points
My criticisms of Coda tend to lie in the area of interoperability.

Coda is supported by a facility called Panic Sync, which allows you to synchronise project metadata between macOS and iOS, but _only_ metadata. It will not synchronise your local code files and I really, really want it to. To confound the issue even more, you cannot set Coda iOS’s local directory to Dropbox, so you can’t even share your files that way.

I’d like to see Coda go the way of many text editing apps — such as Bear Writer and Ulysses — and sync macOS and iOS via iCloud (using CloudKit or whatever). 

Given this lack of synchronicity, you might think you’d manually synchronise via GitHub instead, which is the way I planned to go. But Coda iOS has no in-built source control facilities to allow this at the moment. There are complicated (partial) solutions via WebDav but I’m not keen on any of these.

![Projects screen on iOS.](/assets/images/posts/2018/10/2018-10-13-coda-projects-screen-ios.jpg "caption=Projects screen on iOS.|class=s33 right|title=Projects screen on iOS.|@itemprop=image")
So whilst I do some of my (simple) code editing via Coda iOS, I also do a lot using [Working Copy](https://workingcopyapp.com) to interface with GitHub and then [Textastic](https://www.textasticapp.com) as the code editor. Textastic works well with Working Copy in a way that Coda does not.

## Conclusion
Coda on macOS is awesome, full stop, and Coda on iOS is awesome as a _pure code editor_ too. In fact I’d describe it as the leader in its class. However, the interoperability issues mentioned above make life difficult for me. So much so that I use other apps. I’m hoping Panic will address some of these issues in the future.

Despite these problems I still rate Coda quite highly and I’m only inclined to drop one star from my rating as a result of the criticisms I have. 

 
