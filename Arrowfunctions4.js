//2. What is Arrow functions ?
//Arrow function is 
//with arrow functions there are no binding of this.
/*  
older version 
class Human {
    constructor () {
       
        this.gender = 'female';
    }
    printGender() {
        console.log(this.gender);
    }
}

*/
class Human {
  gender = "female";
  //since there only one parameter no need to mention gender inside ()
  printGender = () => {
    console.log(this.gender);
  };
}
class Person extends Human {
  name = "Anusha";

  printMyName = (name) => {
    console.log(this.name);
  };
}

const prs = new Person();
prs.printGender();
prs.printMyName();



class apps {
    type = "game";
        storage= "2000mb"; 
        appname ="pubg";
        lang = "c++";

  appinfo = (type, storage) => {
    console.log(this.type);
    console.log(this.storage)

  };
}

 const app = new apps();
  app.appinfo();
