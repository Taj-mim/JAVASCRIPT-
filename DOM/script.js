

/*QUESTION:1  Create a H2 heading element with the text "Hello, DOM!" 
.append "this is taj mim"to this text using js*/
//let h2 = document.querySelector("h2");
//console.dir(h2.innerText);
//h2.innerText = "Hello, DOM!";
//h2.innerText += " This is Taj mim";




/*Question 2: Create 3 div with commont class name -"box".
Access them and add some unique text to each of them using js*/
/*let divclass=document.querySelectorAll(".box");
divclass[0].innerText = "Box 1: Unique text for Box 1";
divclass[1].innerText = "Box 2: Unique text for Box 2";
divclass[2].innerText = "Box 3: Unique text for Box 3";*/


//Question 3: Create a new button element.Give it a text "click me!",Background color of red and text color of white.
         //insert the button as the first element inside the body tag.
/*const but=document.createElement("button");;
    but.innerText="Click Me!";
    but.style.backgroundColor="red";
    but.style.color="white";
    document.querySelector("body").prepend(but);
*/


//Question 4:Create a <p> tag in html ,give it a class and some styling.
    /*Now create a new class in css and to append this class to the <p> element.

    Did you notice,how you overwrite the class name when you add a new one?
    solve this problem using classlist.*/

const para = document.querySelector("p");
para.classList.add("newclass");


