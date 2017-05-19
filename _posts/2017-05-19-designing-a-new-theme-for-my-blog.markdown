---
layout: post
title: "Designing a new theme for my Blog"
date: 2017-05-19 18:44:00 +0530
categories: work
---
It was planned from the day I installed Jekyll.

A theme redesign was necessary to step up from the minima design. It was too simple for me. I being a designer (along with Developer), keep an eye for design. And because it was my blog, I had to anyway experiment with the design. Just like this, I will continue to improve the design, however not so frequently.

I would have done it before, but because of complexities, it took me some time to understand the mechanism behind Jekyll. The default design was self explanatory in itself, but with some alien code (liquid tags they call) it became hectic for me to judge the control flow.

The liquid tags are what give the Jekyll dynamic functionality. Though most of them like, `page.title` or `site.url` were readily understandable but a few like `content` took me entire day to figure out myself. Yes, as I have already mentioned myself an average programmer, I sometimes get quite dumb while understanding something out of the way.

So, after all of this learning process, I finally decided today morning that I will code my own theme. Come on, it's just only HTML and SCSS(I used it like CSS) with some liquid tags code to sprinkle for dynamic functionality.

And today, after about 5-6 hours of front-end coding, I made the theme. I am rarely happy with my designs, and today adds another one.

If you are new to my blog, here, take a look at the old (intial) design.

![Old theme](/assets/images/post/2017/may/old-theme.png)

There are few more pages and features that needs to be added for the proper functioning and maintaining semantics all along the website. But, right now it's still looking nice and I don't want to continue with the old theme.

I have been coding all the theme files locally. Pushing to github everytime would be tedious process and also mostly because I don't want to increase my commit count this fast. But honestly, restarting the Jekyll everytime for even a small change is the real pain in the ass.

That said, let's push the changes.