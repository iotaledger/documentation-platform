# Top Level Heading

This is a regular line of text.

How about something **bold**

Or something _italic_

Or even **_bold-italic_**

Perhaps ~~strikethrough~~

## A Second Level Heading

Unordered list

* This is a bullet
* And another one
  * Sub item 1
  * Sub item 2

Ordered list

1. Item 1
1. Item 2
1. Item 2a
1. Item 2b

Blah blah

<blockquote>
  This is a blockquote.
  This is a blockquote.
  This is a blockquote.
  This is a blockquote.
</blockquote>

### A Third Level Heading

Just some JavaScript code.

```js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```

Just some Python code.

```python
x = 1
if x == 1:
    # indented four spaces
    print("x is 1.")
  ```

#### Fourth Level Heading

A table below

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

##### A Fifth Level Heading

How about a link [IOTA](https://www.iota.org)

###### A Sixth Level Heading

A separator is below

---------------

And how about a tabbed control.

<tabs>
  <tab title="JavaScript">

```js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```

  </tab>
  <tab title="Python">

```python
x = 1
if x == 1:
    # indented four spaces
    print("x is 1.")
```

  </tab>
</tabs>

Or an image

![Placeholder Logo](https://via.placeholder.com/150)

How about emojis

:smile: `:smile:`

:laughing: `:laughing:`

:santa: `:santa:`

:christmas_tree: `:christmas_tree:`
