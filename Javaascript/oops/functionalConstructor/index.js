

function greet(name,age){

    this.name=name
    this.age=age
    console.log(`hai my name is ${name} iam ${age} years old`);
}

//  greet('akki',44)
let sample = new greet("vivel", 66);
let sample2 = new greet("arjun", 12);

console.log(sample);
console.log(sample2);