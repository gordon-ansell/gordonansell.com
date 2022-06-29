---
excerpt: >-
  Armed with more knowledge about how it works I've recently revised __the way I
  use schema on this blog__. In this article I explain how I reflect both the
  physical and logical structure of my website via schema.
description: >-
  My (revised) version of how to markup a blog with schema so that the relevant
  properties and relationships are properly defined.
title: Schema markup for a blog (Part 2)
date: 2019-04-23T18:10:00.000Z
leader: >-
  I see a website as having both a physical and a logical structure. I use
  WebSite and WebPage schema to reflect the physical structure, and Blog and
  BlogPosting (along with sub-logic via Review and Product) to represent the
  logical structure. I believe it is important to define schema relationships
  alongside properties.
tags:
  - Structured Data
  - Tech
  - Web Development
  - Blogging
  - Help
excerptImage: /assets/images/posts/2019/04/2019-04-23-schema-icon.png
---
Back in October last year [I blogged about the schema markup](/schema-org-for-a-blog) I was using on this site. This was a mistake because I simply hadn’t researched schema enough at the time. I now have and I believe I have a much better idea of how the various [schema](https://schema.org) on a web page should fit together.

One of the main things I’ve discovered is that schema should be linked together as much as possible. Part of its remit is to define the relationships between the elements of a web page.

What I’ve ended up with is something that can be diagrammatically represented as follows:

![How I mark up schema on my blog.](/assets/images/posts/2019/04/2019-04-23-schema.png "caption=How I mark up schema on my blog.|title=How I mark up schema on my blog.|@itemprop=image")

I make the distinction between the _physical structure_ of a website and its _logical structure_.

## Physical Structure

The physical structure is fairly simple. At the top level you have a _WebSite_ and every page on that website is a _WebPage_. They way I set up that relationship is via _isPartOf_ as follows:

  ```json
  {
    "@context": "https://schema.org",
    "@type": “WebSite”,
    "@id" : "https://gordonansell.com"
    "name": "Gordy's Discourse",
    .
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “WebPage”,
    "@id" : "https://gordonansell.com/page-slug"
    "name": "Title of whatever webpage.",
    "isPartOf": { "@id": "https://gordonansell.com" }
    .
    .
    .
  }
  ```

Most parts of the logical structure ultimately link back to a _WebPage_ (with only _Blog_ linking back directly to the _WebSite_, as we'll see).

## Logical Structure

On this site I have two distinct types of content: blog posts, which are the dated posts that form the majority of the site (it is after all primarily a blog), and then I have the content that makes up my ‘about’ page, my ‘contact’ page and similar non-blog content.

### The Blog and Its Content

The _Blog_ is a part of the _WebSite_ (but not the _whole_ of the website) so it gets related via the _isPartOf_ relationship.

Each single _BlogPosting_ is a part of the _Blog_, and hence gets related to it via _isPartOf_, and it also forms the main element of the physical WebPage (the other elements being headers, footers, menus etc.), so it relates to that as the _mainContentOfPage_.

So the start of the logical side of things looks like this: 

  ```json
  {
    "@context": "https://schema.org",
    "@type": “Blog”,
    "@id" : "https://gordonansell.com/#blog"
    "name": "Gordy's Discourse Blog",
    "isPartOf": { "@id": "https://gordonansell.com" }
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “BlogPosting”,
    "@id" : "https://gordonansell.com/page-slug/#blogpost"
    "name": "Title of whatever blog post.",
    "isPartOf": { "@id": "https://gordonansell.com/#blog" }
    "mainEntityOfPage": { "@id": "https://gordonansell.com/page-slug" }
    .
    .
  }
  ```

#### Sub-Logic

There may also be sub-logic elements. You might, for example, be writing a _Review_ of a _Product_ and need to define how those schema elements relate to your _BlogPosting_.

The way I do it is to define the _Review_ as the ‘main entity’ of the _BlogPosting_ , and thus use _mainEntityOfPage_, and the _Product_ as the _itemReviewed_ in the _Review_. So the sub-logic would look like this:

  ```json
  {
    "@context": "https://schema.org",
    "@type": “Review”,
    "name": "Gordy's Review Title",
    "mainEntityOfPage": { "@id": "https://gordonansell.com/page-slug/#blogpost" }
    "itemReviewed": { "@id": "https://gordonansell.com/page-slug/#product" }
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “Product”,
    "@id" : "https://gordonansell.com/page-slug/#product"
    "name": "Name of product reviewed.",
    .
    .
  }
  ```

Technically you could make the _Review_ the _mainEntityOfPage_ for the physical _WebPage_ and skip the _BlogPosting_ altogether, but I like to keep it to a standard (because I obviously have blog posts that are not reviews). It also covers me if I go off at a tangent during a review (which I can sometimes); the review is undoubtedly the ‘main entity’ of my blog post in this case but it may not always be the _only_ entity in the blog post.

### Non-Blog Content

The pages that are not blog posts are defined via _Article_ schema on my site and are linked directly to the _WebPage_ as its main content:

  ```json
  {
    "@context": "https://schema.org",
    "@type": “Article”,
    "name": "Title of whatever article.",
    "mainEntityOfPage": { "@id": "https://gordonansell.com/page-slug" }
    .
    .
  }
  ```

## The Whole Thing

Putting all the code together, we get this for a blog page with a review:

  ```json
  {
    "@context": "https://schema.org",
    "@type": “WebSite”,
    "@id" : "https://gordonansell.com"
    "name": "Gordy's Discourse",
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “WebPage”,
    "@id" : "https://gordonansell.com/page-slug"
    "name": "Title of whatever webpage.",
    "isPartOf": { "@id": "https://gordonansell.com" }
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “Blog”,
    "@id" : "https://gordonansell.com/#blog"
    "name": "Gordy's Discourse Blog",
    "isPartOf": { "@id": "https://gordonansell.com" }
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “BlogPosting”,
    "@id" : "https://gordonansell.com/page-slug/#blogpost"
    "name": "Title of whatever blog post.",
    "isPartOf": { "@id": "https://gordonansell.com/#blog" }
    "mainEntityOfPage": { "@id": "https://gordonansell.com/page-slug" }
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “Review”,
    "name": "Gordy's Review Title",
    "mainEntityOfPage": { "@id": "https://gordonansell.com/page-slug/#blogpost" }
    "itemReviewed": { "@id": "https://gordonansell.com/page-slug/#product" }
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “Product”,
    "@id" : "https://gordonansell.com/page-slug/#product"
    "name": "Name of product reviewed.",
    .
    .
  }
  ```

And this for a non-blog page:

  ```json
  {  
    "@context": "https://schema.org",
    "@type": “WebSite”,
    "@id" : "https://gordonansell.com"
    "name": "Gordy's Discourse",
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “WebPage”,
    "@id" : "https://gordonansell.com/page-slug"
    "name": "Title of whatever webpage.",
    "isPartOf": { "@id": "https://gordonansell.com" }
    .
    .
  },
  {
    "@context": "https://schema.org",
    "@type": “Article”,
    "name": "Title of whatever article.",
    "mainEntityOfPage": { "@id": "https://gordonansell.com/page-slug" }
    .
    .
  }
  ```

This is of course just one way to do it. There are others but the important thing is to define the relationships between schema objects as well as the properties attributed to each schema object.

## Additional Schema

I make use of the _breadcrumbs_ element in _WebPage_ to indicate the (simple) hierarchy of my site, which is another form of relationship. This is a simple example:

  ```json
  {
    "@context": "https://schema.org",
    "@type": “WebPage”,
    "@id" : "https://gordonansell.com/page-slug"
    "name": "Title of whatever webpage.",
    "isPartOf": { "@id": "https://gordonansell.com" },
    "breadcrumbs": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement":       
         [
          {
              "@context": "http://schema.org",
                "@type": "ListItem",
                "item": "https://gordonansell.com",
                "name": "Gordy's Discourse",
                "position": "1"
             },
             {
                "@context": "http://schema.org",
                "@type": "ListItem",
                "item": "https://gordonansell.com/my-blog-post",
                "name": "The title of my blog post.",
                "position": "2"
             }
          ]    
    }
    .
    .
  }
  ```

I try to relate everything to something: images, videos, everything.

## Considerations

- I make extensive use of [schema IDs](https://gordonansell.com/using-schema-ids) to avoid repeating definitions and to keep my schema code clean.
- Always run your schema through [Google’s Structured Data Testing](https://search.google.com/structured-data/testing-tool) Tool to make sure it’s valid. It’s easy to make mistakes with schema’s syntax.
- Read some of Google’s documentation about structured data: [Understand How Structured Data Works](https://developers.google.com/search/docs/guides/intro-structured-data), [Structured Data Guidelines](https://developers.google.com/search/docs/guides/intro-structured-data) and, perhaps most comprehensively, the [Structured Data Reference](https://developers.google.com/search/reference/overview) (expand the _Structured Data_ menu option on the left for more details about Google’s approach to each schema element).
- If you want to see all the available schema definitions you can look them up on [http://schema.org](http://schema.org).

