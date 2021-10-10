---
category: 'blog'
title: 'Tailwind CSS'
description: 'Tailwind CSS, a utility first CSS framework.'
date: '2021-10-10'
tags: ['CSS Framework']
published: true
---

**What is Tailwind CSS ?**

A CSS framework which eliminates the need of custom traditional CSS in our code by implementing all the styles through utility classes in markup.

<br/>

**Why is it so special ?**

It is highly flexible and customizable when compared to other CSS frameworks which makes the site looks unique whereby not making 2 sites looking almost similar.

It comes with default mobile-first approach. But with the help of utility classes, complex responsive layouts can be built easily by applying breakpoints.

Since Tailwind CSS uses utility classes for styling, it is almost like inline styling rather than writing traditional CSS with selector, property and value.  This saves time and increases productivity.

In future, if we want modify a style to an element alone, since we are accessing local utility classes in HTML and not in global CSS, no need to worry about the changes affecting other elements.

<br/>

**Ways of implementing in code:**

For installation, kindly refer to the original docs https://tailwindcss.com/docs/installation

The easiest way to style our elements using Tailwind CSS is to include the pre-existing utility classes directly in our HTML.

<br/>

**Example:**
<img src="image_1.png">
<br/>

**Output:**

<h1 class="text-blue-500 mt-4">Tailwind CSS<h1>
<p class="text-blue-300 py-2 bg-red-500">Tailwind CSS is easy to learn</p>
<button class="px-4 rounded flex">Test Button</button>

<br/>

Here in the utility classes;

<li>mt => margin-top</li>
<li>py => padding y-axis (both top and bottom)</li>
<li>px => padding x-axis (both left and right)</li>
<li>text-blue => color: blue;</li>
<li>bg-red => background-color: red;</li>
<li>flex => display:flex;</li>
<li>rounded => border-radius: 0.25rem;</li>
<br/>

To know more about the pre-existing utility classes, please refer to https://tailwindcss.com/docs

If we don't want to mess up our markup, we can extend all the utility classes through a single CSS sheet by the help of directives.

<strong>Example :</strong> Consider an h1 element with a class name "testHeader"

For applying styles to the h1 element, extend the utility classes from main CSS file by mentioning as below:

<div class="text-red-500 text-center text-lg ">.testHeader {
    @apply text-red-500 py-4 mx-2 bg-white-500
}</div>

<br/>

Here @apply is the directive which plays the key role in applying the styles.

<br/>

**Tailwind CSS is customizable**

As we already discussed, its not just limited to using the pre-existing utility classes. We can customize them with the help of **tailwind.config.js** file which will be created in the project's root directory after successful installation.

Thereby we can customize the utility classes including breakpoints by following the standards mentioned in official docs which makes the site looks unique.

<br/>

**Responsive Design**

By default, Tailwind CSS comes up with 5 breakpoints for different screen layouts.

All the utility classes can be applied conditionally at different breakpoints which helps in making the site responsive.

<br/>

**Example:**

<div class="text-red-500 text-center text-lg">
    <h1>class="sm:text-xl md:text-2xl"</h1>
</div>

<br/>

Here; <br/>
<li> sm => for screen width starting from 640 px;</li>
<li> md => for screen width starting from 768 px;</li>

<br/>

**Note:** We can completely customize these default breakpoints in **tailwind.config.js** file


Not only responsive design, but also styling elements based on their state such as hover, active, focus etc are possible with corresponding prefix.

<br/>

**Example:**

<div class="text-red-500 text-center text-lg">
    <h1>class="hover:bg-red-500 focus:outline-none"</h1>
</div>

<br/>
<br/>


In my opinion, Tailwind CSS is awesome and makes us addictive once we start implementing it in our projects and it is applicable to all projects howsoever complex project it may be.

<br/>


Please write your valuable comments / suggestions to <a href="mailto:kabilansakthi97@gmail.com">kabilansakthi97@gmail.com</a>