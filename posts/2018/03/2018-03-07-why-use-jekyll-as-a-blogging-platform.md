---
title: Why use Jekyll as a blogging platform?
date: 2018-03-07T07:20:00.000Z
description: >-
  Why I chose to use Jekyll, a static blog generation app, to power this site
  rather than something like Wordpress.
tags:
  - Jekyll
  - Tech
  - Blogging
  - Opinion
  - Web Development
excerpt: >-
  __My reasoning behind using Jekyll to power this site__. I've used Wordpress
  on many blogs in the past but I didn't need all the features it provides for
  this blog and a static blog generation app seemed more appropriate. This
  article looks at how I came to decide to use Jekyll.
---
I’ve been involved with quite a few blogs over the years, most of which have been based on [Wordpress](https://wordpress.org "Find out more about Wordpress."), which is fine if you need a user-friendly GUI, dynamic content, lots of plugins and support for multiple, non-techie authors.

There are however problems with Wordpress. It has the inherent security problems of all dynamic CMS/blogging software. There is a database at the back-end, which leaves it open to [SQL injection](https://en.wikipedia.org/wiki/SQL_injection "Find out more about SQL injection."); a lot of the site is driven by dynamic forms, which leaves it open to [cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery "Find out more about CSRF."); there is a whole user login back-end, which leaves it open to user name and password hacking.

Essentially it’s a high-maintenance platform to build a blog on. If you have the time to maintain it and you _need_ all the features it provides, then Wordpress may be a reasonable choice. But it’s overkill if all you want is a simple blog. There are better options.

I wanted a static blog without the hassle and worry that comes with Wordpress and after some research I decided the software I’d use would be [Jekyll](https://jekyllrb.com "Go to the Jekyll site.").

Some words of warning if you go this way, though. You have to be prepared to get down and dirty with the command line (Terminal on MacOS or the DOS prompt on Windows) if you’re going to use Jekyll. If this sort of thing puts the willies up you, it may not be your best choice.

You also have to accept that some things will not be given to you without work: a comments system, a multi-user back-end (or any back-end at all, in fact), forms (such as contact forms) and the vast array of plugins provided by software like Wordpress. You can get some of those things on a Jekyll site but you’ll need to roll up your sleeves and think a bit more laterally, leveraging third-party facilities where necessary.

Most of that was of little concern to me. I didn’t want a comments system. Having moderated thousands of comments over the years, I was fed up with it. It’s a huge time commitment on a popular blog; the spammers are relentless, you have to deal with in-comment arguments and abuse, and it’s generally a very unrewarding pastime.

I didn’t need much in the way of facilities either. I just needed a simple means of publishing articles. Jekyll was the right choice for me, which doesn’t mean it will be for you. But I’d urge you to at least consider it (or another static blogging platform) before resorting to the default position of Wordpress. Static blogs are faster, less error-prone and more secure. They are worthy of consideration. If after some thought you still decide on Wordpress (or another dynamic software platform) then so be it.

With Jekyll, you build your site locally and then simply transfer a static site to your web host. The article format is based on [Markdown](https://en.wikipedia.org/wiki/Markdown "Find out more about Markdown.") and the site structure is built via raw HTML and CSS (or SASS), ably assisted by the [liquid templating system](https://shopify.github.io/liquid/basics/introduction/ "Find out more about the Liquid Templating system.").

The installation of Jekyll could hardly be called ‘modern’. As I’ve previously mentioned it’s all achieved at the command line. I’d suggest this limits it to the technically-inclined, by which I mean you have to be prepared to have a go. You don’t need to be an out-and-out computer boffin with a beard, spectacles and questionable taste in fashion, but you do need to be prepared to play around with things and then Google for answers when they don’t work.

[I had some problems installing Jekyll, which I’ve documented on this site](/installing-jekyll-on-macos-10-11). But now that I’ve got myself up and running, I really like the Jekyll platform and I wouldn’t hesitate to recommend it.

