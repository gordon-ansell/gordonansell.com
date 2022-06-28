---
title: Safari changes format of downloaded file
date: 2022-03-19T16:00:00.000Z
excerpt: >-
  Safari will sometimes change the format of a file after it downloads it. This
  can be switched off by a setting in safari preferences.
description: >-
  Safari will sometimes change the format of a file after it downloads it. This
  can be switched off by a setting in safari preferences.
inline: true
tags:
  - Tech
  - Safari
  - macOS
  - Interworx
---
I'm in the process of transferring to a new VPS server, one that uses Interworx as its control panel like my old one did. The most efficient way to move all the files across is to take a Siteworx backup on the old server and move that somewhere publicly accessible (`public_html` or wherever), then you can `wget` the file in your shell on the new server and import it into Interworx.

Because I'm a moron, I tried moving one of the sites a different way. I took a backup on the old server, downloaded it my MacBook and then FTP'd it to the new server. There can be a gotcha in that process. If you have '*Open "safe" files after downloading*' ticked in your Safari preferences, it will unzip the file and turn it into a standard 'tar' file. In my case Interworx then threw its toys out of the pram trying to deal with it. It's as if someone had come to my door asking to borrow a drill and I'd handed them a blancmange instead.

It's easily rectifiable, though — just untick that option in your Safari preferences.

![Safe files preference in macOS Safari.](/assets/images/posts/2022/03/2022-03-19-safe-download-ss.jpeg "@itemprop=image")
