//const
// here varible declared cannot be redeclared or reassigned 
// i can change the value by referenece but cannot directly change entire object
 const a = 12;
 console.log(a)
 {
  const a = 13;
  console.log(a)
 }
 
  const apps = {
    type: "health", 
    storage: "120mb", 
    appname: "healtify",
    lang :"java"
  }
  apps.storage = "12mb";
  apps.lang = "python";
  //addding new property
  apps.date = 2001;

//   TypeError: Assignment to constant variable.
//    apps = {
//     type: "game", 
//     storage: "2000mb", 
//     appname: "pubg",
//     lang :"c++"
//    }
  //console.log(apps.storage);
  console.log(apps);