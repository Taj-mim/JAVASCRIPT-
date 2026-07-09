let ev=document.querySelector(".btn1");
//inline button click event
//ev.onclick=()=>{
//    alert("Button clicked!");
//}
//event object
let ev2=document.querySelector(".btn2");
ev2.ondblclick=(e)=>{
        alert("Button double clicked!");
       console.log(e);
        console.log(e.type);
        console.log(e.target);
};

//event listener
let ev3=document.querySelector(".btn3");

ev3.addEventListener("click",()=>{
            alert("3rd button is clicked");
});

//now i want to remove a function.So to remove a function we have to make a variable of that an pass it to the 
//remove event listener..though without variable we pass the same fuction but it won't remove all the function,what 
// it will do is it will another memory space inside the memory for remove function

const variable_handler=()=>{
    console.log("Button clicked!");
};
ev.addEventListener("click",variable_handler);
ev.removeEventListener("click",variable_handler);