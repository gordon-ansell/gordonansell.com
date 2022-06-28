---
title: The progress of Static Site Generators
date: 2022-05-10T16:35:00.000Z
excerpt: >-
  I chose to use a Static Site Generator (SSG) as opposed to Wordpress when I
  started this blog in 2018. The world of SSGs has changed since then, and many
  of them are now Dynamic Site Generators.
description: >-
  How Static Site Generators (SSGs) are becoming dynamic site generators anyway.
  Is this necessary or desirable?
tags:
  - Web Development
  - SSG
  - Tech
---
It is interesting the way Static Site Generators (SSGs) have progressed. Websites were all static in the beginning — you'd hand code some HTML in a text editor and upload it to a server. The process went something like this:[^1]

![How things were done in the old days.](/assets/images/posts/2022/05/2022-05-10-serverless-1.jpeg "@itemprop=image")

If people wanted interactivity, perhaps like leaving a comment about something the site owner has written, they might send an email to the web developer. The web developer would then have to get out of bed, modify the page to include the comment and transfer that page back to the server.

This could take time because web developers don't like getting out of bed, and it might never happen at all. Large parts of the web were read-only.

Server-side technologies improved and became for freely available, and with that came Dynamic Site Generators, such as Wordpress. They work a bit like this:

![Dynamic site generators.](/assets/images/posts/2022/05/2022-05-10-serverless-2.jpeg "@itemprop=image")

Now everything's done on the server and there is no local copy of the site on the developer's machine. The web server chucks everything at Wordpress which builds the page from data held in a database, and then it returns that back to the user.

The advantage here is that it's dynamic. Because the users have (limited) direct access to the software that generates the page, they can modify the data. They can, for example, add a comment to an article and see that article update in (almost) real time. The web became interactive.

There are disadvantages to this approach. Because the user has direct access to the page generation software, there are additional security concerns. Server software can be hacked and fiddled with, and this really is something that gets web developers out of bed. Dynamic sites are slower too, all other things being equal. Serving up a static page is always going to be quicker than serving up a page built on the hoof by server-side software.

Then, in response to some of those concerns, along came Static Site Generators. The first I came across was [Jekyll](https://jekyllrb.com), but there are plenty SSGs to choose from, including popular ones like [Eleventy](https://www.11ty.dev) and [Hugo](https://gohugo.io).

This took us back to this:

![The original SSGs.](/assets/images/posts/2022/05/2022-05-10-serverless-1.jpeg "@itemprop=image")

It's as if we'd gone full circle. Although not *quite* full circle. Some SSG users would leverage third-party server-side software to, for example, adorn their websites with comments despite the sites' static nature. [Disqus](https://disqus.com) is an example of such software.

This wasn't good enough, though. Clever people sought ways to have their cake and eat it. They wanted static sites, but they wanted them to be dynamic too — a kind of superposition of both states. This led to so-called *serverless* environments. The term is a misnomer because there absolutely is a server involved. What it really means is there's no publicly accessible, always available, content management software (such as Wordpress) running on the server.

The first step is to move the build environment to a private part of the server. If we just did that, we'd end up with something like this:

![Modern SSGs.](/assets/images/posts/2022/05/2022-05-10-serverless-3.jpeg "@itemprop=image")

At this stage our site is still very much static and read-only, but if we allow the user to call a serverless function we can start to include some dynamics. An update — a comment, maybe — might, very broadly, look like this: 

![Updates with serverless SSGs.](/assets/images/posts/2022/05/2022-05-10-serverless-4.jpeg "@itemprop=image")

You need a server that allows HTTP access to serverless functions, but what you end up with is a quasi-dynamic site that still serves up static pages. There are providers who will supply the microservice architecture to allow you to do this: [CloudFlare](https://www.cloudflare.com), [Netlify](https://www.netlify.com) and [Amazon AWS](https://aws.amazon.com) to name three popular ones.

It helps to have a techie background if you're going to do this sort of thing — or even if you plan to delve into SSGs at all — but anyone can do it if they have time and a willingness to learn. It is a bit of a palaver, though.

You might be wondering why bother doing this. Why not just use Dynamic Site Software if a dynamic site's what you want? It's a question I'm asking too.

I'm a sucker for a technical challenge, and when I started this blog I was drawn to SSGs because it was something to learn. After years of maintaining Wordpress sites, it made a change. I do appreciate the advantages of an SSG, although it's a judgement call as to whether the *potential* security implications and slower responses justify doing away with a properly dynamic site. In my case it was an easy call because I required nothing dynamic on my site.

I think frequency is the issue here. An SSG with serverless dynamics makes some sense if a site only needs to be dynamic occasionally. But if you run a site that gets a lot of comments, has a forum, or needs all sorts of dynamic updates on a regular basis, you're probably better off using site generation software that's designed to be dynamic from the outset.

Or at least that's my take on things.


[^1]: Apologies about the dreadful images I draw. To say they look like the were drawn by a 5 year old is an insult to all 5 year olds. I'm incompetent with every bit of image software I've used, and I have no natural artistic ability.
