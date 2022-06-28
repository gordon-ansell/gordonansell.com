---
excerpt: >-
  I was getting __Virtual Memory Size Exceeded__ notifications from CSF relating
  to PHP FPM on a particular domain. This is how I fixed things so I wasn't
  continually pestered by these messages.
description: >-
  If you get reports from CSF/LFD telling you various limits have been exceeded,
  there are a couple of ways to fix them. Here I show you two of those ways.
title: CSF/LFD reports virtual memory size exceeded
date: 2018-03-18T05:25:00.000Z
tags:
  - Tech
  - CSF
  - Linux
  - cPanel
  - Error
  - Help
---
If you use CSF (ConfigServer firewall) on a CPanel system, you may occasionally get messages that tell you of ‘_Excessive resource usage_’. The particular one I was getting related to the virtual memory size being exceeded for php-fpm and a message would be emailed to me that would look like this:

    Time:         Sat Mar 17 22:22:15 2018 +0000
    Account:      account-name
    Resource:     Virtual Memory Size
    Exceeded:     511 > 500 (MB)
    Executable:   /opt/cpanel/ea-php56/root/usr/sbin/php-fpm
    Command Line: php-fpm: pool domain_com                    
    PID:          12353 (Parent PID:13671)
    Killed:       No

What it’s actually saying is that a setting in CSF’s ‘Process Tracking’ section has been exceeded and the firewall is just letting you know.

In my case, it was talking about the _PT\_USERMEM_ setting. That was set to 500 (MB) on my system and if you look at the emailed message I received (above) you’ll see it says _511 \> 500 (MB)_. 

The firewall is doing its job and just warning me a CSF limit has been exceeded.

If you start getting this, it might be worth doing some investigation as to _why_ you’re getting it. It may well be that the process in question genuinely needs the additional resources or it many be that you have a problem. There are a wide range of possibilities and I can’t diagnose them all for you.

What I can do, however, is tell you how to silence that message if, after your investigations, you feel that’s the best option.  There are two ways.

#### Solution 1 - Change the Limit

You can just increase the _PT\_USERMEM_ setting in the CSF config. 

To do this, just go into WHM and go to _Plugins \> ConfigServer Security & Firewall_ and the click the _Firewall Configuration_ button.

From the drop-down box at the top, select _Process Tracking_.

Scroll down until you see the _PT\__ limit you have exceeded (it was _PT\_USERMEM_ in my case) and change it as you require.

Scroll to the bottom and click _Change_ and then click _Restart csf+lfd_.

This will change the limit for _every_ process on your system. However you might just prefer to suppress the message for this particular instance of exceeding the limit, in which case read on.

#### Solution 2 - Suppress the Message

 To suppress the message, go to _Plugins \> ConfigServer Security & Firewall_ and scroll down to the _lfd - Login Failure Daemon_ section.

The option you want is the third one in that section (as I write this). There should be a drop-down box and you want to select the _csf.pignore, Process Tracking_ option and then hit the Edit button next to it.

The email warning CSF sent you should have a _Command Line_ line. In my case that line was:

    Command Line: php-fpm: pool domain_com

So I’m copying the bit after the ‘Command Line: ‘ bit: `php-fpm: pool domain_com`

And then pasting it at the bottom of the csf.pignore file with _cmd:_ prefixed to it, so it looks like this:

    cmd:php-fpm: pool domain_com

Then click the _Change_ button at the bottom and finally click _Restart lfd_.

For preference I prefer this solution because it’s more targeted to the specific error.

