

// let computer={
//     cpu:12
// }

// let lenovo={
//     ram:16
// }

// console.log(`computer`,computer.__proto__);


let general={
     tyre:4
}

let tesla={
    type:'AI'
}

Object.setPrototypeOf(tesla,general)

console.log(Object.getPrototypeOf(tesla));