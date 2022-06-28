---
excerpt: >-
  After an irritatingly long wait, I've finally received my M1-powered MacBook
  Air (13 inch, with 16GB memory). I review it here and also compare it to a top
  of the range 15-inch MacBook Pro from 2013. It's entry-level 2020 vs high-spec
  2013.
description: >-
  A review of the M1-powered MacBook Air (13 inch) and a comparison with a
  high-spec MacBook Pro from 2013.
leader: >-
  It outperforms my old 2013 MacBook Pro (15 inch) in every single way, even
  though the old machine was specced as high as it would go at the time. A
  revolution in laptop computing? Quite possibly.
title: 'M1 MacBook Air 13 inch (16GB) review, compared to a 2013 MacBook Pro'
date: 2020-12-06T08:00:00.000Z
tags:
  - Tech
  - Apple
  - Review
  - MacBook
excerptImage: /assets/images/posts/2020/12/2020-12-06-air-icon.png
ratingStars: 4.5
schema:
  product:
    '@id': /#product
    '@type': Product
    review:
      '@id': /#article
    mpn: n/a
    sku: MWM62B/A
    name: MacBook Air M1 (13 inch)
    description: MacBook Air with Apple's latest M1 chip.
    brand:
      '@type': Organization
      name: Apple
layout: post-review.njk
---
 

## Introduction

This was a forced upgrade for me. I was happy with my 2013 MacBook Pro, but Apple made that computer obsolete, as I described in a [previous article](/m1-powered-macbook-pro-heading-this-way/).

I did unintentionally lie in my previous article. I had indeed ordered the MacBook Pro but I switched that to a MacBook Air after reading some of its initial reviews. I simply don't need the extra £250 of performance the Pro offers.

What I took delivery of was an **M1-powered MacBook Air with 16GB of memory and a 512GB hard disk**. It cost £1,449. Apple just equates dollars to pounds sterling on a one-to-one basis, which is a bit of a rip-off when there are 1.33 dollars to the pound, although not as much of a rip-off as it first looks because the British government levies 20% VAT to cover the champagne budget for the House of Lords.

I might not have needed 16GM RAM. The initial reviews suggest people are getting a lot more from 8GB M1 machines that perhaps they would from traditional architecture.

[Apple describes](https://www.apple.com/mac/m1/) the memory on the M1 chip as follows:

> M1 also features our unified memory architecture, or UMA. M1 unifies its high‑bandwidth, low‑latency memory into a single pool within a custom package. As a result, all of the technologies in the SoC can access the same data without copying it between multiple pools of memory. This dramatically improves performance and power efficiency. Video apps are snappier. Games are richer and more detailed. Image processing is lightning fast. And your entire system is more responsive.

I can see how that makes memory access more efficient but I would have thought where you have multiple apps vying for memory or one memory-intensive app on the go, it would still be subject to the same physical limits as in traditional architecture.

Taking no chances, I went for 16GB.

You might want a bigger hard disk. I use iCloud for most of my data and use less than 300GB of hard disk space, and I'm pretty sure 100GB of that data is superfluous.

## Unboxing
![M1 MacBook Air in its box.](/assets/images/posts/2020/12/2020-12-06-m1-macbook-air-in-box.jpg "caption=It's in a box.|class=s50 right|title=It's in a box.|@itemprop=image")
Unboxing seems to be a thing these days but I don't really get it. I took it out of the box, and, as I'm an ape blessed with opposable thumbs, I used my hands to do so.

## Physically

I've never had a MacBook Air before so I can't compare it to anything previous, but as far as I've read there's not much physical difference from the last Intel model.

The most notable thing for me personally is the addition of a TouchID sensor at the top-right of the keyboard.

Then there's the port situation. Both the new Air and new Pro come with only two Thunderbolt/USB 4 ports, one of which — unless you use a device with pass-thru — will be taken up with the power input. If you want to connect anything that isn't Thunderbolt/USB 4 you're going to need an adapter. I needed an adapter because my backup disk uses older USB and I sometimes connect a camera card. Apple charge a lot of money for these sorts of accessories so I just got a multiport adapter from Amazon.

## Setup

As soon as you switch the MacBook on it’s going to launch into setup. You pick a language and country, sign in to your wi-fi and eventually it will ask if you want to migrate an existing MacBook to your new one. 

It will offer you [Apple’s Migration Assistant](https://support.apple.com/en-gb/HT204350) and I think that’s the easiest way to go about things. You can either migrate directly from your existing MacBook or from a Time Machine backup. 

I used the former option and migrated across wi-if from my old MacBook. To do that, you need to start the migration assistant on your old Mac (assuming you’ve already said yes to using Migration Assistant on your new Mac) and make sure some codes match. Both machines need to be on the same wireless network and you’ll need to find the Holy Grail for the eternal life it bestows upon you. To begin with, it’ll tell you the migration will take longer than scientists think the universe will last for. The timer will start to look more reasonable once it gets started, although it’s fairly pointless as a timer because it goes nowhere for ages and then suddenly drops by 90 minutes. You’ll still be looking at a number of hours. Mine took about six hours and I had a bit less than 300GB of data on my old machine. I was getting a transfer rate of 13-19MB/second.

Migration Assistant does a fine job, though. It's a far cry from the days when I used to transfer everything manually. Most things are just there. I was quite surprised to find my Node/NPM environment intact and working on the new machine. If something wasn't going to be there, I thought it might be a command line tool like that.

![M1 MacBook Air migrating data.](/assets/images/posts/2020/12/2020-12-06-m1-macbook-air-migration.jpg "caption=M1 MacBook Air (13 inch) migrating data.|title=M1 MacBook Air (13 inch) migrating data.|@itemprop=image")

I won't be decommissioning my old machine straight away, though. I need to be absolutely certain I have everything I need from it.

Once the transfer is complete there are few more screens of setup to complete and you're good to go.

The first time you run an app that is not compatible with the M1 architecture, the computer will ask if you want to install Rosetta, which you do. It installs in a few seconds and will thereafter translate Intel apps for the M1 architecture on the fly. It does all this in the background and you will be impervious to it. There's no performance hit that I could detect.

See the [Notes](/m1-macbook-air-16gb-review/#notes) as the end of this article for the (very few) things I needed to do to above and beyond the Migration Assistant.

## macOS 11

I am of course in Big Sur now. This is not a review of that OS and I had no problems jumping straight in and using it. macOS upgrades tend to be more incremental than Windows in terms of the user experience. I remember when Windows went from 7 up to 8: I couldn't find a thing (still can't). That's not the case with macOS — things are still where I'd expect them to be.

I've read enough about Big Sur to know there are plenty changes under the bonnet, but the thing I've noticed most is that rounded-square icons are the new vogue.

Suffice it to say for this article that the learning curve is shallow for Big Sur.

## Screen size difference

The biggest downside of this entire transaction for me is the smaller screen. I thought I'd be used to it because I use my 12.9 inch iPad Pro for about 50% of my computing day, but of course iPad apps are designed specifically with those screen sizes in mind.

What you get on the smaller MacBook is the same ratio, just at a smaller scale. This tests my failing eyesight a bit. In the long-term I plan to get a monitor, but I might need to tweak the system font size for now.

![M1 MacBook Air (13 inch) next to 2013 MacBook Pro (15 inch).](/assets/images/posts/2020/12/2020-12-06-m1-macbook-air-2013-macbook-pro.jpg "caption=M1 MacBook Air (13 inch) next to 2013 MacBook Pro (15 inch).|title=M1 MacBook Air (13 inch) next to 2013 MacBook Pro (15 inch).|@itemprop=image")

## Performance

The new M1-powered MacBook Air is more powerful than my 2013 MacBook Pro in every way, and significantly so. It's measurable too:

- GeekBench CPU has both single and multi-core twice as high for the M1.
- GeekBench Compute rates the M1 20x higher.
- CineBench has both single and multi-core twice as high for the M1.
- BlackMagic disk speed rates the M1 over six times faster at both read and write.

Sure, I'm comparing a new MacBook Air with a machine that's nearly eight years old, but that's my perspective here. To me, these are fantastic performance improvements. My old MacBook Pro was specced as high as it would go; my new machine is entry-level.

Numbers don't tell the whole story. It's like judging a car's performance on its 0-60 alone. What you see in real-world, over all performance improvements may vary.

In general, everything is more instantaneous. Opening Final Cut Pro, for example, takes about half the time on the new machine. I did a very unscientific test of counting one-one-thousand, two-one-thousand etc., as the app was opening. It took up to six-one-thousand on the old machine but only up to three-one-thousand on the new one.

For no other reason than it occurred to me, I loaded a 344MB .mov file into Handbrake and converted it to a .mp4 file. On the 2013 Pro it took 3 minutes and 49 seconds; on the new Air it took 2 minutes and 47 seconds.

Suffice it to say the new Air noticeably quicker than my new machine. If you have a more recent MacBook I would imagine there would be a smaller difference, but the reports I've read would suggest the M1 will still compare favourably.

## Conclusions

I'm happy enough with my purchase. I've gone in at the entry-level of the M1 but I've still got a machine that's significantly better than my old one in every way.

Other than the screen size, that is. That might take some getting used to but I went in with my eyes open there. It was my choice and I'll probably pair an external display with it at some point. I'd been thinking about doing that with my old MacBook for a while anyway.

## Detailed performance comparison

Below are some screenshots of performance metrics that compare my old 2013 MacBook Pro with my new 2020 M1 MacBook Air. These consist of GeekBench CPU, GeekBench Compute, BlackMagic (disk speed) and CineBench (graphics rendering).

Performance on both machines was tested with nothing else running, so it's just an indicator rather than an accurate reflection of real-world use.

![Late 2020 Air v early 2013 Pro, GeekBench CPU.](/assets/images/posts/2020/12/2020-12-06-geekbench-cpu.jpg "caption=Geekbench CPU, 2013 MacBook Pro (left) vs 2020 M1 MacBook Air (right).|title=Geekbench CPU, 2013 MacBook Pro (left) vs 2020 M1 MacBook Air (right).|@itemprop=image")

![Late 2020 Air v early 2013 Pro, GeekBench Compute.](/assets/images/posts/2020/12/2020-12-06-geekbench-compute.jpg "caption=Geekbench Compute, 2013 MacBook Pro (left) vs 2020 M1 MacBook Air (right).|title=Geekbench Compute, 2013 MacBook Pro (left) vs 2020 M1 MacBook Air (right).|@itemprop=image")

![Late 2020 Air v early 2013 Pro, CineBench.](/assets/images/posts/2020/12/2020-12-06-cinebench.jpg "caption=CineBench, 2013 MacBook Pro (left) vs 2020 M1 MacBook Air (right).|title=CineBench, 2013 MacBook Pro (left) vs 2020 M1 MacBook Air (right).|@itemprop=image")

![Late 2020 Air v early 2013 Pro, BlackMagic.](/assets/images/posts/2020/12/2020-12-06-blackmagic.jpg "caption=BlackMagic Disk Speed, 2013 MacBook Pro (left) vs 2020 M1 MacBook Air (right).|title=BlackMagic Disk Speed, 2013 MacBook Pro (left) vs 2020 M1 MacBook Air (right).|@itemprop=image")

![M1 MacBook Air.](/assets/images/posts/2020/12/2020-12-06-m1-macbook-air-34.jpg "caption=Late 2020 M1 MacBook Air (13 inch).|title=Late 2020 M1 MacBook Air (13 inch).|@itemprop=image")


## Notes

<a id="notes"></a>

Some notes about things that needed doing above and beyond the Migration Assistant's work.

### Time Machine Backup

When you start a Time Machine backup on the new machine, you can [inherit the backups](https://support.apple.com/en-gb/guide/mac-help/mh35732/mac) you've already taken on the old machine. You may prefer to start afresh, but be prepared for a long wait if you choose to inherit that backups. It works, but it takes ages.

### Backblaze

The Migration Assistant copies Backblaze over, but it will tell you that your backup is 'Safety Frozen'. There's a procedure you need to follow to 'inherit' your license on the new computer: [https://help.backblaze.com/hc/en-us/articles/217666178-Safety-Freeze-Your-Backup-is-Safety-Frozen-](https://help.backblaze.com/hc/en-us/articles/217666178-Safety-Freeze-Your-Backup-is-Safety-Frozen-)

Have your Backblaze login details handy and follow that procedure.

 





