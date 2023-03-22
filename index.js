let firstName = "Abhishek";
let age = 21;
let student = true;

document.getElementById("p1").innerHTML = "Hello " + firstName;

document.getElementById("p2").innerHTML = "Your age is " + age + " years old";

document.getElementById("p3").innerHTML = "Enrolled : " + student;

var heading = document.getElementById("p1");

heading.style.color = "red";