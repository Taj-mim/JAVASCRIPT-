/*QUESTION:1  Create a H2 heading element with the text "Hello, DOM!" 
.append "this is taj mim"to this text using js*/
let h2 = document.querySelector("h2");
//console.dir(h2.innerText);
//h2.innerText = "Hello, DOM!";
//h2.innerText += " This is Taj mim";
/*Question 2: Create 3 div with commont class name -"box".
Access them and add some unique text to each of them using js*/
let divclass=document.querySelectorAll(".box");
divclass[0].innerText = "Box 1: Unique text for Box 1";
divclass[1].innerText = "Box 2: Unique text for Box 2";
divclass[2].innerText = "Box 3: Unique text for Box 3";