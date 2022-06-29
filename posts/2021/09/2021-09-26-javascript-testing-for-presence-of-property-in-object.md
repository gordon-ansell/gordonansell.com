---
excerpt: >-
  I keep making a mistake when testing for the 'presence' of a property in an
  object in Javascript.
description: >-
  How to test for the presence of a property in Javascript. Use 'in',
  'hasOwnValue' or test the property against 'undefined'.
title: 'Javascript, testing for the presence of a property in an object'
date: 2021-09-26T09:30:00.000Z
tags:
  - Javascript
  - Tech
  - Help
---
I'm about to describe an obvious mistake, and better Javascript programmers than me — which is most of them — will roll their eyes. I keep making this mistake even though I know about it. This post is as much for me as anyone else; something to hammer it into my reluctant brain.

Let's say you have a boolean value that defaults to *true*, and then you want to test an object property that may or may not have an overriding value for that boolean. If the object does have a value, you update your boolean; if it doesn't have a value, you just leave the boolean alone.

The mistake I always make is this:

```js
let obj = {…}         // Whatever, this is the object.

let mybool = true;    // The boolean with its default.

if (obj.booltest) {         // Does the object specify an overriding value?
    mybool = obj.booltest;  // If so, override it.
}
```

Let's run that through with an object that looks like this:

```js
{
   booltest: false
}
```

What I want is for my boolean value (which defaults to *true*, remember) to be overwritten by the *false* in the object.

But that will never happen. It would work for non-boolean values, but not for a boolean.

My `if` statement will test `obj.booltest` and, because it's false, the `if` would not continue and my master `mybool` would not be overwritten. This is not how I want it to work and I'd swear and gesticulate at my computer in frustration.

I tested the *value* of the property in the object rather than the *presence* of the property. As I said, this would work for non-booleans, such as:

```js
let obj = {
   stringtest: 'goodbye'
}   

let mystring = 'hello';    

if (obj.stringtest) {           // Does the object specify an overriding value?
    mystring = obj.stringtest;  // If so, override it.
}
```

That would work fine if the property's value type is always a string, but it's still bad practice. To test for the *presence* of a property I should be using `in`, like so:

```js
let obj = {…}         // Whatever, this is the object.

let mybool = true;    // The boolean with its default.

if ('booltest' in obj) {         // Does the object specify an overriding value?
    mybool = obj.booltest;       // If so, override it.
}
```

You could also use `hasOwnProperty`, like this:

```js
let obj = {…}   

let mybool = true;    

if (obj.hasOwnProperty('booltest')) {      
   mybool = obj.booltest;       
}
```

Using `hasOwnProperty` is a better option all told because it will account for inherited objects. 

Or you could test the property against `undefined`:

```js
let obj = {…}   

let mybool = true;    

if (undefined !== obj.booltest)) {      
   mybool = obj.booltest;       
}
```

QED.
