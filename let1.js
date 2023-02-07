//1. What is let , const and var in javascript ?
//in let we  cannot redeclare the varibale, varible defined with let as block scope that is declared inside {}
//block scope acts a locak varible 
let a = 12;
console.log(a);
{
  let a = "here 'let' cannot be redeclared so we use block scope and variable is changed";
  console.log(a);
}
// let a = "redecalre";
// error : cannot redeclare block-scoped variable 'a'.
name = "Javascript";
{
  let name = "js";
  console.log(name);
}
console.log(name);


//in let we can change  values of the property 
//obj
let apps1 = {
  type: "game", 
  storage: "1200mb", 
  appname: "pubg",
  lang :"c++"
}

console.log(apps1);
{
 let apps1 = {
    type: "edu", 
    storage: "12mb", 
    appname: "brainly",
    lang :"c"
 }
 console.log(apps1);
}

