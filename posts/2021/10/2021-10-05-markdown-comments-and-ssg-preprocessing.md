---
excerpt: Comments in Markdown and how they might be used to keep Markdown files
  independent of the underlying template system.
description: Markdown has no official comment statement, but a 'null' link works
  as a pseudo-comment.
title: Markdown comments and SSG preprocessing
date: 2021-10-05 08:20:00
tags:
  - Tech
  - Javascript
  - How-To
  - SSG
  - Web Development
---
My preferred way to style my writing is via [Markdown](https://en.wikipedia.org/wiki/Markdown). Between Markdown and [front-matter](https://jekyllrb.com/docs/front-matter/) you can create a text file that contains your writing content, its formatting options and some instructions to tell your static site generator software how to process things.

It collapses the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) into a portable, text-based document. Or at least that's the theory.

Sometimes you need to do more complicated things. Most static site generators push the Markdown files through a [web templating system](https://en.wikipedia.org/wiki/Web_template_system) for additional formatting and control. I use [Nunjucks](https://mozilla.github.io/nunjucks/) myself.

What I've found is that, as my needs became more complex, I'd start including Nunjucks statements in my Markdown files. Like this:

```markdown
---
title: My awesome post
date: 05 October 2021
---
Here is some content.
{% raw %}
{ldelim}% grok-this %{rdelim}
Some text inside a styled block.
{ldelim}% endgrok-this %{rdelim}
{% endraw %}
More content.
```

This isn't very wise because my plain text file now has a dependency on Nunjucks. What if I decide to use a different templating system? Well, lots of templating systems use similar nomenclature, which helps, but the devil is in the detail. You might find yourself having to check all of your Markdown files individually to see if anything needs to change.

Furthermore, the similarities between the nomenclature of templating systems can be a problem itself. If the new templating system recognises the surrounding tags it will try to execute them. This may or may not produce the desired results.

I wanted to remove these problems and keep the Markdown file as neutral as possible. My idea was to put inline template code inside Markdown comments and preprocess them in my blogging software. Then if I go to a new templating system my Markdown will compile out of the box because the comments would just be ignored.

The thing is, Markdown doesn't have a formal comment statement. But thanks to a [clever reply on StackOverflow](https://stackoverflow.com/a/20885980) I found something that works just as well. You can use a 'null' link statement as a comment, such as:

```markdown
[//]: # (This may be the most platform independent comment)
```

Nobody will ever see that in your compiled code, even via view source.

I would replace the block of Markdown I included earlier in this article with this:

```markdown
---
title: My awesome post
date: 05 October 2021
---
Here is some content.

[//]: # (-@block-this)

Some text inside a styled block.

[//]: # (-@endblock-this)

More content.
```

(I'm using the '@' as the control character to instruct my software to do something with those pseudo-comments)

But wait a minute, you may say, I now have to write a preprocessor to grab all these pseudo-comments and translate them to the relevant template syntax. You're right, I do, but I only have to do that in one place on the back end.

Yes, it does add an overhead to my static site generator software, but it wasn't as much of an overhead to preprocess each Markdown file as I thought it would be, and I felt the trade-off was worth it to keep my Markdown files independent of the templating software.

For what it's worth, the preprocessor runs a regular expression on the Markdown file:

```javascript
/\[\/\/\]\:\s\#\s\(\@(.*)\)/g
```

That matches any pseudo-comments where the first character in the parentheses is a '@' and extracts whatever's after that. So for the first pseudo-comment in my example, it would extract:

```
block-this
```

It then wraps that in the control characters for the relevant template system and replaces the inline code in the Markdown file:

```javascript
{% raw %}
rep = '{ldelim}% ' + rep + ' %{rdelim}';
ret = ret.replace(m[0], rep);
{% endraw %}
```

If I change my template system I just need to alter the `rep =` line above.

I once again find myself writing an article that might, if I'm lucky, be interesting to three people on the planet.