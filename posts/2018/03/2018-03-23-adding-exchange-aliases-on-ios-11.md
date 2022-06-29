---
excerpt: >-
  Apple should really make this simple but there's no easy way to __add Exchange
  aliases to iOS__. This article presents a way to achieve it, although it's an
  ugly and inelegant method.
description: >-
  There's no easy way to add Microsoft Exchange aliases on iOS like there is on
  MacOS. In this article I present an ugly but effective workaround.
title: Adding Exchange aliases on iOS 11+
date: 2018-03-23T04:10:00.000Z
tags:
  - Microsoft Exchange
  - Tech
  - Apple
  - iOS
  - Email
  - Help
---
I originally wrote of a particular way to deal with this, but I’ve now found a better way and what I did is this:

1. Go into _Settings_, _Accounts & Passwords_ and select  your Exchange account.
2. Move the slider button next to _Mail_ to the off position. This means this particular Exchange account is only allowed to manage the other services you need from Exchange: Contacts, Calendars, Reminders, Notes.

Now we’re going to set up separate account to handle Exchange email via iMap.

1. Go into _Settings_, _Accounts & Passwords_ and select _Add Account_.
2. What you want to select is an account type of _Other_.
3. Enter your name and **any Exchange email address you’re trying to set up** (it doesn’t matter which because you can enter more later) under the _IMAP Account Information section_ at the top. I gave it a description of ‘Exchange Email’.
4. You then need to fill in the _Incoming Mail Server_ and _Outgoing Mail Server_ sections. The _Username_ is your main Exchange account email and the _Password_ is the one that goes with it. You then need a Host Name for each of these and it may vary depending on your Exchange set up but I use _outlook.office365.com_ for the incoming mail server and _smtp.office365.com_ for the outgoing mail server.
5. Then hit the Done button. It’ll go away and check your account details and save the new mailbox.

Now to add additional email addresses:

1. Go into _Settings_, _Accounts & Passwords_ and select the account you set up above.
2. Click on the email address next to _Account_. 
3. Click on the email address next to _Email_ at the top in the _IMAP Account Information _section.
4. Use the _Add Another Email…_ button to add all your aliases. When you’ve entered a new email address, remember to press return afterwards otherwise it won’t remember it (you probably want the primary email for your Exchange account added here too).

You should find you can now click on the ‘From’ address when you start a new email and select the alias account as the sender.

