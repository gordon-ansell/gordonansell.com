---
excerpt: >-
  NetNewsWire is a free, open source feed reader app for macOS, iOS and iPadOS.
  Version 5.1 brought Feedly to the macOS version and this was my cue to start
  using it. This is my **review of NetNewsWire**.
description: >-
  NetNewsWire 5.1 for macOS brought in Feedly support and therefore became the
  feed reader of choice for me. Here's my review of NetNewsWire.
leader: >-
  NetNewsWire is a fast, reliable RSS reader for macOS, iPadOS and iOS. It is
  well-designed, intuitive to use and it's absolutely free. You'd be mad not to
  try it.
title: NetNewsWire review — you'd be mad not to try it
date: 2020-09-27T06:50:00.000Z
tags:
  - Tech
  - Review
  - iOS
  - iPadOS
  - macOS
schema:
  product:
    '@id': /#product
    '@type': SoftwareApplication
    name: NetNewsWires
    operatingSystem:
      - macOS
      - iOS
    applicationCategory: Productivity
layout: post-faqreview.njk
ratingStars: 4.5
---

 
I have been waiting for a while to switch from ‘raw’ Feedly, by which I mean Feedly’s web interface, to [Ranchero’s NetNewsWire](https://ranchero.com/netnewswire/), which, for the uninitiated, is an app for reading RSS feeds.

NetNewsWire has been around in one form or another since the early 2000s and it was the brainchild of a chap called [Brent Simmons](https://inessential.com). It travelled a bit after that. It was bought by NewsGator in the mid 2000s and then bought by Black Pixel in the early 2010s.

In August 2018 it returned to Brent Simmons, or at least its name did. Brent was already working on a new RSS reader called EverGreen, but instead of releasing that under its own name, it was released as NetNewsWire 5.0.

The macOS app was released first and then the iOS/iPadOS app. The thing is, whilst the iOS app had Feedly support from the outset, I had to wait until this month, with NetNewsWire 5.1, to get Feedly support on macOS.

![NetNewsWire main screen on macOS](/assets/images/posts/2020/09/2020-09-27-netnewswire-macos.jpg "caption=NetNewswire on macOS.|itemprop=image")

As it goes, I’m not an app fanatic. That’s not to say I don’t use apps. I use plenty, but I suspect not as many as most folk. I shun banking apps, for example, and much prefer to access the bank’s website directly via a browser. I shun most apps at the outset, resisting all calls to switch from a website to an app that will often just read that website in a different way.

I like the browser to be my app for a lot of things. I like the protection it gives me from tracking and advertising, and I like denying companies the ability to circumvent that with an app.

I am nothing if not inconsistent, though, because I have an app that switches my kettle on. Yes, really, I do. So I'm not rigid in these matters, it's just that an app has to give me a good reason to favour it over the website.

However, I do believe my RSS feeds are better suited to an app. What I want for that is something that’s like my email app (Apple’s own variants) but, crucially, isn’t my email app. I approach feed reading with a different mindset to email, and of course they’re functionally different too. A feed is read-only whereas an email is read/write.

NetNewsWire feels just like Apple’s email apps on both macOS and iOS, which is exactly what I want. It’s what I would have tried to make if I was creating a feed reader app.

What you get on either macOS, iPadOS or iOS is something that behaves exactly as you’d expect a modern app to behave on those platforms. On macOS and iPadOS you’ll get the three-pane configuration you’re probably used to. There are ‘folders’, for want of a better name, on the left, titles and brief descriptions of feed posts in the middle and then the contents of selected feed post on the right. Just like you get with Apple’s mail apps. You can collapse the home screen down to two panes if that tickles your fancy.

On iOS you get one pane at a time. Selecting something displays its contents on the next screen and you can either swipe right or push a button to go back.

There are three ‘smart feeds’ for *Today*, *All Unread* and *Starred*, the latter being feed posts you’ve manually starred to perhaps revisit later. I stay on *Unread* most of the time, either manually refreshing or letting a timed refresh (configurable via settings) run. I just use the down arrow in the middle pane to click through the feed posts until I find one I want to read. On iOS and iPadOS you can also just swipe right on the post itself to go to the next one.

![NetNewsWire main screen on iPadOS](/assets/images/posts/2020/09/2020-09-27-netnewswire-ipados.jpg "caption=NetNewswire on iPadOS.|itemprop=image")

There is also a *Reader View* for feed posts. Some sites only distribute a partial feed to RSS but *Reader View* will try to fetch the full version of the article if it can. This is useful because it saves you from having to click out to the feed’s website to read the complete article.

There are logical keyboard shortcuts too, but I’m not going to explain any more about how to use NetNewsWire. I’m a blithering idiot and I had it sussed in under five minutes using only The Force for guidance. That speaks volumes for the app’s design. If you do get stuck, the help files ([macOS](https://ranchero.com/netnewswire/help/mac/5.1/en/), [iOS](https://ranchero.com/netnewswire/help/ios/5.0/en/)), which I glanced through for the purposes of this review, will set you on the right path. 

Furthermore, all of this is completely free and open source. It’s fast, solid, reliable and a shining example of how open source can be every bit as good as a commercial app.

You may find something that’s missing. There was for me at first — the Feedly syncing I mentioned earlier — but bear in mind this is actually version 1 despite the version 5 nomenclature. You can be fairly sure the Ranchero team will be aware of what needs to be added to NetNewsWire. They have a [roadmap](https://inessential.com/2019/12/26/netnewswire_2020_roadmap_schmoadmap), but be patient. These people are volunteering their time on this.

In summary, if you need a feed reader app you’d be absolutely bonkers not to give NetNewsWire a try.

 

{% faqpage "NetNewsWire" %}
## NetNewsWire - Frequently Asked Questions
{% faqqa "1", q="What feed services does NetNewsWire sync with?" %}
Feedbin, Feedly, Inoreader, BazQux, Inoreader, NewsBlur, The Old Reader, and FreshRSS. You can of course read feeds locally without using a specific service.
{% endfaqqa %}

{% faqqa "2", q="What is Reader View on NetNewsWire?" %}
Some feeds only serve partial results; a sort of teaser that encourages you to visit the website for the full article. *Reader View* will attempt to load the full article regardless so that you don't need to click out of NetNewsWire to read it.
{% endfaqqa %}

{% faqqa "3", q="How do I activate Reader View on NetNewsWire?" %}
Activate *Reader View* by clicking the appropriate icon: {% simpleimg "/assets/images/posts/2020/09/2020-09-27-nnw-reader-icon.png", alt="NetNewsWire Reader View icon", class="s3" %}. NetNewsWire will then try to pull the whole article. If it cannot pull the whole article you'll see an exclamation mark in the icon.
{% endfaqqa %}

{% faqqa "4", q="NetNewsWire is free and open source. Is it as good as commercial feed readers?" %} 
Absolutely. In fact it's better than most of them.
{% endfaqqa %}

{% endfaqpage %}




