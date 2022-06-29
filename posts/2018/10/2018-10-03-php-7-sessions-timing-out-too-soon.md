---
excerpt: >-
  Since upgrading to PHP7, my __session class stopped working__. This is how I
  fixed it.
description: >-
  Fixing PHP sessions, which seem to be timing out too soon since PHP 7. The
  problem lies with where the sessions are saved.
_qa: true
title: PHP 7 sessions timing out too soon
date: 2018-10-03T09:30:00.000Z
tags:
  - PHP
  - Tech
  - Web Development
  - Help
---
I had a perfectly good session class that worked under PHP 5 but it has somehow become broken under PHP 7. Cue lots of Googling. 

I won’t bore you with the details but what I gathered is that this problem has been encountered by other PHP 7 users and it’s something to do with where PHP stores its sessions.

I admit I’m not entirely clear about the details of this but I did manage to correct the problem by setting the session save path:

```php
ini_set('session.save_path', APP_DIR . ‘/sessions’);
```

This needs to go before your `session_start` and it moves the session directory from the system default to something under your app’s directory tree (‘APP_DIR’ in my case).

If you subsequently get a message such as:

```php
Warning: session_start(): open(/path/to/app/sessions/sess_f48e174b93659b39f06d7b1a0df4aa33, O_RDWR) failed: Permission denied (13)
```

Then make sure you give your new session directory permissions that allow the web server to access it (0777 or whatever).


