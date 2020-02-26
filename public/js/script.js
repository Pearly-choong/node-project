console.log('node js project');


let x=2;
const y=10; //cannot change the value when a variable is declared const
//y=25;
console.log(y);

//let has block scope - it is known only inside the structure whre it is declared
for(let i=0; i< 5; i++) {
  console.log(i);
}

//console.log(i); i not available here if used let

//var p,q;

//=====  es5 ===============================================
// total(5,8); calles even when the defination comes later
//
// function total(p,q){
//   console.log(p+q);
// }




///=====  es6 ===============================================
// eg1:
// let total = (p,q) => {
//   console.log(p+q); //local scope
// }


//eg:2

let total = (p,q) => console.log(p+q);//local scope


total(2,3); //can be called only after defining the function


//console.log(p,q);
