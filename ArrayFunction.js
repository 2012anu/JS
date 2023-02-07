//7. What are javascript array functions ?
//they are built in method
/*examples
 toSring: to convert array into string
 join() : to combine array into string
 pop(), push()
 etc
*/

//array
const app = [
  (name1 = "Healthify"),
  (lang = "c"),
  (type = "health"),
  (size = "120mb"),
];

console.log("To string () method here");
console.log(app.toString()); //Healthify,c,health,120mb
//diffence
console.log("without tostring method output");
console.log(app); // [ 'Healthify', 'c', 'health', '120mb' ]

//join method

console.log(app.join((type = "  **  "))); //Healthify  **  c  **  health  **  120mb

//push : just going to add new array at the end
const appp = ["pubg", "Healthfy", "brainly"];
console.log("push method is here");
console.log(appp.push("methos")); // output 4 , why?

// console.log(app.length);

//other way
console.log("push()");
appp[appp.push] = "insta";
/*
[
  'pubg',
  'Healthfy',
  'brainly',
  'methos',
  'function push() { [native code] }': 'insta'
]
*/
// console.log("appp");
// console.log(appp);

//splice() : to add new items to array at desired index

console.log("splice() method implemented here");
appp.splice(2, 0, "FB", "WHATS APP");
console.log(appp);
/*
[
  'pubg',
  'Healthfy',
  'FB',
  'WHATS APP',
  'brainly',
  'methos',
  'function push() { [native code] }': 'insta'
]

*/
