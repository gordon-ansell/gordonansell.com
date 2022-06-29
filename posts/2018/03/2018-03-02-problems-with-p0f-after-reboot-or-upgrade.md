---
title: Problems with p0f after reboot or upgrade
date: 2018-03-02T06:30:00.000Z
type: post
description: >-
  How to fix the 'p0f appears to be down' message that sometimes occurs on
  cPanel systems after an upgrade or reboot.
tags:
  - cPanel
  - Tech
  - Linux
  - Help
leader: >-
  How to get past errors with p0f in a cPanel environment. You need to _edit
  yum.conf_ and then restart p0f.
excerpt: >-
  If you get the __p0f appears to be down__ message after upgrading or rebooting
  a cPanel system, I have a fix for you. I haven't yet worked out how to stop it
  altogether but this fix holds things steady until the next upgrade or reboot.
---
If you have a server with cPanel and you get the **p0f appears to be down** message after reboots or upgrades then welcome to the club.

_p0f_ is a TCP/IP stack fingerprinting tool and it looks at TCP/IP traffic coming to your machine and attempts to identify bits of information about the remote machine from the TCP/IP packets it’s sending. This might be things like the operating system of the remote machine.

Your firewall might use it or maybe some sort of analytics package.

About six months ago, I started getting the _p0f appears to be down_ message after cPanel upgrades or even sometimes just after reboots. I haven’t figured out why it started happening but I do know how to fix it. 

It’s a two step process as follows:

First, edit _etc/yum.conf_ and add the following to the _excludes_:

`p0f*.el7.*`

Then run the following sequence of commands:

```bash
/scripts/check_cpanel_rpms --fix
/usr/local/cpanel/scripts/check_cpanel_rpms --fix
/usr/local/cpanel/scripts/restartsrv_p0f
```

For some reason it seems cPanel isn’t correctly maintaining its RPMs, although I don’t know why. This means I have to keep doing this at the moment, after each upgrade and/or reboot. The research I did pointed to this temporary fix but I haven’t yet come across a way to permanently fix it.

Anyway, you should be good to go — temporarily, at least — if you follow the instructions above.
