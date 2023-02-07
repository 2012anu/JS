//spread
// easily we can copy  existing array/obj  to  new or other array/obj


//adding new properties to existing object apps 
const apps = {
    type: "game", 
    storage: "1200mb", 
    appname: "pubg",
    lang :"c++"
}
   

const app = {...apps, date: 2008, origin: "India"}
console.log("app",app);
console.log("apps",apps );

//just adding two existing obj to another new obj like merging
const application = {...app, ...apps}
console.log("application",application);

const application1 = {...app, ...apps, new: "just checking"}
console.log("application1",application1);

// without spread operator if we add
const newapps = { apps, without: "spread operator", adding: "new other properties"}
console.log(newapps);
/*
output: it consider as other  obj
{
  apps: { type: 'game', storage: '1200mb', appname: 'pubg', lang: 'c++' },
  without: 'spread operator',
  adding: 'new other properties'
}
*/

// with respect to string
const person = {
    name: 'ansua'
};

const newPerson  = {
    ...person, 
    age : 22

};
//without spread operator
const pp = {
    person, school: "jkv"
}
console.log(newPerson);

console.log(pp);