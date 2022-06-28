---
excerpt: >-
  I've encountered the _Nested mappings are not allowed in compact mappings_
  error a few times whilst processing YAML recently and come up with three
  possible fixes for it.
description: >-
  Possible fixes if you encounter the 'Nested mappings are not allowed in
  compact mappings' error while processing YAML.
_qa: true
title: Nested mappings are not allowed in compact mappings
date: 2020-01-08T11:00:00.000Z
tags:
  - Tech
  - Error
  - Help
---
If you see the error _Nested mappings are not allowed in compact mappings_ then you are probably processing a YAML file somehow, maybe programatically or maybe some other way.

There are a couple of things you can do to try and fix this.

**First check for spurious colons**. If you have something like this:

```html
name: An article about cats: why are they so lazy
```

You’ll note there’s a colon in the title value and YAML will be trying to process it as a field name. It’s easy to overcome — just surround your value with quotes as follows:

```html
name: "An article about cats: why are they so lazy"
```

**Second, check tabs and spaces**. YAML expects indentations with spaces, not tabs. A lot of editors allow you to automatically convert tabs to spaces. It’s usually in the settings somewhere and you’ll want that switched on if you intend to tab-indent YAML.

Alternatively you could just use the space bar to create your indents. 

**Third, check your line endings**. I don’t know exactly how, but sometimes copying and pasting puts something weird at the end of a line. To cure this you need to backspace every line to the one above and then hit enter to break it again. Sometimes you’ll notice when you backspace to the one above, it doesn’t go right up next to it and there’s (what looks like) a space between the two lines. Remove that space and press enter.

YAML is a bit too fussy for my liking. I’ll give it the colon one but I think it should be able to figure out the other two. 

