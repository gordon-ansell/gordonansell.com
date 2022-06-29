---
excerpt: >-
  The EU is setting the scene for encryption backdoors via a wishy-washy
  resolution that goes to great lengths not to mention backdoors at all. That's
  what they really mean, though.
description: >-
  The EU has adopted a resolution that says it wants 'security through
  encryption and security despite encryption', which basically means it wants a
  backdoor.
title: EU pushes for encryption backdoors
date: 2020-12-15T07:20:00.000Z
tags:
  - Privacy
  - Security
  - Tech
  - News
---
[The EU has adopted a resolution about data encryption](https://www.consilium.europa.eu/en/press/press-releases/2020/12/14/encryption-council-adopts-resolution-on-security-through-encryption-and-security-despite-encryption/?utm_source=dsms-auto&utm_medium=email&utm_campaign=Encryption%3a+Council+adopts+resolution+on+security+through+encryption+and+security+despite+encryption#). The mantra that comes along with this resolution is:

> Security through encryption and security despite encryption.

Which is thoroughly confusing. The resolution further states:

> In this resolution, the Council underlines its support for the development, implementation and use of strong encryption as a necessary means of protecting fundamental rights and the digital security of citizens, governments, industry and society. At the same time, the Council notes the need to ensure that competent law enforcement and judicial authorities are able to exercise their legal powers, both online and offline, to protect our societies and citizens.

![EU Council logo.](/assets/images/posts/2020/12/2020-12-15-eu-council-logo.png "class=s33 right|@itemprop=image")
That's fairly wishy-washy and it sounds like they want the best of both worlds: end-to-end encryption *and* a way for law enforcement authorities to access data without compromising the encryption. Alas, such a solution does not exist.

What they're really hinting at is encryption backdoors and — let's get the crux of this article out of the way —encryption backdoors are a bad idea.

The reason law enforcement and intelligence agencies are calling for encryption backdoors is a good one. It's their job to catch bad people and they cannot be criticised for wanting to do that. They want to make their task as easy as possible and backdoors would help in that respect. Law enforcement and intelligence agencies with technical smarts will be aware of the dangers of encryption backdoors, but any concerns they have will be trumped by their desire to succeed at their primary task of catching criminals. 

It falls to governments to make a decision and define the laws around these things. They need to make the decisions on behalf of everyone and strike a balance. Unfortunately governments' understanding of technical issues is often woefully inadequate.

## The mathematics of encryption?

This is a simplified explanation but it will give you the basic idea.

Encryption works by making the encryption keys mathematically hard to figure out. If I take two huge prime numbers and multiply them together I get an even bigger number. If I give you that big number, it is difficult for you to establish the two prime numbers I used to create it. It is not impossible — you could get your computer to keep trying pairs of numbers until it found a match — but if I make all the numbers big enough, it's impractical for you to figure things out via any brute force method. It would take too long.

The mathematics of generating encryption keys is more complicated than that, but that's the gist of it. If I gave you a number like this:

```
1615850303565550365035743834433497598022
2051334857742016065172713762327569433945
4465986007057614567318443589804609490097
4705977957524546054754407619322414156031
5438683650498045875098875194826053398028
8191920337841383961093213098780809190471
6923808523529082292601815252144378794577
0532904303776199561965192760957166694834
1712103424873932822847474280880176631610
2903890282966551309635423015707512929643
2088558362971801859230928678799175576150
8229522018488066166436156135628423554101
0486257855086346566173483927129032834896
7522998634176499319107762583194718667771
8010677166148023226592393024760740967779
26805529798115328
```

… you'd have a tough job figuring out which two prime numbers I multiplied together to create it, even if you have a computer at hand to help you. 

## Public and private keys

To generate our keys we shove the big numbers we generated into an algorithm and that will spit out two more numbers. One of those is used to encrypt the data, and thus becomes the public key, and the other us used to decrypt the data and thus becomes the private key.

The public and private keys are both related to the original big numbers we created, but the algorithm is such that, whereas encryption is easy, decryption is hard and can only be performed by someone who possesses the private key.

If I want to allow you to send me encrypted messages, I give you my public key and, because that only encrypts data, I don't much care who sees it. You then take your message, encrypt it with my public key and send it to me. It's safe in transit because it cannot be decrypted without my private key, which I keep to myself. When I get your message I can decrypt it and see what nonsense you've sent me.

## Backdoors

To insert a backdoor into a system, someone other than the intended recipient would need a list of all the private keys. This might be the authorities or it might be the hardware and software companies that create encryption technologies.

If the authorities then want to see what criminals have been talking about, they could look up the stored private keys and decrypt the messages.

## The problems

A backdoor system would only be *intended* to be used by the authorities. Therein lies the first problem. If you build a backdoor into security, it's there for *everyone* regardless of your intent.

The [US Department of Defence at The Pentagon has been hacked](https://www.silicon.co.uk/security/cyberwar/us-dod-hacked-331903), [NSA code was stolen and then the thieves themselves were hacked](https://www.wired.co.uk/article/nsa-hacking-tools-stolen-hackers), and if you don't see regular stories about companies and organisations being hacked then you're not reading enough news.

It isn't just criminal gangs that hack computers; foreign powers hack too and they have considerable resources at their disposal to do so. They'd be very interested in a grand database of private encryption keys.

The only way to keep encryption secure is to not have a database of private keys in the first place. I would ask whether the law enforcement and security authorities intend to have backdoors into their own encryption. That's not as facetious as it sounds. We all have overlords, so it would be reasonable to expect their political bosses to hold a private key database for the law enforcement authorities, just in case they need to uncover the dastardly deeds of a rogue operator. I suspect the answer to that is a resounding no, though.

There's also the issue of what criminals and terrorists would do if their private keys are now on a database accessible to the authorities. They'd simply use hardware or software that was outside the remit of those authorities where no private key database exists. They'd go through a rogue nation or develop their own software (as ISIS did).

You'd end up with a situation where the bad guys are the only ones with effective encryption. We wouldn't be able to monitor what they're doing but they'd know everything about us.

It baffles me why some people cannot see this. Or, if they do see it, they can only be concerned about the low-hanging fruit because, yes, the dim criminals will be exposed by it and there'd be some successes using the backdoors to catch criminals at the beginning. That would fade over time, though.

## Conclusion

If governments legislate for backdoors — and I suspect they will because they don't understand these things — it will turn out to be one of the worst decisions they'll make and it will come at a high cost to many people.

There are two kinds of people who want encryption backdoors: people whose jobs are made easier because of them and people who don't understand the issues.


