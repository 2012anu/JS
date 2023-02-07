//rest operator

//normal way

function add(a , b){
    return a+b;

}
 console.log(add(1, 2)); //3
 console.log(add(1,2,3,4,5)); //3

 // here the problem is its not going add further parameter pass
 // we use reat operator inorder to add value

function sum(...input)
{
   let addition = 0;
   for(let i of input){
    addition = addition + i;

   }
   return addition;
} 

console.log(sum(1, 2)) //3
console.log(sum(1,2,3,4))//10
console.log(sum(1,2,3,4,5,6,7,8)) //36

