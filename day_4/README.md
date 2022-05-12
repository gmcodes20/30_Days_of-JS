# Day Four: JavaScript Array Cardio

## Map [Array.prototype.filter()]:

This function filters array based on given conditions given by the callback function

## Map [Array.prototype.map()]:

Map takes an array or a nodlist as the case may be, does something with the array and return a new array entirely.
The map function returns result by running a callbackfunction on every element of the array.
A callback function if a function that is passed as an arguement to another function so that it can be executed in that function

## Sort [Array.prototype.sort()]

## Reduce [Array.prototype.reduce()]

The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

example

```js
const reducer = array.reduce((currentValue, Previous value=> currentValue + previousValue, initialValue))
```

- The reduce() method executes a reducer function for array element.

- The reduce() method returns a single value: the function's accumulated result.

- The reduce() method does not execute the function for empty array elements.

- The reduce() method does not change the original array.

> "Reduce Method In JavaScript​ gives you a mini CodePen where you can write whatever logic you want. It will repeat the logic for each amount in the array and then return a single value."
