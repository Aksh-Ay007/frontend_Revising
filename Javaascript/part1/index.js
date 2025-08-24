

// // //use a for pf loop to iterate through the array 1,2,34,5 and stop when the 4 is found store the number befire 4 in an array named smallnumbers


// // let arr=[1,2,3,4,5]

// // let res=[]

// // for(const x of arr){

// //     if(x===4){
// //         continue;
// //     }

// //     res.push(x)

// // }

// // console.log(res);



// //use a for in loop tonloop through an object containing citypopulations.skip and city with a population below 3 million and store the rest in a new object name largecities


// let worldCities={

//     "sydney":5000,
//     "tokyo":9000,
//     "berlin":3500,
//     "paris":2200
// }

// let largeCities={}

// for(let city in worldCities){

//     if(worldCities[city]<3000){
//         continue;
//     }

//     largeCities[city]=worldCities[city]
// }

// console.log(largeCities);





//write a foreach loop that iterate through the array [1,2,3,4,5] stop when 4 is found and store all prev number in new array

let arr=[1,2,3,4,5]

let newArr=[]

arr.forEach((x)=>{

    if(x===4)return

    newArr.push(x)


})

console.log(newArr);