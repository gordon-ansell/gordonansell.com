---
excerpt: >-
  I've created what I think are a reasonable set of rules to create difficult to
  crack passwords.
description: >-
  Inspired by an article I saw on Microsoft's TechNet, I post my summary of how
  to create safe, difficult to crack passwords.
title: Creating safe passwords
date: 2019-04-21T08:45:00.000Z
leader:
  - Make all passwords 12+ characters
  - >-
    Add complexity via non a-z characters, but only as a secondary consideration
    to length
  - Avoid 'idiot' passwords
  - Avoid personal information
  - Avoid writing passwords down in plain text
  - Don't reuse passwords or base them on a common root
  - Change them from time-to-time
tags:
  - Tech
  - Security
  - Help
maths: true
---
![A password entry screen drawn badly by me.](/assets/images/posts/2019/04/2019-04-21-creating-safe-passwords.png "class=s33 right|@itemprop=image")

I recently came across an article on [Microsoft’s TechNet about passwords](https://blogs.technet.microsoft.com/msftcam/2015/05/19/password-complexity-versus-password-entropy/) and it got me thinking about the best ways to generate and manage passwords safely. 

## Computers

As the Microsoft article explains it’s what they call ‘_bits of entropy_’ that determines how difficult a password is to crack, and they define this as:

$$Log(C)/Log(2) * L$$

Where _C_ is the size of the character set (so if you just use a-z lowercase, it would be 26 and if you allowed either upper or lower case it would be 52) and _L_ is the length of the password.

The basic takeaway from the above equation is that the password length is much more important than the size of the character set used for the password.

As an example, consider the following two passwords:

`2280914577`

and

`G8ooP$%Hya`

The second password is harder to crack because it uses a bigger character set (a-z, A-Z, 0-9 and special characters) than the first password (because it just uses numbers).

However, if you double the length of the first password to something like:

`22809145779205534128`

Then that becomes the harder password to crack despite just using a small character set of only the 10 digits and being visually less complex.

By the same logic, this password:

`itwastheworstoftimes`

.. is much harder to crack than:

`G8ooP$%Hya`

.. even though it’s far easier to remember. Taking only bits and bytes as a computer sees things, that would be true.

## Humans

However, humans get involved in password cracking too and they may preload dictionary words to be tested first, so a good password cracking program would _possibly_ crack the first password quicker than the second (admittedly that would depend much on how it’s configured of course). 

There are a couple of other things to consider too.

The first one is whether or not you use a common base for your passwords. Many people do and they might have something like _MyRandomWord_ as the base for their password and then add something to the end of it for various different websites, such as _MyRandomWord01_ or _MyRandomWord02_.

A computer would not make much of a distinction there — it’s pure maths as far as its concerned — but if one of your passwords is already out in the wild, a hacker might realistically preload his password cracker to check variations on a common base to see if he can crack other accounts you have.

Then there’s social engineering to consider too. If you use your partner’s name, you children’s name, your address, your phone number — or any other information that ties your password to you — you’re making it easier to crack because such information about you may be available online, particularly if you post it all over social media. Just don’t use personal information as a base for a password.

## A User Strategy For Passwords

A reasonable set of rules for setting your passwords might be as follows (although obviously service providers might enforce certain conditions on their passwords that you have to follow): 

1. With length being such an important factor, make all passwords 12 characters or more.
2. Add complexity via mixed case, numbers and special characters if you wish but only as a secondary consideration to length.
3. Avoid idiot passwords like _password_, _qwerty123_ etc. (although rules 1 & 2 should avoid a lot of them).
4. Absolutely avoid anything that might be socially engineered such as names, addresses, birthdays, phone numbers and _anything at all_ that’s connected to you personally.
5. Avoid writing passwords down (either electronically or on paper) in plain text.
6. Don’t reuse passwords and don’t base them on common roots with merely slight differences between each one. 
7. Change your passwords from time-to-time.

## A Better User Strategy

Use a password manager. **Don’t** just let your browser remember passwords; if your computer gets stolen they just have to crack its main password to get all the passwords you’ve saved via your browser.

User a proper, app-based password manager that’s itself protected by a 15+ character password without a single dictionary word in it.

You have to commit this long, difficult password to memory but only this one password.

Set your password manager to generate 15+ character passwords for all the services you use. Use the password generated by the password manager rather than inventing your own.

## If You Must Remember Passwords

If you must remember passwords, then adopt a strategy along the lines of picking a longish phrase:

`It was the best of times, it was the worst of times`

Now take the first letter of each word in that phrase and keep the punctuation:

`Iwtbot,iwtwot`

Now you have a reasonably unintelligible, 13 character password with a trigger phrase to assist memory.

Or use your own strategy along those lines. 

## What Service Providers Must Do

1. Set the minimum length of passwords to 12 characters.
2. Favour length when enforcing passwords. If someone is prepared to enter a 15+ character password, drop the mixed character set requirements to encourage it.
3. In view of rule 2, don’t restrict the lengths of passwords (or at least allow for 32+ characters).
4. Maintain a dictionary of commonly used idiot passwords and simply reject them on registration.
5. Make all fields password manager-friendly. If you don’t, you encourage users to create idiot passwords, simple passwords, passwords that can be socially engineered and repeat passwords where the same one is used for many services. If the fields aren’t password manager-friendly (like those ridiculous drop-down boxes asking for characters 2, 6 and 9 or whatever) then users have to be able to remember their passwords and they will generally make them as short and simple as they can. 
6. In view of rule 5, don’t restrict the character set of passwords. 

