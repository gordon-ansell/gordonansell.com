---
excerpt: >-
  I love __PHP's built-in web server__. It saves me having to install a MAMP
  stack just to view my test and development websites. Here's how I use it.
description: >-
  A brief example of how to use the PHP built-in web server for testing and
  development purposes.
_code: true
_qa: true
title: How to use the PHP built-in web server
date: 2019-05-10T04:40:00.000Z
tags:
  - Tech
  - PHP
  - Web Development
  - Help
---
PHP has come with a built-in web server since version 5.4. I was a bit late to the party as I only became properly aware of it a couple of years ago.

It is definitely **not** something to be used in a production environment but it can be used for testing and development.

I use it a lot. This blog is driven by my own software, which is vaguely Jekyll-like in that it generates a static website, but it’s written in PHP. For production purposes I upload the site to an Apache web server but I test things out on my MacBook via PHP’s built-in server.

I call up an instance of the server after I’ve built my site, assuming there are no errors in the build. I use PHP’s `exec` function to do so as follows:

  `exec("php -S 0.0.0.0:8080 -t /Path/To/Site router.php");`

Where: 
- `0.0.0.0` simply means the local machine,
- `8080` is the port to serve the site on (pick a port that suits you),
- `/Path/To/Site` is the directory on your local machine where your website is,
- `router.php` is a file in the root of `/Path/To/Site` that will route the web requests (more on that below).

You can then access the site by going to `http://0.0.0.0:8080` in a browser.

I have `router.php` set up as follows:

  ```php
  $rawpath = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
  $ext = pathinfo($rawpath, PATHINFO_EXTENSION);
  if (empty($ext)) {
      $path = rtrim($rawpath, "/") . "/index.html";
      if (file_exists($_SERVER["DOCUMENT_ROOT"] . $path)) {
        return false;
      }
      $path = $rawpath . ".html";
  
      if (file_exists($_SERVER["DOCUMENT_ROOT"] . $path)) {
        include $_SERVER["DOCUMENT_ROOT"] . $path;
        return true;
      }
  }
  return false;
  ```

This just parses the request, adds an extension to the file name (because I use ‘pretty’ URLs in my code), checks the file exists and, if so, serves it up via an include.

You could of course add a lot more code to `router.php` to perform checks on file extensions or whatever, but the above code works fine for my purposes. I’m not bothered about anything too fancy, I just want to check articles or code changes before putting them live.

I find PHP’s built-in web server very useful indeed. Previously I’d have had to install a local Apache (or some other flavour of) web server via a MAMP stack or whatever. 

You can read more about [PHP’s built-in web server via the PHP documentation](https://www.php.net/manual/en/features.commandline.webserver.php).

