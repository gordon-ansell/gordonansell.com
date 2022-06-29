---
excerpt: >-
  I've recently transitioned to Interworx as a result of the price increases
  cPanel has imposed. These are my notes and comments about that.
description: >-
  Some notes about cPanel's price increases and transferring to Interworx in
  response to that.
title: cPanel’s price increases and moving to Interworx
date: 2020-01-19T07:15:00.000Z
tags:
  - Interworx
  - Tech
  - cPanel
  - Help
---
I’ve been cPanel user for many years but back in June last year [they announced they were changing their pricing structure](https://blog.cpanel.com/introducing-account-based-pricing/ "Read the cPanel blog article.") (and they published a further explanatory updated to that post [here](https://blog.cpanel.com/account-based-pricing-updates/ "Read the update.")). They used to license the product by server or VPS and you’d get unlimited accounts with that license. They are now licensing by account and that makes it more expensive for most users.

On my personal server, it would only have meant a $10/month increase _at the moment_ but I would no longer have been free to add cPanel accounts at will without risking a further price increase. 

For servers with a customer base it may be that those customers demand cPanel and you might have no choice but to suck up any price increase if you want to keep those customers, but on a big server with lots of accounts it’s going to get expensive.

I’m not going to criticise cPanel over their price increases. If that’s what they need to do to remain viable as a company then that’s what they must do. However, [we do have choices when it comes to control panels](https://en.wikipedia.org/wiki/Comparison_of_web_hosting_control_panels "See Wikipedia's comparison of control panels.") and my data centre, [Future Hosting](https://www.futurehosting.com "More about Future Hosting."), offered to transfer me from cPanel to [Interworx](https://www.interworx.com "Find out more about Interworx.") to avoid the price increase. I took them up on this offer.

I think cPanel missed a trick here. I would get nothing more of any use to me for the extra $10 a month, so why would I want to pay $10 more now and possibly additional money in the future? Had they offered something extra to go along with the price increases, I might have at least thought about staying with cPanel. I suspect they're hoping their market-dominant position and non-techie users' preference for cPanel will see them through this. They may be right.

The transfer took place last week and I’ve spent some time since then getting to grips with Interworx, so I thought I’d share my opinions on it.

Let’s get this straight at the outset: Interworx is not as expansive as cPanel. It doesn’t offer as much control over the server from the GUI as cPanel does. It is likely you’ll need to be more comfortable with a console and command line than you would need to be with cPanel, although if you’re administering a Linux server that should be a given anyway.

That said, it offers a good range of facilities and should cover _most_ of what you’re likely to need and there are parallels with cPanel. Nodeworx is the equivalent of WHM and Siteworx is equivalent of cPanel.

## Themes

![Screenshot of the Interworx server GUI.](/assets/images/posts/2020/01/2020-01-19-interworx-screen.jpg "class=s66 left|@itemprop=image")My biggest criticism of Interworx is probably how crap most of the default front-end themes are on an iPad screen. I split my time between a MacBook and an iPad these days and most of the Interworx themes have such a tiny font on the iPad that they’re rendered illegible unless you finger-expand the text. The best is probably the _Heliotrope_ theme, although there are probably third-party themes more suited to the job (I haven’t looked yet).

## Firewall

Interworx ships with APF firewall by default. I used APF quite extensively in the past but have been using CSF (ConfigServer Firewall) in recent years and fortunately CSF is compatible with Interworx as well as cPanel. The install is easy enough and it replaces Nodeworx’s firewall page in the GUI with a pointer to the CSF firewall. CSF’s GUI in Interworx looks exactly the same as it does in cPanel.

If you do replace APF with CSF, the LFD log will be filled up with messages such as the following:

```html
Jan 15 00:05:53 toonserver lfd[18325]: InterWorx: Reapplied apf stub
```

There’ll be thousands of them so you’ll probably want to suppress those messages. To do that you need to edit `/etc/rsyslog.conf` as root and add the following line at the top of the `#### RULES ####` section:

```html
:msg, contains, "InterWorx: Reapplied apf stub" stop
```

While I was there, I also noticed Interworx was filling up /var/log/messages with the following message:

```html
Jan 15 00:05:03 toonserver clamd[1834]: SelfCheck: Database status OK.
```

So I suppressed that message too by adding the following line to rsyslog.conf:

```html
:msg, contains, "SelfCheck: Database status OK" stop
```

Then you just need to restart rsyslog with: `service rsyslog restart`

## User accounts

I didn’t personally import any user accounts from cPanel when I moved to Interworx. The data centre offered to do that as part of a mass migration they were doing for people who wanted to avoid cPanel’s price increases, but I presume they used Interworx’s own import.

Details of that import can be found here: [https://www.interworx.com/support/faq/import-interworx-hosting-accounts/](https://www.interworx.com/support/faq/import-interworx-hosting-accounts/)

A couple of things didn’t make it across. I had Node and NPM installed on one account and I had to reinstall that, and a couple of the directories I had outside the web root weren’t there. I copied those manually.

## SSL and Siteworx access

If you have non-technical users on the server and self-signed SSL certificates (maybe generated via cPanel), you might need to tell them they’ll need to allow the certificate via their browser the first time they access it.

You might also need to remind them they’ll need to access their Siteworx account and webmail via a different port, as follows:

```html
https://theirdomain.com:2443/siteworx/
https://theirdomain.com:2443/webmain/
```

## Conclusion

If your users demand cPanel then you’re a bit stuck. In all other cases you can probably transfer to Interworx without too much trouble.

