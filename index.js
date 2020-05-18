var weight2 = 1;
document.getElementById("wUnit").onchange = function() {
  var weight = document.getElementById("weight").value;
  var wunit = document.getElementById("wUnit").value;
  var weight1 = [1, 2.20462];
  document.getElementById("weight").value =
    weight * weight2 * weight1[wunit - 1];
  weight2 = weight / weight / weight1[wunit - 1];
};

var height2 = 1;
document.getElementById("hUnit").onchange = function() {
  var height = document.getElementById("height").value;
  var hunit = document.getElementById("hUnit").value;
  var height1 = [1, 100, 39.3701, 3.28084];
  document.getElementById("height").value =
    height * height2 * height1[hunit - 1];
  height2 = height / height / height1[hunit - 1];
};

document.getElementById("btn2").onclick = function() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var hunit = document.getElementById("hUnit").value;
  switch (hunit) {
    case "1":
      hmulti = 1;
      break;
    case "2":
      hmulti = 0.01;
      break;
    case "3":
      hmulti = 0.0254;
      break;
    case "4":
      hmulti = 0.3048;
      break;
  }
  var wunit = document.getElementById("wUnit").value;
  switch (wunit) {
    case "1":
      wmulti = 1;
      break;
    case "2":
      wmulti = 0.453592;
      break;
  }
  var bmi = weight * wmulti / (height * hmulti * (height * hmulti));
  bmi = +bmi.toFixed(4);
  if (bmi < 18.5) {
    alert("BMI is " + bmi + ". You are underweight.");
    console.log("BMI is " + bmi + ". You are underweight.");
  } else if (bmi > 18.4 && bmi < 25) {
    alert("BMI is " + bmi + ". You have a normal weight.");
    console.log("BMI is " + bmi + ". You have a normal weight.");
  } else if (bmi > 24.9 && bmi < 30) {
    alert("BMI is " + bmi + ". You are overweight.");
    console.log("BMI is " + bmi + ". You are overweight.");
  } else {
    alert("BMI is " + bmi + ". You are obese.");
    console.log("BMI is " + bmi + ". You are obese.");
  }
};
