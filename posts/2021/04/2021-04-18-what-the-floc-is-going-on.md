---
excerpt: >-
  Google has come up with a new way to profiles users in the absence of
  third-party cookies. They still don't get it, though. Or, more accurately, I
  expect they do get it very well, but their commercial interests trump user
  concerns over privacy.
description: >-
  A description of Googles proposed FLoC (Federated Learning of Cohorts)
  standard for profiling people and providing those profiles to advertisers.
title: What the FLoC is going on?
date: 2021-04-18T09:50:00.000Z
tags:
  - Privacy
  - Tech
  - Google
  - Opinion
  - News
---
Web browsers are increasingly blocking third-party cookies. 

For the uninitiated, cookies are little bits of stored data that remember things. These can be useful and help a website deliver a better experience to users. They might remember you're logged in or what you've got in an online shopping cart. You'd be annoyed if you'd added 50 items to your grocery shopping cart only to find that, when you went back to the shopping site a few hours later, your cart was empty and you had to add all those items again.

But cookies can also be sinister, particularly third-party cookies. If you're on my site and I set a cookie somewhere it's a first-party cookie. If I hosted a bunch of adverts (which I don't) and those adverts saved cookies they would be third-party cookies. They're the reason why sometimes you'll notice if you search for, say, shoes one day, you'll find yourself presented with loads of shoe adverts on different sites for many days or weeks afterwards.

Cookies are not sinister in and of themselves, it all comes down to the way they're used and what's stored in them. In general it's the third-party cookies that people find most bothersome. They're often stored without your *informed consent*[^1] and they're sometimes used to store quite personal information about you. Many people think they breach your privacy.

A lot of web browsers are leaning towards blocking third-party cookies as a matter of course. Some do it already and others are thinking about doing it in the not too distant future.

This is a problem for advertisers and an even bigger problem for advertising agencies like Google or Facebook. Such organisations like to profile you so they can match the adverts they deliver to a profile group that's likely to be more receptive to them. This helps to attract advertisers to their platform. 

To add to the advertisers' problems, companies like Apple are starting to take a strong stance on privacy. On iOS, Apple currently supplies advertisers with something called an IDFA (Apple ID for Advertisers), which helps the advertisers build a profile on you. Apple plans to stop supplying that IDFA in the near future (iOS 14.5) unless you actively agree to it. This prompted Mark Zuckerberg of Facebook to throw his toys out of the pram because his advertising business model was largely based on extracting details about you without your informed consent. It was hilarious.

![Google headquarters.](/assets/images/posts/2021/04/2021-04-18-google-hq.jpg "@itemprop=image")

Companies like Google and Facebook attract advertising clients partly by providing a wealth of profile data about people, which enables highly targeted advertising. Google has seen the writing on the wall for third-party cookies, IDFA and the general move towards more user privacy. Google has decided to get ahead of the game and has designed a new way to capture profiling data that doesn't infringe users' privacy *quite* so much. This new method is called [FLoC, which stands for Federated Learning of Cohorts](https://github.com/WICG/floc).

The FLoC algorithms will create loads of groups into which people will go based on their interests. I might find myself in groups corresponding to cats, science, weight training and kettles, for example. Other people — my cohorts — with similar interests will be placed into the same groups. Then when an advertiser is looking for people who have an interest in science, weight training and kettles, and who is also a cat owner, my cohorts and I will be presented as a target group to the advertiser.

So far it sounds like Google is still invading our privacy to the same degree it has always done, just in a different way. They are, however, promising users a level of anonymity. For example, the various cohort groups will only be presented to advertisers when they have thousands of people in them, and the groups will be refreshed from time-to-time, which breaks the chain of browser history, so to speak. Furthermore, certain types of group will be forbidden: groups that would contain sensitive information, which might mean things like medical data or deeply personal categorisations.

I don't really understand the claims of personal anonymity. Something, somewhere — if not an actual person then an algorithm — must be able to tie these profiles to me personally, albeit temporarily, or they wouldn't be able to serve me targeted adverts. Even if the advertisers don't have knowledge of the one-to-one match between profile and individual, Google must. If that information exists anywhere, it can be stored.

Google will eventually turn on FLoC in its Chrome browser, which is the browser with the biggest market share. It's trying to package FLoC as a web standard and will use its market dominance to try make this the default FLoCing way to manage advertising profiles. Some browser companies have already said they won't entertain the idea of FLoC; others are sitting on the fence and waiting to see how FLoC develops. 

The thing is, advertisers and, perhaps more specifically, the advertising agencies still don't get it. I do not wish to be profiled in any way whatsoever. I do not give my consent. The default for the entire web should be not to profile me at all. They don't even need to profile me. If I have an interest in cats, science, weight training and kettles, it's a fair bet I'll visit websites covering those subjects. Put your targeted adverts on those sites and, in theory, I'll see them. Of course advertisers may then lack the depth of information that tracks me from the first search to the final purchase, but tough titties, I do not permit you to have that information. You never should have been taking it in the first place.

If you want to profile me, then ask for explicit permission to do so and I may allow it — it depends what incentives you offer me.

[^1]: The 'informed' bit of informed consent is important. Lots of advertisers will claim you consented via the site's general small print or via the pointless confirmation boxes websites present to you on entry. But implying consent from such things is simply not good enough.

