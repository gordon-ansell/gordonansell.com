---
excerpt: >-
  As someone who worked in IT for 35 years I often get asked to help out with
  the computer problems my friends and relatives have. One common thing I get
  asked is if I can get back some data that has been deleted. I then ask if they
  have a backup and the answer is often a disappointing no. It is __essential
  you take backups__ because you'll most likely need them at least once. This
  article just gives the basics of how I think you should backup your computer
  and what data you should back up. I'm going to point all my friends to it.
description: >-
  Why must you back up your computer? Because you will need it one day and it's
  far better than losing important photographs, letters and other documents.
  Backups are essential.
title: The importance of backing up your computer
date: 2018-05-21T06:56:00.000Z
tags:
  - Tech
  - Apple
  - Windows
  - Help
---
Having an IT background is, in one particular way, a bit like being a doctor. I would imagine when doctors go to parties people pester them with things like: “_Can I just ask you about this niggle in my back?_” and if you know a bit about computers you tend to similarly get asked about the health of people’s computers.

One of the most common things people ask me is whether I can get some data back that they’ve lost. I then ask if they have a backup and nine out of ten times they don’t, and that makes getting their data back unlikely at best and impossible at worst.

Unfortunately, people who aren’t computer-literate tend to give backups a low priority, seeing them merely as an unnecessary inconvenience. Following a bite from a radioactive otter, I have nine different superpowers but none of them help with the recovery of computer data in the absence of a backup.

It is possible to recover deleted files in some circumstances. They could be in the recycle bin and it’s just a matter of restoring the file from there. If, however, the recycle bin has been emptied it’s a bit trickier.

On an ordinary, non-SSD hard disk, when a file is deleted it often isn’t really deleted. The index entry to the file will be deleted and the space the file takes up will be flagged as reusable. Depending on how long ago the file was deleted and how much of the hard disk is in use, it may be that the file’s data is still there on hard disk. If that’s the case, a file can sometimes be recovered by special data recovery tools.

SSD disks go about deletion in a different way and you’re far less likely to be able to recover a file at all, even with special tools. And of course if a disk has properly crashed — SSD or otherwise — it may not be possible to access the disk at all, with special tools or otherwise. Do not under any circumstances rely on specialist data recovery tools to recover data.

The advice is clear: **you must take backups**. You may never need them if you’re very lucky but most people need them at some point, even if it’s only once. Without backups you could lose all your photographs, letters, documents, music, videos, spreadsheets, accounts and other things that may be important to you.

So what do you need to back up?

At the very least you need a backup of all your personal data. That’s all the things mentioned a couple of paragraphs above. Software and applications can often be downloaded and reinstalled but the data those applications use can’t. Basically you want to backup any files you have personally saved on your computer.

Another thing worth thinking about is your passwords. If you use a password manager (a good idea in general) and your entire computer goes bang, there’s a good chance you won’t know your passwords from memory. You will at least need your email password to allow you to recover your other passwords and I’d suggest there will be other important passwords you might need before you have a chance to fully recover your broken computer (maybe bank account passwords and such). So make sure you have a backup of your password manager’s database, if indeed you use a password manager at all.

If you only take one backup, my advice would be to use an online backup facility such as  [Backblaze](https://www.backblaze.com/r/01mfzw). That’s the one I use, although there are many others. An online backup covers pretty much all the bases. If, perish the thought, your house burns down, it could take out your computer and any local backup media you have in your house. So if you’re only going to have one backup, make it an online backup. They’re usually fairly inexpensive — $40 a year or so — and they’ll take backups in the background, ensuring your computer’s performance is only marginally effected as they do so. If you’re worried about the security of your data online, you can normally encrypt online backups, but remember to store the decryption password somewhere other than on your computer.

If you want a second backup, then I’d suggest looking at your computer’s in-built backup facilities.

For users of MacOS, you can find more information here: [https://support.apple.com/en-gb/mac-backup](https://support.apple.com/en-gb/mac-backup)

Users of Windows can find more information here: [https://support.microsoft.com/en-gb/help/17127/windows-back-up-restore](https://support.microsoft.com/en-gb/help/17127/windows-back-up-restore)

Online backups usually dribble data across constantly, as files are updated, so they don’t have a backup frequency as such. Some of the local backups mentioned above do that too but I’d suggest at the very least you want a weekly backup and preferable a daily backup. It’s about how much of your data you can live without. If you rarely use your computer then maybe you can live without seven days’ data and a weekly backup is enough; if you use your computer frequently then a daily backup may be more appropriate.

I use the MacOS operating system and I use their Time Machine backup as my local backup. I do not keep the backup disk permanently plugged in because some of the nasty viruses that are around will corrupt data on any attached drives as well as on the computer itself. Every morning, I plug the drive in, tell Time Machine to start a backup and then unplug the drive.

The final sort of backup you might want is some sort of disk image. I said above that what you really need to backup is your data — and that’s true — but a disk image, which backs up applications and system files too, can be useful. It will allow you to restore your computer in its entirety to some previous point in time. This saves you having to reinstall all your applications if the computer goes bang. Do a search on '_image backups_' and you will find plenty of options.

MacOS’s Time Machine backup actually backs up everything by default (as long as you don’t exclude anything) and this can be used to do a complete restore on an image-like basis (instructions here: [https://support.apple.com/en-gb/HT201314](https://support.apple.com/en-gb/HT201314)) but there is also plenty third-party software that will take image backups for both MacOS and Windows.

Just using one of the backup methods I’ve suggested may be enough, particularly if it’s the remote backup, but if you use them all you will easily be sufficiently covered. I’ll finish be reiterating that **you must take backups**. Odds are you’ll need them one day.

