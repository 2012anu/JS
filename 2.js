//modern way
class Human {
        gender = 'female';

    printGender = () => {
        console.log(this.gender);
    }
}
class Person extends Human {
 
       
        name = 'Anusha';
        
    
    printMyName = (name) => {
        console.log(this.name);
        
    }
}

const prs = new Person();
prs.printGender();
prs.printMyName();