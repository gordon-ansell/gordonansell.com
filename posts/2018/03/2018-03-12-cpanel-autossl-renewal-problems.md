---
title: CPanel AutoSSL renewal problems
date: 2018-03-12T11:42:00.000Z
description: >-
  If you use CPanel's AutoSSL facility and you get problems after adding a new
  domain, this might just be the answer. It could be your htaccess file causing
  problems.
tags:
  - Tech
  - cPanel
  - Linux
  - Error
  - Help
excerpt: >-
  Since adding a new domain to my CPanel server, I've had __AutoSSL renewal
  errors__. These have been emailed to me via the AutoSSL check that runs
  overnight. Anyway, the problem (at least in my case) sits with the .htaccess
  file and here's my solution.
---
I had a few problems when I added a domain to a CPanel system with AutoSSL switched on. Once a day (overnight in my case) CPanel runs an AutoSSL check and I kept getting errors from it along the lines of:

- The AutoSSL certificate renewal may cause a reduction of coverage, and
- The validation required 1 HTTP redirect, but the AutoSSL provider “cPanel (powered by Comodo)” does not permit HTTP redirects.

I think I figured out what was happening here. CPanel looks for a _.well-known_ directory in the root of the site and tries to access a file therein as part of its AutoSSL check.

If you have a redirect in your _.htaccess_ file to force people to the SSL (https) version of your site, you’ll get this error. The sort of redirect I’m talking about is something like:

    RewriteCond %SERVER_PORT 80 
    RewriteRule ^(.*)$ https://yourdomain.com/$1 [R,L]

The AutoSSL check can’t handle this. It tries to access a non-SSL (http) version of the text file in the _.well-known_ directory but the _.htaccess_ redirect is forcing it to an SSL (https) version of the file and it just can’t handle that.

The solution is to exclude the AutoSSL check from the redirection and after browsing various forums, my _.htaccess_ looks like this:

    RewriteCond %{REQUEST_URI} !^/[0-9]+\..+\.cpaneldcv$
    RewriteCond %{REQUEST_URI} !^/\.well-known/cpanel-dcv/[0-9a-zA-Z_-]+$
    RewriteCond %{REQUEST_URI} !^/[A-F0-9]{32}\.txt$
    RewriteCond %{REQUEST_URI} !^/\.well-known/pki-validation/[A-F0-9]{32}\.txt(?:\ Comodo\ DCV)?$
    RewriteCond %{SERVER_PORT} 80 
    RewriteRule ^(.*)$ https://yourdomain.com/$1 [R,L]

This seemed to cure the problem and AutoSSL now renews correctly. I suspect I only need two of the four additional rewrite conditions (the last two) but I’m leaving the other two in for good measure.

Alternatively, you could just remove the SSL redirect from your _.htaccess_ completely but that’s probably not what you want.
