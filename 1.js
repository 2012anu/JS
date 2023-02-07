class Human {
    constructor () {
       
        this.gender = 'female';
    }
    printGender() {
        console.log(this.gender);
    }
}
class Person extends Human {
    constructor () {
        super();
        this.name = 'Anusha';
        
    }
    printMyName(){
        console.log(this.name);
        
    }
}

const prs = new Person();
prs.printGender();
prs.printMyName();