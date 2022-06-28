---
excerpt: >-
  Using a hook in Wordpress to change the behaviour of Contact Form 7 before the
  contact email is sent.
description: >-
  How to correctly use Contact Form 7's 'wpcf7_before_send_mail' filter in
  Wordpress to intercept the contact form before the email is sent.
title: Wordpress and hooking into Contact Form 7
date: 2021-07-18T06:30:00.000Z
tags:
  - Tech
  - PHP
  - Wordpress
  - Help
---
Whilst I spend more time with Static Site Generators these days, I still have my finger in a few Wordpress pies. One thing I wanted to do recently was intercept the mail from the Contact Form 7 (CF7) plugin before it is sent.

Contact Form 7 has a hook for the `wpcf7_before_send_mail` filter to allow for such interceptions, but, as far as I can tell, none of the hooks are officially documented.

A web search yielded some examples for old versions of Contact Form 7, but none of them worked. What would happen is I'd get an eternally spinning GIF and the form would never submit. So I had to delve into the code for CF7 itself.

The following code at least works for version 5.4.2 of CF7. It might also work for some earlier or later versions, but I can't confirm that:

```php
add_filter("wpcf7_before_send_mail", "preprocessContactForm7Filter", 10, 3);

function preprocessContactForm7Filter($contact_form, &$abort, $submission)
{
    // Do what you must here.
}
```

Don't bother returning anything from the hook because the return variable is discarded. You do however have the passed `$contact_form` and `$submission` variables at your disposal. The former is a `WPCF7_ContactForm` object and the latter is a `WPCF7_Submission` object.

You can send those objects to the Wordpress error log if you want to see what's in them. **Do not echo any output in the filter function** (i.e. via `echo`, `var_dump`, `print_r` etc.) or you'll just be eternally waiting on the spinning GIF I mentioned above. 

If you want to inspect those objects, use something like this:

```php
add_filter("wpcf7_before_send_mail", "preprocessContactForm7Filter", 10, 3);

function preprocessContactForm7Filter($contact_form, &$abort, $submission)
{
    error_log(print_r($contact_form, true));
    error_log(print_r($submission, true));
}
```

Note that the `print_r` uses the `true` parameter to return the output rather than print it. You can then inspect the `debug.log` file in the Wordpress root directory.

Because the `$contact_form` and `$submission` parameters are objects they are passed by reference, so you can alter them.

The `$abort` variable is manually passed by reference too. If you set that to `true` the contact form will not be submitted. The following is an example of aborting the contact form and sending a custom message to the user about the abortion:

```php
add_filter("wpcf7_before_send_mail", "preprocessContactForm7Filter", 10, 3);

function preprocessContactForm7Filter($contact_form, &$abort, $submission)
{
    $submission->set_response('Oops I did it again.');
    $abort = true;
}
```

You might use this filter if you want to add the contact form submission to a database or alter it in some way prior to sending the email.

There are about 7.7 billion people in the world and I habitually write articles that might appeal to three people at any given time. This is as much for me to remember how to do it as anything else.

