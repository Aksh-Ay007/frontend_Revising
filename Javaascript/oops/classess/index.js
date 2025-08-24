

class vehicel{

    constructor(type,model,make){

        this.type=type;
        this.make=make;
        this.model=model;
    }

    details(){
        return `this is a ${this.type} from comapany ${this.make} and model ${this.model} `
    }
}


class car extends vehicel{

    start(){
        return ` iam going to borrow my dads ${this.type} and ride ${this.model} first time`
    }
}


let trip=new car('car','toyato','camery')

console.log(trip.details());
console.log(trip.start());

