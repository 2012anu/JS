
// destructor : here we just  exact what we need 
//Destructuring makes it easy to extract only what is needed.


//array
const numbers = [11, 21, 31];
//if i have give [num1 , num2] => 11 21
[num1, ,num2] = numbers;
//for this we get 11 31
console.log(num1, num2);

// obj
//Destructing 
const app = {
    type: "Health",
    lang: "c",
    orgin: "India"
}

obj(app);
function obj ({type, lang}){
console.log(type);
console.log(lang);
}

//older way fecthing property value from obj
const app1 = {
    type: "Health",
    lang: "c",
    orgin: "India"
}
obj1(app1);

function obj1(app1){
    console.log(app1.type);
}