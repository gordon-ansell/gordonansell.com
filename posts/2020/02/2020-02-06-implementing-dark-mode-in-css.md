---
excerpt: >-
  I'm not in general all that excited about dark modes but creating one for my
  website seemed like an interesting learning experience. I've documented how I
  went about doing that in this article.
description: >-
  How to create a dark mode in CSS and how to allow the user to change modes
  using some Javascript.
title: How to create a dark mode in CSS for your website
date: 2020-02-06T07:35:00.000Z
tags:
  - CSS
  - Tech
  - Web Development
  - Help
---
Let's face it, dark modes make a lot of people wet their pants these days. In order to assist the underwear laundry industry, I set about investigating how to set up a dark mode on my site via CSS.

## Plain CSS dark mode

It turns out it's all in the *prefers-color-scheme* media statement. So if your default is a 'light' scheme and you want to implement a 'dark' scheme for when the user's browser is in dark mode, you'd have something like this:

```
// Standard 'light' mode.
body {%raw%}{{%endraw%}
    background-color: white;
    color: black;
{%raw%}}{%endraw%}

// 'Dark' mode.
@media (prefers-color-scheme: dark) {%raw%}{{%endraw%}
    body {%raw%}{{%endraw%}
        background-color: black;
        color: white;
    {%raw%}}{%endraw%}
{%raw%}}{%endraw%}
```

I actually use SCSS rather than plain CSS and I define my colours as SCSS variables, so for my base ('light') site, I have this:

```
// Colours I use.
$col-hat-green: rgb(33, 121, 114);
$col-dark-red: rgb(181, 99, 87);
$col-pale-yellow: rgb(255, 248, 220);
$col-menu-grey: rgb(248, 249, 250);
$col-body-text: black;
$col-body-bg: #fff !default;
$col-body-bg-alt: rgb(248,249,250);     // Blockquotes.

$green-color-light:  rgb(0, 255, 127);   // Pre, code text.
$green-color-dark:  rgb(0, 60, 0);      // Pre, code background.
$grey-color:       #828282 !default;    // Base for following greys.
$grey-color-light: lighten($grey-color, 40%) !default;  // Pre, code border.
$grey-color-dark:  darken($grey-color, 25%) !default;   // Not used.
```
 
 Then I use those variables throughout my stylesheet rather than hard-coding colours. So in order to implement a dark mode, I just defined some new variables for the colours that needed changing. What I ended up with were the following additional definitions for dark mode:

```
// Dark mode colors.
$col-hat-green-dm: lighten($col-hat-green, 20%);
$col-body-bg-dm: rgb(28,28,30);
$col-body-text-dm: white;
$col-pale-yellow-dm: $grey-color-dark;       // Change the yellow.
$col-navbar-link-dm: darken($col-body-text-dm, 20%);
```

The complete implementation for dark mode on my site looked like this:

```
@media (prefers-color-scheme: dark) {%raw%}{{%endraw%}
    body {%raw%}{{%endraw%}
        background-color: $col-body-bg-dm;
        color: $col-body-text-dm;
    {%raw%}}{%endraw%}
    .navbar.bg-light, blockquote {%raw%}{{%endraw%}
        background-color: $grey-color-dark !important;  
        color: rgba($col-body-text-dm, 0.7) !important;     
    {%raw%}}{%endraw%}
    .citationExternal, .home article.briefly {%raw%}{{%endraw%}
        background-color: $col-pale-yellow-dm;
        h2.btitle {%raw%}{{%endraw%}
            color: $col-body-text-dm;
        {%raw%}}{%endraw%}
    {%raw%}}{%endraw%}
    section.summary, dl.product-appendix {%raw%}{{%endraw%}
        background-color: $col-pale-yellow-dm;
        color: $col-body-text-dm;
    {%raw%}}{%endraw%}
    img {%raw%}{{%endraw%}
        opacity: .75;
        transition: opacity .5s ease-in-out;
    {%raw%}}{%endraw%}
    img:hover {%raw%}{{%endraw%}
        opacity: 1;
    {%raw%}}{%endraw%}
    a, a:link, a:visited, a:active {%raw%}{{%endraw%}
        color: $col-hat-green-dm;
    {%raw%}}{%endraw%}
    .navbar-brand {%raw%}{{%endraw%}
        .navBarTxt {%raw%}{{%endraw%}
            color: $col-hat-green-dm;
        {%raw%}}{%endraw%}
    {%raw%}}{%endraw%}
    .navbar-light .navbar-nav .show > .nav-link,
    .navbar-light .navbar-nav .active > .nav-link,
    .navbar-light .navbar-nav .nav-link.show,
    .navbar-light .navbar-nav .nav-link.active {%raw%}{{%endraw%}
        color: $col-navbar-link-dm; 
    {%raw%}}{%endraw%}    
    .navbar-light .navbar-toggler {%raw%}{{%endraw%}
        color: $col-navbar-link-dm;
        border-color: rgba(0, 0, 0, 0.1); 
    {%raw%}}{%endraw%}   
    .navbar-light .navbar-toggler-icon {%raw%}{{%endraw%}
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); 
    {%raw%}}{%endraw%}
{%raw%}}{%endraw%}
```

Dropping that at the end of my SCSS file was all it needed and it's mostly about using the '-dm' suffixed dark mode colours I defined earlier. It's probably worth noting I use Bootstrap as my base CSS and thanks to [Mark Otto](https://markdotto.com/2018/11/05/css-dark-mode/) for posting about how to make images easier on the eye in dark mode. 

You may be wondering how much support this new(ish) media query has in browsers and you can always check any media query or CSS statement via the [CanIUse site](https://caniuse.com/#feat=prefers-color-scheme).

This CSS-only method will however only switch a user's browser based on whether their system is in dark mode or light mode. They have no choice on your individual site with a CSS-only switcher.

![Light mode and dark mode on my site.](/assets/images/posts/2020/02/2020-02-06-light-mode-dark-mode.jpg "caption=My home page in light mode (left) and dark mode (right).|class=full|title=My home page in light mode (left) and dark mode (right).|@itemprop=image")

## Allowing the user to switch between dark and light modes

If you want to allow the user to switch between dark and light modes as they choose, then you're going to need to do some more work.

Fortunately, [Google Chrome Labs](https://github.com/GoogleChromeLabs/dark-mode-toggle/blob/master/README.md) has done a lot of that work for us.

Using their switcher, you first need to split your CSS into two files: one for light mode and one for dark mode. So I cut the dark mode definitions out of my *main.scss* file and pasted them into a new *dark.scss* file. You **no longer need to wrap those definitions in the *prefers-color-scheme* media query** because we'll now do that in the HTML.

My *dark.scss* file has an `@import 'main.scss';` at the top and then just the dark mode definitions after that (not wrapped in a media scheme).

Now you can use Chrome Labs' method by changing your HTML stylesheet calls as follows:

```
<link rel="stylesheet" href="main.css" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
<link rel="stylesheet" href="dark.css" media="(prefers-color-scheme: dark)" />
<script type="module" src="https://googlechromelabs.github.io/dark-mode-toggle/src/dark-mode-toggle.mjs"></script>
<script type="module" src="https://unpkg.com/dark-mode-toggle"></script>
```

If the user doesn't save the selected mode, your website's mode will match the settings they've used for dark mode in the OS. They can now, however, select a mode they prefer and save it, which will override their OS's settings. Note the media scheme selection is now in the HTML. Also note the two scripts you'll need to support the switcher.

The switcher itself:

```
<dark-mode-toggle
  id="dark-mode-toggle-1"
  legend=""
  appearance="switch"
  dark="Dark"
  light="Light"
  remember="Remember this"
></dark-mode-toggle>
```

You can include that wherever you want it to appear on your site. On mine it's in the header for the home page.

## Flash of unstyled content (FOUC)

I hadn't seen this error for a good number of years but it made a comeback when I was switching styles between dark and light mode. When you get the FOUC, you see a brief 'flash' of unstyled content on your screen before it switches on the style.

You can get rid of that by including the following line before you call any stylesheets in the HTML:

```
<style>html{%raw%}{{%endraw%}visibility: hidden;opacity:0;{%raw%}}{%endraw%}</style>
```

That makes your page invisible during the switchover and you need to make it visible again by adding the following at the end of your stylesheet:

```
// FOUC.
html {%raw%}{{%endraw%}
    visibility: visible;
    opacity: 1;
{%raw%}}{%endraw%}
```

## Conclusion

It's pretty simple, really. I don't, as it happens, wet my pants over dark mode but it's nice to offer the option if people want it.

