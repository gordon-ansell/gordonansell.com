---
excerpt: >-
  After upgrading one of the sites I manage to __Wordpress 5.3__, I encountered
  our old friend the __Critical Error__. It has been a while since I've seen
  that one and I thought I'd jot down some notes about how to debug that error
  and get your site working again.
description: >-
  How to fix, or at least debug, a critical error after upgrading to Wordpress
  5.3.
title: Wordpress 5.3 critical error
date: 2019-11-13T05:40:00.000Z
tags:
  - Tech
  - Wordpress
  - Error
  - Help
---
It has been a while since I’ve had the old _Critical Error_ on Wordpress, but installing Wordpress 5.3 on one of the sites I manage resulted in it this morning.

It’ll lock you out of both the front-end and the back-end of the site so it can be a bit worrying, but it’s easy enough to track down.

First, switch on debugging and to do that you need to edit your _wp-config.php_ file.  You can do that either via your server’s shell or via FTP. What you need to do is make sure your _wp-config.php_ has the following lines:

```html
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
```

Now if you go to your site you should see some debugging messages before it dies with the _Critical Error_. These should point you to where the error is.

It’s most likely to be the fault of a plugin and in my case is was in _ezpz-one-click-backup_.

To get around that, I downloaded the _wp-content/plugins/ezpz-one-click-backup_ folder via FTP for safe keeping and then deleted that folder on the server. When I refreshed Wordpress after that, all was well and the site displayed as normal.

This sort of action should work for whatever plugin is causing you a problem.

You then have to figure out why that plugin is causing a problem in the first place and the debug messages you got above should help in that respect. Once you’ve sorted out the problem you can either reupload the plugin or install it afresh.

Once you’ve finished debugging, don’t forget to switch off debugging in _wp-config.php_. I just comment the lines out as follows:

```html
//define('WP_DEBUG', true);
//define('WP_DEBUG_LOG', true);
//define('WP_DEBUG_DISPLAY', true);
```

Anyway, good luck fixing your Wordpress 5.3 _Critical Error_.

