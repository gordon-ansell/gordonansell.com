---
excerpt: >-
  Google is proposing a way to __build a more private web__ which suggests a
  reclassification of cookies amongst other things. From a user's perspective I
  think Google are coming at this from the wrong angle.
description: >-
  Google is proposing a way to change online tracking so it allegedly better
  respects user privacy.
title: Google's private web proposals
date: 2019-08-23T08:40:00.000Z
tags:
  - Google
  - Tech
---
Google is devising a new initiative about [building a more private web](https://www.blog.google/products/chrome/building-a-more-private-web/ "Read the Google article about building a more private web."). They say:

> Privacy is paramount to us, in everything we do. So today, we are announcing a new initiative to develop a set of open standards to fundamentally enhance privacy on the web. We’re calling this a Privacy Sandbox. 

Anything that enhances our privacy on the internet is a good thing but I’m not sure Google are the best people to lead this. Isn’t that a bit like putting the fox in charge of the henhouse?

Google have a vested interest in tracking in order to supply data for their massive online advertising system and the cynic in me wonders if they’ve chosen to initiate this proposal to make sure their own networks don’t suffer unduly.

I can’t say I _blame_ Google for that. They are a company with shareholders and their job is to maximise profit. I understand their position but I have my own position as a user.

One of the things they seem to have a problem with is the large-scale blocking of cookies and they offer two main reasons why they think that’s a bad thing:

> … large scale blocking of cookies undermine people’s privacy by encouraging opaque techniques such as fingerprinting. With fingerprinting, developers have found ways to use tiny bits of information that vary between users, such as what device they have or what fonts they have installed to generate a unique identifier which can then be used to match a user across websites. Unlike cookies, users cannot clear their fingerprint, and therefore cannot control how their information is collected. 

and

> … blocking cookies without another way to deliver relevant ads significantly reduces publishers’ primary means of funding, which jeopardizes the future of the vibrant web. 

I agree with the first point. If we block all cookies then certain platforms won’t take the hint that the user doesn’t want to be tracked, so they’ll develop sneakier methods of performing said tracking. The solution, though, is to block the fingerprinting too or to regulate against subversive tracking.

I’m not so sure I agree with the second reason. An advertiser can benefit from an advert on a site without have to use cookies at all. If I carried an advert on my site for Acme Dog Biscuits then most advertisers would create a particular per-site link for that advert, which would be activated when a user clicks on the advert. It might be something like:

```css
http://acme.com/dog-biscuits/from/gordonansell_com
```

The advertiser would know which site has driven the traffic to them and no cookies would be necessary on my site.

Ah, but they don’t know how many impressions have led to that click-through, you might say. Well, too bad, I say. We only accept that advertisers need the wealth of data they get because they tell us they need it, but we could simply say that privacy comes first and advertisers will have to reconfigure their processes to do without certain stats.

Google prefers the idea of [defining different types of cookies](https://blog.chromium.org/2019/05/improving-privacy-and-security-on-web.html "See the article about Google's ideas about different types of cookies."), which might include some sort of differentiation between same-site cookies and cross-site cookies. This would allow users to selectively clear the type of cookies they didn’t want instead if simply doing a “clear all cookies”.

I can’t help but think this is simply a way for Google to keep more cookies active, discouraging users from doing a clear-all.

Google seems to think extensive tracking is imperative to advertising and that, without it, a lot of funding for sites would be cut off. I can see how it _seems_ imperative in the current framework but maybe that framework has to change. Advertising could (and would, I’d argue) adapt to a framework with minimal tracking. Advertising networks — such as Google, Facebook etc. — would have a harder time adapting of course, but I’m sure they’d find a way.

We don't _have_ to accept that things must stay the way they are. And, for that matter, we don't _have_ to accept that advertisers _must_ be allowed to advertise to us. We don't have to see it as "just one of those things that happen".

I like the site sponsorship method of advertising. An advertiser picks a site in a relevant niche and pays money to the site publisher in order to have their advert displayed for, say, a week. Then, with a link like the one I mentioned above, the advertiser gets data about how many potential buyers a site is sending its way.

I wouldn’t block any site that carried a single, not-overly-intrusive advert from its sponsor. I would even allow a page view to be registered along the lines of the site in question simply adding one to a counter against some ID that registers me as unique but otherwise completely anonymous.

But that’s where I draw the line. I’m not happy if site B knows I’ve previously visited site A, or if they store and pass on that I’m from Taunton, or that I recently bought a certain pair of (very fashionable) shoes, or that I’m interested in goats or whatever. If we're to have adverts at all then I guess we'd prefer them to be relevant but I'm pretty sure most users' lives would not be significantly affected if ads weren't relevant, and I'm sure their lives would be improved if there were fewer adverts in general. 

Relevance could anyway be ascertained by the type of site you're visiting. If I visit a tech site then it's a fair bet I'm interested in tech products. Isn't that enough of a clue for advertisers?

Google might say they need a certain amount of tracking to protect against fraud (click fraud, perhaps), but I don’t see how this is my problem as an end-user. It’s basically saying that my privacy must be invaded in order to protect wealthy corporates from fraud. It’s pay-per-click that gives rise to click fraud, so maybe pay-per-click needs to go. Maybe it should be pay-per-time instead (again going back to a form of sponsorship) and advertisers should focus more on conversions than clicks.

The thing is, we are _conditioned_ to accept that online advertising works the way it does, that there’s a depth of stats we must provide to platforms, publishers and advertisers in order for the web to survive financially. But I disagree with that. We could simply be conditioned to accept different things — such as far less tracking and far fewer cookies or fingerprints — and I’m pretty sure most of the web would still survive.

Platforms, publishers and advertisers have become used to the wealth of data they receive, but they could just become unused to it. If the playing-field is level then this simply becomes the new way to do things. Advertising would still happen.

Google’s approach seems to be to find some way to preserve advertising frameworks as close as possible to the way they currently work, yet make it a bit more transparent and bit more respectful of privacy. In principal, I don’t think that’s a bad thing if we accept the current advertising framework must survive. But I don’t accept that the current framework must survive at all.

The approach I’d like to see is one where privacy, transparency and user-control is paramount. That should be respected as a given and then an advertising framework is built around that.

![The advertising framework - how it is vs how it should be.](/assets/images/posts/2019/08/2019-08-23-ad-framework.jpg "@itemprop=image")

One thing I hate with a passion is the cookie agreement most sites flick up these days. It’s generally a case of accepting their defaults, which will involve at least some tracking and cookies even if not all of it, or going into some sub-screen and striking out the information you don’t want to hand over.

This is the wrong way around. The simplest response — selecting ‘Ok’ or ‘Yes’ or ‘Continue’ or whatever — should result in absolutely no cookies and no tracking whatsoever. Essentially the site should not know you’re there _at all_ unless you actively choose to interact in some way (logging in or making a comment, for example). If you want to allow a site to have deeper tracking information, _then_ you go into the additional screens and tick such boxes as you choose. 

Remember, we are the only ones not getting a cut here. Platforms, publishers and advertisers all make money from taking _our_ data whereas we get nothing. If the advertising framework wants us to willingly opt-in to deep tracking then perhaps it’s time we got our cut and received some financial reward for doing so.

There is a lot of push-back about online privacy at the moment and it has been helped along by the big stories about how our data as been wantonly misused by big tech and its partners. I believe people will continue to push back harder.

Google is correct to say things need to change, that there needs to be more focus on privacy and transparency, but their approach is wrong. They are coming at from the angle of the privacy concessions they need to make to protect advertising, whereas it should be approached from the angle of advertising concessions they need to make in order to protect privacy.  

The default should be _absolutely no tracking whatsoever_ and they build the advertising framework around that. If they want deep tracking then they need to figure out how to entice users to take part, and they need to do that transparently, openly and via a direct user opt-in (and without blackmail like “this site will go bang if you don’t accept our cookies”).

None of this addresses the sheer number of adverts we face and that’s a big problem too. If sites contained one relatively unobtrusive advert then people would be far less likely to run ad blockers against them. But some sites seem to be mainly adverts these days. You know the ones, where your page comes up with blank blocks every few paragraphs whilst the ad-delivery network struggles to fill those blanks with loads of intrusive adverts. 

To prevent users continually pushing back against them, platforms, publishers and advertisers would be well advised to to take a long, hard look at what really pisses people off.

