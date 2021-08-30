---
category: 'blog'
title: 'Tailwind CSS'
description: 'Tailwind CSS, a utility first CSS framework.'
date: '2021-08-28'
tags: ['CSS Framework']
published: true
---
A CSS framework which eliminates the need of CSS in our code by implementing all the styles through utility classes in markup.

If we don't want to mess up our markup, we can extend all the utility classes through a single CSS sheet in src folder by the help of directives.

<strong>Example :</strong> Consider an h1 element with a class name "testHeader"

For applying styles to the h1 element, extend the utility classes from main CSS file by mentioning as below:

<div class="text-red-500 text-center">.testHeader {
    @apply text-red-500 py-4 mx-2 bg-white-500
}</div>

<br/>

Here @apply is the directive which plays the key role in applying the styles.

We can introduce hover state functionalties also.
<br/>
<br/>
<div class="text-red-500 text-center">.testHeader:hover {
    @apply text-red-500 py-4 mx-2 bg-white-500
}</div>

<br/>
<br/>
<br/>
<em>Writing in progress....Please check later.</em>



