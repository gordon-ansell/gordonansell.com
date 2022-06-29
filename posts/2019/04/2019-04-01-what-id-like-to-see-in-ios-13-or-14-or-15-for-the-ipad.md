---
excerpt: >-
  The iPad is, I think, becoming a different device to the one that was
  originally released. As a result there are some features I'd like to see in
  iOS 13 (or, perhaps more realistically, in future releases of iOS).
description: >-
  What I would like to see in iOS 13 for the iPad. Mouse support, filesystem
  access and xCode, essentially.
title: What I’d like to see in iOS 13 (or 14 or 15) for the iPad
date: 2019-04-01T11:55:00.000Z
tags:
  - iOS
  - Tech
  - Opinion
  - iPad
  - Apple
excerptImage: /assets/images/posts/2019/04/2019-04-01-share-icon.jpg
---
![iPad and keyboard.](/assets/images/posts/2019/04/2019-04-01-ipad-and-keyboard.jpg "class=s50 left|@itemprop=image")
In this article I’d like to explain what I’d like to see in iOS, specifically for the iPad, from iOS 13 onwards. I have my doubts about any (and certain all) of these things appearing at all and I’ll tell you why at the end.

## What is an iPad?

What is an iPad meant to be? It sits in the Apple ecosystem between phones and laptops and, whilst the division between those machines was once delineated clearly, the line is now much more blurry between top-end iPads and MacBooks.

Over the last few years more people have been replacing their MacBooks with iPad Pros. I know a lot of people don’t like the phrase ‘MacBook replacement’ but it’s correct. If you once used a MacBook for certain tasks and you now use an iPad for the same tasks, you have ipso facto _replaced_ your MacBook with an iPad. This is particularly true if you set the iPad up with a stand and hardware keyboard.

There are of course still differences. They run on different operating systems for starters and whereas the MacBook has a mouse and keyboard interface, the iPad has a finger and keyboard interface.

This brings me to the first thing I’d like to see in iOS for iPads.

## Mouse Capability

I want support for mice on iPads.

This is quite controversial it seems. It certainly ignites the passions of some people who believe the iPad should absolutely not have a mouse despite the fact that nobody’s forcing them to use one. Some people even claim this a red line for Apple themselves.

The thing is, we already have support for pointer movement in editor windows. You can move it with a two-fingered drag or you can hold the space bar down on the on-screen keyboard and move it like a trackpad. And there are already options to get mouse support on iOS, if not in a native manner: there are things like [DoBox](https://dobox.com) if you’re prepared to fork out $350+ and there are plenty other options if you’re prepared to risk jailbreaking your iPad (I’m not).

Many people claim the Apple Pencil is the pointing device for the iPad. Sure, it can be used to point but it’s not the same as a mouse.

The core OS underneath iOS is [XNU](https://en.wikipedia.org/wiki/XNU), which in turn is [Darwin](https://en.wikipedia.org/wiki/Darwin_(operating_system)),  which in turn is [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP), which, if you scrape away enough layers of the OS archeological dig, is [BSD](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution). These are also the underpinnings of macOS, which of course supports a mouse. I can’t imagine the technicalities of adding native mouse support to iOS are prohibitive although I will admit I’m no expert here and could be wrong.

![Unix timeline.](/assets/images/posts/2019/04/2019-04-01-unix-timeline.png "@itemprop=image")

Maybe there’s an argument for only supporting mice on iPad Pros, although I can’t see much in that argument myself, but I’d certainly like the option because I think it would enhance my productivity on the iPad. 

Furthermore, imagine the gaming enhancements a mouse might bring.

## Proper Access to the Filesystem

iOS uses the same basic filesystem as macOS — the [Apple File System (APFS)](https://en.wikipedia.org/wiki/Apple_File_System) — but whilst you have direct access to the filesystem on macOS (via Finder for example), you are not permitted direct access in iOS.

Instead, apps are closely tethered to the filesystem via a [sandbox](https://en.wikipedia.org/wiki/Sandbox_(computer_security)). If you want to use an iOS file created in Application A in Application B then you create a _copy_ of that file via the share sheet and send it to the Application B. Application B thereafter works on its own copy of the file and does not alter the original as created in Application A (you can read about [Apple’s File System Basics here](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html)).

This is in contrast to macOS where, with full access to the filesystem, you can create a file in Application A, save it and then open _the same file_ in Application B.

The iOS method mostly works okay but there are times when I feel it’s counter-productive and it plays havoc with my OCD. If I want to edit an image, for example, I often push it through a few different image processing apps. This involves me creating a number of copies of the file for different apps to end up with the finished item. I’m then left with a bunch of copies of the file that I don’t need and my OCD drives me to delete them all from the individual apps that used them.

I can’t help but think it would be far more efficient to just have one copy of the file and something Finder-like that gives me an ‘Open with …’ option.

Maybe this is just personal preference and maybe it betrays my techie roots but I’d like to access the full filesystem.

I can kind of see why that hasn’t been allowed to date. A protected filesystem is more secure and maybe it’s easier to ensure non-techie uptake of devices by not confusing users with an underlying filesystem. But I think things have moved on and there are good arguments for change in that respect, even if it’s only with the Pros or with a setting of some sort that switches access on and off.

## Development/xCode

This is probably a big ask. You can no doubt see where I’m going with all this: I want to be able to _entirely_ replace my MacBook with an iPad Pro. Ultimately that means being able to do development work on an iPad. 

Alas xCode only runs on macOS and I can’t imagine it coming to iOS soon, if ever. I certainly appreciate the technical challenges that would be involved.

Of course all of this requires a willingness from Apple in the first place and I have my doubts about that, which is what I’ll be covering in the next section.

## Apple’s Possible Resistance

So why might Apple resist doing any of this? 

One big reason is that they may fear that adding any of these things to the iPad would damage sales of MacBooks, iMacs and such. Personally I don’t think the desktops would be affected but I can certainly see it having an effect on MacBooks. Then again, would the increase in sales of iPads — perhaps dragging more people away from Windows Surface machines — compensate?

I don’t know — that’s a question for Apple to ponder. 

The other thing that might make Apple resist any of my (or other people’s) suggestions is that they aren’t really a company who believes the old adage that the customer is always right. Apple have a vision of how things would be and often pursue that to a fault. It’s a double-edged sword because that vision has produced some of the best devices on the market (in my opinion), yet it also fosters a certain arrogance that often renders them seemingly immune to customer suggestions and preferences.

I wouldn’t be surprised if some of my suggestions — perhaps the mouse support, anyway — are eventually incorporated into the iPad but, equally, I wouldn’t be surprised if none of them are. Such is the nature of Apple.

