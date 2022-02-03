### 1. Challenge 1 :

1.  We have the height stored in the `height` variable, and `weight` stores the weight input, also we have the equation we need which is (weight (kg) / height^2(m)).

2.  Start by creating a variable called `bmi` which we will store the result in.

    ```javascript
    let bmi;
    ```

3.  The next step is to apply our equation using javascript, we have a height to the power of two, but how can we achive that with javascript?. We will use `Math.pow()` you can read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).
    The first arguemnt for `Math.pow()` is the base number, and in our case is the `height`.
    The second arguemnt is the exponent which in our case is the number 2.

  ```javascript
         let bmi = weight / Math.pow(height, 2);
  ```

4.  But our `height` variable is storing the height in centimeters and we need to convert it to meters for our equation to work, I know, we all hate math, but a simple Google search will answer us!

```javascript
let bmi = weight / Math.pow(height * 0.01, 2);
```

5. To Show the results in an alert, use the `alert` function and you can read about it [here](https://www.w3schools.com/jsref/met_win_alert.asp)

```js
alert(bmi);
```

6. Try your code now, it's working.. but as a user, how ugly it is to see this amount of decimal places, it would be much nicer to get my bmi with one deimal place, for example `17.3`.
   To achive this with javascript, we use `.toFixed()` method on `floats` data type, and as an arguemnt we specify the amount of decimal places we want.

```js
alert(bmi.toFixed(1));
```

### 2. Challenge 2 :

1. Our next challenge is to display more informative message to the user, telling him he's `Underweight`,`Overweight`,`Obesity` or `Healthy Weight` according to his bmi that we just calculated. To achive this we will use `javascript conditionals`.
   Our first condition is `if` the `bmi` is `less` than `18.5`. Let's translate this to javascript.

```js
if (bmi < 18.5) {
  alert('Underweight');
}
```

2. Moving on to the next condition:
   `if` the `bmi` is `bigger` than `18.5` `And` the `bmi` is `less` than `24.9`.

```js
else if (bmi < 24.9 && bmi > 18.5) {
    alert('Healthy Weight');
  }
```

3. Do the same for the last two conditions:

```js
else if (bmi < 29.9 && bmi > 25.0) {
    alert('Overweight');
  } else {
    alert('Obesity');
  }
```

### 3. Challenge 3 :

1. We have the the `bmi` calculated from challenge 1 but now we want to display a message for the user if he is healthy or not but based on his `age`.
2. Let's start with the first row in the table:
   `if` the `age` is `bigger` than `19` `And` `age` is `less` than `24` `And` the `bmi` is `bigger` than `19` `And` `bmi` is `less` than `24`. Let's translate this to javescript:

```js
if (age > 19 && age < 24 && bmi > 19 && bmi < 24) {
  alert('Healthy');
} else {
  alert('Not Healthy');
}
```

3. Do the same for the other conditions.
