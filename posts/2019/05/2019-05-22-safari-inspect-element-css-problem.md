---
excerpt: >-
  I've had a strange problem with Safari's '__Inspect Element__' for a while now
  and noticed it would be accompanied by a "__This webpage is using significant
  energy__" message at the top of the Safari screen.. I finally got around to
  fixing it today.
description: >-
  How to fix a problem with Safari's 'Inspect Element' where the DOM tree seems
  to bounce all over the place.
title: Safari inspect element CSS problem
date: 2019-05-22T19:30:00.000Z
tags:
  - Tech
  - Web Development
  - Safari
  - CSS
  - Error
  - Help
---
I’ve had weird problem with Safari’s _Inspect Element_ command for some time now. Whenever I used it on one of my sites, the Inspect Element’s DOM tree would bounce all over the place as follows:

<img src="/assets/images/posts/2019/05/2019-05-22-safari-inspect-element.gif" />

This effectively rendered the facility useless because I couldn’t click on anything to actually inspect it. I noticed it happening months ago but only got around to investigating it today.

It was, I noticed, also accompanied by a "__This webpage is using significant energy__" message at the top of the Safari screen. The message doesn't come up straight away but does so if you leave the browser window open on that problematic page for a while.

It seems a bit of CSS was screwing things up. I use SCSS and I have a ‘reset’ import that sets suitable cross-browser defaults. It’s something I cobbled together from various popular SCSS frameworks and it was in there that I finally tracked down the problem.

It turns out the following block of (S)CSS was causing the problem:

```css
// Ensure box sizes are inherited. 
*, *:before, *:after {
    box-sizing: inherit;
}
```

Specifically, it was the combination of the `*` selector and the `*:before` selector. Either one of those on their own is fine but using both together causes the problem I encountered.

I’m not entirely sure why that combination of selectors causes a problem but it looks (in the Element Inspector) as if it’s repeatedly applying those selectors, which is why it all goes a bit batshit.

I fixed it by removing the  `*:before` selector and my SCSS now looks like this:

```css
// Ensure box sizes are inherited. 
*, *:after {
    box-sizing: inherit;
}
```

If I need box-sizing on a particular ‘before’ element I just apply it directly and that works fine.

I couldn’t find a hit for this problem on the Interweb, which is why I thought I’d post this article. I've been using that particular SCSS reset for a number of years and Safari's Inspect Element _used_ to work, so something must have changed in one of the recent releases of Safari.

Anyway, the fix I applied above got rid of my inspect element problem _and_ the "__This webpage is using significant energy__" message from the top of the Safari window. Searching for the "significant energy" message on Google has one or two hits for alleged fixes and they might be useful if it's a third party site you're receiving the message for, but they generally only tell you how to hide the message. If it's your own site then it's better to actually fix the problem as I've detailed here. Even if you're not hitting the exact same problem I did, it should be a clue that CSS can cause the message.


