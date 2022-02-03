function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById('age').value;
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let male = document.getElementById('m').checked;
  let female = document.getElementById('f').checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  // challenge 1 solution
  let bmi = weight / Math.pow(height * 0.01, 2);

  // challenge 2 solution
  if (bmi < 18.5) {
    alert('Underweight');
  } else if (bmi < 24.9 && bmi > 18.5) {
    alert('Healthy Weight');
  } else if (bmi < 29.9 && bmi > 25.0) {
    alert('Overweight');
  } else {
    alert('Obesity');
  }

  // challenge 3 solution
  if (age > 19 && age < 24 && bmi > 19 && bmi < 24) {
    alert('Healthy');
  } else {
    alert('Not Healthy');
  }
  // etc
}
