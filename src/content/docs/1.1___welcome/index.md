---
title: What is Gatsby Doc Portal?
categories: ['frontdoor']
---

Tell more about how cool your product is. In detail! 

This guide, for example, will save you some time as it puts a ladder next to the learning curve you may have to climb while pushing your doc portal online (and making it stay that way after every change). 

Skip all the tech staff and get to writing the doc articles, info blogposts, edu-illustration, or recording your next video tutorial!

## Toolkit

Behind the scenes, to create and publish your documentation portal, we'll use [gatsbyjs](http://gatsbyjs.org), [reactjs](https://reactjs.org/), [graphql](https://graphql.org/), [markdown](https://www.markdownguide.org/), [github](https://github.com), and a bit of magic. 

However, you don't have to change anything in the website's code unless you want to.

This template helps you hit the ground running and focus on the content.

## How to use (TL;DR)

Install gatsby:

``` npm install --global gatsby-cli ```

Create your website from the template:

``` gatsby new [repoRoot]/documentation https://github.com/wix-incubator/oss-gatsby-v2-documentation-portal-draft```

Add articles in *.md format to the *src/content/docs*. Every article must start with a title and categories:

```
---
title: Categories are sections in your ToC
categories: ['concepts']
---
```

Add/modify the sections in *src/meta/categories.js*.

```{ name: 'concepts', label: 'General concepts', icon: FolderPlusIcon }```

Preview locally at *localhost:8000*:

```gatsby develop```

Once ready, publish on githib.io:

```
npm install gh-pages --save-dev
nmp run build:gh
```

## Video tutorials

Eventually, a video tutorial or two may emerge from the thin air.

## Sandbox

You can run your website in docker. More info is coming soon.

## Know issues

* Github and twitter links are not working in the menu.
* Article sorting is inconsistent. Naming conventions to be applied and potentially troubleshooted.   