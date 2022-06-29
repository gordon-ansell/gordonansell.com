---
excerpt: >-
  I had a problem with macOS's Mail app getting stuck 'moving messages' via my
  Microsoft Exchange account. This is how I solved the problem.
description: >-
  How to sort out macOS Mohave when the Mail app gets stuck 'moving messages',
  specifically when connected to a Microsoft Exchange server.
title: macOS Mojave Exchange email account stuck ‘moving messages’
date: 2019-08-05T10:15:00.000Z
tags:
  - Microsoft Exchange
  - Tech
  - macOS
  - Help
---
If you get a situation where macOS Mojave’s Mail app gets stuck moving messages, there is a solution of sorts but **you do this entirely at your own risk** and don't come crying to me if you lose all your email.

What I was seeing was a message at the bottom of the left-hand pane of macOS’s Mail app that said: _Moving message 1 of 183_, and that message never disappears no matter how long I waited or how many times I restarted the Mail app.

It also seemed to have a knock-on effect in iOS Mail, both on my iPad and my iPhone, such that they didn’t seem to sync properly with Exchange.

What I did to cure the problem was this:

1. Close the Mail app.  

2. Open Finder and hit _Cmd + Shift + G_ to get the _Go to the folder_ dialog up.  

3. Enter `~/Library/Mail/V6/Maildata` in the dialog and press _Go_.  

4. You should see a bunch of files in there. Select all the files that begin with _Envelope_ and copy then somewhere safe as a backup.  

5. Now delete those files beginning with _Envelope_.  

6. Restart the Mail app. You’ll probably see a dialog saying it’s importing all the messages from Exchange. Wait for that to complete.

When you get back in to your Mail app, the various **mail folders may not look correct straight away**. Some of them may be empty and some of them may just look wrong. They tend to sync up over time and how long it takes depends on how much stored email you have. It took a number of hours for me and I have 30,000+ messages.

So what caused this problem? I’m not entirely sure but I did send an email with a large attachment not long before the problem arose and then I moved that email from the _Sent_ box to an archive. That looks suspiciously like the culprit but I can’t be certain.

