---
excerpt: >-
  If you use **Google Search Console** you might encounter **coverage problems**
  from time-to-time. Such problems might stop your site from being indexed
  properly. In this article I explain how you might correct some of those
  problems.
description: >-
  How to find and fix coverage problems in Google Search Console and ensure your
  site is indexed properly.
title: Coverage issues in Google Search Console
date: 2020-03-17T14:15:00.000Z
tags:
  - Tech
  - Web Development
  - Error
  - Google
  - Help
---
![The coverage menu option in Search Console.](/assets/images/posts/2020/03/2020-03-17-coverage-menu.jpg "class=s33 right|@itemprop=image")
If you want your site to be fully indexed in Google Search, be sure to check it in [Google's Search Console](https://search.google.com/search-console) for coverage problems. You can find this option via the *Coverage* menu item on the left. When you click on that you'll then see a graphic that displays, respectively:

- pages with errors,
- pages with warnings,
- pages that are valid, and
- pages that are excluded.

Page down past the graphic and you'll see a *Details* display showing you a further breakdown where a specific *Type* is allocated to the pages in each of the above categories. If you click on any of those rows it will then show you the URLs of the pages for each *type*.

![The coverage detail screen in Search Console.](/assets/images/posts/2020/03/2020-03-17-coverage-detail.jpg "@itemprop=image")

Deal with *Errors* and *Warnings* first and then have a look at the pages that are *Excluded* from Google Search. It may be you deliberately want them excluded but, if not, you should address the reason why Google's not indexing them.

## Search Console coverage types

Here are some of the *Types* you might encounter and how to fix them.

### Excluded by 'noindex' tag

This is saying you have deliberately chosen not to index a page by setting the *robots* or *googlebot* meta tags in the <head> section of your HTML.

Either of the following tags will be present:

```html
<meta name="robots" content="noindex" />
<meta name="googlebot" content="noindex" />
```

If that's what you want, then fine, but if you'd rather the pages were indexed you'll need to change those statements to:

```html
<meta name="robots" content="index" />
<meta name="googlebot" content="index" />
```

### Duplicate without user-selected canonical

This is saying Google found two pages with the same content but different URLs and you haven't told Google which URL it should consider to be the main one. Google calls the main URL for a page its *canonical* URL.

First, you should probably check why you have two different URLs for the same content. Often this is a mistake and you've accidentally created two pages with slightly different URLs. This can happen with trailing slashes on URLs. For example, the two following URLs might point to the same content:

```
https://mydomain.com/my-great-content
https://mydomain.com/my-great-content/
```

You might want to do some URL rewriting via *.htaccess* to avoid such problems, but it's also useful to tell Google what the canonical URL is via a link in the <head> section of your HTML. Such a link would look like this:

```html
<link rel="canonical" href="https://mydomain.com/my-great-content" />
```

What the above line would do in my example is select the URL without the trailing slash as the canonical URL.

### Alternate page with proper canonical tag

This is Google saying that, for the URL in question, it looked at the canonical link in the <head> section of your site (see the previous section in this article) and found a different URL listed.

This is probably not a problem as Google will index the canonical URL and ignore the superfluous one, but you might want to check why you have two URLs pointing to the same content and ensure it's deliberate.

### Duplicate, Google chose different canonical than user

How very dare it! Google has found two URLs pointing to the same content and you have done things properly and labeled one of them as canonical, but Google has audaciously disagreed with your choice.

If Google's correct, change your canonical reference to the one Google suggests. If Google's incorrect, swear bitterly and either concede defeat or remove the URL Google thinks is canonical to force it to choose the one you prefer.

### Duplicate, submitted URL not selected as canonical

You have submitted a URL for indexing but the same content exists elsewhere and either you or Google have determined that a different URL is canonical for that content.

Check which one you want as the canonical URL and submit *only* that one for indexing.

### Not found (404)

This is exactly what it says it is: Google could not find the specified URL. If it's because you've deleted that page then fine, that's what you want. If you think that page should exist then you'll need to investigate.

### Soft 404

This is worse than the *Not found (404)*, above, because Google couldn't find the page, but the web server returned an 'okay' message rather than a 404 message. Your web server is essentially lying.

If you are using a CMS, something might have gone wrong with it. Standard practice for a 'not found' is to return a 404 code and then redirect to a page that tells the user it could not find the page they requested.

You might also want to check your *.htaccess* file to make sure 404 errors are being handled correctly. You need something like this in *.htaccess*:

```
ErrorDocument 404 /error_pages/404.html
```

This tells the web server to show the appropriate error page to the user if it encounters a 404 error.

### Discovered - not indexed

This is not a problem. Google has *discovered* the page but has not yet *crawled* and *indexed* it. Just wait for Google to do its stuff.

### Crawled - currently not indexed

This is not a problem. Google has *discovered* the page and *crawled* it but not yet *indexed* it. Just wait for Google to do its stuff.

### Page with redirect

This is *probably* not a problem. The URL in question redirects to another URL. You may have redirected that URL manually (perhaps via *.htaccess*) or you've told Google that another URL is canonical for that content.

Let's say your site is accessible via both of the following URLs:

```
https://mydomain.com 
https://www.mydomain.com
```

Only one of those should be canonical and you can tell Google which in Search Console.

### Indexed, not submitted in sitemap

The page is fine and Google has indexed it. You don't *have* to do anything but you might want to include that page in your sitemap for completeness.

If Google should not have indexed that page — which would explain why it's not in your sitemap — then add a *noindex* tag to the page as follows:

```html
<meta name="robots" content="noindex" />
<meta name="googlebot" content="noindex" />
```

### Crawl anomaly

This is telling you Google had some problems crawling the page. Maybe your site was down or it got a strange error back from the web server.

First check the page in a browser to make show it displays okay ad looks like you expect. If so, do an *Inspect URL* from Search Console and hopefully that will tell you why Google struggled to crawl the page. It doesn't always and I've seen perfectly good URLs return a crawl anomaly. I've always suspected my server might have had a blip at the time so I generally resubmit them for indexing and just wait for Google to crawl them again.

![Inspect URL screen in Search Console.](/assets/images/posts/2020/03/2020-03-17-url-inspection.jpg "@itemprop=image")

## After you've fixed problems

After you've fixed any problems you can wait until Google crawls your page again or you can prompt it by doing a *URL inspection* in Search Console, forcing it to *Test Live URL* and then *Request Indexing*.

