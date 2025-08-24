///encapsulation

/*

class Bank{
    #balance=0
    #accNum=1123456
    name='akki'

    deposit(amount,accNum){

        this.#balance+=amount
        return `after depostie your current balance is ${this.#balance}`
    }

    getbalance(){
        return ` your balance is ${this.#balance}`
    }

    getAccountDetails(){

        return `welcome ${this.name} your accound number ${this.#accNum} having balance ${this.#balance}`
    }
}


const bankingApp=new Bank()

console.log(bankingApp.deposit(190, 1123456));
console.log(bankingApp.getbalance());
console.log(bankingApp.getAccountDetails());
console.log(bankingApp.#balance);//notaccessable

*/



/*

//Abstraction---------------------------------


 class Vehicle{



    start(){

        //put key to start engine
        //engine start and power goes to tyre

        return 'your vehicle start'
    }

    stop(){

        //for automatic car
        //power cut of to engine 
        //gear down
        //complex thing behind engine we dont want to give this to user  right

        return'your car stop'
    }
 }



 const driver=new Vehicle()
 console.log(driver.start());
 console.log(driver.stop());


 */


 /*


 //polymorphism

//  ability of something to have or to be displayed in more than one form

class Bird{

    fly(){
        return 'bird can fly'
    }
}

class Dog extends Bird{

    fly(){
        return 'icant fly'
    }
}


const bird=new Bird()
const dog=new Dog()

console.log(bird.fly());
console.log(dog.fly());

*/

/*

//static method

//it can be variable,property or method it can only be called by its class itself no other can clled

class Calculator{

    static add(a,b){
        return a+b
    }
}




let cal=new Calculator()

console.log(cal.add(6,3));///not accessable because it is static

console.log(Calculator.add(9,14));


*/



///getter and setter----its all about having more control over the code

 