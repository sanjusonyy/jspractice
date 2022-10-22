// console.log(b);
// let b = 67
// console.log(b);
// var a = 45;
// function sum(p1,p2,p3){
//     return p1 + p2 + p3;
// }
// console.log(sum(2,4,5));
const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: () => this.firstName + " " + this.lastName;
   
  }
//   let fullName = () => this.firstName + " " + this.lastName;

 myObject.fullname()