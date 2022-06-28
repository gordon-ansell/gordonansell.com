---
excerpt: >-
  Priti Patel is pushing for __weakened encryption in the UK as part of the
  so-called Snooper's Charter__. She wants tech firms to provide backdoors in
  end-to-end encryption so intelligence services can access it at will. There
  are many problems with this idea.
description: >-
  Priti Patel mirrors a lot of the world's governments as she wants backdoors
  into end-to-end encryption. The trouble is, most governments have no idea what
  they're doing.
title: Priti Patel pushes for weakened encryption
date: 2019-08-02T08:50:00.000Z
tags:
  - Tech
  - Security
  - News
  - Politics
---
I recently read that [Priti Patel, our new Home Secretary, intends to keep pushing the so-called Snooper’s Charter](https://www.politicshome.com/news/uk/home-affairs/terrorism/news/105673/priti-patel-slams-facebook-she-says-spooks-should-see "Read about Priti Patel's statement."). 

One of the big things governments around the world want is a backdoor into end-to-end encrypted messages and many are considering trying to force the big tech companies to provide such backdoors.

Governments present what, on the surface, sound like reasonable arguments in favour of such things. They talk about catching terrorists and child molesters and most of us would like to see such people caught, but if you scratch away the surface, beyond the emotive arguments, things are altogether less clear.

Let’s have a look at what they mean by end-to-end encryption and why it’s necessary. This is an extremely simple example that ignores things like public-private key systems and many of the intricacies related to the way these systems actually work.

If I send a plain, unencrypted message to you, it’ll first go to my ISP where it’ll be bounced around a few servers, then it’ll find its way to an internet backbone where it’ll be bounced around a few more servers, then it’ll find its way to your ISP and eventually your computer.

![Unencrypted transmission.](/assets/images/posts/2019/08/2019-08-02-encrypt-1.jpg "caption=Unencrypted transmission.|title=Unencrypted transmission.|@itemprop=image")

Just getting from my computer to google.com requires seven hops to interim servers, and each one of these interim servers is a place where someone could read our unencrypted message via a so-called _man-in-the-middle attack_.

If we get fed up of people snooping on our messages we might decide to use end-to-end encryption. I could send a key to you via a different protocol to the one we use to transmit data; carrier pigeon, for example. Then I’ll encrypt all my future messages with that key. Now all the man-in-the-middle would see is gobbledegook, but you could decrypt the message at your end because I’ve previously given you the key to do so.

![Encrypted transmission.](/assets/images/posts/2019/08/2019-08-02-encrypt-2.jpg "caption=Encrypted transmission.|title=Encrypted transmission.|@itemprop=image")

This isn’t a bulletproof method of security. Someone could still intercept the carrier pigeon involved in the initial key exchange, make a note of the key and then send the carrier pigeon on its way so that we’re none the wiser (although pigeons have no road sense and it would probably have been run over anyway). They could also attempt to decrypt our messages by using brute force to find the key, although if we’ve chosen suitably complex keys we could make it unreasonable for them to do that in any realistic time.

An attacker could of course just hack into either of our computers and read the messages before or after transmission, but that would be quite time-consuming. Although if we used the method I described that might be the only way they’d read our messages because intercepting carrier pigeons might be tricky. There are also a number of other ways we could mitigate some of the danger but I won’t go into them here.

What a government’s mass surveillance programme wants is a way to be this man-in-the-middle and, if a service controls both the key generation and message transmission processes, a suitable backdoor could theoretically be provided. The service provider could essentially be the man-in-the-middle for its own service and then pass the necessary information on to government spooks.

The thing is, if you purposely build in a back door, it’s there for everyone. The WannaCry-based ransomware that struck computers in 2017 [exploited a backdoor Windows had provided for the NSA](https://www.gizmodo.co.uk/2017/05/theres-a-massive-ransomware-attack-spreading-globally-right-now/ "Read more about this attack."), for example.  It’s easy to say such backdoors will only be available to governments, but hackers specialise in finding backdoors.

A government may say this is a risk worth taking to catch terrorists, child molesters and other criminals, but is it really? You may be able to strong-arm big tech into providing these backdoors, but what will criminals do then? They’ll go to smaller independent services. So then you might make it illegal for *any* company to provide encryption without a backdoor, but criminals would then use apps from Russia, China or somewhere else where a nation’s long arm of the law just isn’t long enough. Or the criminals will develop their own messaging systems, just as ISIS did.

There are wider issues too. Do we really want to allow a government to snoop like this? In our western democracies we may have been lulled into a false sense of security by the relatively stable governments we have, but if history teaches us anything it’s that these things don’t last. And aren’t programmes of mass surveillance the sort of thing despotic governments aim for? Haven’t the terrorist already won if they’re forcing us into this?

There _is_ a price to pay for freedom. Our involvement in the many wars we've fought to defend it shows we’re willing to pay that price. It seems odd that we’re planning to sabotage that from within, particularly as I doubt this sort of mass surveillance would have stopped many attacks, and it certainly won’t when criminals get wise to it. What you’d be left with is a system that merely monitors all the innocent people with the criminals having gone elsewhere. In fact, the criminals will be the only ones with effective security systems. 

So even if you think mass surveillance is a good idea in principal, you’re unlikely to realise the perceived benefits of it. You’ll still get all the downsides of course. To be fair, it may provide some short-term results, but they won't last.

Even a former MI5 boss thinks that [weakening encryption is a bad idea](https://www.gizmodo.co.uk/2017/08/former-mi5-boss-im-not-one-of-those-who-believes-we-should-weaken-encryption/ "Read what the former MI5 bos said."). It's not hard to see why intelligence leaders want mass surveillance — it makes their jobs a little bit easier — and I don't blame them for trying to get it. I can see things from their perspective. But the decision ultimately lies with governments.

I don’t believe our government is actually planning anything nefarious here. There is just a woeful lack of technical understanding within governments around the world. That was probably most apparent when, talking about his own mass surveillance plans, the [Australian Prime Minister declared the laws of mathematics don’t apply](https://www.independent.co.uk/news/malcolm-turnbull-prime-minister-laws-of-mathematics-do-not-apply-australia-encryption-l-a7842946.html "Read the Australian Prime Minister's idiotic remarks.") there:

> The laws of Australia prevail in Australia, I can assure you of that. The laws of mathematics are very commendable but the only law that applies in Australia is the law of Australia.

Hmm.

