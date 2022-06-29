---
excerpt: >-
  Having programmed in both Node Javascript and PHP, I thought I'd compare the
  two languages to see how they fare as server-side scripting languages. Purely
  subjectively, of course.
description: >-
  A subjective comparison of Node.js Javascript versus PHP. It's horses for
  courses.
title: Node vs PHP — a subjective comparison
date: 2020-04-17T09:15:00.000Z
tags:
  - Node
  - Tech
  - Opinion
  - PHP
  - Javascript
---
I've been programming in PHP for a long time now. I can't remember when I first dabbled with the language but it has to be 20+ years ago.

For the last six months or so, though, I've been using Javascript instead, specifically *Node.js* Javascript, which is a match for PHP in terms of being a server-side language. Even more specifically, you could say *Node* + *Express* is more of a direct match to PHP, although I've only tinkered with *Express* myself as I haven't needed it for what I've done so far.

I'll present my subjective opinions about how the languages compare.

I'm of the opinion that PHP is a tidier, more mature language. I come from a C/C++ background professionally and if you do too, I think you'd find you'd adapt to PHP a bit quicker. Later (PHP 5+) versions of the language are particularly good in that respect.

On the other hand, Javascript is faster to develop in. I say that even though I have 20+ years of PHP and only six months of Javascript. If you take the same care over your code and build roughly the same things in both languages, I'm of the opinion you'd have a finished product far quicker in Javascript. I can't quite put my finger on why, if I'm honest, I've just found that to be the case.

Package management is similar between the two languages. You can use *Composer* with PHP, *NPM* with Javascript and they both have similar ways to bring in dependencies and such. As far as I'm concerned neither is better than the other here.

If you're coming into Javascript from PHP, you'll probably find *TypeScript* useful. It gives you more robust type-checking and better object-oriented framework to work with. *TypeScript* just compiles to pure Javascript, so you run the risk of losing some code efficiency with that, but it's a better development environment for someone with a PHP (or C++) background. 

Pure Javascript always seems like a mess to me. I want to keep straightening its tie and polishing its shoes. That of course is just my subjective opinion.

PHP is easier to deploy than a Node Javascript application, simply because so many web servers come with in-built support for PHP. Deploying a Node application is generally a bit more complicated, particularly if you want it running in an *Apache* or *NGINX* environment.

If asynchronous code is your preference then *Node* is what you need. Perhaps one of the biggest differences between the languages is the way they naturally lean in this respect.

![Node and PHP images together.](/assets/images/posts/2020/04/2020-04-17-node-vs-php.png "@itemprop=image")

So, which language should you choose? Well, I'm not going to tell you beyond the hints I've given here. If the choice is entirely down to you, try both and see which one you prefer and which one best meets the requirements of the application you're developing.

Try not to fall into the languages argument. There are a multitude of opinions about one language being 'better' than the other or one language 'dying out' and other such comparisons. Most of it is tosh. If you have absolute choice — by which I mean the choice of language is not dictated by corporate policy or a specific need — it doesn't matter. What matters is the application you end up with. Users generally don't care what language something is written in. I'll stick my neck out and say both Node and PHP will be around for the long term and you have no fears in that respect.

I'm quite language agnostic and, for my own projects, I often pick the language based on interest alone. I've probably programmed in a dozen languages in my career and they're all, with the possible exception of assembler, pretty much the same. They all consist of variables, loops, control structures, functions etc. and all you need to do with a new language is become orientated to the environment. I've never understood why job applications sometimes require specific language experience because, really, it's only the work of a few weeks to become orientated. Just pick the developer with the best understanding of programming paradigms and design specifications and you won't go wrong in the long term.

