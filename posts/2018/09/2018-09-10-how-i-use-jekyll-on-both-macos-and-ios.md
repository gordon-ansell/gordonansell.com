---
excerpt: >-
  This is the process I use to __publish articles via Jekyll from either macOS
  or iOS__. Jekyll won't run on iOS, so I had to install it on my Linux server.
  It's not a perfect process because I can't sync local files between macOS and
  iOS, but it serves me okay.
description: >-
  Whereas Jekyll will run on macOS, it won't run on iOS, so I had to install it
  on my Linux server. This is the cross-platform process I use to publish
  articles via Jekyll.
title: How I use Jekyll on both macOS and iOS
date: 2018-09-10T07:00:00.000Z
tags:
  - Jekyll
  - Tech
  - macOS
  - iOS
  - Linux
  - Web Development
  - Help
---
{% simpleimg "/assets/images/posts/2018/09/2018-09-10-jekyll-macos-ios-2.png", alt="Jekyll on iOS.", class="s33 left" %}
## Bear Writer
I do virtually all my writing in [Bear Writer](https://bear.app) these days: blog articles, journals, notes and just about everything else. That means I write in [Markdown](https://daringfireball.net/projects/markdown/syntax) as a matter of course, which is handy because Jekyll likes Markdown too.

Bear Writer does a fine job of syncing between macOS and iOS, so I always have my original articles available on both platforms.

## Coda
I do all my HTML/CSS coding in [Panic’s Coda](https://panic.com/coda/), which has versions for both macOS and iOS. Coda keeps a local set of my website files on both my MacBook and my iPad.

When I’m happy with my article in Bear, I copy it as Markdown and paste it into a file under the `_posts` directory on my local copy of the website files. I add some YAML front matter and I’m ready to go.

## Jekyll
Whereas a [Jekyll](https://jekyllrb.com) environment can be set up on macOS, it can’t on iOS, so I have my Jekyll environment on my Linux server in a directory outside of the web root. I use Coda to FTP my files from my local machine — either my MacBook or my iPad — to the server’s Jekyll environment.

I then use either the native Terminal window (on macOS) or Coda’s Terminal window (on iOS) to SSH into my Linux server.

I then start my Jekyll development server with:

```bash
JEKYLL_ENV=development bundle exec jekyll serve —host=123.123.123.123
```

Where _123.123.123.123_ is my Linux server’s IP address.

I can now browse to `http://123.123.123.123:4000` and check that I’m happy with the new article (and the site in general).

## Live Sync
If I’m happy with the changes I’ve made, I then sync those changes (which, remember, are outside of the web root at the moment) with the live site.

I have a shell script as follows to perform the sync:

```bash
#!/bin/bash

bundle
JEKYLL_ENV=production jekyll build
rsync -av _site/ ../../public_html
```

That’s it, my article is live.

![Jekyll on iOS.](/assets/images/posts/2018/09/2018-09-10-jekyll-macos-ios-1.jpg "caption=Local files are copied to a directory outside the web root.|title=Local files are copied to a directory outside the web root.|@itemprop=image")

## Problem
The problem with this setup is that I can’t sync my local files between macOS and iOS so I have to remember to download the files I’ve changed on the machine I _didn’t_ make the changes on (if you see what I mean). Essentially I have to manually sync the files between macOS and iOS via the Jekyll environment on the Linux server.

Nothing is ever perfect in life and iOS Coda can’t point its local files to Dropbox. If it could, that would be a realistic way in which I could keep my local files matched up between iOS and macOS.

Panic (the makers of Coda) do have something called [Panic Sync](https://panic.com/sync/) but that only syncs config files and can’t sync a local file system.

## Alternatives
There are other ways you could achieve this. You could [install dropbox on your Linux server](https://www.dropbox.com/install-linux) and maybe [follow David Relich’s tutorial](https://www.davidrelich.com/2018/01/24/installing-jekyll-with-dropbox/) or [Tyler Hall’s tutorial](https://tyler.io/publishing-your-blog-with-dropbox-and-jekyll/), but I’m content enough with the way I’ve got things working.


