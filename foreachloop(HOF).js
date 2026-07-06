// For Each Loop (Higher Order Function/method)
/*Question: For a given array of numbers, use the forEach loop to calculate the square of all the numbers in the array.*/
const prompt = require("prompt-sync")();
const num=Number(prompt("How many number you want to square: "));
const arr = [];
for(let i=0; i<num; i++){
   arr[i]=Number(prompt("Enter number: "));
}
arr.forEach((val)=>{
    console.log(val * val);
})
