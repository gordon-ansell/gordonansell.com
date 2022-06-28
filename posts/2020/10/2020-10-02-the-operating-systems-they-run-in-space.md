---
excerpt: >-
  An article on ArsTechnica about the real time operating systems they run
  inspire.
description: >-
  An article on ArsTechnica about the real time operating systems they run
  inspire.
title: The operating systems they run in space
date: 2020-10-02T13:15:00.000Z
inline: true
tags:
  - Science
externalLink: >-
  https://arstechnica.com/features/2020/10/the-space-operating-systems-booting-up-where-no-one-has-gone-before/
citation:
  title: >-
    Definitely not Windows 95: What operating systems keep things running in
    space?
  site:
    name: ArsTechnica
    url: 'https://arstechnica.com'
  author:
    name: Jacek Krywko
---
I found the article I link to quite interesting. It's about the operating systems they use in space.

> We’ve got extremely demanding requirements for this mission.
> 
> Typically, rebooting the platform such as this takes roughly 40 seconds. Here, we’ve had 50 seconds total to find the issue, have it isolated, have the system operational again, and take recovery action.

It goes on to mention how their operating systems have to be deterministic. That means an app can't take 10 seconds to open one day and 15 seconds on another day. Anything the OS runs must take the same amount of time each time it's  executed, down to the millisecond.



