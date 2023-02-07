//spread
const number  = [1, 2, 3];
const newNumber = [...number, 4, 5];
//difference  to show when we didnt use spread operator
const newNumber1 = [number ,6 , 7];
console.log(newNumber);
console.log(newNumber1);

// with respect to string
const person = {
    name: 'ansua'
};

const newPerson  = {
    ...person, 
    age : 22

};

console.log(newPerson);

//rest oprator

const filter = (...args) => 
{
    return args.filter(el => el === 1);

}
console.log(filter(1, 2, 3));

// destructor
//array
const numbers = [11, 21, 31];
//if i have give [num1 , num2] => 11 21
[num1, ,num2] = numbers;
//for this we get 11 31
console.log(num1, num2);

//obj
const Per = {name1: 'Ams', age: 12};
console.log(Per.name1);
console.log(Per.age);

//array function
//map function
const numm = [1, 2, 3, 4];
const mapingword = numm.map((ju)=> {
    return ju*2;
});
console.log(numm);
console.log(mapingword);

// const apps = [
//     type= "app",
//     name1= "brainly",
//     lang= "c",

// ];

// const app = apps.map((getDetails) => {
//     return [getDetails.type];
// });

// // apps.map(getDetails);
// // function getDetails(app) {
// //     return [app.type, app.name, app.lang].join("");
// // }
// console.log(app);