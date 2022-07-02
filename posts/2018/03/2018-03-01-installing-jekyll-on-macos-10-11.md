---
title: Installing Jekyll on macOS (OSX) 10.11+
date: 2018-03-01T09:55:00.000Z
type: post
description: >-
  A description of how I installed Jekyll on macOS 10.11+, including how to get
  past some of the errors I encountered.
leader: >-
  I encountered errors installing Jekyll on macOS 10.12.6, but I managed to
  prevail. There's some trial and error here but it should help you get Jekyll
  installed.
tags:
  - Jekyll
  - Tech
  - macOS
  - Web Development
  - Help
excerptImage: /assets/images/posts/2018/03/2018-03-03-jekyll-site-ss.png
excerpt: >-
  __The process I used to install Jekyll on MacOS 10.11+ (actually 10.12.6)__
  after encountering errors such as '*You don't have write permissions*',
  '*public_suffix requires Ruby version >= 2.1*', '*Your Xcode (7.2.1) is too
  outdated*' and '*rbenv shell command not found*'. It was a bit of a nightmare,
  but I got there in the end.
---
[//]: # (@simpleimg | /assets/images/posts/2018/03/2018-03-03-jekyll-site-ss.png | alt=Jekyll icon. | class=s25 left|@itemprop=image )

This is how I managed to install [Jekyll](https://jekyllrb.com). Your experiences may differ but you might find this article useful if you encounter the same problems I did. I’m not going to bother explaining this stuff in detail — such as what every Terminal command is actually doing — because (a) I doubt you care and (b) I’m not entirely sure myself. I’ll just tell you what commands I issued at Terminal and what happened when I did so.

## First Installation Attempt - Raw
The prescribed way to install Jekyll on MacOS is via:

```bash
gem install jekyll bundler
```

But you might get an error along the lines of:

```plaintext
You don't have write permissions for the /Library/Ruby/Gems/2.0.0 directory.
```

If you do get that error, you might be tempted to run the first command again with `sudo` on the front. You can certainly try that but you might then get the following error:

```plaintext
public_suffix requires Ruby version >= 2.1.
```

Or, at least that’s the error I got.

## Second Installation Attempt — Homebrew
This is what’s known as a revolting development and I find shouting at the computer screen is a good way to relieve stress. The Jekyll people have provided a way around this here: [https://jekyllrb.com/docs/troubleshooting/#jekyll--mac-os-x-1011](https://jekyllrb.com/docs/troubleshooting/#jekyll--mac-os-x-1011)

So now you need to install something called Homebrew, which is not nearly as enjoyable and alcohol-laden as it sounds. The command is as follows:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

It will tell you what it’s going to install, whereupon you need to press return to kick it off. It’ll do its business, providing a load of messages you won’t be interested in as it does so.

You can then try installing Ruby via:

```bash
brew install rbenv ruby-build
```

This stands a good chance of failing too, maybe with a message along the lines of:

```bash
Error: Your Xcode (7.2.1) is too outdated.
Please update to Xcode 8.3.3 (or delete it).
Xcode can be updated from the App Store.
```

If you get this error, read on.

## Third Installation Attempt - Xcode Fix
I’d suggest a petulant stomp of the feet here but then go into the App Store and install Xcode, even if it’s already on your machine. This takes 10-15 minutes but you should now have the requisite version of Xcode to satisfy all this Homebrew/Ruby nonsense.

Once Xcode is downloaded, open it up and let it configure.  I’d then suggest installing Xcode’s command line tools with:

```bash
xcode-select --install
```

This will present a GUI panel asking you to confirm the install. Just let it run — it takes about 5 minutes.

You should then be able to run the following commands:

```bash
brew update
brew install rbenv ruby-build
rbenv init
RUBY_CONFIGURE_OPTS=--with-readline-dir="$(brew --prefix readline)" rbenv install 2.4.1
rbenv global 2.4.1
rbenv shell 2.4.1
```

## Fourth Installation Attempt - Shell Issues
If any of the above commands fail, maybe with something like `rbenv shell command not found`, try the following:

```bash
pico ~/.bash_profile
```

Add the following line:

```bash
eval "$(rbenv init -)"
```

CTRL+X out of pico, restart your Terminal session and try again.

If you’ve been lucky, you should now be at the point where you can try installing Jekyll again:

```bash
gem install jekyll bundler
```

If anything else has gone wrong that isn’t covered here I’m afraid you’re on your own, but this worked for me and I could then shut down the 964 Google Search windows I had open in my browser from looking all this stuff up.

Modern install process my arse. Although Jekyll itself is pretty good and it’s worth persevering as long as you’re happy at the Terminal window.

