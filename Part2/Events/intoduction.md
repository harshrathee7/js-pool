## Introduction to browser events

An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).

Here’s a list of the most useful DOM events, just to take a look at:

##### Mouse events:

- click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
- contextmenu – when the mouse right-clicks on an element.
- mouseover / mouseout – when the mouse cursor comes over / leaves an element.
- mousedown / mouseup – when the mouse button is pressed / released over an element.
- mousemove – when the mouse is moved.

#### Keyboard events:

- keydown and keyup – when a keyboard key is pressed and released.

#### Form element events:

- submit – when the visitor submits a <form>.
- focus – when the visitor focuses on an element, e.g. on an <input>.

#### Document events:

- DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.

#### CSS events:

- transitionend – when a CSS-animation finishes.

### Event handlers

To react on events we can assign a handler – a function that runs in case of an event.

Handlers are a way to run JavaScript code in case of user actions.

There are several ways to assign a handler. Let’s see them, starting from the simplest one.

### HTML-attribute

A handler can be set in HTML with an attribute named on<event>.

For instance, to assign a click handler for an input, we can use onclick, like here:

```html
<input value="Click me" onclick="alert('Click!')" type="button" />
```

On mouse click, the code inside onclick runs.

Please note that inside onclick we use single quotes, because the attribute itself is in double quotes. If we forget that the code is inside the attribute and use double quotes inside, like this: onclick="alert("Click!")", then it won’t work right.

An HTML-attribute is not a convenient place to write a lot of code, so we’d better create a JavaScript function and call it there.

Here a click runs the function countRabbits():

```html
<script>
  function countRabbits() {
    for (let i = 1; i <= 3; i++) {
      alert("Rabbit number " + i);
    }
  }
</script>

<input type="button" onclick="countRabbits()" value="Count rabbits!" />
```

As we know, HTML attribute names are not case-sensitive, so ONCLICK works as well as onClick and onCLICK… But usually attributes are lowercased: onclick.

### DOM property

We can assign a handler using a DOM property on<event>.

For instance, elem.onclick:

```html
<input id="elem" type="button" value="Click me" />
<script>
  elem.onclick = function () {
    alert("Thank you");
  };
</script>
```

f the handler is assigned using an HTML-attribute then the browser reads it, creates a new function from the attribute content and writes it to the DOM property.

So this way is actually the same as the previous one.

These two code pieces work the same:

1. Only HTML:

```html
<input type="button" onclick="alert('Click!')" value="Button" />
```

2. HTML+JS

```html
<input type="button" id="button" value="Button" />
<script>
  button.onclick = function () {
    alert("Click!");
  };
</script>
```

In the first example, the HTML attribute is used to initialize the button.onclick, while in the second example – the script, that’s all the difference.

<strong>As there’s only one onclick property, we can’t assign more than one event handler.</strong>

In the example below adding a handler with JavaScript overwrites the existing handler:

```html
<input type="button" id="elem" onclick="alert('Before')" value="Click me" />
<script>
  elem.onclick = function () {
    // overwrites the existing handler
    alert("After"); // only this will be shown
  };
</script>
```

To remove a handler – assign elem.onclick = null.

#### Accessing the element: this

The value of `this` inside a handler is the element. The one which has the handler on it.

In the code below `button` shows its contents using `this.innerHTML`:

```html
<button onclick="alert(this.innerHTML)">Click me</button>
```

##### Possible mistakes

If you’re starting to work with events – please note some subtleties.

We can set an existing function as a handler:

```js
function sayThanks() {
  alert("Thanks!");
}

elem.onclick = sayThanks;
```

But be careful: the function should be assigned as `sayThanks`, not `sayThanks()`.

```js
// right
button.onclick = sayThanks;

// wrong
button.onclick = sayThanks();
```

If we add parentheses, then `sayThanks()` becomes is a function call. So the last line actually takes the result of the function execution, that is `undefined` (as the function returns nothing), and assigns it to `onclick`. That doesn’t work.

…On the other hand, in the markup we do need the parentheses:

```html
<input type="button" id="button" onclick="sayThanks()" />
```

The difference is easy to explain. When the browser reads the attribute, it creates a handler function with body from the attribute content.

So the markup generates this property:

```js
button.onclick = function () {
  sayThanks(); // <-- the attribute content goes here
};
```

##### Don’t use setAttribute for handlers.

Such a call won’t work:

```js
// a click on <body> will generate errors,
// because attributes are always strings, function becomes a string
document.body.setAttribute("onclick", function () {
  alert(1);
});
```
