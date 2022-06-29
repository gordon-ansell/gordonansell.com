---
excerpt: >-
  I've used schemas on my website almost since I started it. I haven't found the
  internet particularly helpful in guiding me with __schema for a blog__ so
  maybe everyone else just makes it up as they go along like I do. In this
  article I show how I use schema, which seems to work reasonably well for me.
description: >-
  How I use schema.org markup on a blog. A combination of WebSite, Blog, Article
  and BlogPosting, and things like Product and Review to generate rich snippets.
title: Schema.org for a blog
date: 2018-10-17T07:15:00.000Z
tags:
  - Structured Data
  - Tech
  - Web Development
  - Blogging
  - Help
---

__NOTE__: What I did here originally has now been replaced with something better, which you can read about in this post: [Schema Markup for a Blog (Part 2)](/schema-markup-for-a-blog-part-2)


After many months of trial and error, I think I’ve got a reasonable [schema](https://schema.org) setup for tagging my blog and I thought I’d share it here.

Before I delve into this, though, I have a minor gripe about [JSON-LD](https://json-ld.org), which is the markup one is recommended to use these days. It’s insanely pedantic and syntactically drunk, so be careful about your commas, brackets and quote marks. I can’t help thinking XML would be a much cleaner syntax for this sort of thing.

You can mark schemas up more cleanly (in my opinion) in [RDFa](https://rdfa.info) or [Microdata](https://www.w3.org/TR/microdata/), which are both allowed by schema standards, but the recommended way to go — at least by Google — is with JSON-LD, which is what all the examples in this article use.

To be fair, JSON-LD is a more flexible way of defining schema once you get into it and it allows you to keep the schema stuff separate from your HTML, it’s just that the syntax is a bit crazy.

I’m not going to go into fine detail with everything here because I find this sort of thing extremely boring, but there should be enough to get you started. Bear in mind that I’m just describing _my_ way of doing things — **I make no claim that this is the correct way of doing things** and it’s certainly not the only way. All I know is that it passes the Google markup tester and results in the appropriate Rich Snippets in Google’s search engine. I suspect I’ve marked up too much but I’m too scared to remove stuff when I now have something that works. 

## Main Home Page
By _main home page_ I mean the landing page of my blog, which on my blog contains the titles of and excerpts from the latest 20 blogs. Because I have more than 20 posts on my blog, my ‘home pages’ span multiple pages, so you have `http://gordonansell.com` as page 1, `http://gordonansell.com/2/` as page 2, `http://gordonansell.com/3/` as page 3 etc.

I’m using _main home page_ to refer only to the first of those pages.

So on that page (and only on that page) I mark the site up with [WebSite schema](https://schema.org/WebSite) and [Blog schema](https://schema.org/Blog). 

This is the sort of WebSite schema I have:

```json
"@context": "http://schema.org", 
"@type": "WebSite",
"description": "Description of the site.",
"disambiguatingDescription": "A different description of the site.", 
"isFamilyFriendly": "http://schema.org/True",
"url": "http://yourdomain.com",
"dateModified":"2018-09-30T05:32:37+00:00",
"inLanguage": "en_GB",
"keywords": [“tags”, “the”, “site”, “uses”],
"mainEntityOfPage": {ldelim}
    "@type": "WebPage",
    "@id": "http://yourdomain.com"
{rdelim},
"author": {ldelim}
    "@type": "Person",
    "@id": "http://yoursite.com#site-author",
    "name": "Your Name",
    "image": {ldelim}
      "@type": "ImageObject", 
      "contentUrl": "http://yoursite.com/your-own-logo.png", 
      "url": "http://yoursite.com"
    {rdelim}
{rdelim},
"publisher": {ldelim}  
    "@type":"Organization",
    "@id": "http://yoursite.com#site-org",
    "name": "Publisher Name",
    "logo": {ldelim}
      "@type": "ImageObject", 
      "contentUrl": "http://yoursite.com/your-site-logo.png",
      "url": "http://yoursite.com"
    {rdelim}
{rdelim}
```

The blog schema is marked up exactly the same but with `"@type": "Blog"` instead of `"@type": "WebSite”`.

The _author_ and _publisher_ keywords appear in many schema constructs just as they are above, They’ve both got `@id` keywords in the above example which tags an ID that can be referred to in other schema constructs to save you having to repeat the blocks. I’ll just refer to them as `“author”: {ldelim}…{rdelim}` and  `“publisher”: {ldelim}…{rdelim}`  from now on to keep this article looking a little less repetitive. 

On the main home page I also loop through all the posts I have excerpts for and define each one with the [BlogPosting schema](https://schema.org/BlogPosting) as follows:

```json
"@context":"http://schema.org",
"@type":"BlogPosting",
"name":"Post Title",
"headline":"Post Title",
"description":"Post Description",
"image":{ldelim}  
    "@type": "ImageObject",
    "contentUrl": "http://yoursite.com/image-for-post.jpg",
    "url": "http://yoursite.com/url-of-post"
{rdelim},
"datePublished":"2018-09-30T05:32:37+00:00",
"dateModified":"2018-09-30T05:32:37+00:00",
"keywords":[“tags”, “the”, “post”, “uses”],
"wordCount":123,
"mainEntityOfPage":"http://yoursite.com/url-of-post",
"author":{ldelim}  
    "@id": "http://yoursite.com#site-author"
{rdelim},
"publisher":{ldelim}  
    "@id": "http://yoursite.com#site-org"
{rdelim}
```

## Subsequent Home Pages
I define subsequent home pages (the `/2/` and `/3/`etc. variants) as web pages using the [WebPage schema](https://schema.org/WebPage) as follows:

```json
"@context": "http://schema.org", 
"@type": "WebPage",
"description": "Description of the site (Page 2)", 
"url": "http://yoursite.com/2/",
"relatedLink": "http://yoursite.com",
"dateModified":"2018-09-30T05:32:37+00:00",
"breadcrumb": {ldelim}
    "@type": "BreadcrumbList",
    "itemListElement": {ldelim}
      "@type": "ListItem",
      "item": "http://yoursite.com/2/",
      "name": "Page 2",
      "position": "1"
    {rdelim}  
{rdelim},
"author": {ldelim}...{rdelim},
"publisher": {ldelim}...{rdelim}  
```

## Pages
My blog consists mainly of posts but I do have some pages for things like contact, privacy etc. I mark plain pages up with the [Article schema](https://schema.org/Article) as follows:

```json
"@context":"http://schema.org",
"@type":"Article",
"name":"Page Title",
"headline":"Page Title",
"description":"Page Description",
"image":{ldelim}  
    "@type": "ImageObject",
    "contentUrl": "http://yoursite.com/image-for-page.jpg",
    "url": "http://yoursite.com/url-of-page"
{rdelim},
"datePublished":"2018-09-30T05:32:37+00:00",
"dateModified":"2018-09-30T05:32:37+00:00",
"wordCount":123,
"mainEntityOfPage":"http://yoursite.com/url-of-page",
"author": {ldelim}...{rdelim},
"publisher": {ldelim}...{rdelim},
"articleBody":"The entire contents of the page go here."
```

## Posts
I mark posts up with the BlogPosting schema as follows:

```json
"@context":"http://schema.org",
"@type":"BlogPosting",
"name":"Post Title",
"headline":"Post Title",
"description":"Post Description",
"image":{ldelim}  
    "@type": "ImageObject",
    "contentUrl": "http://yoursite.com/image-for-post.jpg",
    "url": "http://yoursite.com/url-of-post"
{rdelim},
"datePublished":"2018-09-30T05:32:37+00:00",
"dateModified":"2018-09-30T05:32:37+00:00",
"keywords":[“tags”, “the”, “post”, “uses”],
"wordCount":123,
"mainEntityOfPage":"http://yoursite.com/url-of-post",
"author":{ldelim}...{rdelim},  
"publisher":{ldelim}...{rdelim}  
"articleBody":"The entire contents of the post go here."
```

## Rich Snippets
Of course one of the main reasons you’re doing this is to generate [Rich Snippets](https://yoast.com/what-are-rich-snippets/) so that your posts are displayed more prominently in the search engines. I particularly use this for reviews so that I get a graphic star rating alongside my search engine listing.

For example, I have a review if the Ironmaster IM2000 (which is weight training kit) that appears like this:

![Example rich snippet.](/assets/images/posts/2018/10/2018-10-17-im2000-advert.jpg "caption=Example rich snippet.|title=Example rich snippet.|@itemprop=image")

To achieve that, I use a combination of the [Product schema](https://schema.org/Product) and the [Review schema](https://schema.org/Review) as follows:

```json
{ldelim}
    "@context":"http://schema.org",
    "@id":"http://yoursite.com/url-of-review-post#product",
    "@type":"Product",
    "name":"Product Name",
    "brand":"Product Brand",
    "model": "Product Model",
    "description":"Product Description",
    "aggregateRating":{ldelim}
      "@type":"AggregateRating",
      "ratingValue":"4",
      "worstRating":"0",
      "bestRating":"5",
      "ratingCount": "1"
    {rdelim}
{rdelim},
{ldelim}
    "@context":"http://schema.org",
    "@type":"Review",
    "description":"Review Description",
    "name":"Name of product reviewed",
    "author":{ldelim}...{rdelim},
    "publisher":{ldelim}...{rdelim},  
    "datePublished": "2018-09-30T05:32:37+00:00",
    "url":"http://yoursite.com/url-of-review",
    "itemReviewed": {ldelim}        
      "@id":"http://yoursite.com/url-of-review-post#product"
    {rdelim},
    "reviewRating":{ldelim}
      "@type":"Rating",
      "ratingValue":"4",
      "worstRating":"0",
      "bestRating":"5"
    {rdelim},
    "reviewBody":"The entire contents of the review go here."
{rdelim}
```

Note that I have two ratings above. There’s an [AggregateRating schema](https://schema.org/AggregateRating) as part of the Product and there’s a [Rating schema](https://schema.org/Rating) as part of the Review. I actually only want the Review Rating to appear in my rich snippet because I don’t take aggregate reviews but the Aggregate Rating appears to take precedence as far as Google is concerned. I’ve tried fiddling about with it but haven’t been successful in defining a product and then linking a standard, rather than aggregate, rating to it.

If I remove the Product definition and its Aggregate Review, my rich snippet disappears altogether. This highlights why I’m not an expert in schema yet. I’ll leave both in place until I’m enlightened about how to drop the Aggregate Review but still keep Product schema in place.

Products aren’t the only thing you can review. You might want to look at the following too:

* [SoftwareApplication](https://schema.org/SoftwareApplication) for apps and such,
* [MusicRecording](https://schema.org/MusicRecording) for songs,
* [Movie](https://schema.org/Movie) for films,
* [Book](https://schema.org/Book) for books,
* [CreativeWork](https://schema.org/CreativeWork) for generic ‘creations’ like websites and other blogs,
* [LocalBusiness](https://schema.org/LocalBusiness) for your local chip shop and similar,
* [Organization](https://schema.org/Organization) if you’re reviewing a company.

I just pick the appropriate schema depending on what I’m writing about.

## Testing
Believe me, you need to test your schema, particularly if its written in JSON-LD. It is so easy to make mistakes with the syntax. I use [Google’s Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool) to validate my schema.

## Conclusion
As I’ve stressed a few times in this article, I’m not a specialist in schema. I’ve just found something that more or less works even if I have a suspicion I’m not quite doing everything right and I’m overdoing some of my schema definitions. 

I think it’s worth spending some time on schema, though. Google rewards you with better listings if you do.

Good luck with all the hair pulling this schema stuff will force upon you.


