---
excerpt: >-
  I'm a bit fed up with 'robot tests' that websites ask me to pass before
  permitting me access. Half the time I simply don't bother and visit another
  website instead. Is there no better way to do this?
description: >-
  Is there a better way than those currently in common use to check if a website
  visitor is a robot?
title: I am not a robot
date: 2019-07-24T17:20:00.000Z
tags:
  - Internet
  - Tech
  - Opinion
---
![Just a random robot.](/assets/images/posts/2019/07/2019-07-24-robot.png "class=s25 right|@itemprop=image")
I feel affronted every time a website tests me to make sure I’m not a robot. It’s not that I mind being thought of as a robot — isn’t that a compliment anyway? — it’s that I have to be involved in a tedious process that often doesn’t benefit me much.

_They_ want to keep robots out of _their_ website. Since when is this my problem? I don’t really care if robots visit their site yet they strong-arm me into becoming part of the process. 

You might argue I subsequently benefit from being able to access said website but a lot of the time it’s just not worth the effort. You might also argue I'm just a grumpy old so-and-so and I should be only too glad to help keep the web functioning nicely. Maybe you're right but I'll press on anyway.

One I encounter frequently is a set of pictures such as this (and this, as far as they go, is one of the more legible sets of images):

![Robot check that asks users to spot buses.](/assets/images/posts/2019/07/2019-07-24-bus.jpg "@itemprop=image")

They’re asking me to pick out any buses from the grainy images they’ve provided. I don’t want to be a bus spotter. Where's the entertainment factor in that? I’d get more joy from giving away all my worldly possessions and taking up life as a turnip.

The whole eyesight thing is a problem too. Those images are small and blurry. I can only presume a young person came up with the idea to use such images because my aging eyes just don’t work that well these days, even with spectacles. I’ve left the house with a saucepan on my head instead of a hat before now, simply because my eyesight is so rubbish. Please, at least make the images a bit bigger.

I got to thinking there has to be a better way, by which I mean a way to check if I’m a robot without having to inconvenience me in any way.

Google came up with a way to replace CAPTCHA tests. These are the tests where you have to enter the text presented to you in an illegible font on an image as grainy as my buses were. I often have to refresh CAPTCHA images half a dozen times before I get one I can read. Each time I do that I’m probably making the website more suspicious about my claims to be a carbon-based organism.

Google created reCAPTCHA as an alternative where you just tick a box to confirm you’re not a robot. Google doesn’t just take your word for it of course, they reckon they can tell whether or not you’re a robot just by the way your mouse moves prior to ticking the confirmation box.

This is better than grainy text or images but it has its limitations. It requires a mouse for one thing and of course we just prod a lot of computers with our fingers these days. It’s not 100% accurate either — presumably some people do very good impersonations of a robot.

I’ve never really looked at the back-end code for these robot testing things but I’m picturing something along the lines of a spam check; some scoring mechanism that tallies up points and if you don’t cross a certain line it’ll request a manual confirmation on your part. But tinkering with this is unlikely to help.

So what could be a better way?

My first thought would be biometrics but they [can be faked](https://www.wired.com/story/deepmasterprints-fake-fingerprints-machine-learning/ "See how biometric fingerprints can be faked.") and, anyway, maybe biometrics are better suited to determining _who_ you are rather than _what_ you are. I would imagine faking any old human fingerprint — rather than a specific one — is fairly easy. Furthermore, a lot of the world’s computers don’t yet have the ability to take biometric input.

I did some searching and I was hoping to find a brainy solution to the problem and that websites were just too lazy to implement it. Then I could have climbed aboard my high horse and served up a discourse about incompetent websites. But I didn’t find such a solution. Maybe this is harder than it looks. 

So then I started thinking, well, okay, let’s accept we have to confirm we’re not robots. Why do I have to confirm it for every site? Can’t we centralise some sort of robot-checking service that passes me as human for every website? Perhaps in a similar way to how we (semi-)centralise login checking with things like OpenID, Facebook or Google.

There may be some problems with that. It would have store me (or my computer) either in a database or via some sort of cookie on my own computer and that might leave gaps which a suitably clever robot could crawl through. However, those same gaps must exist for individual websites too, so I can’t see how it would add any additional problems.

At least that way we could reduce the number of checks we’d have to do and I wouldn’t have to get a magnifying glass out to spot buses, traffic lights or bridges. 

So if somebody could knock up such a service before the month’s out I’d be ever so grateful.

