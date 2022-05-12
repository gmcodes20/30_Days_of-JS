# day 3: Playing with CSS Variables using JS

This Particular project was fun because i goot to learn how to manipulate css variable via js.
I also learnt about the use of dataset which is kind of fascinating.

```js
// get the input using queryselectall
// add an event listener to the input

inputs.forEach((input) => input.addeventlistener("change", handleChange));

function handleChange() {
  const prefix = this.dataset.sizing;
  // The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements.
  // It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.
  // This dataset has to be a very powerful way of woking with html element in JS
  document.documentElement.style.setProperty("this.name", this.value + prefix);
}
```
