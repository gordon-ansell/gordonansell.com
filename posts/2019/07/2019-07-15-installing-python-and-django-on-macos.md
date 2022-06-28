---
excerpt: >-
  I'm not a big fan of Python but it has been so long since I've used it that I
  wanted to refresh my memory about the language. This is how I went about
  installing __Python and Django on macOS 10.14__ via Homebrew and pip.
description: >-
  How to install Python and Django on macOS via Homebrew and pip. Includes
  installation of the Python virtual environment.
title: Installing Python and Django on macOS
date: 2019-07-15T06:30:00.000Z
tags:
  - Tech
  - macOS
  - Help
---
I’ve been playing around with Python recently. The language, that is, not the snake.

I thought I’d document how I installed it — along with the Django framework — on macOS (10.14) as I had to do a bit of messing about to get the correct result.

As is often the case there are different ways to do this (there are installers, for example) but this is the way I chose to do it, all via the macOS Terminal.

## Homebrew

I installed Python via Homebrew, so if you don’t already have that then you’ll need to install it as follows:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Installing Python and Django

### 1. Make sure xCode is up to date

Execute: `xcode-select --install`

This may prompt for you to install other stuff along the way, which is fine.

### 2. Use Brew to install Python

Execute: `brew install python`

If all works well, go to Step 5.

### 3. Permission errors

If you see any messages related to permission errors, try:

```bash
sudo chown -R "$USER":admin /usr/local
sudo chown -R "$USER":admin /Library/Caches/Homebrew
```

Then try Step 2 again.

If that doesn’t work, try: `brew link python`

Then try Step 2 again.

### 4. Framework errors

If you get anything that looks like framework errors, try:

```bash
sudo install -d -o $(whoami) -g admin /usr/local/Frameworks
```

Then try Step 2 again.

### 5. Check Python and get the exact version number

Check Python’s okay with:  `python3 -V`

You’ll need the version this returns in Step 8.

### 6. Install pip

Execute: `sudo easy-install pip`

### 7. Install virtualenv

Execute: `sudo pip install virtualenv`

### 8. Configure the virtual environment

Go to the directory you plan to keep your Python code in and execute:

```bash
virtualenv yourenv -p python3.7
```

Replacing the `python3.7` with whatever version came up in Step 5, above.

### 9. Activate the virtual environment

Execute: `source yourenv/bin/activate`

### 10. Install Django

Execute: `pip install Django`

—

If all went well you should now have a working Python and Django environment.

Personally, Python gives me the willies and I much prefer PHP but it has been a while since I played around with Python and I wanted to refresh my meagre skills in this area.
