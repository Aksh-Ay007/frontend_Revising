
// // // let name='akki'
// // // console.log(name);

// // // let getName=name
// // // console.log(getName);


// // // let date=new Date()

// // // console.log(date.getDate());



// // //check if a number is greater than another num

// // let a=5
// // let b=2

// // if(a>b){
// //     console.log(true);
// // }
// // else{
// //     console.log(false);
// // }



// // declare a aray tea flavour theat contain the strings green tea black tea,oolang tea access the first element and storedin a varaiable

// const flower=['green tea','blacktea','oolang tea']
// // let sample=flower
// // console.log(sample);

// //hardcopy

// let hard=[...flower]
// flower.pop()
// console.log(hard);
// console.log(flower);


//write a while loop that calcaulate the sum of all numbers from 1 to 5 and stores the result in  a variable named sum

// let n=5
//     let sum = 0;


// while(n>0){

//     sum+=n
//     n--
// }


// console.log(sum);



//write a while loop that counts down from 5 to 1 and strores the number in an array


// let count=[]

// i=5

// while(i>0){
     
//     count.push(i)
//     i--
// }

// console.log(count);



//write a do while loop that promt a user to enter theri fav color until they enter stop store each color in color color colection

// let res=[]

// do {

// n=prompt(`enter your fav tea (type stop to finish it)`)

// if(n!=='stop'){
//     res.push(n)
// }
    
// } while (n!=='stop')


//write a do while loop that adds number from 1 to 3 and stores the result in a varaible names total


// let total=[]
// let sum=0
// let n=1

// do {
//     sum+=n
//     total.push(sum)
//     n++
    
// } while (n<=3);

// console.log(total);

let arr=[1,2,3]

let res=[]

for (let i = 0; i < arr.length; i++) {
    
    res.push(arr[i]*2)
    
}

console.log(res);


