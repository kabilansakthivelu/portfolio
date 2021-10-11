---
category: 'blog'
title: 'Template Literals'
description: 'A brief overview on template strings and string interpolation.'
date: '2021-10-11'
tags: ['JavaScript']
published: true
---

**Template Literals**

It makes our job easier when we work with strings (also multiline strings) and can perform string interpolation.

Often, we could come across words called "Template Strings" and "String Templates". All are same because before ES6, template literals were called as **"Template Strings"**.

<br/>

**Syntax:**

Usually, we used to wrap strings with single ('string') or double quotes ("string"). But with the introduction of template literals, we will be wrapping strings with **back-tick** ( ` ).

<br/>

**Example:**

<br/>

<img src="image_6.png">

<br/>

**Output:**

<br/>

<img src="image_7.png">

<br/>

If we wrap our string with template literals, we can use both single and double quotes in our string without providing escape sequence.

<br/>

<img src="image_8.png">

<br/>

**Output:**

<br/>

<img src="image_9.png">

<br/>

**Multiline strings**

With the introduction of template literals, we can create a multiline string by wrapping it inside backticks without providing **escape sequence \n.**

<br/>

<img src="image_10.png">

<br/>

**Output:**

<br/>

<img src="image_11.png">

<br/>

**Note:** The whitespace in between the string are considered as part of the string.

<br/>

**String interpolation**

The way of interpolating variables and expression into strings is called as string interpolation. It acts like a placeholder in strings substitution and will automatically replace the variables and expression into values in strings.

<br/>

**Syntax:**

${...}

**String interpolation with variables**

<br/>

<img src="image_12.png">

<br/>

**Output:**

<br/>

<img src="image_13.png" width="10px">

<br/>

**String interpolation with expression**

<br/>

<img src="image_14.png">

<br/>

**Output:**

<br/>

<img src="image_15.png" width="10px">

<br/>

Thus template literals helps us work in a cool manner when dealing with multiline strings and provides the useful concept of string interpolation.

<br/>

Please write your valuable comments / suggestions to <a href="mailto:kabilansakthi97@gmail.com">kabilansakthi97@gmail.com</a>





