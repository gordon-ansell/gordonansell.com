---
excerpt: >-
  How you might get around PHP's E_STRICT warning about calling non-static
  methods statically. There's a workaround that gets rid of the warning,
  although it might be better to do things in a different way from the outset.
description: >-
  Why you get the 'Non-static method … should not be called statically' message
  from PHP and what to do about it.
title: 'Non-static method … should not be called statically: PHP'
date: 2021-04-21T07:45:00.000Z
tags:
  - PHP
  - Tech
  - Web Development
  - Error
  - Help
---
If you get the "*Non-static method … should not be called statically*" message from PHP, it means exactly what it says.

Let's assume you have the following class:

```php
class Foo {
    public function bar() {
        echo "Hello";
    }
}
```

The normal way to call that would be to use:

```php
$instance = new Foo;
$instance->bar();
```

But you might get away with calling it statically, such as:

```php
Foo::bar();
```

Often it will run okay, but PHP will give you the E_STRICT warning mentioned above.

There are times when you might actually want to call it in a static-like way anyway. Sometimes you might want a sort of static wrapper around a particular class, maybe like this:

```php
class Target {
    public function bar() {
        echo "Hello";
    }
}

class Wrapper {
    public static $instance = null;
    
    public static function __callStatic($method, $args = []) {
        return static::$instance->$method($args);
    }
}

Wrapper::$instance = new Target;
Wrapper::bar();
```

Okay, this is a contrived example, but it's using PHP's [`__callStatic`](https://www.php.net/manual/en/language.oop5.overloading.php#object.callstatic) 'magic' function to allow the wrapper to call into a real instance of the target class. However, you'll get the E_STRICT warning doing this.

One way around that is to change the `__callStatic` to a `__call` and then call it via a `new`, as follows:

```php
class Target {
    public function bar() {
        echo "Hello";
    }
}

class Wrapper {
    public static $instance = null;
    
    public function __call($method, $args = []) {
        //          ^^^^^^   Changed to a call instead of callStatic.
        return static::$instance->$method($args);
    }
}

Wrapper::$instance = new Target;
(new Wrapper)->bar();
// ^^^^^^^^^  Called via new.
```

Bingo — you can now achieve more or less the same thing without getting E_STRICT warnings. Although you should probably ask yourself what it is you're trying to achieve and whether there's a better way to do it.

