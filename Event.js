let ev=document.querySelector(".btn1");
//inline button click event
ev.onclick=()=>{
    alert("Button clicked!");
}
//event object
let ev2=document.querySelector(".btn2");
ev2.ondblclick=(e)=>{
        alert("Button double clicked!");
};