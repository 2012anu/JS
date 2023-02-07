//nested scope
 //excute from inside to outside.
 
let a = 10;
function first () {
    let b = 203;
    function inner () {
        let c = 34323;
        console.log(a, b , c)
    }
    inner ()
    // console.log(a, b , c)  throws error for c 
}
first()
console.log(a, b , c)
// console.log(a, b , c)
// ReferenceError: b is not defined