---
excerpt: >-
  I've been getting an irritating message from my server for a while now. It
  didn't seem to cause any other problems but I finally got around to
  investigating it. It's the '*systemd-logind: Failed to remove runtime
  directory /run/user/0: Device or resource busy*' message.
description: >-
  Handling the 'systemd-logind: Failed to remove runtime directory /run/user/0:
  Device or resource busy' message.
title: >-
  Systemd-logind: Failed to remove runtime directory /run/user/0: Device or
  resource busy
date: 2020-12-04T07:45:00.000Z
tags:
  - Tech
  - Linux
  - CSF
  - Error
  - Help
---
The message I was encountering in */var/log/messages* was:

```
systemd-logind: Failed to remove runtime directory /run/user/0: Device or resource busy
```

This message can be a tricky little devil. I get the message every 5 minutes, which means 12 an hour or 288 a day.

—
**TL;DR: The only thing I've found that works (for now) is a reboot.**
—

Let's look at what it is first.

*systemd* is the system and service manager. It starts when the system boots up, runs with a process ID (PID) of 1 and is responsible for starting all the userland processes that follow. 

*systemd-logind* is the part of *systemd* that manages logins, as the name suggests. It will manage the sessions and temporary files used by the process that has logged in.

*/run/user* is a directory where *systemd* stores a lot of the temporary files used by the process it has started. These used to be stored in */tmp* but permissions on that directory are quite relaxed and */run/user* provides a more secure alternative. 

A sub-process called *pam\_systemd* takes care of */run/user* and, when the user logs out, *pam\_systemd* will delete the temporary files in */run/user*.

So what the message is saying is that the user with ID 0 has logged out and *systemd* (via *pam\_systemd*) tried to clear up the garbage in */run/user/0* but it could not do so because the resource is 'busy'. Either something else is using one of the temporary files or *systemd* (or one of its sub-processes) has got its knickers in a twist. 

User 0, which is referenced in the precise case of the message here, is the superuser or *root*, and anything to do with that user can be a bit bowel-loosening.

There are a few commands I could try using to see what's using */run/user/0*.

`fuser -m /run/user/0`

This displays the process IDs that are using that directory.

I could then pipe the above command into *ps* to get more details about the processes using that directory:

`ps -lf -p $(fuser -c /run/user/0 2>/dev/null)`

If I'm honest, though, the investigations I undertook told me little, and I didn't glean much from a Google search either. You might have more luck if the user ID isn't 0. The commands mentioned above should give you more information than I got, and cancelling any guilty processes should alleviate the problem.

In my case I had to investigate further.

The message was coming up every five minutes, which suggested something cron-based. To find out more I needed some logs. *systemd* has its own journaling system and you can access that via the *journalctl* facility.

Typing `journalctl '2 days ago'` shows you the logs starting from two days ago. You can then scroll through that with the arrow keys, PgUp/PgDown (or spacebar) and exit with 'q'. 

I looked for the 'Failed to remove runtime directory' message and got a bunch of lines that looked like this:

```
Dec 02 08:16:01 CROND[6932]: (iworx) CMD (cd /home/interworx/cron ; ./iworx.pex --fifteenly)
Dec 02 08:16:01 CROND[6933]: (iworx) CMD (cd /home/interworx/cron ; ./iworx.pex --fively)
Dec 02 08:17:41 lfd[21018]: SYSLOG check [sSSTPnUQjHS6RbSc]
Dec 02 08:20:01 CROND[7694]: (root) CMD (/usr/local/sim/sim -q > /dev/null 2>&1)
Dec 02 08:20:01 CROND[7693]: (root) CMD (~iworx/bin/php -d disable_functions="" /usr/local/softaculous/do_backups.php >> /dev/null 2>&1)
Dec 02 08:20:01 CROND[7697]: (root) CMD (/usr/lib64/sa/sa1 1 1)
Dec 02 08:20:02 systemd-logind[127]: Failed to remove runtime directory /run/user/0: Device or resource busy

Dec 02 08:21:01 CROND[7816]: (iworx) CMD (cd /home/interworx/cron ; ./iworx.pex --fively)
Dec 02 08:22:43 lfd[21018]: SYSLOG check [47SoiNVgjRAaRfrU9mZnXqXXX]
Dec 02 08:25:01 CROND[8434]: (root) CMD (~iworx/bin/php -d disable_functions="" /usr/local/softaculous/do_backups.php >> /dev/null 2>&1)
Dec 02 08:25:01 CROND[8435]: (root) CMD (/usr/local/sim/sim -q > /dev/null 2>&1)
Dec 02 08:25:02 systemd-logind[127]: Failed to remove runtime directory /run/user/0: Device or resource busy

Dec 02 08:26:01 CROND[8549]: (iworx) CMD (cd /home/interworx/cron ; ./iworx.pex --fively)
Dec 02 08:27:45 lfd[21018]: SYSLOG check [cOziqDPZWGNpIS5oF]
Dec 02 08:30:01 CROND[9223]: (root) CMD (/usr/local/sim/sim -q > /dev/null 2>&1)
Dec 02 08:30:01 CROND[9224]: (root) CMD (/usr/lib64/sa/sa1 1 1)
Dec 02 08:30:01 CROND[9225]: (root) CMD (~iworx/bin/php -d disable_functions="" /usr/local/softaculous/do_backups.php >> /dev/null 2>&1)
Dec 02 08:30:02 CROND[9228]: (zonicweb) CMD (/usr/bin/wget -q -O - http://mydomain.com/wp-cron.php?doing_wp_cron >/dev/null 2>&1)
Dec 02 08:30:03 systemd-logind[127]: Failed to remove runtime directory /run/user/0: Device or resource busy

Dec 02 08:31:01 CROND[9347]: (iworx) CMD (cd /home/interworx/cron ; ./iworx.pex --fively)
Dec 02 08:31:01 CROND[9348]: (iworx) CMD (cd /home/interworx/cron ; ./iworx.pex --fifteenly)
Dec 02 08:32:46 lfd[21018]: SYSLOG check [aEx7ovpTfbOsAeDxjKp]
Dec 02 08:35:01 CROND[10108]: (root) CMD (/usr/local/sim/sim -q > /dev/null 2>&1)
Dec 02 08:35:01 CROND[10109]: (root) CMD (~iworx/bin/php -d disable_functions="" /usr/local/softaculous/do_backups.php >> /dev/null 2>&1)
Dec 02 08:35:02 systemd-logind[127]: Failed to remove runtime directory /run/user/0: Device or resource busy
```

That's just some of them and I've split the above log into chunks, each chunk ending with the 'Failed to remove runtime directory' message. The messages before that are illuminating.

Interworx (the server's control panel) is running a cron job every five minutes (see the */home/interworx/cron ; ./iworx.pex --fively*, above). Files with the '.pex' extension are binary Python files, which are difficult to read. There are tools that will do it, but I didn't bother. The cron job is merely starting the thing that's causing the message.

I had to look through quite a lot of messages to narrow it down properly but the only message I'm seeing before *every* 'Failed to remove runtime directory' message is this:

```
lfd[21018]: SYSLOG check [aEx7ovpTfbOsAeDxjKp]
```

My initial guess is that LFD is somehow connected to this. LFD is the part of ConfigServer's CSF firewall that manages login failures. This does not of course mean LFD is the cause and I could be way off base here. It might just be that LFD's syslog check message is there simply because it's running every five minutes via the same cron job. Correlation does not imply causation, but it's all I've got to go on.

The ConfigServer forum [does have a post](https://forum.configserver.com/viewtopic.php?t=11505) that hints at this, but I could not find anything definitive. I have added to that thread.

In the interim, the only thing that clears the message is a reboot. Up until now, the message comes back at some point, but I don't know why it suddenly does that. I'll monitor more closely from now on and see if I can track it down.

