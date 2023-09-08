// for FitnessCalculator page
let calculateBmi = document.getElementById("bmiCalculate");
calculateBmi.addEventListener("click", () => {
  let bmiHeight = parseFloat(
    document.getElementById("bmiHeight").value
  ).toFixed();
  let bmiWeight = parseFloat(
    document.getElementById("bmiWeight").value
  ).toFixed();
  let bmi = parseFloat((bmiWeight / (bmiHeight * bmiHeight)) * 10000).toFixed();
  document.getElementById("bmiResult").innerHTML = bmi;
  var status = document.getElementById("bmiStatus");
  if (bmi < 18.5) {
    status.innerText = "Underweight";
  } else if (bmi > 25 && bmi < 30) {
    status.innerText = "Overweight";
  } else if ((bmi >= 30) & (bmi < 40)) {
    status.innerText = "Obese";
  } else if (bmi >= 40) {
    status.innerText = "Morbidly Obese";
  } else {
    status.innerText = "Normal";
  }
  document.getElementById("resBmi").style.display = "block";
});

let calculateRmr = document.getElementById("rmrCalculate");
calculateRmr.addEventListener("click", () => {
  let age = document.getElementById("age");
  let gender = document.getElementById("sex");
  age = age.value;
  let rmrHeight = parseFloat(
    document.getElementById("rmrHeight").value
  ).toFixed();
  let rmrWeight = parseFloat(
    document.getElementById("rmrWeight").value
  ).toFixed();
  let manRmr = parseFloat(
    10 * rmrWeight + 6.25 * rmrHeight - 5 * age + 5
  ).toFixed();
  let womanRmr = parseFloat(
    10 * rmrWeight + 6.25 * rmrHeight - 5 * age - 161
  ).toFixed();
  console.log(age);
  // var status = document.getElementById('bmiStatus');
  if (gender.value == "Male") {
    document.getElementById("rmrResult").innerHTML = manRmr;
  } else if (gender.value == "Female") {
    document.getElementById("rmrResult").innerHTML = womanRmr;
  } else {
    document.getElementById("rmrResult").innerHTML = "Enter required values.";
  }
  document.getElementById("resRmr").style.display = "block";
});

let calculateIbw = document.getElementById("ibwCalculate");
calculateIbw.addEventListener("click", () => {
  let gender = document.getElementById("sex");
  let age = document.getElementById("age");
  age = age.value;
  let ibwHeight = parseFloat(
    document.getElementById("ibwHeight").value
  ).toFixed();
  let ibwWeight = parseFloat(
    document.getElementById("ibwWeight").value
  ).toFixed();
  let h = ibwHeight * 0.4;
  let manIbw = parseFloat(50 + 1.9 * (h - 60 > 0 ? h - 60 : 0)).toFixed();
  let womanIbw = parseFloat(49 + 1.7 * (h - 60 > 0 ? h - 60 : 0)).toFixed();
  // var status = document.getElementById('bmiStatus');
  if (gender.value == "Male") {
    document.getElementById("ibwResult").innerHTML = manIbw;
  } else if (gender.value == "Female") {
    document.getElementById("ibwResult").innerHTML = womanIbw;
  } else {
    document.getElementById("ibwResult").innerHTML = "Enter required values.";
  }
  document.getElementById("resIbw").style.display = "block";
});

let calculateWaterIntake = document.getElementById("wiCalculate");
calculateWaterIntake.addEventListener("click", () => {
  let activity = document.getElementById("workTime");

  let wiWeight = parseFloat(
    document.getElementById("wiWeight").value
  ).toFixed();
  let pound = wiWeight / 0.45;
  let waterIntake = pound * (2 / 3);
  if (activity.value == "Less than an hour") {
    waterIntake = parseFloat((waterIntake + 12) * 0.03).toFixed();
    document.getElementById("wiResult").innerHTML = waterIntake + " liter";
  } else if (activity.value == "One hour") {
    waterIntake = parseFloat((waterIntake + 24) * 0.03).toFixed();
    document.getElementById("wiResult").innerHTML = waterIntake + " liter";
  } else if (activity.value == "More than an hour") {
    waterIntake = parseFloat((waterIntake + 42) * 0.03).toFixed();
    document.getElementById("wiResult").innerHTML = waterIntake + " liter";
  } else {
    document.getElementById("wiResult").innerHTML = "Enter required values.";
  }
  document.getElementById("resWi").style.display = "block";
});
