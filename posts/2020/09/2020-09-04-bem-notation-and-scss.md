---
excerpt: Tinkering with BEM notation and SCSS because I'm a geek and I have no life.
description: >-
  A look at how BEM notation might work with SCSS. I also present my opinions
  about BEM in general.
title: BEM notation and SCSS
date: 2020-09-04T12:25:00.000Z
tags:
  - CSS
  - Tech
  - Web Development
  - Help
---
I've been looking at [BEM notation](http://getbem.com/introduction/) for SCSS styles recently. For the uninitiated, BEM stands for **B**lock-**E**lement-**M**odifier and it's a recommended way to name styles so they can be easily managed, easily identified and easily organised into reusable components.

An example would help. Imagine we have the following bit of HTML code:

```  
<header>
    <nav>
        <input type="checkbox" id="menu-btn" />
        <label for="menu-btn">
            <span class="navicon"></span>
        </label>
        <ul class="menu">
            <li>
                <a href="/" title="Home">Home</a>
            </li>
            <li>
                <a href="/about" title="About">About</a>
            </li>
        </ul>
    </nav>
</header>
```

The way I would have been styling that was via a bit of CSS (well, SCSS actually) such as this (and note I've trimmed my actual CSS down for brevity):

```scss
header > nav {

    display: inline;

    ul {
        margin: 0;
        padding: 0;
        …
    }
  
    li a {
        display: block;
        text-decoration: none;
    }
  
    label {
        cursor: pointer;
        …
        .navicon {
            display: block;
            …
        } 
        .navicon:before,
        .navicon:after {
            content: '';
            transition: all .2s ease-out;
            …
        }  
    }
  
    input {      
        display: none;
  
        &:checked ~ ul {
            max-height: $menu-small-max-height;
        }
        &:checked ~ label .navicon {
            background: transparent;
        }
        …
    }  
}
```

That always seemed sensible to me. I was using a bit of selector madness to target the correct bits of HTML without having to define classes on everything. This seemed to be a good use of the extended CSS features provided by SCSS. 

There could be a problem, though, if I wanted to copy and paste both the HTML and CSS to somewhere else and reuse everything in a component-like fashion.

I would at least have to change the parent `header > nav` selector, or give the second-level `nav` selector its own class and target that. That wouldn't be too onerous, but what if I wanted to paste it inside of another block that had additional `ul` and `li` list items? 

I could certainly overcome that by getting more specific with selectors, but it would have lost something of 'pluggable' component feel in the process.

So I wondered if BEM was the answer.

As I stated at the beginning, BEM notation consists of Blocks, Elements and Modifiers.

A **Block** is a self-contained 'unit' if you like.

Within blocks, you have **Elements**. These are prepended with the block name to make them specific, so for a block called '*menu-top*', a label element within that block might be called '*menu-top\_\_label*'. Note the convention of separating the block part of the name from the element part of the name with two underscores.

As far as (S)CSS is concerned, blocks can exist within blocks and elements can exist within blocks. For elements within elements it's a bit more confusing. In HTML it's fine but it's not recommended for CSS, or at least as far as the naming convention is concerned. You want to try and avoid '*block_\_elem1\_\_elem2*' if possible. 

Confused? Yes, it is a bit confusing at first. Another example might help. 

If I wanted to convert the code at the start of this article to BEM notation, I'd first have a cup of tea — because that always helps — and then come up with something like this for the HTML:

```html
<header>
    <nav class="menu-top">
        <input type="checkbox" id="menu-btn" class="menu-top__input" />
        <label class="menu-top__label" for="menu-btn">
            <span class="menu-top__icon"></span>
        </label>
        <ul class="menu-top__items">
            <li class="menu-top__item">
                <a class="menu-top__link" href="/" title="Home">Home</a>
            </li>
            <li class="menu-top__item">
                <a class="menu-top__link" href="/about" title="About">About</a>
            </li>
        </ul>
    </nav>
</header>
```

Note that all the element class names in my *menu-top* block begin with the block name. Note also that even though I have elements within elements in the HTML, the naming convention does not reflect that (as per BEM recommendations).

For the (S)CSS I'd have something like this:

```scss
menu-top {

    display: inline;

    &__items {
        margin: 0;
        padding: 0;
        …
    }
  
    &__link {
        display: block;
        text-decoration: none;
    }
  
    &__label {
        cursor: pointer;
        …
    }
  
    &__icon {
        display: block;
        …

        &:before,
        &:after {
            content: '';
            transition: all .2s ease-out;
            …
        }
    }          
 
    &__input {      
        display: none;
  
        &:checked ~ menu-top__items {
            max-height: $menu-small-max-height;
        }
        &:checked ~ menu-top__label .menu-top__icon {
            background: transparent;
        }
        …
    }  
}
```

There are a couple of things to say about this:

- The names have been converted to BEM notation and I'm using the power of the SCSS '&' to make it easier to define them.
- In keeping with BEM recommendations, I've moved the *.navicon/.menu-top\_\_icon* definition out of the label definition so that I don't have elements within elements in the CSS.

So what have I ended up with?

I now have a self contained, reusable bit of code with explicitly targeted class names that won't clash with anything else (assuming I apply BEM standards throughout).

I haven't yet mentioned anything about the **M** of BEM: **Modifiers**.

Modifiers change the behaviour of a block or element. They're optional but their main use case is at runtime where you might want to change the look of something depending upon the way a site is being used.

If we had a series of tabs we might set up a block called '*navigation-tabs*' for example. Then each tab might be an element of type '*navigation-tabs\_\_single*'. If we want to show which tab is currently active, that would be the job of a modifier.

Modifiers are appended via a single underscore, so we might define a modifier for an active tab called '*navigation-tabs\_\_single\_active*' and add that class to the HTML for active tabs (note that it doesn't replace the element class but is appended to it — it 'modifies' it).

I don't personally have much use for modifiers on my blog but they would come into their own on a more interactive site.

So, am I sold on BEM notation?

Partly! 

I'm hampered by a liking for extensive use of CSS selectors to target the right place rather than cluttering up the HTML with class names. It just seems cleaner to me. I also think SCSS tends to lead us away from BEM notation rather than towards it.

But I can see how BEM notation makes the code easier to understand and I also appreciate the way it helps build reusable components.

If you truly want to worship at the altar of BEM, it even recommends [file name and directory structure standards](https://en.bem.info/methodology/quick-start/#file-structure), but I'm not all that enamoured with that. Perhaps I'm just not *that* much of a geek.

I've converted some bits of my site to BEM and will probably convert more when I'm suitably bored of doing other things.

###### Further reading

- [BEM — Block Element Modifier](http://getbem.com).
- [BEM.info](https://en.bem.info)

