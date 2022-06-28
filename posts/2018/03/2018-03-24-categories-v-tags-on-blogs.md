---
excerpt: >-
  How should we use __categories and tags__ on a blog? In this article I present
  my own particular view of how it should be organised.
description: >-
  How should we use categories and tags on a blog? I offer some suggestions in
  this article and I think categories should represent a different grouping of
  information to tags.
title: Categories v tags on blogs
date: 2018-03-24T09:59:00.000Z
tags:
  - Opinion
  - Blogging
---
I’ve administrated, moderated and/or posted on a number of blogs over the years and one thing I’ve noticed is that there’s generally some confusion about how to use categories and tags. I therefore provide my thoughts on the subject here. I don’t claim to be a guru at this sort of stuff, just a reader and writer of many blogs over the years.

First, a small diversion that relates to categories and tag in a roundabout sort of way. 

If Search Engine Optimisation (SEO) is your main aim, keywords — and their associated influence in categories and tags — are probably less important than they’ve ever been. In the beginning, when search engines really started to get to grips with things, keywords were very important. Site owners could stuff the keywords meta tag full of phrases they wanted to rank for and end up with good search positions as a result.

Google then got a little cleverer and started scanning the articles themselves. The keywords meta tag fell out of favour, but on-page keywords — particularly in H1 and H2 tags — were important. Categories and tags were very important to help determine subject matter at this stage too. Things were still quite keyword-focussed even if the eponymous meta tag was out of favour. 

Now, though, search engines are much better at determining the over all context of a page. Keywords are still important but much less so if they’re not accompanied by appropriate context. It is harder to game the system by keyword stuffing and that’s obviously a very good thing. The general principle now is what it always should have been: write for your audience — not for SEO — and the search engines will figure out a way to reward good content.

Things are still far from perfect. There’s the backlink problem for one thing. Search engines reward your site based on how many other sites link back to the content on your site (and their interpretation of the quality of those sites linking to you). This still allows people to game the system and it’s responsible for huge swathes of comment spam and link farms as people try to surreptitiously acquire backlinks.

In an ideal world, every web page would be manually reviewed by an expert on the page’s subject and given a quality rating accordingly but this would require an unfeasibly large number of page-checkers, so it’s unlikely to ever happen. 

So, back to the subject at hand. Categories and tags help people find content they’re interested in on your site, so they’re good for the reader and thus good for SEO. The keyword aspect of categories and tags undoubtedly still counts but I suspect much less so than ever.

For me, categories are hierarchical groupings and tags are not. That’s one of the major differences between them. I also see categories as being a bit like the classification of animals. An otter, for example, is in the genus _Lutra_, which is in the sub-family _Lutrinae_, which is in the family _Mustelidae_ … and so on and so forth all the way up to the kingdom _Animalia_. The point being that an otter is in a single one of these categories, all the way up to the top.

So I would suggest that an article would only ever be in one category. It’s a single-inheritance model if you’re into your object-oriented programming. On the other hand an article can have multiple tags. If you’re going to have both categories and tags, I see tags as representing a different way to filter things. Read on and I’ll explain more.

Let’s look at an example. Let’s say you’re running a science blog, you might categorise it like this:

  Physics
  --- Quantum Physics
  --- Classical Physics
  Chemistry
  --- Organic Chemistry
  --- Inorganic Chemistry
  Biology

That’ll do for our example and I’m sure you can imagine the sort of thing I’m getting at.

So, when you want to write about the discovery of the Higgs Boson at the Large Hadron Collider, you would probably use the _Physics_ —\> _Quantum Physics_ category and maybe have _Large Hadron Collider_ and _Higgs Boson_ as tags.

That’s certainly one way you could go about things. In fact I’d say that’s probably the usual way something like that would be set up, but I’m not entirely convinced by it. The categories and tags represent the same type of subject matter — science-based things — and I can’t see how that sort of set up makes it any easier for users, nor how using both tags and categories is beneficial. To my mind, you may as well just use tags and tag the article in question with _Physics_, _Quantum Physics_, _Large Hadron Collider_ and _Higgs Boson_.

I think to get the best return for the reader, the categories need to be entirely different. Maybe something along the following lines:

  Science
  --- News
  --- Feature Articles
  --- Quick Reads
  Misc
  --- Blog Notices

Okay, maybe my actual choice of topics in the above categorisation could be better, but the point I’m trying to get across is that we’re now using a different sort of grouping for categories. The article about the discovery of the Higgs Boson might now be in the _Science_ —\> _News_ category and it might have the tags _Physics_, _Quantum Physics_, _Large Hadron Collider_ and _Higgs Boson_.

Your reader can now filter by both article type and science subject, justifying the use of both categories _and_ tags. I don’t think tags should just be seen as a finer-graining of categories.

Either way, I think the total number of categories plus tags should be kept fairly low —  certainly no more than ten and mostly no more than five. As a rule of thumb, I’d say you don’t want your tags and categories returning just a single post on a blog with, say, 100+ articles on it. If you have single-post categories or tags at this point it might be advisable to rethink the structure of your blog.

At this stage it’s probably worth mentioning duplicate content issues and how they might relate to categories and tags. Search engines are very sensitive about this sort of thing and, as a result, the general recommendation is to include a meta-robots statement in the head of your category and tag pages, along the lines of:

`<meta name=“robots” content=“noindex, follow” />`

This ensures search engines don’t index your tag and category pages at the expense of other pages you’d probably prefer to see indexed, such as your individual article pages and maybe the home page. 

I don’t have massive feelings one way or the other on this and much depends on the way each article is described, but I think it’s probably good practice in the absence of a good reason not to do this.

On this blog I don’t bother with categories, I just use tags. I use one ‘main’ tag — the first one I select — and the rest are minor tags. When I’ve got 50-100 or so posts I’ll see how it looks and maybe adjust things a bit. 

