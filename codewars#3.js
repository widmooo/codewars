// Body mass index calculation

// For long period JavaScript warriors trained a lot in coding kata. But to find way warrior also need physical kata. Some of warriors forgot about this fact and enemies can use this weakness, your clan is under threat. You are chosen to fix this situation. Write a function to calculate Body mass index for each warrior.
// bmi = weght(kg)/(height(m)*height(m))
// Warriors know only their height in centimetres and weight (in kilogrames). Your task is to return an object with fields
// value - calculated Body mass index, rounded with one number after decimal point.
// category - from https://en.wikipedia.org/wiki/Body_mass_index
// Ex :
// calculateBmi(65,175)
// Returns :
// {value: "21.2", category: "Normal (healthy weight)"}

function calculateBmi(weight, height) {
  const value = ((weight / (height * height)) * 10000).toFixed(1);
  let category = {
    1: "Very severely underweight",
    2: "Severely underweight",
    3: "Underweight",
    4: "Normal (healthy weight)",
    5: "Overweight",
    6: "Obese Class I (Moderately obese)",
    7: "Obese Class II (Severely obese)",
    8: "Obese Class III (Very severely obese)",
    9: "Obese Class IV (Morbidly Obese)",
    10: "Obese Class V (Super Obese)",
    11: "Obese Class VI (Hyper Obese)"
  };
  if (value < 15) {
    category = category[1];
  } else if (value >= 15 && value < 16) {
    category = category[2];
  } else if (value >= 16 && value < 18.5) {
    category = category[3];
  } else if (value >= 18.5 && value < 25) {
    category = category[4];
  } else if (value >= 25 && value < 30) {
    category = category[5];
  } else if (value >= 30 && value < 35) {
    category = category[6];
  } else if (value >= 35 && value < 40) {
    category = category[7];
  } else if (value >= 40 && value < 45) {
    category = category[8];
  } else if (value >= 45 && value < 50) {
    category = category[9];
  } else if (value >= 50 && value < 60) {
    category = category[10];
  } else if (value > 60) {
    category = category[11];
  }
  const result = { value, category };
  return result;
}

// Build a square
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
// +++
// +++
// +++

function generateShape(int) {
  const str = int.toString();
  const sign = "+";
  const plusMulti = sign.repeat(str);
  const sep = "\n";
  const multiSep = plusMulti + sep;
  const multiSepR = multiSep.repeat(str);
  const result = multiSepR.slice(0, -1);
  return result;
}

// Find the calculation type

// You have to create a function which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).
// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.
// The possible return strings are: "addition", "subtraction", "multiplication", "division".
// Example:
// calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"
// Notes
// In case of division you should expect that the result of the operation is obtained by using / operator on the input values - no manual data type conversion or rounding should be performed.
// Cases with just one possible answers are generated.
// Only valid arguments will be passed to the function.

function calcType(a, b, res) {
  const addResult = a + b;
  const subResult = a - b;
  const divResult = a / b;
  const multiResult = a * b;
  if (addResult === res) {
    return "addition";
  } else if (subResult === res) {
    return "subtraction";
  } else if (divResult === res) {
    return "division";
  } else if (multiResult === res) {
    return "multiplication";
  }
}
