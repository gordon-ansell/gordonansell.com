---
excerpt: >-
  I've recently got a grip of how to use __schema IDs__ and I thought I'd write
  a quick blog about it in case anyone else is struggling with them.
description: >-
  How to use schema @ids to avoid repeating yourself when you want to define
  complex schemas. It's easier than you might think.
title: Using schema @IDs
date: 2019-04-23T10:50:00.000Z
tags:
  - Web Development
  - Tech
  - Structured Data
  - Help
---
I’ve recently been reviewing the [schema](https://schema.org) I use on this blog and one of the things I wanted to do was remove repetitive definitions.

I used to have something along the lines of:

  ```json
  {
    "@context": "https://schema.org",
    "@type": “Review”,
    "name": "Review of whatever.",
    "author": {
      "@type": "Person",
      "name": "Gordon Ansell",
      "url": "https://gordonansell.com"
  },
  {
    "@context": "https://schema.org",
    "@type": “BlogPosting”,
    "name": "My stunning blog post.",
    "author": {
      "@type": "Person",
      "name": "Gordon Ansell",
      "url": "https://gordonansell.com"
  }
  ```

You’ll note that in the above code I have the same data repeated for 'author' in both the _Review_ and the _BlogPosting_ constructs. This is the sort of repetitiveness I wanted to avoid.

I was aware of schema IDs but didn’t pursue their use when I initially added schema to this blog. I’ve now got around to doing so and I use a lot of IDs in my current schema.

It wasn’t immediately obvious to me how to use IDs, though, so I thought I’d write a quick blog article about it in case anyone else needs to know.

It’s best demonstrated by example, so instead of the code above I now use the following:

  ```json
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://gordonansell.com/#author",
    "name": "Gordon Ansell",
    "url": "https://gordonansell.com"
  },
  {
    "@context": "https://schema.org",
    "@type": “Review”,
    "name": "Review of whatever.",
    "author": { "@id": "https://gordonansell.com/#author" }
  },
  {
    "@context": "https://schema.org",
    "@type": “BlogPosting”,
    "name": "My stunning blog post.",
    "author": { "@id": "https://gordonansell.com/#author" }
  }
  ```

I define the ‘author’ separately via a _Person_ construct with its own _@id_ value of _https://gordonansell.com/#author_. 

ID values should be unique within the schema definitions you set up for the particular page in question, but note that the URL-like IDs I use do not have to be working links; they're just used as a reference value for the schema.

I then refer to that ID in the _Review_ and _BlogPosting_ constructs, thus meaning I only have to define the author once.

In the context of my example I haven’t saved much but it comes into its own where you have long constructs that are regularly repeated.

I hope you find this useful.

