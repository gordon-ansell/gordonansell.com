---
excerpt: >-
  I run the same Node app on two different environments and often encounter the
  _Node Sass could not find a binding for your current environment_ error.
  Here's how I deal with that error.
description: >-
  How to deal with the 'Node Sass could not find a binding for your current
  environment' error message.
_qa: true
title: Node Sass could not find a binding for your current environment
date: 2020-01-21T06:45:00.000Z
tags:
  - Node
  - Tech
  - Javascript
  - CSS
  - Error
  - Help
---
If you upgrade Node or you transfer your node environment (specifically what’s in _node\_modules_) to a machine that has a different architecture or different version of Node to the one you’re transferring from, you might encounter the following message:

```html
Node Sass could not find a binding for your current environment: xxxxxx
```

The _xxxxxx_, above, will tell you what your ‘current environment’ is.

The full error might look something like this.

```html
Error:
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):
Error: Missing binding ./node_modules/node-sass/vendor/linux-x64-72/binding.node
Node Sass could not find a binding for your current environment: Linux 64-bit with Node.js 12.x

Found bindings for the following environments:

Linux 64-bit with Node.js 10.x

This usually happens because your environment has changed since running npm install.
Run npm rebuild node-sass to download the binding for your current environment.
```

What the above error is saying is that it has node-sass bindings for Node 10.x but it needs bindings for Node 12.x. Other variants of the error might say it has bindings for one particular OS but needs bindings for another.

At the end of the above message it tells you to try running the following command:

```html
npm rebuild node-sass
```

That has never worked for me. The command runs okay but I still get the error when I run my Node app.

What _sometimes_ works is ‘forcing’ the rebuild as follows:  

```html
npm rebuild node-sass --force
```

Try that first, but if that doesn’t work the only thing I’ve found that does is to completely delete the _node\_modules_ directory and then run `npm install`.

Hope this helps.

