---
title: 'No Presto metadata available - CentOS, Interworx'
excerpt: >-
  How I managed to fix the 'No Presto metadata available' error I encountered
  during a Yum update. It's worth a try and easily reversible if it doesn't
  work.
description: >-
  A potential solution for the 'No Presto metadata available' error message
  encountered during a Yum update. In my case it was on a CentOS/Interworx
  server.
date: 2022-01-05T07:10:00.000Z
tags:
  - Tech
  - Linux
  - Interworx
  - Help
---
I encountered the "*No Presto metadata available*" error message a few times on my Interworx server during the Yum update. I left it alone for a while because I've found that sometimes these things eventually manage to run okay, but this one didn't.

A Google search led me to a [Red Hat notice about the error](https://access.redhat.com/solutions/3141231). As CentOS, which is what my server runs, is a downstream fork of Red Hat Linux the suggested corrective action in the notice seemed appropriate to try.

It worked, and if you're on CentOS, possibly Interworx too, then this is a solution you may want to try. To reiterate the solution here, you need to edit `/etc/yum.conf` and add the following line to that configuration file:

```bash
deltarpm=0
```

You can then check to see if everything is okay by running your Yum update again. The command you need to run may vary depending on your circumstances and you will probably find that command at the top of your error notice (particularly if you've been notified by Interworx).

In my case it was a matter of running the following command:

```bash
yum update --disablerepo=interworx-cp*
```

The command succeeded and Yum updates have been running okay since I did this. 
