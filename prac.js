// const person = {firstName : "Sanjeev", lastName : "Kumar", Age : "30"};
// console.log(person.firstName + person.lastName);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join("%")); Banana%Orange%Apple%Mango
const number = [23 , 34 , 3 , 32 , 12 , 18 , 27 , 36];
function alphabet(){
    number.sort();
    console.log(number);
}
function numrev(){
    number.sort(function(a, b){return a - b});
    console.log(number);
}
function numinorder(){
    number.sort(function(a, b){return a + b});
    console.log(number);
}
numrev();
numinorder();
alphabet();


