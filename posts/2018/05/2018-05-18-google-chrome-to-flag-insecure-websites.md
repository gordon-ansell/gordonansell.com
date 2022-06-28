---
excerpt: >-
  ArseTechnica article about how Chrome will flag insecure websites rather than
  secure ones.
description: >-
  ArseTechnica article about how Chrome will flag insecure websites rather than
  secure ones.
title: Google Chrome to flag insecure websites
date: 2018-05-18T12:10:00.000Z
inline: true
tags:
  - Tech
  - News
  - Citation
externalLink: >-
  https://arstechnica.com/gadgets/2018/05/as-the-web-moves-toward-https-by-default-chrome-will-remove-secure-indicator/
citation:
  title: >-
    As the Web moves toward HTTPS by default, Chrome will remove “secure”
    indicator
  site:
    name: ArsTechnica
    url: 'https://arstechnica.com'
  author:
    name: Peter Bright
---
Chrome currently specifically flags secure (https) websites but it’s going to be changed so that it specifically flags insecure (http) websites instead.

The trouble with this is it’s a blunt instrument. Take this site, for example. It's statically generated and has no forms through which to submit personal data, so the http protocol is fine. There are no relevant security issues. 

This site does, as it happens, support https and I encourage the use of it as a basic principle. Indeed, this site redirects to https automatically. 

So I shouldn’t really have an issue with this but I’m not keen on Google becoming the sole arbiter of what’s secure and what isn’t. I’m particularly not keen on the use of the https protocol as the only security factor under consideration because a lot of sites are certainly _not_ insecure when accessed via http. It’s just not true and by incorrectly flagging sites as insecure, Google could be damaging their business without justification.



