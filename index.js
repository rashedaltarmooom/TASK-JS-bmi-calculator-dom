function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height / 100;
  let BMI = weight / height ** 2;
  alert(`Your BMI is ${BMI}`);
  if (BMI < 18.5) {
    alert("YOUR UNDERWEIGHT");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert("YOUR HEALTHY WEIGHT");
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    alert("YOUR OVERWEIGHT");
  } else {
    alert("YOUR OBESE");
  }

  if (age < 19) {
    alert("Your age is not included in the table");
  } else if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) {
    alert("YOUR BMI NORMAL WEIGHT BASED ON YOUR AGE");
  } else if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) {
    alert("YOUR BMI NORMAL WEIGHT BASED ON YOUR AGE");
  } else if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) {
    alert("YOUR BMI NORMAL WEIGHT BASED ON YOUR AGE");
  } else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) {
    alert("YOUR BMI NORMAL WEIGHT BASED ON YOUR AGE");
  } else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) {
    alert("YOUR BMI NORMAL WEIGHT BASED ON YOUR AGE");
  } else if (age >= 65 && BMI >= 24 && BMI <= 29) {
    alert("YOUR BMI NORMAL WEIGHT BASED ON YOUR AGE");
  } else {
    alert("YOUR BMI WEIGHT IS NOT NORMAL BASED ON YOUR AGE");
  }
}
