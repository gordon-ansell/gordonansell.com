---
excerpt: >-
  I’ve tried quite a few Markdown editors but, until now, hadn’t properly
  investigated iA Writer. However, it now fits nicely into my workflow and in
  this article I explain how it does so and I present my __review of iA
  Writer__.
description: >-
  A review of iA Writer version 5 for macOS, iPadOS and iOS, which is a
  file-based Markdown editor.
title: iA Writer review and changing my workflow
date: 2020-01-27T08:10:00.000Z
leader: >-
  iA Writer is an excellent file-based Markdown editor with a focus on
  distraction-free writing. There's little to criticise. More export options
  would be useful it's otherwise a fine application.
tags:
  - Tech
  - iA Writer
  - Review
  - Apple
  - macOS
  - iPadOS
  - iOS
  - GTD
excerptImage: /assets/images/posts/2020/01/2020-01-27-ia-logo.png
ratingStars: 4.5
schema:
  product:
    '@id': /#product
    '@type': SoftwareApplication
    name: iA Writer
    operatingSystem:
      - macOS
      - iOS
      - Windows
      - Android
    applicationCategory: Productivity
layout: post-review.njk
---

 
I have recently moved from Ulysses to iA Writer and my motivation for doing so was largely workflow-orientated, so the initial part of this article explains my workflow. If you're not interested in this, you can [jump straight to the iA Writer review here](/ia-writer-review-and-changing-my-workflow#ia-writer-review).

## My workflow

I have many writing apps and have struggled to settle on a particular workflow for posting articles on this site. I've used Apple Notes, Bear Writer, Textpad, Editorial (on iOS) and, most recently, Ulysses.

My current workflow is to write articles in Ulysses, copy them as Markdown and paste them into my local copy of my site via either MS Code (on macOS) or Textpad (on iOS) and then add the front-matter for my Jekyll-like blogging software. Once they're in the local copy of my site, they're in a cloned copy of the GIT repository I use for my site. I can then commit the new article to GIT via either the Github Desktop App (on macOS) or Working Copy (on iOS).

I then FTP the local copy of the site to a directory outside of the web root on the server, run my blogging software to generate the site and rsync the output to the web root. I have to run the build process on the server because I split my time equally between a MacBook Pro and an iPad Pro and, whereas I can use my Node-based blogging software locally on the MacBook, I can't do that on the iPad. I had the same restriction when I was using Jekyll.

There are a few problems with this workflow. First of all, I'm duplicating every article: there's a copy in Ulysses' library and there's a copy on disk (and hence in my GIT repo). Furthermore, those copies aren't absolute duplicates because the copy in Ulysses has no front-matter and, when I find the inevitable typos in my article, I tend to only correct them on the disk copy and I don't update the Ulysses copy. 

It struck me that the workflow would be all the better if I just had one copy of the article and one Markdown-based writing app to edit it with.

Enter **iA Writer**. I'd looked at iA Writer before and dismissed it, but it turns out it suits my workflow very well. One of its big advantages is that I can access cloned Working Copy repos directly from within iA Writer on iOS. It's also clever enough to recognise front-matter (anything between two `---` lines) and exclude it from previews. 

So now I just write my posts directly into the cloned repo via iA Writer on both macOS and iOS and then commit them to Github, which acts as my means of synchronising posts between my MacBook and my iPad.

<a name="ia-writer-review"></a>

## iA Writer review

iA Writer is available on macOS, iPadOS, iOS, Windows and Android. My review is based on the versions available to the Apple operating systems.

### Where are the articles in iA Writer?
iA Writer is different to most of the Markdown-based writing apps I've used because it doesn't have its own proprietary library where articles are stored. Instead, you edit articles directly on disk. There is still an element of organisation to iA Writer, though. You can add directories to its *Locations* panel for handy access and those locations can be either on your local disk, on your iCloud Drive or even in Working Copy on iOS/iPadOS.

There is no automatic synching of articles between macOS, iPadOS and iOS, although if you're accessing your articles on your iCloud Drive the operating system will synch things for you. I tend not to do that, as it happens. I use cloned Github repositories to do my synching. 

There's the familiar three-pane view of things in macOS with your locations in the left pane, the contents of that location (your articles) in the middle pane and the editing window in the right pane. You get a two-pane view in iPadOS.

![iA Writer's 3-pane view on macOS.](/assets/images/posts/2020/01/2020-01-27-ia-writer-3-pane-macos.jpg "caption=iA Writer's 3-pane view on macOS.|title=iA Writer's 3-pane view on macOS.|@itemprop=image")

![iA Writer's 2-pane view on iPadOS.](/assets/images/posts/2020/01/2020-01-27-ia-writer-2-pane-ipados.jpg "caption=iA Writer's 2-pane view on iPadOS.|title=iA Writer's 2-pane view on iPadOS.|@itemprop=image")

### The look of iA Writer
iA Writer sports a very simple look and your configuration options are minimal. You basically have three fonts to choose from — Mono, Duo and Quattro — and if you don't like any of those you're out of luck. You can adjust the font size and the line length, and it does have a dark mode, but that's pretty much the limit of the adjustments you can make.![iA Writer's editor preferences on macOS.](/assets/images/posts/2020/01/2020-01-27-ia-writer-editor-prefs-macos.jpg "caption=iA Writer's editor preferences on macOS.|class=s33 right|title=iA Writer's editor preferences on macOS.|@itemprop=image")

I have heard people call it *opinionated* and that certainly seems to be the case. It doesn't particularly bother me and I quite like the Quattro font.

### Previews
There is a built-in preview for your articles and you can customise this if you're prepared to get to grips with creating *Bundles*. These bundles contain templates that configure how things will look when you export to PDF, when you print the article or when you preview it. There's a decent primer on writing template bundles [here](https://github.com/iainc/iA-Writer-Templates). I'll probably get around to creating a bundle that looks like my website at some point although I haven't done so yet.

### Markdown
iA Writer supports the MultiMarkdown flavour of the language. That means you get tables, which are absent from some of the Markdown apps I've used previously. It also supports TeX maths expressions, which is useful if you you're doing technical or scientific writing.

iA Writer's documentation provides a [good introduction to Markdown](https://ia.net/writer/support/general/markdown-guide) if you're new to the language.

### Writing
iA Writer bills itself as a distraction-free writing app and they're big on the writing aspect of things, even including [writing tips in their online documentation](https://ia.net/writer/support/writing-tips).

There are a few other things they do to help you with the actual writing. You can highlight the various parts of speech — adjectives, nouns, adverbs, verbs and conjunctions — in different colours so you can see the over all balance of your articles. Personally, I only highlight adverbs and adjectives to stop it looking too multi-coloured, but you can choose which words you want to highlight in the *Preferences*.

You can also get rid of the left and middle panes and switch on *Focus Mode* and that'll highlight either the sentence or paragraph (as you choose) you're working on. I find that more useful than I thought I would. 

![iA Writer's sentence focus mode on iPadOS.](/assets/images/posts/2020/01/2020-01-27-ia-writer-sentence-focus-ipados.jpg "caption=iA Writer's sentence focus mode on iPadOS.|title=iA Writer's sentence focus mode on iPadOS.|@itemprop=image")

### Content blocks and embedding files
You can embed files within your articles. Such files could be other Markdown files, images or CSV files. The way to do this is to make the first character of the line a forward slash followed by the filename. Embedded files must be in your Locations, either in the same directory as the file you're embedding them within or a directory below that.

If, for example, you wanted to include a bunch of chapters that are written in separate files, you'd do something like this:

```markdown
/chapter1.md

/chapter2.md

/chapter3.md
```

Then, when you preview or export, the embedded files will be expanded and included as part of the article.

### Hashtags
You can tag content in your articles by prefixing a word with the `#` symbol. It will then appear in the left, *Locations*, pane with that tag. This is a handy way of grouping things in particular taxonomies so that you can find them later.

You can choose whether or not you want those tags exported or previewed as part of the final output. 

### Front-matter friendly
If you use static blogging software such as Jekyll you'll be adding front-matter to your articles and iA Writer is clever enough to ignore this when you preview your article. Anything between two `---` lines will be treated as front-matter. You need to tick the *Process metadata* option in the *Templates* preferences to get the app to recognise front-matter. It's a small thing for an app to do but it's quite handy.

### Export
You can export your article as Markdown, HTML, PDF, Microsoft Word or as a Project Archive, the latter of which zips up the article with all its embedded files. It lacks for an ePub export option so if that's your bag you'll either want a third-party app to do the job or you'll have to use another writing app (both Ulysses and Bear support ePub).

![iA Writer's preview (right pane) on macOS.](/assets/images/posts/2020/01/2020-01-27-ia-writer-preview-macos.jpg "caption=iA Writer's preview (right pane) on macOS.|title=iA Writer's preview (right pane) on macOS.|@itemprop=image")

### My conclusions
iA Writer is a fine Markdown editor for those who prefer to access their work as filesystem files rather than as part of a 'library' an app maintains within itself.

Would I have looked at it if it wasn't for my workflow needs? Probably not and I'd likely have remained with Ulysses. But I did look at it and I'm glad I did because it perfectly suits the way I work at the moment.

Criticisms? I don't have many. You can play it off against other Markdown applications and there are advantages and disadvantages of each, so you just have to find what works best for you in your particular situation. If I had to pick on something specific to criticise it would be the sorting. You can sort by either name, date modified or file extension — either ascending or descending — but that's applied globally, so you can't sort  different directories in different orders. Even that, though, can be alleviated by using iA Writer's [Smart Folders](https://ia.net/writer/support/ios/the-library).

I think it could support more options on export. Certainly ePub and maybe RTF and TextBundle too, and, whilst I appreciate iA's writing-focussed simplicity in some ways, I think it could support a themeable editor. Style is, after all, in the eye of the beholder.

But I'm scratching around for things to pick at here and it's a solid 4.5 stars from me.

 

