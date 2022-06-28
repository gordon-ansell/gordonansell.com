---
excerpt: >-
  I have a Panasonic Camcorder from 2011 or 2012 and Final Cut Pro X won't
  import AVCHD files from it, even though earlier versions of Final Cut Pro were
  fine. This is my workaround for that problem.
description: >-
  How to get around the problem where Final Cut Pro X refuses to import an AVCHD
  file from a camcorder.
title: Final Cut X will not import AVCHD file
date: '2018-08-16 08:50:00 +0100'
tags:
  - Tech
  - macOS
  - Apple
  - Error
  - Help
---
![Error message from Final Cut Pro X.](/assets/images/posts/2018/08/2018-08-16-final-cut-x-avchd-problem.png "@itemprop=image|class=left")

I have a Panasonic HC-X920 camcorder that’s a few years old now. I think I bought it in 2011 or 2012 although I can’t quite remember.

Anyway, ever since I moved to Final Cut Pro X — version 10.4 to be precise — I’ve found that it won’t import AVCHD files recorded with my Panasonic HC-X920.

My particular model of this camcorder has been discontinued by Panasonic now and I can’t find any firmware updates that might fix the problem from the camcorder’s perspective. I suspect the problem’s with Final Cut Pro X — maybe they no longer support AVCHD file formats as old as the ones produced by my camcorder.

I get an error in Final Cut Pro X that says:

```bash
Import Failed
The following clip encountered an error during import:
Clip name: clip#1.mov
Device: CAM_SD
Event: aaa
```

No matter what I try, Final Cut just won’t play ball with that AVCHD file.

The only workaround I’ve found is to convert the file before importing it into Final Cut X. There are probably many utilities to do this but the one I use is [HandBrake](https://handbrake.fr). It’s free, it’s open source and it works. It converts the AVCHD file to an MP4 and Final Cut Pro X is happy to import that.

I’m not sure why Apple stopped supporting older formats in Final Cut.


