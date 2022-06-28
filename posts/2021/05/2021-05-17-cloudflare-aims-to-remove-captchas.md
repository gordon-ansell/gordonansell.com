---
excerpt: >-
  Cloudflare is experimenting with a new USB-based authentication of personhood
  to replace CAPTCHAs, but they still fail to understand who's responsible for
  this.
description: >-
  Cloudflare is experimenting with a new USB-based authentication of personhood
  to replace CAPTCHAs, but they still fail to understand who's responsible for
  this.
title: Cloudflare aims to remove CAPTCHAs
inline: true
date: 2021-05-17T06:05:00.000Z
tags:
  - Tech
  - Security
  - News
  - Citation
externalLink: >-
  https://blog.cloudflare.com/introducing-cryptographic-attestation-of-personhood/
citation:
  title: >-
    Humanity wastes about 500 years per day on CAPTCHAs. It’s time to end this
    madness
  site:
    name: Cloudflare Blog
    url: 'https://blog.cloudflare.com'
  author:
    name: Thibault Meunier
    url: 'https://blog.cloudflare.com/author/thibault/'
---
Cloudflare is running an experiment that replaces its CAPTCHAs with USB-based confirmation that you belong to the human race. This sounds like a good idea because CAPTCHAS are extremely annoying. I have to *really* want to access a site to bother picking out grainy images of fire hydrants, crosswalks or buses. More often that not I don't bother and hit the back button instead.

Cloudflare is calling their new process *Cryptographic Attestation of Personhood* and they describe it as working like this:

1. The user accesses a website protected by Cryptographic Attestation of Personhood, such as cloudflarechallenge.com.
2. Cloudflare serves a challenge.
3. The user clicks I am human (beta) and gets prompted for a security device.
4. User decides to use a Hardware Security Key.
5. The user plugs the device into their computer or taps it to their phone for wireless signature (using NFC).
6. A cryptographic attestation is sent to Cloudflare, which allows the user in upon verification of the user presence test.

Cloudflare claims this will cut the average authentication time from 32 seconds down to five seconds.

This is all well and good, and it's definitely an improvement on CAPTCHAs, but it still suffers from an incorrect inversion of responsibility. I don't need to prove I'm human because I know I am (sort of), so I don't understand why I have to go through any process at all. It's Cloudflare that has the problem and they should be looking for ways to resolve it without wasting my time at all.

You might ask me how they're meant to do that, but that's not my problem either. 

They say necessity is the mother of invention, and it would be useful if people stopped bothering with CAPTCHAs or any other method of proving they're human. It's a bit rich that a computer asks *me* to prove I'm human in the first place. If we all hit the back button it would provide the motivation for Cloudflare (and other companies that use CAPTCHAs) to get a little more inventive. I reckon most people could live without 95% of the sites they access, they just don't realise it until they force themselves to do so.



