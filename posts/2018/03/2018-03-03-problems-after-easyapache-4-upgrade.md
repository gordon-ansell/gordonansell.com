---
title: CSF problems after EasyApache 4 upgrade
date: 2018-03-03T11:55:00.000Z
type: post
description: >-
  How to fix CSF (ConfigServer Firewall) after upgrading your CPanel system from
  EasyApache 3 to EasyApache 4.
tags:
  - CSF
  - Tech
  - Linux
  - cPanel
  - Help
leader: >-
  Upgrading to EasyApache4 may cause problems with the CSF firewall. This is
  because the Apache error logs are in a different place and you need to tell
  that to CSF.
excerpt: >-
  If you've upgraded your CPanel system from EasyApache 3 to __EasyApache 4__
  there's a _possibility_ that __CSF (ConfigServer Firewall) won't run
  correctly__. This is because the EasyApache upgrade moves the Apache log
  files. This article explains how to correct this problem.
---
If you upgrade from EasyApache3 to EasyApache4 and you run CSF (ConfigServer Firewall), the firewall may not run correctly because the Apache log files will have moved on your server. 

You’re going to need to make some changes to your CSF configuration because the firewall will not be able to find these newly located logs and CSF will not be able to monitor your system effectively.

As far as I can see, these are the changes you need to make:

1. Log in to a shell as root,
2. go to the _/etc/csf_ directory,
3. edit the _csf.conf_ file and scroll down towards the end. You’re looking for the _HTACCESS\_LOG_ and _MODSEC\_LOG_ directives. These both need to be changed to point to _/var/log/apache2/error\_log_,
4. save the _csf.conf_ file,
5. edit the _csf.syslogs_ file and go to the _Apache_ section. Change anything with a directory that begins _/var/log/httpd_ to _/var/log/apache2_,
6. save the _csf.syslogs_ file,
7. restart CSF by typing _csf -r_ at the command line.

This should get CSF running correctly again, which is obviously important because it’s your firewall.

