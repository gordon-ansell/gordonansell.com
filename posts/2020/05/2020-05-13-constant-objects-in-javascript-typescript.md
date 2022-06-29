---
excerpt: When constant doesn't necessarily mean constant.
description: >-
  Constants are immutable but properties of constant objects are not, which can
  be confusing to begin with.
title: Constant objects in Javascript/Typescript
date: 2020-05-13T08:45:00.000Z
tags:
  - Javascript
  - Tech
  - Help
---
You have to be careful with Javascript constants, particularly constant objects.

If you have something like this:

```js
type MyConst = string;
const MyConstDef: MyConst = "ABC";

let a: MyConst = MyConstDef; 
// a = "ABC".
a = a + "DEF"; 
// a = "ABCDEF".
let b: MyConst = MyConstDef; 
// b = "ABC".
```

You'll be okay with that because *MyConst* is just a string literal, but it can become confusing if *MyConst* is an object, such as this:

```js
type MyConst = {field: string;};
const MyConstDef: MyConst = {field: "ABC"};

let a: MyConst = MyConstDef; 
// a.field = "ABC".
a.field = a.field + "DEF"; 
// a.field = "ABCDEF".
let b: MyConst = MyConstDef; 
// b.field = "ABCDEF" ... Eh????
```

At first glance you might wonder how *MyConstDef* has been changed by the `a.field = a.field + "DEF"` line because it is marked *const* and surely that renders it immutable.

However, whilst the *MyConstDef* constant is immutable, its interior properties are not.

If you're using Typescript, you can guard against that sort of thing by adding *readonly* to the definition:

```js
type MyConst = {readonly field: string;};
```

Then at least you'll get an error from the compiler.

Alternatively you could use the spread operator (…) on assignment, as follows:

```js
type MyConst = {field: string;};
const MyConstDef: MyConst = {field: "ABC"};

let a: MyConst = {...MyConstDef}; 
// a.field = "ABC".
a.field = a.field + "DEF"; 
// a.field = "ABCDEF".
let b: MyConst = {...MyConstDef}; 
// b.field = "ABC" ... Phew
```

However, the above method won't *deep* clone correctly, so it won't work if you have objects within objects. The following gives us problems:

```js
type MyConst = {field: string, subfield:{blah: string};};
const MyConstDef: MyConst = {field: "ABC", subfield: {blah: "UVW"}};
        
let a: MyConst = {...MyConstDef}; 
// a.subfield.blah = "UVW".
a.subfield.blah = a.subfield.blah + "XYZ"; 
// a.subfield.blah = "UVWXYZ".
let b: MyConst = {...MyConstDef}; 
// b.subfield.blah = "UVWXYZ" ... problems again.
```

The spread operator is working fine for the base object and respecting the immutable status of first order fields, but not for sub-objects such as *subfield*, above.

And before you start wondering about *Object.assign*, it will behave in the same way. 

However, to make something like this work for all the sub-objects, we can use Javascript's *JSON* as follows:

```js
type MyConst = {field: string, subfield:{blah: string};};
const MyConstDef: MyConst = {field: "ABC", subfield: {blah: "UVW"}};
        
let a: MyConst = JSON.parse(JSON.stringify(MyConstDef)); 
// a.subfield.blah = "UVW".
a.subfield.blah = a.subfield.blah + "XYZ"; 
// a.subfield.blah = "UVWXYZ".
let b: MyConst = JSON.parse(JSON.stringify(MyConstDef));; 
// b.subfield.blah = "UVW" ... phew.
 ```

I came across this trying to find a reliable way to set default properties for an object (and do so deeply) and the issue with *const* is somewhat incidental.

It all seems obvious once you twig what's going on but it can cause confusion to begin with, as it did with me.

