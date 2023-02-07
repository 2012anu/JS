//6. How to use map function on an array ?
//map function

//this map method will help to modtify existing array/obj  using call bck function , this call back function will execute on each element of array

//TO MULTPLY and create new array without distrubing old array
const numm = [1, 2, 3, 4];
const mapingword = numm.map((ju) => {
  return ju * 2;
});
console.log(numm);
console.log(mapingword);

//fecthing the index and array
let arr = [1, 2, 3, 5];
arr.map(function (element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
  return element;
}, 80);

//map on array of object

const app = [
  { name1: "Healthify", lang: "c", type: "health" },
  { name1: "pubg", lang: "c++", type: "game" },
  { name1: "Brainly", lang: "python", type: "education" },
];

const appsList = app.map(function(ele){
    return `${ele.name1} ${ele.lang} ${ele.type}`;
})

console.log("giving list of apps");
console.log(appsList);