//CHAPTER # 6 TO 8//

//Question # 01//

let num = 10;
let A = num;

document.write("Result: <br> The value of a is:" +A+ "<br> <br>");

let num2 = ++A;

document.write("The value of ++a is:" + num2 + "<br> Now the value of a is:" + num2 + "<br><br>");

let num3 = ++num2;

document.write("The value of a++ is:" + A + "<br> Now the value of a is:" + num3 + "<br><br>");

let num4 = --num2;

document.write("The value of --a is:" + num4 + "<br> Now the value of a is:" + num4 + "<br><br>")
 
let num5 = --num4;

document.write("The value of a-- is:" + A + "<br> Now the value of a is:" + num5 + "<br><br>");

//Question # 02//

let a = 2;
let b = 1;

document.write("a is" +" "+ a+ "<br> b is" +" "+ b+ "<br>");

let result = --a - --b + ++b + b--;

document.write("result is" +" "+ result+ "<br><br>");

//Question # 03//

let name = prompt("What is your name?");
alert("Hey! How are you?");


//Question # 04//

let numb = prompt("Enter Number", "0");

for (var i = 1; i <= 10; i++) {
//   alert(numb + " x " + i + " = " + numb * i + "<br><br>");
  document.write(numb + " x " + i + " = " + numb * i + "<br><br>");
}

//Question # 05//

let totalMarks = prompt("Total Marks");
let marksObtained = prompt("Marks Obtained");

let result1 = marksObtained/totalMarks*100;

document.write(result1);
console.log(result1);
alert(result1);




// for (var i = 0; i <= result; i++) 
  if (result <= 100){
  alert("Grade A+");
  }
 else (result <= 60) 
  alert("Grade B");

  

//miss question # 5 mujhy nhi araha but jitna ho saka mai nt karlia i try my best//

//CHAPTER 9 TO 11//

//Question # 01//

let city = prompt("What is your city name?");
alert("Welcome");

//Question # 02//

let gender = prompt("What is your gender?");

alert("Good morning");

// if (gender === male) {
//   alert("Good morning sir");
// } else {
//   alert("Good morning maam");
// }






    

