---
title: CSS - Semantic or utility or BEM
date: 2022-04-24T09:05:00.000Z
excerpt: >-
  My pointless comments re the debate about whether to use semantic CSS, utility
  classes, BEM or something else.
description: >-
  Considering whether to use semantic CSS, utility classes, BEM
  (Block-Element-Modifier) or something else entirely.
sendWebmentions:
  - 'https://www.browserlondon.com/blog/2019/06/10/functional-css-perils/'
tags:
  - CSS
  - Tech
  - Opinion
---
There's a lot of debate going on in the CSS world at the moment. For the uninitiated[^1], CSS stands for *Cascading Style Sheets*, which is how a designer changes the 'look' of a web page, with its structure being given by HTML.

For HTML that looks like this:

```html
<div class="my-block">
    <p>Hello.</p>
</div>
```

Semantic CSS might look like this:

```css
.my-block {ldelim}
    background-colour: yellow;
    padding: 2em 1em 2em 1em;
{rdelim}
.myblock p {ldelim}
    margin-top: 1em;
    color: green;
    padding-bottom: 2em;
{rdelim}
```

The crux of the argument, in very general terms, is whether the way I've presented things above is better than doing it with utility classes like this:  

```html
<div class="bg-yellow pt2 pr1 pb2 pl1">
    <p class="mt1 col-green pb2">Hello.</p>
</div>
```

```css
.bg-yellow {ldelim} background-colour: yellow; {rdelim}
.pt2 {ldelim} padding-top: 2em; {rdelim}
.pr1 {ldelim} padding-right: 1em; {rdelim}
.pb2 {ldelim} padding-bottom: 2em; {rdelim}
.pl1 {ldelim} padding-left: 1em; {rdelim}

.mt1 {ldelim} margin-top: 1em; {rdelim}
.col-green {ldelim} cooler: green; {rdelim}
```

In this latter example we define a bunch of 'atomic' classes in CSS that do a single thing, and then apply those classes to the HTML to achieve the required effect. Note that this is a simplification of how it might be done in practice.

Some of the arguments revolve around paradigms such as 'Separation of Concerns' or 'Composition vs Subcomponents'. A lot of electrons are used up declaring support or opposition of either point of view, and I thought I'd waste a few more electrons myself.

The debate is further compounded by design patterns such as [BEM](http://getbem.com), which [I had a go at myself](/bem-notation-and-scss/) last year.

If you want to read something from either side of the debate, I'd suggest:

- Adam Wathan's *[CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)*. Wathan created the [Tailwind CSS](https://tailwindcss.com) utility framework.
- Jay Freestone's *[The perils of functional CSS](https://www.browserlondon.com/blog/2019/06/10/functional-css-perils/)*.

But here are my thoughts on CSS. I think utility classes are great for prototyping, using them to see quickly how things will look, but I don't particularly like them as a final solution. After trying BEM last year, I soon fell out of love with it, so I don't like that as a final solution either.

I like HTML that's adorned with the minimum number of classes and try to use CSS selectors where possible, and I use SCSS as a preprocessor. If I had HTML like this:

```html
<body>
    <header class="sitehdr">
        <h1>Blah</h1>
    </header>
    <div class="wrapper">
        <main>
            <p>Content goes here<p>
        </main>
    </div>
    <footer class="siteftr">
        <p>footer content here<p>
    </footer>
</body>
```

And (S)CSS like this:

```scss
header.sitehdr {ldelim}
    padding: $layout-header-padding;
    @include clearfix;
{rdelim}
div.wrapper {ldelim}
    padding: $layout-wrapper-padding;
    main {ldelim}
        margin: $layout-main-margin;
        max-width: $layout-main-maxwidth;
    {rdelim}
{rdelim}
footer.siteftr {ldelim}
    margin: $layout-footer-margin;
    padding: $layout-footer-padding;
{rdelim}
```
    
Then I'm going to want to remove all the classes from the HTML and use selectors instead, like this:

```scss
body > header {ldelim}
    padding: $layout-header-padding;
    @include clearfix;
{rdelim}
body > div {ldelim}
    padding: $layout-wrapper-padding;
    main {ldelim}
        margin: $layout-main-margin;
        max-width: $layout-main-maxwidth;
    {rdelim}
{rdelim}
body > footer {ldelim}
    margin: $layout-footer-margin;
    padding: $layout-footer-padding;
{rdelim}
```

That's not to say I don't use *any* classes. I do, I use plenty, but wherever it's *reasonable* to remove them and use selectors instead, that's what I'll do. I still get my reuse of common 'utility' bits of CSS by using SCSS mixins.

You can get really smart with selectors, such as the [lobotomised owl](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/), although that particular one gives me the willies.

Either way, I'm not sure it's easy to apply programming paradigms, such as separation of concerns, to HTML and CSS — their concerns are too closely intertwined. We use classes on HTML elements to *deliberately* make them the concern of the CSS. I don't think it's worth getting *too* hung up on things like that, but I still like to separate the concerns where I can. When I change the look of a website, I want to do that in (S)CSS as much as I can, touching as little HTML as possible, but not getting stressed out by a paradigm collapse if I have to touch *some* HTML.

My primary aim is to avoid making things confusing or unwieldy, but what fits that criteria is based on personal choice as much as anything else.

I'm never going to like a bunch of HTML that looks cluttered like this:

```html
<div class="w-full flex-none flex items-center p-4 sm:py-5 sm:px-6 lg:p-4 xl:py-5 xl:px-6">
    <dt class="w-2/5 sm:w-1/4 flex-none text-slate-900 font-medium dark:text-slate-300 transition-opacity duration-[1.5s] delay-500">Attendees</dt>
    <dd class="text-sm font-medium text-slate-700 bg-slate-100 rounded-full py-1 px-3 dark:bg-slate-700 dark:text-slate-300 transition-opacity duration-[1.5s] delay-500">Andrew McDonald</dd>
</div>

<div class="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
<div class="text-base font-medium rounded-lg bg-slate-100 text-slate-900 py-3 text-center cursor-pointer dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10">Decline</div>
<div class="text-base font-medium rounded-lg bg-sky-500 text-white py-3 text-center cursor-pointer dark:highlight-white/20">Accept</div>
```

My eyes (and OCD) simply cannot cope with all those classes, and I tend to think if we're going to have utility elements in our design then they should be in the (S)CSS wherever possible.

Whatever I do, I am of course still hampered by having no eye for design. No CSS framework can cure that.

[^1]: I appreciate a lot of my readers aren't techies. I also appreciate that I've only provided the bare minimum of explanation there before launching into a techie post. Sorry.
