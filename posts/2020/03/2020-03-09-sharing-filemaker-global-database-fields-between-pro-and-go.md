---
excerpt: >-
  Filemaker uses a strange definition of the term *global* in my opinion. Global
  database fields are not global if they're shared between Filemaker Pro and
  Filemaker Go, which each get their own copy of these fields. There is a
  workaround, though.
description: >-
  How to get around the problem of Filemaker global database fields when sharing
  a database between Filemaker Pro and Filemaker Go.
title: Sharing Filemaker global database fields between Pro and Go
date: 2020-03-09T09:30:00.000Z
tags:
  - Filemaker
  - Tech
  - How-To
layout: post-noarticleschema.njk
---
Filemaker global database fields are unique to each user and that can be a problem if you want to share your Filemaker Pro database with Filemaker Go clients via your network. Basically, if I update a global field on my MacBook via Filemaker Pro, those updates are not reflected in when I then access that database via Filemaker Go.

{% howto totalTime="5" %}

{% howtostep "1", name="Set up a (pseudo) globals table.", image="/assets/images/posts/2020/03/2020-03-09-fmg1.jpg" %}

![Setting up a table with one record.](/assets/images/posts/2020/03/2020-03-09-fmg1.jpg "caption=Step1: set up a table that will contain just one record.|title=Step1: set up a table that will contain just one record.|@itemprop=image|class=transform")

The way around that — or at least *one* way around that — is not to use global database fields at all. What you can do instead is to set up a table with one record in it and use the fields in that table as pseudo-globals. It's probably easiest to use a serial number for the ID record rather than a GUID in this instance, so the one and only record in this table with have the serial number 1.

{% endhowtostep %}

{% howtostep "2", name="Configure access for other tables.", image="/assets/images/posts/2020/03/2020-03-09-fmg2.jpg" %}

![Add a field to tables that will reference the globals table.](/assets/images/posts/2020/03/2020-03-09-fmg2.jpg "caption=Step2: add a field to tables that will reference the globals table.|title=Step2: add a field to tables that will reference the globals table.|@itemprop=image|class=transform")

Then in any table that needs to reference the globals table, you just set up a number field that always contains 1.

{% endhowtostep %}

{% howtostep "3", name="Set up relationship", image="/assets/images/posts/2020/03/2020-03-09-fmg3.jpg" %}

![Link the two tables and access the pseudo-globals via that relationship.](/assets/images/posts/2020/03/2020-03-09-fmg3.jpg "caption=Step3: link the two tables and access the pseudo-globals via that relationship.|title=Step3: link the two tables and access the pseudo-globals via that relationship.|@itemprop=image|class=transform")

Then you join those two tables and access your pseudo-globals via that relationship.

Filemaker uses the term *global* in a strange way in my opinion because I'd assume that meant they were the same everywhere, which is what I interpret as the meaning of the word *global*. Maybe there's scope for another category of database field for truly global fields.

{% endhowtostep %}

{% endhowto %}

